<?php

namespace Database\Seeders;

use App\Models\Activity;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i <= 6; $i++) {
            Activity::create([
                'activity_name' => Str::random(10),
                'checked' => false
            ]);
        }
    }
}
