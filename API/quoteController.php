<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quote;
use Illuminate\Support\Facades\DB;
use Validator;

class quoteController extends Controller
{
    //
    function savequote(Request $req){
        $rules = array(
            'token'=>'required',
            'category'=>'required',
            'subcategory'=>'required',
            'manufacturer'=>'required',
            'grade'=>'required',
            'thickness'=>'required|numeric',
            'width'=>'required|integer',
            'length'=>'required|integer',
            'quantity'=>'required|numeric'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;show data from database
            if($user){
                $quote= new Quote;
                $quote->userid = $user[0]->id;
                $quote->type = "Steel";
                $quote->category = $req->category;
                $quote->subcategory = $req->subcategory;
                $quote->manufacturer = $req->manufacturer;
                $quote->grade = $req->grade;
                $quote->thickness = $req->thickness;
                $quote->width = $req->width;
                $quote->length = $req->length;
                $quote->quantity = $req->quantity;
                $quote->save();
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
}
