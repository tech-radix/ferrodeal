<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Validator;
use Session;

class userController extends Controller
{
    //
    function signup(Request $req){
        $rules = array(
            'fname'=>'required',
            'password' => 'required|confirmed|digits_between:4,4',
            'password_confirmation' => 'required',
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
            if($req->has('email')){
                $user->email = $req->email;
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
            'password' => 'required|digits_between:4,4'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = User::WHERE('phone', '=', $req->phone)->first();
            if(!is_null($user)){
                if(Hash::check($req->password,$user->password)){
                    if( ($user->token == null) || (trim($user->token) == "") ){
                        $number = time().mt_rand(100000, 999999);
                        $user->token = $number;
                        $user->save();
                        $user = User::WHERE('phone', '=', $req->phone)->first();
                    }
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
            $user = User::WHERE('phone', '=', $req->phone)->first();
            if(!is_null($user)){
                $response = [
                    'result' => 'User found'
                ];
                return $response;
            }else{
                $response = [
                    'result' => 'User not found'
                ];
                return $response;
            }
        }
    }
    function sendotp(Request $req){
        $rules = array(
            'phone'=>'required|integer',
            'type'=>'required'
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
            if($req->type == 'signup'){
                DB::table('otpcheck')
                ->where('phone', '=', $req->phone)
                ->delete();
                DB::table('otpcheck')->insert(
                    ['phone' => $req->phone, 'otp' => $otp]
                );
            }else{
                $user = User::WHERE('phone', '=', $req->phone)->first();
                $user->otp = $otp;
                $user->save();
            }
            return $result;
        }
    }
    function chkotp(Request $req){
        $rules = array(
            'phone'=>'required|integer',
            'otp'=>'required|digits_between:6,6',
            'type'=>'required'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            if($req->type == 'signup'){
                $otpcheck = DB::table('otpcheck')
                ->where('phone', '=', $req->phone)
                ->where('otp', '=', $req->otp)
                ->get();
                if(count($otpcheck) > 0 ){
                    DB::table('otpcheck')
                    ->where('phone', '=', $req->phone)
                    ->delete();
                    $response = [
                        'result' => 'Success'
                    ];
                    return $response;
                }else{
                    $response = [
                        'result' => 'Invalid otp'
                    ];
                    return $response;
                }
            }else{
                $user = User::where([
                    ['phone', '=', $req->phone],
                    ['otp', '=', $req->otp]
                ])->first();
                if(!is_null($user)){
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
    }
    function cpassword(Request $req){
        $rules = array(
            'password' => 'required|digits_between:4,4',
            'password_confirmation' => 'required',
            'phone'=>'required|integer',
            'otp'=>'required|digits_between:6,6'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = User::where([
                ['phone', '=', $req->phone],
                ['otp', '=', $req->otp]
            ])->first();
            if(!is_null($user)){
                $user->password = Hash::make($req->password);
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
        $rules = array(
            'token'=>'required',
        );
        if($req->has('profileimage')){
            $rules['profileimage'] = 'required|mimes:png,jpg,jpeg,gif|max:2305';
        }
        if($req->has('tdsfile')){
            $rules['tdsfile'] = 'required|mimes:pdf|max:2305';
        }
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = User::where([
                ['token', '=', $req->token]
            ])->first();
            if(!is_null($user)){
                if($req->has('profileimage')){
                    $imageName = time().'.'.$req->profileimage->extension(); 
                    $path = $req->file('profileimage')->move('public/userimages', $imageName);
                    $user->profileimage = $imageName;
                }
                if($req->has('tdsfile')){
                    $pdfName = time().'.'.$req->tdsfile->extension(); 
                    $path = $req->file('tdsfile')->move('public/userimages', $pdfName);
                    $user->tdsfile = $pdfName;
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
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = User::where([
                ['token', '=', $req->token]
            ])->first();
            if(!is_null($user)){
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
            if(!is_null($user)){
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
