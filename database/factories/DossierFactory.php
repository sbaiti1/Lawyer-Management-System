<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Dossier;
use Carbon\Carbon;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Dossier>
 */
class DossierFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
        public function definition(): array{

        // Get the latest increment number from the database
        $latestDossier = Dossier::orderBy('id', 'desc')->first();
        $incrementNumber = $latestDossier ? $latestDossier->id + 1 : 1;

        // Get the current year
        $year = Carbon::now()->format('y');

        // Generate a random four-digit number
        $fourDigits = str_pad(rand(0, 9999), 4, '0', STR_PAD_LEFT);
    {
        return [
            //

            'code' => sprintf("%04d-%s%s", $incrementNumber, $fourDigits, $year), 
            'client_id' => function(){
                return \App\Models\Client::factory()->create()->id;
            }
        ];
    }
}
}
