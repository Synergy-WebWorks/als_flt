import store from "@/app/pages/store/store";
import EditScoreSection from "@/app/pages/student/examination/id/sections/edit-score-section";
import { get_user_login_thunk } from "@/app/redux/app-thunk";
import { Check, Close, Print } from "@mui/icons-material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const HtmlRenderer = ({ htmlContent }) => (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
);


export default function ScoreSheetForm() {
    const { student,scoresheet } = useSelector((store) => store.students);
    const { user } = useSelector((store) => store.app);
    const [overall, setOverall] = useState(0);
    const scoreSheet = scoresheet;
    const examinations = scoreSheet?.booklet?.examinations ?? [];
    const answers = scoreSheet?.answers || [];

    const student_id = window.location.pathname.split("/")[4];
    const booklet_id = window.location.pathname.split("/")[5];
    const params = new URLSearchParams(window.location.search);
    const reference_id = params.get("reference_id");
    useEffect(() => {
        store.dispatch(get_user_login_thunk());
    }, []);
    console.log('scoresheet',scoresheet)
    useEffect(() => {
        const totalScore = examinations.reduce((totalExamScore, exam) => {
            return (
                totalExamScore +
                exam.question.reduce((total, question) => {
                    const answer = answers?.find(
                        (resp) => resp.questionnaire_id === question.id,
                    );
                    return total + (parseInt(answer?.score) || 0);
                }, 0)
            );
        }, 0);

        setOverall(totalScore);
    }, [examinations, answers]);

    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-xl p-5 rounded-md border border-gray-300 shadow-lg bg-white">
                <div className="flex flex-col gap-2">
                     <div>
                                    <a
                                        href={`/scoresheet/${student_id}/${booklet_id}?reference_id=${reference_id}`}
                                        target="_blank"
                                    >
                                        <Print /> Print
                                    </a>
                                </div>
                    <div className="text-xl font-black text-center">
                      FLT LEARNER SCORESHEETS
                    </div>
                    <div className="flex items-center justify-between">
                        <div>Name: {scoresheet?.user?.name || "N/A"}</div>
                        <div>Date: {scoreSheet?.date || "N/A"}</div>
                    </div>
                    <div>Overall Score: {overall ?? "0"}</div>
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
                                return total??0 + (parseInt(answer?.score??0) ?? 0);
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
                                                                "No Answer"}
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
                                                        {answer?.answer?.length !== undefined && user.user_type == '2' && answer?.answer?.length !=
                                                            1 && (
                                                            <>
                                                                {answer?.score??0}
                                                                <EditScoreSection
                                                                    data={
                                                                        answer
                                                                    }
                                                                />
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        },
                                    )}
                                </div>
                                <div className="font-bold text-right mt-2">
                                    {/* Score: {parseInt(examScore)} */}
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    );
}
