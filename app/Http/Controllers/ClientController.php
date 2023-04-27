<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Mail\ClientCompleted;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;


class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        //$data = Client::All();
        $data = Client::where('archived', false)->get();
        $user = Auth::user();
        return Inertia::render('Client/Index' , ['data'=>$data , 'user'=>$user]) ;

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Client/Create') ;
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $c = new Client() ;
        $c->nom = $request->nom ; 
        $c->prenom = $request->prenom ; 
        $c->CIN = $request->CIN ; 
        $c->phone = $request->phone ; 
        $c->email = $request->email ;
        $c->save(); 
        Mail::to('privtouka@gmail.com')->send(new ClientCompleted($c));

        //return response($c->nom . " added to databse"); 
        return redirect('/clients/' .$c->id) ;

    }

    /**
     * Display the specified resource.
     */
    public function show(Client $client)
    {
        //
        if (!$client->archived) {
                    
        $data = Client::find($client->id) ;
        $dossiers = $client->dossiers()->with('taches')->get() ;
        
        return Inertia::render('Client/Show' , ["data" =>$data , "dossiers" =>$dossiers ]) ;
        } else {
            return back();
                }

        

    }
     
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client)
    {
        //
        return Inertia::render('Client/Edit' , ["data" => $client]) ;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Client $client)
    {
        //
        $c = Client::find($client->id) ;
        $c->nom = $request->nom ; 
        $c->prenom = $request->prenom ; 
        $c->CIN = $request->CIN ; 
        $c->phone = $request->phone ; 
        $c->email = $request->email ;
        $c->save(); 
        return redirect('/clients/' .$client->id) ;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {
        //
    }
}
