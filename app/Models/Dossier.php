<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dossier extends Model
{
    use HasFactory;

    protected $fillable = [
        'code' , 'client_id'
    ] ;

    public function user(){
        return $this->belongsTo(User::class) ;
    }
}
