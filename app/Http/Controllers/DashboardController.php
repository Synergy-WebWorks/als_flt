<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function administrator_dashboard()
    {
        $teacher_count = User::where('user_type', 2)->count();
        $student_count = User::where('user_type', 3)->count();
        return response()->json([
            'teacher_count' => $teacher_count,
            'student_count' => $student_count,
        ], 200);
    }
    public function get_number_of_teacher() {}
}
