<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Productmanugrade;
use Validator;

class getcatController extends Controller
{
    //
    function getmg(Request $req){
        $rules = array(
            'token'=>'required',
            'category'=>'required',
            'subcategory'=>'required'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id from users WHERE token = '".$req->token."'");
            if($user){
                $manugrade = Productmanugrade::WHERE('producttype', '=', $req->category)->first();
                if($manugrade){
                    return $manugrade;
                }else{
                    $response = [
                        'result' => 'No record found'
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
