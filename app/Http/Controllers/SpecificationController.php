<?php

namespace App\Http\Controllers;

use App\Models\ScoreSheet;
use App\Models\Specification;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SpecificationController extends Controller
{

    public function scoresheet(Request $request, $user_id, $booklet_id)
    {
        $scoresheet = ScoreSheet::where([
            ['user_id', '=', $user_id],
            ['booklet_id', '=', $booklet_id],
            ['reference_id', '=', $request->reference_id],
        ])->with(['answers', 'booklet', 'user', 'examiner'])->first();

        if (!$scoresheet) {
            abort(404, 'Scoresheet not found');
        }
        $pdf = Pdf::loadView('scoresheet', compact('scoresheet'));

        return $pdf->stream('scoresheet.pdf');
    }

    public function get_ila(Request $request, $user_id, $booklet_id)
    {
        $scoresheet = ScoreSheet::where([
            ['user_id', '=', $user_id],
            ['booklet_id', '=', $booklet_id],
            ['reference_id', '=', $request->reference_id],
        ])->with(['answers', 'booklet', 'user', 'examiner'])->first();

        if (!$scoresheet) {
            abort(404, 'Scoresheet not found');
        }

        $pdf = Pdf::loadView('ila', compact('scoresheet'))
            ->setPaper('legal', 'landscape');

        return $pdf->stream('individual_learning_agreement.pdf');

        // return Inertia::render('ila/page', [
        //     'scoresheet' => $scoresheet
        // ]);
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
