<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;
use App\Models\Client;
use App\Models\Dossier;
use App\Models\Tache;
use Illuminate\Support\Facades\Auth;


class HomeController extends Controller
{
    //
    public function index(){
        $latest = Client::latest()->take(6)->get();
        $total = Client::where('archived', false)->count();
        $totalD = Dossier::where('archived', false)->count();
        $date = Tache::whereDate('echeance', today())->where('archived', false)->count();
        $events = Tache::where('archived', false)->get();
        $user = Auth::user();
        //return response($latest);
        return Inertia::render('Home' ,
         ['data' =>$latest ,
          'total' => $total ,
          'totalD' => $totalD ,
          'date' => $date , 
          'events' => $events ,
          'user' =>$user

          ]) ;
     }
}
