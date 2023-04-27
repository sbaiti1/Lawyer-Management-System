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
        $total = Client::count();
        $totalD = Dossier::count();
        $date = Tache::whereDate('echeance', today())->count();
        $events = Tache::All() ;
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
