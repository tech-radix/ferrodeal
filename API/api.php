<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;
use App\Http\Controllers\getcatController;
use App\Http\Controllers\quoteController;
use App\Http\Controllers\newsController;
use App\Http\Controllers\scrapController;
use App\Http\Controllers\partnerController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/sendotp',[userController::class,'sendotp']);
Route::post('/chkotp',[userController::class,'chkotp']);
Route::post('/cpassword',[userController::class,'cpassword']);
Route::post('/signup',[userController::class,'signup']);
Route::post('/signin',[userController::class,'signin']);
Route::post('/fogetpassword',[userController::class,'fogetpassword']);

//With token
Route::post('/update',[userController::class,'update']);
Route::post('/getuser',[userController::class,'getuser']);
Route::post('/logout',[userController::class,'logout']);

//User
Route::post('/getmg',[getcatController::class,'getmg']);
Route::post('/savequote',[quoteController::class,'savequote']);
Route::post('/getquote',[quoteController::class,'getquote']);
Route::post('/deletequote',[quoteController::class,'deletequote']);
Route::post('/updatequotes',[quoteController::class,'updatequotes']);
Route::post('/getuserinquiry',[quoteController::class,'getuserinquiry']);

Route::post('/getuserpendingquote',[quoteController::class,'getuserpendingquote']);
Route::post('/userapprovequote',[quoteController::class,'userapprovequote']);
Route::post('/userrejectquote',[quoteController::class,'userrejectquote']);
Route::post('/orderquotes',[quoteController::class,'orderquotes']);
Route::post('/orderquote',[quoteController::class,'orderquote']);
//User

//Admin
Route::get('/getquotes',[quoteController::class,'getquotes']);
Route::get('/getpendingquote',[quoteController::class,'getpendingquote']);
Route::post('/getpendingquoteforapprove',[quoteController::class,'getpendingquoteforapprove']);
Route::post('/getpendingquoteforreject',[quoteController::class,'getpendingquoteforreject']);
//Admin

//Both user and admin
Route::post('/addtrack',[quoteController::class,'addtrack']);
Route::post('/markdel',[quoteController::class,'markdel']);
//Both user and admin

//Scraps
Route::post('/sellscrap',[scrapController::class,'sellscrap']);
Route::post('/buycrap',[scrapController::class,'buycrap']);
Route::post('/showscrap',[scrapController::class,'showscrap']);
Route::post('/showdelete',[scrapController::class,'showdelete']);
//For admin
Route::post('/requestscrap',[scrapController::class,'requestscrap']);
Route::post('/copyscrap',[scrapController::class,'copyscrap']);
//Scraps

//News
Route::get('/shownews',[newsController::class,'shownews']);
Route::post('/addnews',[newsController::class,'addnews']);
Route::get('/editnews',[newsController::class,'editnews']);
Route::post('/updatenews',[newsController::class,'updatenews']);
Route::get('/deletenews',[newsController::class,'deletenews']);
//News
//Partner
Route::get('/showpartner',[partnerController::class,'showpartner']);
Route::post('/addpartner',[partnerController::class,'addpartner']);
//Partner
//With token
