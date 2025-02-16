import React from "react";
import StudentLayout from "../layout";
import { Box } from "@mui/material";

export default function StudentDashboardPage() {
    const commonStyles = {
        bgcolor: "background.paper",
        borderTop: 2,
        width: "full",
        height: "5rem",
    };

    return (
        <StudentLayout>
            <div className="relative flex-col w-full h-full flex items-center justify-center">
                <img
                    alt="Animated loading icon"
                    src="/images/student_dashboard.jpg"
                    className="w-full h-[500px] max-w-full max-h-full"
                />
                <img
                    alt="Animated loading icon"
                    src="/images/dyn.gif"
                    className="w-96 h-96 max-w-full max-h-full"
                />
                <div className="bg-white p-3 w-full my-3 text-start px-10 rounded-xl shadow-xl">
                    <>
                        <div className="text-blue-700 font-black text-xl">
                            What is Alternative Learning System or ALS?
                        </div>
                        <div>
                            It is a parallel learning system in the Philippines
                            that provides a practical option to the existing
                            formal instruction. When one does not have or cannot
                            access formal education in schools, ALS is an
                            alternate or substitute. ALS includes both the
                            non-formal and informal sources of knowledge and
                            skills.
                        </div>
                        <br />
                        <Box
                            sx={{
                                ...commonStyles,
                                borderColor: "primary.main",
                            }}
                        ></Box>
                    </>
                    <>
                        <div className="text-blue-700 font-black text-xl">
                            Why is there a need for Alternative Learning System
                            in the Philippines?
                        </div>
                        <div>
                            Many Filipinos do not have a chance to attend and
                            finish formal basic education (Grades 1-6 and Year
                            1-4) due to many reasons. Some drop out from schools
                            while some do not have schools in their communities.
                            Since every Filipino has a right to free basic
                            education, the Government establishes ALS to provide
                            all Filipinos the chance to have access to and
                            complete basic education in a mode that fits their
                            distinct situations and needs.
                        </div>
                        <br />
                        <Box
                            sx={{
                                ...commonStyles,
                                borderColor: "primary.main",
                            }}
                        ></Box>
                    </>

                    <>
                        <div className="text-blue-700 font-black text-xl">
                            What is the basis of ALS implementation in the
                            Philippines?
                        </div>
                        <div>
                            The 1987 Philippine Constitution provides for the
                            recognition and promotion of other forms of
                            education other than formal education. Article XIV,
                            Section 2, Paragraph (1) declares that the State
                            shall establish, maintain and support a complete,
                            adequate and integrated system of education relevant
                            to the needs of the people and society; and
                            paragraph (4) concisely encourages non-formal,
                            informal and indigenous learning systems as well as
                            self-learning, independent and out-of-school study
                            programs particularly those that respond to
                            community needs. The Governance Act for Basic
                            Education otherwise known as the Republic Act 9155
                            stipulates the establishment of the Alternative
                            Learning System (ALS) to provide out-of-school
                            children, youth and adults population with basic
                            education.
                        </div>
                        <br />
                        <Box
                            sx={{
                                ...commonStyles,
                                borderColor: "primary.main",
                            }}
                        ></Box>
                    </>

                    <>
                        <div className="text-blue-700 font-black text-xl">
                            How does ALS work?
                        </div>
                        <div>
                            There are two major programs on ALS that are being
                            implemented by the Department of Education, through
                            the Bureau of Alternative Learning System (BALS).
                            One is the Basic Literacy Program and the other is
                            the Continuing Education Program – Accreditation and
                            Equivalency (A&E). Both programs are modular and
                            flexible. This means that learning can take place
                            anytime and any place, depending on the convenience
                            and availability of the learners.
                        </div>
                        <br />
                        <Box
                            sx={{
                                ...commonStyles,
                                borderColor: "primary.main",
                            }}
                        ></Box>
                    </>

                    <>
                        <div className="text-blue-700 font-black text-xl">
                            What is the difference between the Formal Education
                            System and the Alternative Learning System (ALS)
                            Non-formal Education?
                        </div>
                        <div>
                            Formal Education system is classroom-based, managed
                            by trained formal school teachers. ALS Non-formal
                            Education happens outside the classroom,
                            community-based, usually conducted at community
                            learning centers, barangay multi-purpose hall,
                            libraries or at home, managed by ALS learning
                            facilitators, such as mobile teachers, district ALS
                            Coordinators, instructional managers at an agreed
                            schedule and venue between the learners and
                            facilitators.
                        </div>
                        <br />
                        <Box
                            sx={{
                                ...commonStyles,
                                borderColor: "primary.main",
                            }}
                        ></Box>
                    </>
                </div>
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
        </StudentLayout>
    );
}
