<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use PhpParser\Builder\Function_;

class UserController extends Controller
{
    public function index( Request $request){
        return'accion user';
    }

    public function register(Request $request){
        return "regitro...";
    }  
      
    public function login(Request $request){
        return "login...";
    }
}
