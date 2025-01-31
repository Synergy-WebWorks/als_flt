import EditScoreSection from "@/app/pages/student/examination/id/sections/edit-score-section";
import { Check, Close } from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";

const HtmlRenderer = ({ htmlContent }) => (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
);

export default function ScoreSheetForm() {
    const { student } = useSelector((store) => store.students);
    const scoreSheet = student?.score_sheet;
    const examinations = scoreSheet?.booklet?.examinations ?? [];
    const answers = scoreSheet?.answers || [];

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-xl p-5 rounded-md border border-gray-300 shadow-lg bg-white">
                <div className="flex flex-col gap-2">
                    <div className="text-xl font-black text-center">
                        FLT LEATHER SCORESHEET
                    </div>
                    <div className="flex items-center justify-between">
                        <div>Name: {student?.name || "N/A"}</div>
                        <div>Date: {scoreSheet?.date || "N/A"}</div>
                    </div>
                    <div>
                        Overall Score: {scoreSheet?.overall_score ?? "N/A"}
                    </div>
                    <div>ALS Level: {scoreSheet?.als_level ?? "N/A"}</div>
                </div>

                <ol className="list-decimal mt-4 space-y-4">
                    {examinations.map((exam, examIndex) => {
                        const examScore = exam.question.reduce(
                            (total, question) => {
                                const answer = answers.find(
                                    (resp) =>
                                        resp.questionnaire_id === question.id,
                                );
                                return total + (parseInt(answer?.score) ?? 0);
                            },
                            0,
                        );

                        return (
                            <li
                                key={examIndex}
                                className="border border-black p-3 rounded-md"
                            >
                                <div className="flex items-center justify-between font-semibold">
                                    <div>
                                        {exam.title && <div>{exam.title}</div>}
                                        {exam.sub_title && (
                                            <div>{exam.sub_title}</div>
                                        )}
                                    </div>
                                </div>
                                <div className="mt-2 space-y-2">
                                    {exam.question.map(
                                        (question, questionIndex) => {
                                            const answer = answers.find(
                                                (resp) =>
                                                    resp.questionnaire_id ===
                                                    question.id,
                                            );
                                            const score = answer?.score || 0;
                                            const isCorrect = score > 0;

                                            return (
                                                <div
                                                    key={questionIndex}
                                                    className="flex gap-2 items-center"
                                                >
                                                    <span className="font-medium">
                                                        {question.item_number}.
                                                    </span>
                                                    <div className="flex items-center gap-2">
                                                        <span>
                                                            {answer?.answer ||
                                                                "N/A"}
                                                        </span>
                                                        {isCorrect ? (
                                                            <Check
                                                                className="text-green-600"
                                                                aria-label="Correct"
                                                            />
                                                        ) : (
                                                            <Close
                                                                className="text-red-600"
                                                                aria-label="Incorrect"
                                                            />
                                                        )}
                                                        {answer.answer.length !=
                                                            1 && (
                                                            <>
                                                               {answer.score} <EditScoreSection data={answer}/>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        },
                                    )}
                                </div>
                                <div className="font-bold text-right mt-2">
                                    Score: {parseInt(examScore)}
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
}
