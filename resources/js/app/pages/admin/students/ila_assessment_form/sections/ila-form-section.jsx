import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { get_user_login_thunk } from "@/app/redux/app-thunk";
import EditIlaFormComponents from "../components/edit-ila-form-components";

export default function ILAFormSection() {
    const dispatch = useDispatch();
    const { student } = useSelector((state) => state.students);
    const data = student?.score_sheet?.answers;
    const zeroScoreArray = data?.filter((item) => item.score == 0);
    const facilitator = student?.examiner?.schedule?.teacher?.name ?? "";

    useEffect(() => {
        dispatch(get_user_login_thunk());
    }, [dispatch]);
    
    return (
        <div className="flex flex-col py-3 mx-12">
            <div className="uppercase flex items-center justify-center text-xl font-black">
                Individual Learning Agreement
            </div>

            <div className="flex gap-3 items-center justify-between">
                <div>Name of Learner: {student?.name}</div>
                <div>Community Learning Center: ALS</div>
            </div>

            <div className="flex gap-3 items-center justify-between">
                <div>Level: {student?.score_sheet?.als_level}</div>
                <div>Name of Learning Facilitator: {facilitator}</div>
            </div>

            <div className="py-5">
                Direction: Write your learning goals, your learning activities
                or strategies in order to attain these goals, and the timeline.
            </div>

            <Box sx={{ border: 1 }}>
                <div className="flex">
                    <Box className="w-[28%]  flex flex-col items-center justify-center">
                        <div className="w-full font-bold text-lg text-center">
                            Learning Goals
                        </div>
                        <div className="w-full text-xs text-center">
                            (Kasanayang Gusto Kong Matutunan)
                        </div>
                    </Box>
                    <Box className="w-[18%] " sx={{ borderLeft: 1 }}>
                        <div className="w-full font-bold text-lg text-center">
                            Delivery Mode
                        </div>
                        <div className="w-full text-xs text-center">
                            Mga Pamamaraan sa Pagkatuto (Face to face,
                            Independent Learning, BRI, eLearning/Eskwela)
                        </div>
                    </Box>
                    <Box className="w-[18%] " sx={{ borderLeft: 1 }}>
                        <div className="w-full font-bold text-lg text-center">
                            Timeline
                        </div>
                        <div className="w-full text-xs text-center">
                            (Kailan mo ito gustong matutunan?)
                        </div>
                    </Box>
                    <Box className="w-[18%]" sx={{ borderLeft: 1 }}>
                        <Box className="w-full h-full flex flex-col items-center justify-center text-lg text-center">
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
                    <Box className="w-[18%] " sx={{ borderLeft: 1 }}>
                        <div className="w-full font-bold text-lg text-center">
                            Learning Facilitators
                        </div>
                        <div className="w-full text-xs text-center">
                            (Payo ng Learning Facilitator)
                        </div>
                    </Box>
                </div>
            </Box>

            {zeroScoreArray?.map((res, i) => (
                
                <Box
                    key={i}
                    sx={{ borderLeft: 1, borderRight: 1, borderBottom: 1 }}
                >
                    <div className="flex">
                        <Box className="w-[28%]  flex flex-col items-center justify-center">
                            <div className=" text-sm m-2">
                                {res.questionnaire.specification}
                            </div>
                        </Box>
                        <Box className="w-[18%] " sx={{ borderLeft: 1 }}>
                            <EditIlaFormComponents
                                column="delivery_mode"
                                data={res}
                            />
                        </Box>
                        <Box className="w-[18%]" sx={{ borderLeft: 1 }}>
                            <EditIlaFormComponents
                                column="timeline"
                                data={res}
                            />
                        </Box>
                        <Box className="w-[18%]" sx={{ borderLeft: 1 }}>
                            <Box className="flex items-center w-full h-full justify-center">
                                <Box
                                    sx={{ borderRight: 1 }}
                                    className="h-full w-[33.33%]"
                                >
                                    <EditIlaFormComponents
                                        column="achieved"
                                        data={res}
                                    />
                                </Box>
                                <Box
                                    sx={{ borderRight: 1 }}
                                    className="h-full w-[33.33%]"
                                >
                                    <EditIlaFormComponents
                                        column="not_achieved"
                                        data={res}
                                    />
                                </Box>
                                <Box className="w-[33.33%] h-full">
                                    <EditIlaFormComponents
                                        column="date_of_review"
                                        data={res}
                                    />
                                </Box>
                            </Box>
                        </Box>
                        <Box className="w-[18%] " sx={{ borderLeft: 1 }}>
                            <EditIlaFormComponents data={res} />
                        </Box>
                    </div>
                </Box>
            ))}
        </div>
    );
}
