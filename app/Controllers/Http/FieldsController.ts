// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import FieldValidator from 'App/Validators/FieldValidator';

// export default class FieldsController {

//   public async store({request,response,auth}:HttpContextContract){

//     try {

//       let payload= await request.validate(FieldValidator);
//       let UserId= auth.user?.id;

//       return response.created({message:'created field success!!!'});

//     } catch (error) {
//       console.log(error);
//     }
//   }
// }
