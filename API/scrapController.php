<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Scrap;
use Illuminate\Support\Facades\DB;
use Validator;

class scrapController extends Controller
{
    //
    function sellscrap(Request $req){
        $rules = array(
            'type'=>'required',
            'quantity'=>'required',
            'eprice'=>'required',
            'location'=>'required',
            'token'=>'required'
        );
        if($req->has('image1')){
            $rules['image1'] = 'required|mimes:png,jpg,jpeg,gif|max:2305';
        }
        if($req->has('image2')){
            $rules['image2'] = 'required|mimes:png,jpg,jpeg,gif|max:2305';
        }
        if($req->has('image3')){
            $rules['image3'] = 'required|mimes:png,jpg,jpeg,gif|max:2305';
        }
        if($req->has('image4')){
            $rules['image4'] = 'required|mimes:png,jpg,jpeg,gif|max:2305';
        }
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id,type from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                $images = "";
                $scrap = new Scrap;
                $scrap->userid = $user[0]->id;
                $scrap->type = $req->type;
                $scrap->quantity = $req->quantity;
                $scrap->eprice = $req->eprice;
                if($req->has('image1')){
                    $imageName1 = "1".time().'.'.$req->image1->extension(); 
                    $path = $req->file('image1')->move('public/userimages', $imageName1);
                    //$user->profileimage = $imageName;
                    $images = $images.",".$imageName1;
                }
                if($req->has('image2')){
                    $imageName2 = "2".time().'.'.$req->image2->extension(); 
                    $path = $req->file('image2')->move('public/userimages', $imageName2);
                    //$user->profileimage = $imageName;
                    $images = $images.",".$imageName2;
                }
                if($req->has('image3')){
                    $imageName3 = "3".time().'.'.$req->image3->extension(); 
                    $path = $req->file('image3')->move('public/userimages', $imageName3);
                    //$user->profileimage = $imageName;
                    $images = $images.",".$imageName3;
                }
                if($req->has('image4')){
                    $imageName4 = "4".time().'.'.$req->image4->extension(); 
                    $path = $req->file('image4')->move('public/userimages', $imageName4);
                    //$user->profileimage = $imageName;
                    $images = $images.",".$imageName4;
                }
                $images = ltrim($images, ',');
                $scrap->images = $images;
                $scrap->location = $req->location;
                $scrap->scrapowner = $user[0]->type;
                $scrap->buysell = "Sell";
                $scrap->save();
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
    function buycrap(Request $req){
        $rules = array(
            'type'=>'required',
            'quantity'=>'required',
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
                $images = "";
                $scrap = new Scrap;
                $scrap->userid = $user[0]->id;
                $scrap->type = $req->type;
                $scrap->quantity = $req->quantity;
                $scrap->description = $req->description;
                $scrap->scrapowner = $user[0]->type;
                $scrap->buysell = "Buy";
                $scrap->save();
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
    function showscrap(Request $req){
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
                $scrap = Scrap::where([
                    ['buysell', '=', 'Sell'],
                    ['scrapowner', '=', 'Admin'] 
                ])->orderBy('created_at', 'DESC')->get();
                if(count($scrap) > 0 ){
                    return response($scrap);
                }else{
                    $response = [
                        'result' => 'No scrap found.'
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
    function showdelete(Request $req){
        $rules = array(
            'token'=>'required',
            'scrapid' => 'required'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id,type from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                if($user[0]->type == 'Admin' ){
                    $scrap = Scrap::find($req->scrapid);
                    if(!is_null($scrap)){
                        $scrap->delete();
                        $response = [
                            'result' => 'Success'
                        ];
                        return response($response);
                    }else{
                        $response = [
                            'result' => 'No scrap found'
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
    function requestscrap(Request $req){
        $rules = array(
            'token'=>'required',
            'scrapowner' => 'required'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id,type from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                if($user[0]->type == 'Admin' ){
                    if($req->scrapowner == 'Admin'){
                        $scrap = Scrap::where([
                            ['buysell', '=', 'Sell'],
                            ['scrapowner', '=', 'Admin'] 
                        ])->orderBy('created_at', 'DESC')->get();
                        if(count($scrap) > 0 ){
                            return response($scrap);
                        }else{
                            $response = [
                                'result' => 'No scrap found.'
                            ];
                            return $response;     
                        }
                    }else{
                        $scrap = Scrap::where([
                            ['buysell', '=', 'Sell'],
                            ['scrapowner', '!=', 'Admin'] 
                        ])->orderBy('created_at', 'DESC')->get();
                        if(count($scrap) > 0 ){
                            return response($scrap);
                        }else{
                            $response = [
                                'result' => 'No scrap found.'
                            ];
                            return $response;     
                        }
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
    function copyscrap(Request $req){
        $rules = array(
            'token'=>'required',
            'scrapid' => 'required'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id,type from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                if($user[0]->type == 'Admin' ){
                    $scrap = Scrap::find($req->scrapid)->get();
                    if(!is_null($scrap)){
                        $scrapcopy = new Scrap;
                        $scrapcopy->userid = $scrap[0]->userid;
                        $scrapcopy->type = $scrap[0]->type;
                        $scrapcopy->quantity = $scrap[0]->quantity;
                        $scrapcopy->eprice = $scrap[0]->eprice;
                        $scrapcopy->images = $scrap[0]->images;
                        $scrapcopy->location = $scrap[0]->location;
                        $scrapcopy->scrapowner = 'Admin';
                        $scrapcopy->buysell = $scrap[0]->buysell;
                        $scrapcopy->save();
                        $response = [
                            'result' => 'Success'
                        ];
                        return $response;
                    }else{
                        $response = [
                            'result' => 'No scrap found.'
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
