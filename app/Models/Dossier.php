<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dossier extends Model
{
    use HasFactory;

    protected $fillable = [
        'code' , 'description', 'client_id'
    ] ;

    public function client(){
        return $this->belongsTo(Client::class) ;
    }
    public function taches(){
        return $this->hasMany(Tache::class);
    }
}
