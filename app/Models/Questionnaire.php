<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Questionnaire extends Model
{
    use HasFactory;
    protected $fillable=[
        'examination_id',
        'question',
        'answer_key',
        'specification',
        'a',
        'b',
        'c',
        'd',
        'e',
        'image_header',
        'image_a',
        'image_b',
        'image_c',
        'image_d',
        'image_e',
    ];
}
