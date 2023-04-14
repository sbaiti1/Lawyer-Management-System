<?php

namespace App\Http\Controllers;

use App\Models\Dossier;
use App\Models\Client;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DossierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $data = Dossier::All() ;
        return $data ;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //
        $clientId = $request->input('client_id');
        $client = Client::find($clientId);
        //echo($data);
        return Inertia::render('Dossier/Create' , ['client' =>$client]) ;

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $d = new Dossier() ;
        $d->code = $request->code ; 
        $d->description = $request->description ; 
        $d->client_id = $request->client_id ; 
        $d->save(); 
        //return response($c->nom . " added to databse"); 
        return redirect('/clients/' .$d->client_id) ;
    }

    /**
     * Display the specified resource.
     */
    public function show(Dossier $dossier)
    {
        //
        $data = Dossier::find($dossier->id) ;
        $p = $data->client ;
        $t = $data->taches ;
        return' les taches : ' . $t;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Dossier $dossier)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Dossier $dossier)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Dossier $dossier)
    {
        //
    }
}
