<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Delegate extends Model
{
    protected $fillable = [
        'company_id',
        'name',
        'phone',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
