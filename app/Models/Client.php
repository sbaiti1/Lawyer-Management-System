<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'firstname' , 
        'lastname' ,
        'CIN' , 
        'email' ,
        'phone'
    ] ;

    public function dossiers(){
        return $this->hasMany(Dossier::class);
    }
}
