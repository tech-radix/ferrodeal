<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Partner;
use Illuminate\Support\Facades\DB;
use Validator;

class partnerController extends Controller
{
    //
    function addpartner(Request $req){
        $rules = array(
            'description'=>'required',
            'token'=>'required'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id,type from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                $partner = new Partner;
                $partner->description = $req->description;
                $partner->userid = $user[0]->id;
                $partner->save();
                $response = [
                    'result' => 'Success'
                ];
                return response($response);
            }else{
                $response = [
                    'result' => 'Invalid token'
                ];
                return $response; 
            }
        }
    }
    function showpartner(Request $req){
        $rules = array(
            'token'=>'required'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id,type from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                if($user[0]->type == 'Admin' ){
                    $partner = Partner::all();
                    if(count($partner) > 0 ){
                        return response($partner);
                    }else{
                        $response = [
                            'result' => 'No partner found.'
                        ];
                        return $response;     
                    }
                }else{
                    $response = [
                        'result' => 'You are not admin'
                    ];
                    return $response;
                }
            }else{
                $response = [
                    'result' => 'Invalid token'
                ];
                return $response; 
            }
        }
    }

}
