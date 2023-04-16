<?php

namespace App\Http\Controllers;

use App\Models\Tache;
use App\Models\Dossier;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Mail\TacheCompleted;
use Illuminate\Support\Facades\Mail;


class TacheController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //
        $dossierId = $request->input('dossier_id');
        $dossier = Dossier::find($dossierId);
        $client = $dossier->client ;
        return Inertia::render('Tache/Create' , ['client' =>$client , 'dossier' => $dossier]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $t = new Tache ; 
        $t->nom = $request->tache_nom ; 
        $t->description = $request->tache_desc ; 
        $t->echeance = $request->echeance ; 
        $t->dossier_id = $request->id;
        $t->save() ;
        Mail::to('privtouka@gmail.com')->send(new TacheCompleted($t));

        return redirect('/clients/' .$request->client_id) ;

    }

    /**
     * Display the specified resource.
     */
    public function show(Tache $tache)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tache $tache)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tache $tache)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tache $tache)
    {
        //
    }
}
