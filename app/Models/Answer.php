<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Answer extends Model
{
    use HasFactory;
    protected $fillable = [
        'score_sheet_id',
        'questionnaire_id',
        'answer',
        'score',
        'delivery_mode',
        'timeline',
        'achieved',
        'not_achieved',
        'date_of_review',
        'facilitator'
    ];

    public function questionnaire(): HasOne
    {
        return $this->hasOne(Questionnaire::class,'id','questionnaire_id');
    }
}
