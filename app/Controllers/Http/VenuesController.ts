// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
// import Venue from 'App/Models/Venue';
// import VenueValidator from 'App/Validators/VenueValidator';

export default class VenuesController {
//   public async index({response}:HttpContextContract){
//   try {
//   const venues = await Venue
//   .query()
//   .preload('user')
//   venues.forEach((user) => {
//   return response.ok({
//     data:user
//   });

// })
//   } catch (error) {

//       console.log(error);

//   }

//   }

  // public async store({request,response,auth}:HttpContextContract){


  //   try {


  //   let payload = await request.validate(VenueValidator);
  //   let authUser=auth.user
  //   authUser?.related('venue').create({
  //     name:payload.name,
  //     address:payload.address,
  //     phone:payload.phone

  //   });

  //   return response.created({message:'Venues is created..!'});

  //   } catch (error) {

  //     console.log(error);
  //   }

  // }
  // public async show({request,response}:HttpContextContract){

  //   try {

  //     return response.json({'msg':'test'});


  //   } catch (error) {

  //     console.log(error);

  //   }


  // }
  

}
