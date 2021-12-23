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
            'width'=>'required|array',
            'length'=>'required|array',
            'unit'=>'required|array',
            'quantity'=>'required|array'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if($user){
                $unitorpcs = 'Sheet/Plate';
                $quote= new Quote;
                $quote->userid = $user[0]->id;
                $quote->type = "Steel";
                $quote->category = $req->category;
                $quote->subcategory = $req->subcategory;
                $quote->manufacturer = $req->manufacturer;
                $quote->grade = $req->grade;
                $quote->thickness = $req->thickness;
                $quote->width = implode(',',$req->width);
                $quote->length = implode(',',$req->length);
                $quote->unit = implode(',',$req->unit);
                $quote->quantity = implode(',',$req->quantity);
                if($req->has('slittedquantity')){$quote->slittedquantity = $req->slittedquantity;}
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
