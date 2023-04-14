<?php

namespace Database\Seeders;

use App\Models\Tache ;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TacheSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        Tache::factory()->count(10)->create();

    }
}
