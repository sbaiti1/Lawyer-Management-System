<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;
use App\Models\Client;
use App\Models\Dossier;


class HomeController extends Controller
{
    //
    public function index(){
        $latest = Client::latest()->take(6)->get();
        $total = Client::count();
        $totalD = Dossier::count();

        //return response($latest);
        return Inertia::render('Home' ,
         ['data' =>$latest ,
          'total' => $total ,
          'totalD' => $totalD ,

          ]) ;
     }
}
