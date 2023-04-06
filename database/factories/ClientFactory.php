<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Client>
 */
class ClientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $letters = $this->faker->randomElements(['H', 'Y', 'N', 'B'], $count = $this->faker->numberBetween(1, 2));
        $digits = $this->faker->randomNumber(6);
        return [
            //

            'nom' => $this->faker->lastname , 
            'prenom' => $this->faker->firstname ,
            'CIN' => implode('', $letters) . str_pad($digits, 6, '0', STR_PAD_LEFT),
            'email' => $this->faker->unique()->safeEmail , 
            'phone' => $this->faker->unique()->phoneNumber , 
        ];
    }
}
