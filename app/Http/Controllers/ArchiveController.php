<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Client;
use Illuminate\Http\Request;

class ArchiveController extends Controller
{
    //
    public function index(){
        $data = Client::where('archived', true)->get();
        return Inertia::render('Archive/Index' , ['data'=>$data]) ;
    }
    
    public function archiveClient($id){
        $client = Client::findOrFail($id);
        $client->archived = true;
        $client->save();

        return redirect('/archive');
    }
}
