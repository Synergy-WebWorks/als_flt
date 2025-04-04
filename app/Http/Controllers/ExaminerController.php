<?php

namespace App\Http\Controllers;

use App\Models\Examiner;
use App\Models\Schedule;
use App\Models\ScoreSheet;
use Illuminate\Http\Request;

class ExaminerController extends Controller
{

    public function update_examiner_center(Request $request)
    {
        $examiner = Examiner::where('id', $request->id)->first();
        if ($examiner) {
            $examiner->update([
                'learning_center' => $request->learning_center
            ]);
        }
        return response()->json([
            'response' => $examiner,
        ], 200);
    }

    public function get_examiner_by_examiner_id($id)
    {
        $examiner = Examiner::where('examiner_id', $id)->with(['user', 'schedule'])->get();
        return response()->json([
            'response' => $examiner,
        ], 200);
    }
    public function index()
    {
        $examiner = Examiner::with(['user'])->get();
        return response()->json([
            'response' => $examiner,
        ], 200);
    }


    public function show($id)
    {
        $examiners = Examiner::where('reference_id', $id)
            ->with(['user', 'schedule'])
            ->orderBy('created_at', 'asc')
            ->get();

        foreach ($examiners as $examiner) {
            $userId = optional($examiner->user)->id;

            $scoreSheet = ScoreSheet::where('reference_id', $examiner->reference_id)
                ->where('user_id', $userId)
                ->first();

            // Attach the score sheet directly to the examiner model
            $examiner->score_sheet = $scoreSheet;
        }

        $schedule = Schedule::where('unique_id', $id)->first();

        return response()->json([
            'schedule' => $schedule,
            'response' => $examiners,
        ], 200);
    }

    public function store(Request $request)
    {
        $examiner = Examiner::where([
            ['examiner_id', '=', $request->examiner_id],
            ['reference_id', '=', $request->reference_id],
        ])->first();
        if (!$examiner) {
            Examiner::create($request->all());
            return response()->json([
                'response' => 'success',
            ], 200);
        } else {
            return response()->json([
                'response' => 'exist',
            ], 200);
        }
    }

    public function destroy($id)
    {
        Examiner::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
