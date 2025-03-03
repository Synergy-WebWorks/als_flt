<?php

namespace App\Http\Controllers;

use App\Models\ScoreSheet;
use App\Models\Specification;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;

class SpecificationController extends Controller
{

    public function get_ila($user_id, $booklet_id) {
        $scoresheet = ScoreSheet::where([
            ['user_id', '=', $user_id],
            ['booklet_id', '=', $booklet_id],
        ])->with(['answers', 'booklet', 'user', 'examiner'])->first();
    
        if (!$scoresheet) {
            abort(404, 'Scoresheet not found');
        }
    
        $pdf = Pdf::loadView('ila', ['scoresheet' => $scoresheet])
                  ->setPaper('legal', 'landscape');
    
        return $pdf->stream('invoice.pdf');
    }
    
    public function index()
    {
        $specification = Specification::get();
        return response()->json([
            'response' => $specification,
        ], 200);
    }


    public function show($id)
    {
        $specification = Specification::where('examination_id', $id)
            ->orderBy('created_at', 'asc')->get();
        return response()->json([
            'response' => $specification,
        ], 200);
    }
    public function store(Request $request)
    {
        Specification::create($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }

    public function destroy($id)
    {
        Specification::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
