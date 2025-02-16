import React from "react";
import InstructorLayout from "../layout";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { router } from "@inertiajs/react";

export default function InstructorDashboardPage() {
    const { user } = useSelector((store) => store.app);
    console.log("user", user);
    return (
        <InstructorLayout>
            <div className="relative gap-10 flex-col w-full h-full flex items-center justify-center">
                <div className="flex items-center justify-between w-full gap-3">
                    <div className="flex flex-col gap-3 h-96 overflow-auto">
                        {user?.schedules &&
                            user?.schedules?.map((res) => {
                                return (
                                    <div className="bg-blue-800 shadow-xl p-3 flex flex-col items-center justify-center gap-5">
                                        <div className="text-lg text-white">
                                            {res.booklet.title}
                                        </div>
                                        <div className="text-3xl text-white">
                                            Total Students:{" "}
                                            {res.examiners.length}
                                        </div>
                                        <Button
                                            onClick={() =>
                                                router.visit(
                                                    "/teacher/schedule/" +
                                                        res.unique_id,
                                                )
                                            }
                                            variant="contained"
                                        >
                                            Show More
                                        </Button>
                                    </div>
                                );
                            })}
                    </div>

                    <div>
                        <lottie-player
                            src="/images/teacher.json"
                            background="transparent"
                            speed="1"
                            // style={{ width: "200px", height: "200px" }}
                            className="w-full h-full"
                            loop
                            autoPlay
                        ></lottie-player>
                    </div>
                </div>
                {/* <img
                    alt="Animated loading icon"
                    src="/images/dyn.gif"
                    className="w-96 h-96 max-w-full max-h-full"
                /> */}
                {/* <div className="bg-blue-800 p-3 text-white my-3 text-center px-10 rounded-xl shadow-xl">
                    What is Alternative Learning System or ALS? It is a parallel
                    learning system in the Philippines that provides a practical
                    option to the existing formal instruction. When one does not
                    have or cannot access formal education in schools, ALS is an
                    alternate or substitute. ALS includes both the non-formal
                    and informal sources of knowledge and skills. Why is there a
                    need for Alternative Learning System in the Philippines?
                    Many Filipinos do not have a chance to attend and finish
                    formal basic education (Grades 1-6 and Year 1-4) due to many
                    reasons. Some drop out from schools while some do not have
                    schools in their communities. Since every Filipino has a
                    right to free basic education, the Government establishes
                    ALS to provide all Filipinos the chance to have access to
                    and complete basic education in a mode that fits their
                    distinct situations and needs. What is the basis of ALS
                    implementation in the Philippines? The 1987 Philippine
                    Constitution provides for the recognition and promotion of
                    other forms of education other than formal education.
                    Article XIV, Section 2, Paragraph (1) declares that the
                    State shall establish, maintain and support a complete,
                    adequate and integrated system of education relevant to the
                    needs of the people and society; and paragraph (4) concisely
                    encourages non-formal, informal and indigenous learning
                    systems as well as self-learning, independent and
                    out-of-school study programs particularly those that respond
                    to community needs. The Governance Act for Basic Education
                    otherwise known as the Republic Act 9155 stipulates the
                    establishment of the Alternative Learning System (ALS) to
                    provide out-of-school children, youth and adults population
                    with basic education. How does ALS work? There are two major
                    programs on ALS that are being implemented by the Department
                    of Education, through the Bureau of Alternative Learning
                    System (BALS). One is the Basic Literacy Program and the
                    other is the Continuing Education Program – Accreditation
                    and Equivalency (A&E). Both programs are modular and
                    flexible. This means that learning can take place anytime
                    and any place, depending on the convenience and availability
                    of the learners.
                </div> */}
                <div className="w-full flex gap-5">
                    <div className="flex-1">
                        <img
                            alt="Animated loading icon"
                            src="/images/mission.jpg"
                            className="w-full h-96 max-w-full max-h-full"
                        />
                    </div>
                    <div className="flex-1">
                        <img
                            alt="Animated loading icon"
                            src="/images/vision.jpg"
                            className="w-full h-96 max-w-full max-h-full"
                        />
                    </div>
                </div>
            </div>
        </InstructorLayout>
    );
}
