import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User';
import AuthValidator from 'App/Validators/AuthValidator'
import { schema,rules } from '@ioc:Adonis/Core/Validator'
import Mail from '@ioc:Adonis/Addons/Mail'
import Database from '@ioc:Adonis/Lucid/Database';
export default class AuthController {

  public async register({request,response}:HttpContextContract){
    try {

      let payload = await request.validate(AuthValidator);
      let data=await User.create(payload);
      let otp_code= Math.floor(100000 + Math.random() * 900000);
      await Database.insertQuery().table('otp_codes').insert({otp_code:otp_code,user_id:data.id})
      await Mail.send((message) => {
        message
          .from('abdullah.hamzan@gmail.com')
          .to(payload.email)
          .subject('kode verifikasimu yaitu')
          .htmlView('email/otp_verification', { otp_code })
      })
      return response.ok({'message':'registerasi success, please verifikasi kode token from your email'});

    } catch (error) {
      return response.status(402).json({
        'error':error.sqlMessage
      })



    }
  }
  public async login({request,response,auth}:HttpContextContract){
    let shemaLogin= schema.create({
      email:schema.string({},[
        rules.required(),


      ]),
      password:schema.string({},[
        rules.required(),
        rules.minLength(6)
      ])
    });
    try {
      let payload = await request.validate({schema:shemaLogin});
      let token = await auth.use('api').attempt(payload.email,payload.password);

      return response.json({
        'msg':'generate token success',
        'token':token
      });

    } catch (error) {


       return response.status(402).json({
         'error':error.messages.errors
       })



    }
  }

  public async otpverfication({request,response}:HttpContextContract){
    let email=request.input('email');
    let otp_code=request.input('otp_code');
    let users = await User.findBy('email',email);

    let otpcodeCheck= await Database.query().from('otp_codes').where('otp_code',otp_code).first();
    if (users?.id==otpcodeCheck.user_id){
      users.isverifikasi=true;
      await users?.save();

      return response.ok({msg:'verifikasi success'})

    }else{

      return response.json({
        msg:'verifikasi failed'
      })

    }

  }

}
