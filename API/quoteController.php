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
            $user = DB::select("SELECT id,iscreditrequest from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
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
                if($req->has('trimmed')){$quote->trimmed = $req->trimmed;}
                if($user[0]->iscreditrequest == 1){
                    if($req->has('creditdays')){$quote->creditdays = $req->creditdays;}
                }
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
    function getquote(Request $req){
        $rules = array(
            'token'=>'required'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                $quote = Quote::SELECT('id','userid','type','category','subcategory','manufacturer','grade','thickness','slittedquantity','width','length','unit','quantity','trimmed', 'status')
                ->where([
                    ['userid', '=', $user[0]->id],
                    ['status', '=', 'In Cart']
                ])->orderBy('type', 'DESC')
                ->orderBy('category', 'DESC')
                ->orderBy('subcategory', 'DESC')
                ->orderBy('created_at', 'DESC')
                ->get();
                if(count($quote) > 0 ){
                    return $quote;
                }else{
                    $response = [
                        'result' => 'No inquiry found'
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
    function updatequotes(Request $req){
        $rules = array(
            'token'=>'required',
            'action'=>'required'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                if($req->action == 'Inquiry'){
                    $quote = Quote::where([
                        ['userid', '=', $user[0]->id],
                        ['status', '=', 'In Cart']
                    ])->update(['status'=>'Inquiry']);
                }elseif($req->action == 'Delete'){
                    $quote = Quote::where([
                        ['userid', '=', $user[0]->id],
                        ['status', '=', 'In Cart']
                    ])->delete();
                }
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
    function deletequote(Request $req){
        $rules = array(
            'token'=>'required',
            'quoteid'=>'required'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                $quote = Quote::
                where([
                    ['userid', '=', $user[0]->id],
                    ['id', '=', $req->quoteid]
                ])->delete();
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
    function getuserinquiry(Request $req){
        $rules = array(
            'token'=>'required'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                $quote = Quote::SELECT('id','userid','type','category','subcategory','manufacturer','grade','thickness','slittedquantity','width','length','unit','quantity','trimmed', 'status')
                ->where([
                    ['userid', '=', $user[0]->id],
                    ['status', '=', 'Inquiry']
                ])->orderBy('type', 'DESC')
                ->orderBy('category', 'DESC')
                ->orderBy('subcategory', 'DESC')
                ->orderBy('created_at', 'DESC')
                ->get();
                if(count($quote) > 0 ){
                    return $quote;
                }else{
                    $response = [
                        'result' => 'No inquiry found'
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
    function getquotes(Request $req){
        $rules = array(
            'token'=>'required'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id, type from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                if($user[0]->type == 'Admin'){
                    if($req->has('showall')){
                        $quote = Quote::SELECT('id','userid','type','category','subcategory','manufacturer','grade','thickness','slittedquantity','width','length','unit','quantity','trimmed', 'status')
                        ->where('status', '=', 'Inquiry')
                        ->orderBy('type', 'DESC')
                        ->orderBy('category', 'DESC')
                        ->orderBy('subcategory', 'DESC')
                        ->orderBy('created_at', 'DESC')
                        ->get();
                    }else{
                        $today = date('Y-m-d')." 00:00:00";
                        $quote = Quote::SELECT('id','userid','type','category','subcategory','manufacturer','grade','thickness','slittedquantity','width','length','unit','quantity','trimmed', 'status')
                        ->where([
                            ['status', '=', 'Inquiry'],
                            ['created_at', '>', $today]
                        ])
                        ->orderBy('type', 'DESC')
                        ->orderBy('category', 'DESC')
                        ->orderBy('subcategory', 'DESC')
                        ->orderBy('created_at', 'DESC')
                        ->get();
                    }
                    if(count($quote) > 0 ){
                        return $quote;
                    }else{
                        $response = [
                            'result' => 'No inquiry found'
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
    function getpendingquote(Request $req){
        $rules = array(
            'token'=>'required',
            'quoteid' => 'required|integer',
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id, type from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                if($user[0]->type == 'Admin'){
                    $quote = DB::table('quotes')
                    ->select('quotes.*', 'users.companyname','users.gstnumber')
                    ->join('users','users.id','quotes.userid')
                    ->WHERE('quotes.id',$req->quoteid)
                    ->get();
                    if(count($quote) > 0 ){
                        return $quote;
                    }else{
                        $response = [
                            'result' => 'No inquiry found'
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
    function getpendingquoteforapprove(Request $req){
        $rules = array(
            'token'=>'required',
            'price' => 'required',
            'expiredate' =>'required|date',
            'quoteid' => 'required|integer',
            'adminmsg' => 'required',
            'source' => 'required'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id, type from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                if($user[0]->type == 'Admin'){
                    $quote = Quote::find($req->quoteid);
                    if(!is_null($quote)){
                        $quote->adminprice = $req->price;
                        $quote->offervalidity = date("Y-m-d h:i:s", strtotime($req->expiredate));
                        $quote->adminsource = $req->source;
                        $quote->adminmessgae = $req->adminmsg;
                        $quote->status = "Approved";
                        $quote->save();
                        $response = [
                            'result' => 'Success'
                        ];
                        return $response;
                    }else{
                        $response = [
                            'result' => 'No inquiry found'
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
    function getpendingquoteforreject(Request $req){
        $rules = array(
            'token'=>'required',
            'quoteid' => 'required|integer',
            'adminmsg' => 'required'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id, type from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                if($user[0]->type == 'Admin'){
                    $quote = Quote::find($req->quoteid);
                    if(!is_null($quote)){
                    //if(count($quote) > 0 ){
                        $quote->adminmessgae = $req->adminmsg;
                        $quote->rejectedperson = "Admin";
                        $quote->status = "Rejected";
                        $quote->save();
                        $response = [
                            'result' => 'Success'
                        ];
                        return $response;
                    }else{
                        $response = [
                            'result' => 'No inquiry found'
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
    function getuserquotes(Request $req){
        $rules = array(
            'token'=>'required'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                $quote = Quote::where([
                    ['userid', '=', $user[0]->id],
                    ['rejectedperson', '>', 'User']
                ])
                ->orderBy('type', 'DESC')
                ->orderBy('category', 'DESC')
                ->orderBy('subcategory', 'DESC')
                ->orderBy('created_at', 'DESC')
                ->get();
                if(count($quote) > 0 ){
                    return $quote;
                }else{
                    $response = [
                        'result' => 'No inquiry found'
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
    function getuserpendingquote(Request $req){
        $rules = array(
            'token'=>'required',
            'quoteid' => 'required|integer',
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id,companyname,gstnumber from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                $quote = Quote::where([
                    ['userid', '=', $user[0]->id],
                    ['id', '=', $req->quoteid]
                ])->get();
                if(!is_null($quote)){
                    return $quote;
                }else{
                    $response = [
                        'result' => 'No inquiry found'
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
    function userapprovequote(Request $req){
        $rules = array(
            'token'=>'required',
            'quoteid' => 'required|integer'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id, type from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                $quote = Quote::find($req->quoteid);
                if(!is_null($quote)){
                    $quote->status = "Order";
                    $quote->save();
                    $response = [
                        'result' => 'Success'
                    ];
                    return $response;
                }else{
                    $response = [
                        'result' => 'No inquiry found'
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
    function userrejectquote(Request $req){
        $rules = array(
            'token'=>'required',
            'quoteid' => 'required|integer',
            'msg' => 'required',
            'reason' => 'required'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id, type from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                $quote = Quote::find($req->quoteid);
                if(!is_null($quote)){
                    $quote->status = "Rejected";
                    $quote->rejectedperson = "User";
                    $quote->rejectionmessage = $req->msg;
                    $quote->userreason = $req->reason;
                    $quote->save();
                    $response = [
                        'result' => 'Success'
                    ];
                    return $response;
                }else{
                    $response = [
                        'result' => 'No inquiry found'
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
    function orderquotes(Request $req){
        $rules = array(
            'token'=>'required'
        );
        if($req->has('day')){
            $rules['day'] = 'date';
        }
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id,companyname,gstnumber from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                if($req->has('day')){
                    $starttime = $req->day." 00:00:00";
                    $endtime = $req->day." 23:59:59";
                    $quote = Quote::SELECT('id','userid','type','category','subcategory','manufacturer','grade','thickness','slittedquantity','width','length','unit','quantity','trimmed', 'status', 'delhivery')
                    ->where([
                        ['status', '=', 'Order'],
                        ['created_at', '>', $starttime],
                        ['created_at', '<', $endtime]
                    ])
                    ->orderBy('created_at', 'DESC')
                    ->get();
                }else{
                    $quote = Quote::SELECT('id','userid','type','category','subcategory','manufacturer','grade','thickness','slittedquantity','width','length','unit','quantity','trimmed', 'status', 'delhivery')
                    ->where([
                        ['status', '=', 'Order'],
                        ['userid', '=', $user[0]->id]
                    ])
                    ->orderBy('created_at', 'DESC')
                    ->get();
                }
                if(count($quote) > 0 ){
                    return $quote;
                }else{
                    $response = [
                        'result' => 'No inquiry found'
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
    function orderquote(Request $req){
        $rules = array(
            'token'=>'required',
            'quoteid' => 'required|integer'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id,companyname,gstnumber from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                $quote = Quote::where([
                    ['id', '=', $req->quoteid],
                    ['userid', '=', $user[0]->id]
                ])
                ->orderBy('created_at', 'DESC')
                ->get();
                if(count($quote) > 0 ){
                    return $quote;
                }else{
                    $response = [
                        'result' => 'No inquiry found'
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
    function addtrack(Request $req){
        $rules = array(
            'token'=>'required',
            'tranpnumber'=>'required|integer',
            'quoteid'=>'required|integer',
            'drivernumber'=>'required|integer',
            'vehiclenumber'=>'required'
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id,companyname,gstnumber from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                $quote = Quote::find($req->quoteid);
                //if(count($quote) > 0 ){
                if(!is_null($quote)){
                    $quote->transporterphone = $req->tranpnumber;
                    $quote->driverphone = $req->drivernumber;
                    $quote->vehicle = $req->vehiclenumber;
                    $quote->save();
                    $response = [
                        'result' => 'Success'
                    ];
                    return $response;
                }else{
                    $response = [
                        'result' => 'No inquiry found'
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
    function markdel(Request $req){
        $rules = array(
            'token'=>'required',
            'quoteid'=>'required|integer',
            'delimage' => 'required|mimes:png,jpg,jpeg,gif|max:2305',
        );
        $validator = Validator::make($req->all(),$rules);
        if($validator->fails()){
            return $validator->errors();
        }else{
            $user = DB::select("SELECT id,companyname,gstnumber from users WHERE token = '".$req->token."'");
            //echo $user[0]->id;
            if(count($user) > 0 ){
                $quote = Quote::find($req->quoteid);
                //if(count($quote) > 0 ){
                if(!is_null($quote)){
                    $imageName = time().'.'.$req->delimage->extension(); 
                    $path = $req->file('delimage')->move('public/userimages', $imageName);
                    $quote->delhivery = $imageName;
                    $quote->save();
                    $response = [
                        'result' => 'Success'
                    ];
                    return $response;
                }else{
                    $response = [
                        'result' => 'No inquiry found'
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