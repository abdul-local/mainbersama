/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/register','AuthController.register').as('auth.register');
Route.post('/auth','AuthController.login').as('auth.login');
Route.post('/verifikasi','AuthController.otpverfication').as('auth.verifikasi');
Route.resource('venues','VenuesController').middleware({'store':['auth']});
Route.resource('fields','FieldsController').middleware({'store':['auth']});
Route.resource('bookings','BookingsController').middleware({'*':['auth','verify']});
