<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Individual Learning Agreement</title>
    <link rel="stylesheet" href="{{ public_path('css/tailwind.css') }}">
    <link rel="stylesheet" href="/css/tailwind.css">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            font-size: 12px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th,
        td {
            border: 1px solid black;
            margin: 0px;
            padding: 0px;
            /* padding: 6px; */
            text-align: center;
        }

        .header-table td {
            border: none;
            text-align: left;
        }

        .bg-gray {
            background-color: #f3f3f3;
        }

        .container {
            display: flex;
            gap: 10px;
            /* Space between items */
        }

        .item {
            background: lightgray;
            padding: 10px;
            border: 1px solid black;
        }

        @page {
            size: legal landscape;
            margin: 20mm 10mm 30mm 10mm;
            /* Ensure enough space for the footer */
        }

        @page {
            @bottom-center {
                content: element(footer);
            }
        }

        .footer {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            text-align: center;
            font-size: 12px;
        }

        .footer table {
            width: 100%;
            border-collapse: collapse;
        }
    </style>

</head>

<body>
    <div style="text-align: center; font-size: 18px; font-weight: bold; margin-bottom: 10px;">
        Individual Learning Agreement
    </div>

    <!-- Learner & Facilitator Details -->
    <table class="header-table" style="width: 100%;">
        <tr>
            <td style="width: 50%; text-align: left;">Name of Learner: {{ $scoresheet->user->name ?? '' }}</td>
            <td style="width: 50%; text-align: right;">Community Learning Center: ALS</td>
        </tr>
        <tr>
            <td style="text-align: left;">Level: {{ $scoresheet->als_level ?? '' }}</td>
            <td style="text-align: right;">Name of Learning Facilitator: {{ $scoresheet->examiner->schedule->teacher->name ?? '' }}</td>
        </tr>
    </table>
    <!-- {scoresheet?.examiner?.schedule?.teacher?.name ??
        "No Examiner"} -->

    <div style="margin: 10px 0;">
        <b>Direction:</b> Write your learning goals, your learning activities or strategies in order to attain these goals, and the timeline.
    </div>

    <!-- Learning Goals Table -->
    <table style="margin-bottom: 10px !important;">
        <thead>
            <tr class="bg-gray">
                <td style="width: 25%;"><b>Learning Goals</b> <br> (Kasanayang Gusto Kong Matutunan)</td>
                <td style="max-width: 25%;"><b>Delivery Mode</b> <br> (Face-to-face, BRI, eLearning, etc.)</td>
                <td style="max-width: 15%;"><b>Timeline</b> <br> (Kailan mo ito gustong matutunan?)</td>
                <td style="max-width: 25%;"><b>Review of Learning Goals</b><br />
                    <table>
                        <tr>
                            <td style="width: 33%;">Achieved<br />(Nakamtan)</td>
                            <td style="width: 33%;">Not Achieved<br />(Hindi Nakamtan)</td>
                            <td style="width: 33%;">Date of Review<br />(Petsa ng pagsusuri)</td>
                        </tr>
                    </table>
                </td>
                <td style="max-width: 10%;"><b>Learning Facilitators</b><br />(Payo ng Learning Facilitator)</td>
            </tr>
        </thead>
        <tbody>
            @php
            $zeroScoreArray = collect($scoresheet->answers ?? [])->filter(function ($item) {
            return $item->score == 0;
            });
            @endphp

            @foreach ($zeroScoreArray as $res)
            @if (!empty($res->questionnaire->specification)) {{-- Ensure specification exists --}}
            <tr>
                <td style="max-width: 25%;">{{ $res->questionnaire->specification }}</td>
                <td style="max-width: 25%;">{{ $res->delivery_mode ?? '' }}</td>
                <td style="max-width: 15%;">{{ $res->timeline ?? '' }}</td>
                <td style="max-width: 25%;">
                    @if (!empty($res->achieved) || !empty($res->not_achieved) || !empty($res->date_of_review))
                    <table>
                        <tr>
                            <td style="width: 50px;">{{ $res->achieved ?? '' }}</td>
                            <td style="width: 50px;">{{ $res->not_achieved ?? '' }}</td>
                            <td style="width: 50px;">{{ $res->date_of_review ?? '' }}</td>
                        </tr>
                    </table>
                    @endif
                </td>
                <td style="max-width: 10%;">{{ $res->facilitator ?? '' }}</td>
            </tr>
            @endif
            @endforeach
        </tbody>

    </table>

    <div class="footer" id="footer">
        <table class="header-table" style="width: 100%;">
            <tfoot>
                <tr>
                    <td style="width: 50%; text-align: left; padding-top: 10px;">
                        <div style="margin-left: 100px !important;margin-right: 250px !important; border-top: 2px solid black;">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Learner's Signature over Printed Name)
                        </div>
                    </td>
                    <td style="width: 50%; text-align: right; padding-top: 10px;">
                        <div style="margin-left: 250px !important; margin-right: 100px !important; border-top: 2px solid black;">
                            (Learning Facilitator's Signature over Printed Name)
                        </div>
                    </td>
                </tr>
            </tfoot>
        </table>

    </div>
</body>

</html>