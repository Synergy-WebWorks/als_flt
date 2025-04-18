<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\AnswerController;
use App\Http\Controllers\BookletController;
use App\Http\Controllers\DashboardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChatGPTController;
use App\Http\Controllers\DistrictController;
use App\Http\Controllers\ExaminationController;
use App\Http\Controllers\ExaminerController;
use App\Http\Controllers\LearningCenterController;
use App\Http\Controllers\QuestionnaireController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\ScoreSheetController;
use App\Http\Controllers\SpecificationController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use App\Models\User;

Route::get('/user', function (Request $request) {
    return User::where('id',$request->user()['id'])->with(['score_sheet','schedules'])->first();
})->middleware('auth:sanctum');

// Route::get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('/rate-paragraph', [ChatGPTController::class, 'rateParagraph']);



Route::resource('account', AccountController::class);
Route::post('/approved_account', [AccountController::class, 'approved_account']);
Route::get('/administrator_dashboard', [DashboardController::class, 'administrator_dashboard']);
Route::resource('students', StudentController::class);
Route::resource('teachers', TeacherController::class);
Route::resource('examinations', ExaminationController::class);
Route::resource('questionnaires', QuestionnaireController::class);
Route::resource('score_sheets', ScoreSheetController::class);
Route::resource('dashboard', DashboardController::class);
Route::resource('specifications', SpecificationController::class);
Route::resource('schedule', ScheduleController::class);
Route::resource('learning_centers', LearningCenterController::class);
Route::resource('answers', AnswerController::class);
Route::put('/edit_ila/{id}', [AnswerController::class, 'edit_ila']);
Route::put('/edit_all_ila/{id}', [AnswerController::class, 'edit_all_ila']);
Route::resource('booklet', BookletController::class);
Route::resource('district', DistrictController::class);

Route::resource('examiner', ExaminerController::class);
Route::get('/get_examiner_by_examiner_id/{id}', [ExaminerController::class, 'get_examiner_by_examiner_id']);
Route::post('/update_examiner_center', [ExaminerController::class, 'update_examiner_center']);




