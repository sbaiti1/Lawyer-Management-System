<?php

namespace App\Http\Controllers;

use App\Models\Dossier;
use App\Models\Client;
use App\Models\Tache;


use Illuminate\Http\Request;
use Inertia\Inertia;


use App\Mail\DossierCompleted;
use App\Mail\TacheCompleted;
use Illuminate\Support\Facades\Mail;

use PhpOffice\PhpWord\PhpWord;
use PhpOffice\PhpWord\IOFactory;

class DossierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $data = Dossier::with('taches')->where('archived', false)->get();
        $totalD = Dossier::count();
        return Inertia::render('Dossier/Index' , ["dossiers" =>$data , "total"=>$totalD]) ;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        //
        $clientId = $request->input('client_id');
        $client = Client::find($clientId);
        if (!$client->archived) {
            return Inertia::render('Dossier/Create' , ['client' =>$client]) ;
        } else {
            return back();
        }
        
        
        //echo($data);

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
        Mail::to('privtouka@gmail.com')->send(new DossierCompleted($d));
        //creer une tache pour le dossier
        $t = new Tache ; 
        $t->nom = $request->tache_nom ; 
        $t->description = $request->tache_desc ; 
        $t->echeance = $request->echeance ; 
        $t->dossier_id = $d->id;
        $t->save() ;
        Mail::to('privtouka@gmail.com')->send(new TacheCompleted($t));

        $action = $request->code;
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
        $client  =  $dossier->client ; 
        if (!$client->archived || !$dossier->archived) {
            return Inertia::render('Dossier/Edit' , ["data" => $client , "dossier" =>$dossier]) ;
        } else {
            return back();
        }

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Dossier $dossier)
    {
        //
        $d = Dossier::find($dossier->id) ;
        $d->code = $request->code ; 
        $d->description = $request->description ; 
        $d->client_id = $request->client_id ;  
        
        $d->save(); 
        return redirect('/clients/' .$request->client_id) ;
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Dossier $dossier)
    {
        //
    }

    public function downloadWord($id)
    {
        $dossier = Dossier::find($id) ;
        $c = $dossier->client ;
        $t = $dossier->taches ;
        

    $phpWord = new PhpWord();
    $section = $phpWord->addSection();
    //$section->addText('testing...');
    
    // Use the Blade view to generate additional content
    //$html = view('test')->render();
    $html = 'client : ' .$c->nom .' dossier : ' .$dossier->code;
    //$section->addText($html);

    \PhpOffice\PhpWord\Shared\Html::addHtml($section, $html, false, false);
    // Save the Word file
    $objWriter = IOFactory::createWriter($phpWord, 'Word2007');
    $objWriter->save('my-word-file.docx');
    
    // Download the Word file
    return response()->download('my-word-file.docx');
    return back() ;
    }
}
