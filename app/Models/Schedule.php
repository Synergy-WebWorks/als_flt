<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Schedule extends Model
{
    use HasFactory;
    protected $fillable=[
        'unique_id',
        'teacher_id',
        'booklet_id',
        'title',
        'als_level',
        'examination_date',
        'start_at',
        'end_at',
        'learning_center',
    ];
    public function user(): HasOne
    {
        return $this->hasOne(User::class,'id','teacher_id');
    }
    public function students(): HasMany
    {
        return $this->hasMany(User::class,'id','teacher_id');
    }
    public function examiners(): HasMany
    {
        return $this->hasMany(Examiner::class,'reference_id','unique_id');
    }
    public function teacher(): HasOne
    {
        return $this->hasOne(User::class,'id','teacher_id');
    }
    public function learning_center(): HasOne
    {
        return $this->hasOne(LearningCenter::class,'id','learning_center');
    }
    public function booklet(): HasOne
    {
        return $this->hasOne(Booklet::class,'id','booklet_id');
    }
}
