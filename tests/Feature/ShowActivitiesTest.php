<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ShowActivitiesTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {

        $response = $this->get('/api/v1/activities');

        $response->assertStatus(200);

        $response->assertJsonStructure([
            'data' => []
        ]);
    }
}
