<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Tache;

class CalendarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
       // $events = Tache::whereDate('echeance', today())->where('archived', false)->count();
       $events = Tache::whereDate('echeance', today())
       ->where('taches.archived', false)
       ->join('dossiers', 'dossiers.id', '=', 'taches.dossier_id')
       ->join('clients', 'clients.id', '=', 'dossiers.client_id')
       ->select('taches.*', 'dossiers.code as dossier_code', 'clients.nom as client_nom')
       ->get();
        //return $events ;
        return Inertia::render('Calendar' , ["events"=> $events] ) ;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
