<?php

namespace App\Http\Controllers;

use App\Models\ScoreSheet;
use Illuminate\Http\Request;

class ScoreSheetController extends Controller
{
    
    public function show(Request $request,$id)
    {
        $scoresheet = ScoreSheet::where([
            ['user_id','=',$id],
            ['booklet_id','=',$request->booklet_id],
        ])->with(['answers','booklet','user','examiner'])->first();
        return response()->json([
            'response' =>$scoresheet,
        ], 200);
    }
}
