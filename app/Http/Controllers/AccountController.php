<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller
{

    public function approved_account(Request $request){
         User::where('id', $request->id)->update([
            'isApproved' =>$request->isApproved
        ]);
        return response()->json([
            'response' =>'success',
        ], 200);
    }
    public function index(Request $request)
    {
        // Fetch paginated users, you can specify how many items per page, e.g., 10
        if ($request->page) {
            $users = User::where('user_type', $request->user_type)->paginate(10);
            return response()->json([
                'response' => $users,
            ], 200);
        } else {
            $users = User::where('user_type', $request->user_type)->get();
            return response()->json([
                'response' => [
                    'data' => $users
                ],
            ], 200);
        }


        // Return the paginated response

    }

    public function show($id)
    {
        $user = User::where('id', $id)->with(['score_sheet', 'examiner'])->first();
        return response()->json([
            'response' => $user,
        ], 200);
    }
    public function store(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'user_id' => 'required|unique:users,user_id',  // Corrected 'unique' validation for 'user_id'
            'email' => 'required|email|unique:users,email', // Unique validation for email
            // 'address' => 'required|string|max:255',  // Address must be a string with a max length of 255
            'course_id' => 'max:255',  // Course must be a string with a max length of 255
            'department_id' => 'required',  // Department must be a string with a max length of 255
            'dob' => 'required',  // Date of birth must be a valid date
            'fname' => 'required|string|max:255',  // First name must be a string with a max length of 255
            'lname' => 'required|string|max:255',  // Last name must be a string with a max length of 255
            'password' => 'required|string|min:8',  // Password must be a string with a minimum length of 8
        ]);

        // Create the user
        User::create([
            'user_id' => $validatedData['user_id'],
            'email' => $validatedData['email'],
            // 'address' => $request->address??'',
            'course_id' => $validatedData['course_id'] ?? null,
            'department_id' => $validatedData['department_id'],
            'dob' =>  $request->dob ?? '',
            'fname' => $validatedData['fname'],
            'lname' => $validatedData['lname'],
            'user_type' => $request->user_type,
            'password' => Hash::make($validatedData['password']),
        ]);

        // Return response
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully!',
        ], 200);
    }
    public function update(Request $request, $id)
    {
        // Validate the input with the proper unique rule for the email
        $validatedData = $request->validate([
            'user_id' => 'required|unique:users,user_id',
            // 'email' => 'required|email|unique:users,email',
            'course_id' => 'max:255',
            'address' => 'required|string|max:255',
            'department' => 'required|string|max:255',
            'dob' => 'required|date',
            'fname' => 'required|string|max:255',
            'lname' => 'required|string|max:255',
            'password' => 'nullable|string|min:8', // Password is nullable
        ]);

        // Find the user by ID
        $user = User::findOrFail($id);

        // Prepare data for update
        $dataToUpdate = [
            'user_id' => $validatedData['user_id'],
            // 'email' => $validatedData['email'],
            'course_id' => $validatedData['course_id'] ?? null,
            'address' => $validatedData['address'],
            'department' => $validatedData['department'],
            'dob' => $validatedData['dob'],
            'fname' => $validatedData['fname'],
            'lname' => $validatedData['lname'],
        ];

        // Hash and update password only if provided
        if ($request->filled('password')) {
            $dataToUpdate['password'] = Hash::make($validatedData['password']);
        }

        // Update the user with the new data
        $user->update($dataToUpdate);

        // Return success response
        return response()->json([
            'response' => 'success',
        ], 200);
    }

    public function destroy($id)
    {
        User::where('id', $id)->delete();
        return response()->json([
            'response' => 'success',
        ], 200);
    }
}
