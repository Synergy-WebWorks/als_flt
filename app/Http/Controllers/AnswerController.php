<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\ScoreSheet;
use Illuminate\Http\Request;

class AnswerController extends Controller
{

    public function edit_all_ila(Request $request)
    {
        $score_sheet = ScoreSheet::where([
            ['user_id', '=', $request->student_id],
            ['booklet_id', '=', $request->booklet_id],
            ['reference_id','=',$request->reference_id]
        ])->first();
        
        $answers = Answer::where('score_sheet_id', $score_sheet->id)->get();
        foreach ($answers as $key => $value) {
            if ($value) {
                $value->update([
                    'delivery_mode' => $request->value
                ]);
            }
        }
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function edit_ila(Request $request, $id)
    {
        Answer::where('id', $id)->update([
            $request->column => $request->value
        ]);
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function update(Request $request, $id)
    {
        Answer::where('id', $id)->update([
            'score' => $request->score
        ]);
        return response()->json([
            'response' => 'success',
        ], 200);
    }
    public function index()
    {
        $answers = Answer::get();
        return response()->json([
            'response' => $answers,
        ], 200);
    }

    public function show($id)
    {

        $answers = Answer::where('examination_id', $id)
            ->orderBy('created_at', 'asc')->get();
        return response()->json([
            'response' => $answers,
        ], 200);
    }

    public function store(Request $request)
    {

        $score_sheet = ScoreSheet::where([
            ['user_id', '=', $request->user['id']],
            ['booklet_id', '=', $request->booklet_id],
            ['reference_id','=',$request->reference_id]
        ])->first();

        if (!$score_sheet) {
            $ss = ScoreSheet::create([
                'booklet_id' => $request->booklet_id,
                'user_id' => $request->user['id'],
                'overall_score' => 0,
                'als_level' => $request->als_level,
                'date' => $request->date,
                'reference_id' => $request->reference_id,
            ]);

            foreach ($request->answers as $key => $value) {
                Answer::create([
                    'score_sheet_id' => $ss->id,
                    'questionnaire_id' => $value['questionnaire_id'],
                    'answer' => $value['answer'],
                    'score' => $value['isCorrect'] ? 1 : 0,
                ]);
            }

            $overall = Answer::where('score_sheet_id', $ss->id)->sum('score');
            $ss->update([
                'overall_score' => $overall
            ]);

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

        Answer::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
