import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import store from "@/app/pages/store/store";
import { get_user_login_thunk } from "@/app/redux/app-thunk";

export default function ILAFormSection() {
    const { student } = useSelector((store) => store.students);
    const data = student?.score_sheet?.answers;
    const zeroScoreArray = data?.filter((item) => item.score == 0);
    console.log("data", student);

    useEffect(() => {
        store.dispatch(get_user_login_thunk());
    }, []);
    return (
        <div className="flex flex-col py-3 mx-12">
            <div className="uppercase flex items-center justify-center text-xl font-black">
                Individual Learning agreement
            </div>
            <div className="flex gap-3 items-center justify-between">
                <div>Name of Learner: {student?.name}</div>
                <div>
                    Community Learning Center:ALS
                    {/* {student?.examiner?.schedule?.learning_center?.name} */}
                </div>
            </div>
            <div className="flex gap-3 items-center justify-between">
                <div>Level: {student?.score_sheet?.als_level}</div>
                <div>
                    Name of Learning Facilatator:{" "}
                    {student?.examiner?.schedule?.teacher?.name}
                </div>
            </div>
            <div className="py-5">
                Direction: Write your learning goals, your learning activities
                or strategies in order to attain these goals, and the timeline.
            </div>
            <Box sx={{ border: 1 }}>
                <div className="flex">
                    <Box className="w-[28%] flex items-center justify-center flex-col">
                        <div className="w-full flex items-center justify-center font-bold text-lg text-center">
                            Learning Goals
                        </div>
                        <div className="w-full flex items-center justify-center text-xs">
                            (Kasanayang Gusto Kong Matutunan)
                        </div>
                    </Box>
                    <Box className="w-[18%] px-2" sx={{ borderLeft: 1 }}>
                        <div className="w-full flex items-center justify-center font-bold text-lg text-center">
                            Delivery Mode
                        </div>
                        <div className="w-full flex items-center justify-center text-xs ">
                            Mga Pamamaraan sa Pagkatuto (Face to face,
                            Independent Learning, BRI, eLearning/Eskwela)
                        </div>
                    </Box>
                    <Box className="w-[18%] px-2" sx={{ borderLeft: 1 }}>
                        <div className="w-full flex items-center justify-center font-bold text-lg text-center">
                            Timeline
                        </div>
                        <div className="w-full flex items-center justify-center text-xs ">
                            (Kailan mo ito gustong matutunan?)
                        </div>
                    </Box>
                    <Box className="w-[18%] " sx={{ borderLeft: 1 }}>
                        <Box className="w-full h-full flex-col flex items-center justify-center text-lg text-center">
                            <div className="font-bold">
                                Review of Learning Goals
                            </div>
                            <Box
                                sx={{ borderTop: 1 }}
                                className="flex items-center w-full h-full justify-center"
                            >
                                <Box
                                    sx={{ borderRight: 1 }}
                                    className="h-full w-[33.33%] text-xs"
                                >
                                    Achieved (Nakamtan)
                                </Box>
                                <Box
                                    sx={{ borderRight: 1 }}
                                    className="h-full w-[33.33%] text-xs"
                                >
                                    Not Achieved (Hindi Nakamtan)
                                </Box>
                                <Box className="w-[33.33%] h-full text-xs">
                                    Date of Review (Petsa ng pagsusuri)
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="w-[18%] px-2" sx={{ borderLeft: 1 }}>
                        <div className="w-full flex items-center justify-center font-bold text-lg text-center">
                            Learning Facilitators
                        </div>
                        <div className="w-full flex items-center justify-center text-xs ">
                            (Payo ng Learning Facilatator)
                        </div>
                    </Box>
                </div>
            </Box>
            {zeroScoreArray?.map((res, i) => {
                return (
                    <Box
                        sx={{ borderLeft: 1, borderRight: 1, borderBottom: 1 }}
                    >
                        <div className="flex">
                            <Box className="w-[28%] flex items-center justify-center flex-col">
                                <div className="p-2 text-sm">
                                    {res.questionnaire.specification}
                                </div>
                            </Box>
                            <Box
                                className="w-[18%] px-2"
                                sx={{ borderLeft: 1 }}
                            >
                                <div className="w-full h-full flex items-center justify-center font-bold text-lg text-center">
                                    Face to Face
                                </div>
                            </Box>
                            <Box
                                className="w-[18%] px-2"
                                sx={{ borderLeft: 1 }}
                            >
                                <div className="w-full flex items-center justify-center font-bold text-lg text-center">
                                    {/* ss */}
                                </div>
                            </Box>
                            <Box className="w-[18%] " sx={{ borderLeft: 1 }}>
                                <Box className="flex items-center w-full h-full justify-center">
                                    <Box
                                        sx={{ borderRight: 1 }}
                                        className="h-full w-[33.33%]"
                                    >
                                        {/* ss */}
                                    </Box>
                                    <Box
                                        sx={{ borderRight: 1 }}
                                        className="h-full w-[33.33%]"
                                    >
                                        {/* ss */}
                                    </Box>
                                    <Box className="w-[33.33%] h-full">
                                        {/* ss */}
                                    </Box>
                                </Box>
                            </Box>
                            <Box
                                className="w-[18%] px-2"
                                sx={{ borderLeft: 1 }}
                            >
                                <div className="w-full flex items-center justify-center font-bold text-lg text-center">
                                    {/* Learning Facilitators */}
                                </div>
                            </Box>
                        </div>
                    </Box>
                );
            })}
        </div>
    );
}
