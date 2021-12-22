<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Validator;

class userController extends Controller
{
    //
    function signup(Request $req){
        $rules = array(
            'fname'=>'required',
            'password' => 'required|confirmed|min:4|max:4',
            'password_confirmation' => 'required',
            'email'=>'required|email|unique:users',
            'phone'=>'required|integer|unique:users',
            'companyname'=>'required',
            'gstnumber'=>'required|max:40',
            'type'=>'required'
        );//iscreditrequest
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user= new User;
            $user->fname = $req->fname;
            //$user->email = $req->email;
            $user->password = Hash::make($req->password);;
            $user->companyname = $req->companyname;
            $user->phone = $req->phone;
            if($req->has('iscreditrequest')){
                $user->iscreditrequest = $req->iscreditrequest;
            }
            $user->gstnumber = $req->gstnumber;
            $user->type = $req->type;
            $user->save();
            $response = [
                'result' => 'Success'
            ];
            return response($response);
        }
    }
    function signin(Request $req){
        $rules = array(
            'phone'=>'required|integer',
            'password' => 'required|min:4|max:4'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = User::WHERE('phone', '=', $req->phone)->first();
            if($user){
                if(Hash::check($req->password,$user->password)){
                    $number = mt_rand(1000000000, 9999999999);
                    $user->token = $number;
                    $user->save();
                    $user = User::WHERE('phone', '=', $req->phone)->first();
                    return $user;
                }else{
                    $response = [
                        'result' => 'Invalid password'
                    ];
                    return $response;
                }
            }else{
                $response = [
                    'result' => 'Invalid phone number'
                ];
                return $response;
            }
        }
    }
    function fogetpassword(Request $req){
        $rules = array(
            'phone'=>'required|integer'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            
            return response($response);
        }
    }
    function sendotp(Request $req){
        $rules = array(
            'phone'=>'required|integer'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $otp = random_int(100000, 999999);
            $url = "https://www.fast2sms.com/dev/bulkV2?authorization=rJyUmI106D9F8olkebX2dfKNBnCawuv5ztHGTVqALpOZQhW7jcPGVxhyMoEm2kbSWYg5U3OXHTqQe10z&route=v3&sender_id=Cghpet&message=Your%20OTP%20for%20Ferro%20Deal%20is%20".$otp.".&language=english&flash=0&numbers=".$req->phone;
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_URL, $url);
            $result = curl_exec($ch);
            $user = User::WHERE('phone', '=', $req->phone)->first();
            $user->otp = $otp;
            $user->save();
            return $result;
        }
    }
    function chkotp(Request $req){
        $rules = array(
            'phone'=>'required|integer',
            'otp'=>'required|min:6|max:6'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = User::where([
                ['phone', '=', $req->phone],
                ['otp', '=', $req->otp]
            ])->first();
            if($user){
                /*$user->otp = null;
                $user->save();*/
                $response = [
                    'result' => 'Success'
                ];
                return $response;
            }else{
                $response = [
                    'result' => 'Invalid otp number'
                ];
                return $response;
            }
        }
    }
    function cpassword(Request $req){
        $rules = array(
            'password' => 'required|confirmed|min:4|max:4',
            'password_confirmation' => 'required',
            'phone'=>'required|integer',
            'otp'=>'required|min:6|max:6'
        );
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = User::where([
                ['phone', '=', $req->phone],
                ['otp', '=', $req->otp]
            ])->first();
            if($user){
                $user->password = $req->password;
                $user->otp = null;
                $user->save();
                $response = [
                    'result' => 'Success'
                ];
                return $response;
            }else{
                $response = [
                    'result' => 'Invalid otp number'
                ];
                return $response;
            }
        }
    }
    function update(Request $req){
        if($req->has('profileimage')){
            $rules = array(
                'token'=>'required',
                //'profileimage' => 'required|mimes:doc,docx,pdf,txt,csv|max:2048',
                'profileimage' => 'required|mimes:png,jpg,jpeg,gif|max:2305',
            );
        }else{
            $rules = array(
                'token'=>'required',
            );
        }
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = User::where([
                ['token', '=', $req->token]
            ])->first();
            if($user){
                if($req->has('profileimage')){
                    $imageName = time().'.'.$req->profileimage->extension(); 
                    $path = $req->file('profileimage')->move('public/userimages', $imageName);
                    $user->profileimage = $imageName;
                }
                if($req->has('fname')){$user->fname = $req->fname;}
                if($req->has('tannumbr')){$user->tannumbr = $req->tannumbr;}
                $user->save();
                $response = [
                    'result' => "Success"
                ];
                return $response;
            }else{
                $response = [
                    'result' => 'Invalid token'
                ];
                return $response;
            }
        }
    }
    function logout(Request $req){
        $rules = array(
            'token'=>'required'
        );
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = User::where([
                ['token', '=', $req->token]
            ])->first();
            if($user){
                $user->token = null;
                $user->save();
                $response = [
                    'result' => 'Success'
                ];
                return $response;
            }else{
                $response = [
                    'result' => 'Invalid token'
                ];
                return $response;
            }
        }
    }
    function getuser(Request $req){
        $rules = array(
            'token'=>'required'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = User::where([
                ['token', '=', $req->token]
            ])->first();
            if($user){
                return $user;
            }else{
                $response = [
                    'result' => 'Invalid token'
                ];
                return $response;
            }
        }
    }
}
