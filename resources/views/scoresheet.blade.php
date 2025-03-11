<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Individual Learning Agreement</title>
    <link rel="stylesheet" href="{{ public_path('css/tailwind.css') }}">
    <link rel="stylesheet" href="/css/tailwind.css">


</head>

<body>
    <div style="text-align: center; font-size: 18px; font-weight: bold; margin-bottom: 10px;">
        FLT LEARNER SCORESHEETS
    </div>
    @php
    $answers = $scoresheet['answers'] ?? [];
    $examinations = $scoresheet['booklet']['examinations'] ?? [];

    // Convert to array in case it's an Eloquent Collection
    if ($examinations instanceof \Illuminate\Database\Eloquent\Collection) {
    $examinations = $examinations->toArray();
    }

    $totalScore = array_reduce($examinations, function ($totalExamScore, $exam) use ($answers) {
    if (!isset($exam['question']) || !is_array($exam['question'])) {
    return $totalExamScore;
    }

    $examScore = array_reduce($exam['question'], function ($total, $question) use ($answers) {
    if (!isset($question['id'])) {
    return $total;
    }

    // Find the answer corresponding to the question
    $answer = collect($answers)->firstWhere('questionnaire_id', $question['id']);

    return $total + (isset($answer['score']) && is_numeric($answer['score']) ? (int) $answer['score'] : 0);
    }, 0);

    return $totalExamScore + $examScore;
    }, 0);
    @endphp

    <!-- Learner & Facilitator Details -->
    <table class="header-table" style="width: 100%;">
        <tr>
            <td style="width: 50%; text-align: left;">Name of Learner: {{ $scoresheet->user->name ?? '' }}</td>
            <td style="width: 50%; text-align: right;">Date: {{ $scoresheet->date ?? '' }}</td>
        </tr>
        <tr>
            <td style="text-align: left;">Score: {{ $totalScore ?? '' }}</td>
            <td style="text-align: right;">Name of Learning Facilitator: {{ $scoresheet->examiner->schedule->teacher->name ?? '' }}</td>
        </tr>
    </table>
    <ul>
        @foreach ($examinations as $exam)
        @php
        // Calculate the total score for this exam
        $examScore = array_reduce($exam['question'] ?? [], function ($total, $question) use ($answers) {
        $answer = collect($answers)->firstWhere('questionnaire_id', $question['id']);
        return ($total ?? 0) + (isset($answer['score']) ? (int) $answer['score'] : 0);
        }, 0);
        @endphp

        <li >
            <div class="flex items-center justify-between font-semibold">
                <div>
                    @if (!empty($exam['title']))
                    <div>{{ $exam['title'] }}</div>
                    @endif
                    @if (!empty($exam['sub_title']))
                    <div>{{ $exam['sub_title'] }}</div>
                    @endif
                </div>
            </div>

            <div class="mt-2 space-y-2">
                @foreach ($exam['question'] as $question)
                @php
                $answer = collect($answers)->firstWhere('questionnaire_id', $question['id']);
                $score = $answer['score'] ?? 0;
                $isCorrect = $score > 0;
                @endphp

                <div style="display: flex; gap: 8px; align-items: center;">
                    <div style="display: flex; align-items: center; gap: 8px;">

                        <span style="font-weight: 500;">{{ $question['item_number'] }}.</span> <span>{{ $answer['answer'] ?? 'No Answer' }}</span>

                        @if ($isCorrect)
                        <span style="color: #16a34a;"> Correct</span>
                        @else
                        <span style="color: #dc2626;"> Wrong</span>
                        @endif

                        @if (!empty($answer['answer']) && isset($user) && $user->user_type == '2' && strlen($answer['answer']) != 1)
                        <span>{{ $answer['score'] ?? 0 }}</span>
                        {{-- Edit Score Section Placeholder --}}
                        {{-- @include('edit-score-section', ['data' => $answer]) --}}
                        @endif
                    </div>
                </div>

                @endforeach
            </div>

            <div class="font-bold text-right mt-2">
                {{-- Score: {{ (int) $examScore }} --}}
            </div>
        </li>
        @endforeach
    </ul>

</body>

</html>