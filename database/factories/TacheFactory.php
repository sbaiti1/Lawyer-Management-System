<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\odel=Tache>
 */
class TacheFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'nom' => $this->faker->sentence(),
            'description' => $this->faker->paragraph(),
            'echeance' => $this->faker->dateTimeBetween('+1 week', '+1 month'),
            'statut' => $this->faker->randomElement(['en cours', 'terminée', 'en attente']),
            'dossier_id' => function(){
                return \App\Models\Dossier::factory()->create()->id;
            }
        ];
    }
}
