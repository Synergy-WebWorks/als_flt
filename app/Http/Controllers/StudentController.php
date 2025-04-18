<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class StudentController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search'); // Get search input
        $query = User::where('user_type', 3)->orderBy('id', 'desc')->with(['district']); // Filter by user_type

        // Check if there's a search query, and if so, apply search across columns
        if (!empty($search)) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'LIKE', "%{$search}%")
                    ->orWhere('email', 'LIKE', "%{$search}%");
                // ->orWhere('phone', 'LIKE', "%{$search}%")
            });
        }
        if (!empty($search)) {
            $query->where('isApproved','true');
        }
        

        $users = $query->paginate(10);

        return response()->json([
            'response' => $users,
        ], 200);
    }

    public function update(Request $request, $id)
    {
        // Define validation rules for the incoming data
        $validatedData = $request->validate([
            'dob' => 'required|date', // Example validation for date of birth
            'mobile' => 'required',
            'district_id' => 'nullable',
            'email' => 'required|email|unique:users,email,' . $id, // Ensure email is unique except for the current user
            'name' => 'required|string',  // Assuming 'name' is passed instead of 'distnamerict_id'
            'password' => 'nullable|string|min:8',  // Password is optional
        ]);

        // Find the user by ID or fail if not found
        $user = User::findOrFail($id);

        // Prepare data for update
        $dataToUpdate = [
            'dob' => $validatedData['dob'],
            'district_id' => $validatedData['district_id']??null,
            'email' => $validatedData['email'],
            'name' => $validatedData['name'],
            'mobile' => $validatedData['mobile'],
        ];
        
        // Check if password is provided and update it
        if ($request->filled('password')) {
            $dataToUpdate['password'] = Hash::make($validatedData['password']);
        }

        // Update the user with the validated data
        $user->update($dataToUpdate);
    }


    public function destroy($id)
    {
        User::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }

    public function show($id)
    {
      $user=  User::where('id', $id)->with(['score_sheet','examiner'])->first();
        return response()->json([
            'response' =>  $user,
        ], 200);
    }
}
