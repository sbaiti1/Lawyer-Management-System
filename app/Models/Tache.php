<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tache extends Model
{
    use HasFactory;
    protected $fillable = ['nom' , 'description' , 'echeance' , 'statut' , 'dossier_id'] ;

    public function dossier(){
        return $this->belongsTo(Dossier::class) ;
    }
}
