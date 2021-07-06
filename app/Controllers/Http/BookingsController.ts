import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Booking from 'App/Models/Booking';
import BookingValidator from 'App/Validators/BookingValidator';

export default class BookingsController {

  public async index({response}:HttpContextContract){

  try {

  let player = await Booking

  .query()
  .preload('players')

 player.forEach((el) => {

  let player = el.players;
  return response.json({
    "message": "berhasil get data booking by id",
    'data':player
  });

})

  } catch (error) {

      console.log(error);

  }
  }

  public async store({auth,request,response}:HttpContextContract){
    try {
      await request.validate(BookingValidator);
      let play_date_start= request.input('play_date_start');
      let play_date_end= request.input('play_date_end');
      let authUser=auth.user;
      let books= await Booking.create({play_date_start:play_date_start,play_date_end:play_date_end,user_id:authUser?.id);
      authUser?.related('bookings').save(books);

      return response.created({message:'created success'});

    } catch (error) {

      console.log(error);

    }

  }

}
