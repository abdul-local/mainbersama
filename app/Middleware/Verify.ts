import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Verify {
  public async handle ({auth,response}: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    let isverifikasi= auth.user?.isverifikasi;
    if(isverifikasi){

      await next()

    }else {
      return response.unauthorized({message:'belum terverifikasi'});
    }


  }
}
