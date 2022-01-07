<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;
use App\Http\Controllers\getcatController;
use App\Http\Controllers\quoteController;
use App\Http\Controllers\newsController;

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
Route::get('/getuser',[userController::class,'getuser']);
Route::post('/logout',[userController::class,'logout']);

Route::get('/getmg',[getcatController::class,'getmg']);
Route::post('/savequote',[quoteController::class,'savequote']);
//With token
