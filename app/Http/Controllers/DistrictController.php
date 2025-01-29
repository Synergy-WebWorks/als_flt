<?php

namespace App\Http\Controllers;

use App\Models\District;
use Illuminate\Http\Request;

class DistrictController extends Controller
{
    public function index()
    {
        $districts = District::get();
        return response()->json([
            'response' => $districts,
        ], 200);
    }

    public function store(Request $request)
    {

        District::create($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }

    public function update(Request $request)
    {

        District::where('id', $request->id)->update($request->all());
        return response()->json([
            'response' => 'success',
        ], 200);
    }

    public function destroy($id)
    {

        District::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
