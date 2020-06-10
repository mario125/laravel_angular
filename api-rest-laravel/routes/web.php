<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
/*
->get : conseguir datos
->post: guardar datos
->put:actualizar datos
->delete:eleimnar datos



*/


Route::get('/nimales','PruebasController@index');
Route::get('/user','UserController@index');
Route::get('/post','PostController@index');
Route::get('/category/pruebas','CategoryController@index');

//USUARIO

Route::post('/api/register','UserController@register');
Route::post('/api/login','UserController@login');



