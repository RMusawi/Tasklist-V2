<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Activity extends Model
{
    use HasFactory;
    protected $fillable = ['activity_name', 'checked', 'created_at'];
    protected $casts = [
        "checked" => "boolean"
    ];

    public function items():HasMany {
        return $this->hasMany(Item::class);
    }
}
