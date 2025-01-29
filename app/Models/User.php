<?php

namespace App\Models;

use App\Http\Middleware\Student;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable // Implement MustVerifyEmail
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'address',
        'password',
        'dob',
        'mobile',
        'profile',
        'assigned',
        'user_type',
        'district_id',
        'isApproved'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function score_sheet(): HasOne
    {
        return $this->hasOne(ScoreSheet::class,'user_id','id')->with(['answers','booklet']);
    }
    public function examiner(): HasOne
    {
        return $this->hasOne(Examiner::class,'examiner_id','id')->with(['schedule']);
    }
    public function district(): HasOne
    {
        return $this->hasOne(District::class,'id','district_id');
    }

    public function schedules(): HasMany
    {
        return $this->hasMany(Schedule::class,'teacher_id','id');
    }
    public function students(): HasMany
    {
        return $this->hasMany(Student::class,'id','district_id');
    }
}
