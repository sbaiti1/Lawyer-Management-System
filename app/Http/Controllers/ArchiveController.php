<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Client;
use App\Models\Dossier;

use Illuminate\Http\Request;

class ArchiveController extends Controller
{
    //
    public function index(){
        $data = Client::where('archived', true)->get();
        $dossiers = Dossier::with('taches')->where('archived', true)->get();
        return Inertia::render('Archive/Index' , ['data'=>$data  , 'dossiers' =>$dossiers]) ;
    }
    
    public function archiveClient($id){
        $client = Client::findOrFail($id);
        $client->archived = true;
        $client->save();

         // Archive all of the client's dossiers
            $dossiers = $client->dossiers;
            foreach ($dossiers as $dossier) {
                $dossier->archived = true;
                $dossier->save();

            // Archive all of the tasks associated with the dossier
                $taches = $dossier->taches;
                foreach ($taches as $tache) {
                    $tache->archived = true;
                    $tache->save();
                }
    }

        return redirect('/clients');
    }
}
