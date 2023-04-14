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
        $data = Client::find($clientId);
        //echo($data);
        return Inertia::render('Dossier/Create') ;

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Dossier $dossier)
    {
        //
        $data = Dossier::find($dossier->id) ;
        $p = $data->client ;
        return $data ."client : " . $p ;
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
