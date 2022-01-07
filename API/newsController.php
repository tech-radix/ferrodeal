<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\News;
use Illuminate\Support\Facades\DB;
use Validator;

class newsController extends Controller
{
    //
    function addnews(Request $req){
        $rules = array(
            'heading'=>'required',
            'description'=>'required',
            'source'=>'required',
            'token'=>'required'
        );
        if($req->has('image')){
            $rules['image'] = 'required|mimes:png,jpg,jpeg,gif|max:2305';
        }
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id,type from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                if($user[0]->type == 'Admin' ){
                    $news = new News;
                    $news->heading = $req->heading;
                    $news->description = $req->description;
                    $news->source = $req->source;
                    if($req->has('image')){
                        $imageName = time().'.'.$req->image->extension(); 
                        $path = $req->file('image')->move('public/userimages', $imageName);
                        $news->image = $imageName;
                    }
                    $news->save();
                    $response = [
                        'result' => 'Success'
                    ];
                    return response($response);
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
    function shownews(Request $req){
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
                $news = News::all();
                if(count($news) > 0 ){
                    return response($news);
                }else{
                    $response = [
                        'result' => 'No new news found.'
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
    function editnews(Request $req){
        $rules = array(
            'token'=>'required',
            'newsid'=>'required'
        );
        if($req->has('image')){
            $rules['image'] = 'required|mimes:png,jpg,jpeg,gif|max:2305';
        }
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id,type from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                if($user[0]->type == 'Admin' ){
                    $news = News::find($req->newsid);
                    if(!is_null($news)){
                        return response($news);
                    }else{
                        $response = [
                            'result' => 'No news found'
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
    function updatenews(Request $req){
        $rules = array(
            'heading'=>'required',
            'description'=>'required',
            'source'=>'required',
            'token'=>'required',
            'newsid'=>'required'
        );
        if($req->has('image')){
            $rules['image'] = 'required|mimes:png,jpg,jpeg,gif|max:2305';
        }
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id,type from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                if($user[0]->type == 'Admin' ){
                    $news = News::find($req->newsid);
                    if(!is_null($news)){
                        $news->heading = $req->heading;
                        $news->description = $req->description;
                        $news->source = $req->source;
                        if($req->has('image')){
                            $imageName = time().'.'.$req->image->extension(); 
                            $path = $req->file('image')->move('public/userimages', $imageName);
                            $news->image = $imageName;
                        }
                        $news->save();
                        $response = [
                            'result' => 'Success'
                        ];
                        return response($response);
                    }else{
                        $response = [
                            'result' => 'No news found'
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
    function deletenews(Request $req){
        $rules = array(
            'token'=>'required',
            'newsid'=>'required'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id,type from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                if($user[0]->type == 'Admin' ){
                    $news = News::find($req->newsid);
                    if(!is_null($news)){
                        $news->delete();
                        $response = [
                            'result' => 'Success'
                        ];
                        return response($response);
                    }else{
                        $response = [
                            'result' => 'No news found'
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
