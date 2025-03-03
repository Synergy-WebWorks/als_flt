import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { get_user_login_thunk } from "@/app/redux/app-thunk";
import EditIlaFormComponents from "../components/edit-ila-form-components";
import { useState } from "react";
import { update_examiner_center_service } from "@/app/services/examiner-service";
import store from "@/app/pages/store/store";
import { get_score_sheets_by_id_thunk } from "../../redux/students-thunk";
import { Print } from "@mui/icons-material";

export default function ILAFormSection() {
    const dispatch = useDispatch();
    const { student, scoresheet } = useSelector((state) => state.students);
    const { user } = useSelector((state) => state.app);
    const data = student?.score_sheet?.answers;
    const [text, setText] = useState("");
    const zeroScoreArray = scoresheet?.answers?.filter(
        (item) => item.score == 0,
    );
    const [isEdit, setIsEdit] = useState(false);
    const params = new URLSearchParams(window.location.search);

    const student_id = window.location.pathname.split("/")[4];
    const booklet_id = window.location.pathname.split("/")[5];

    const examiner = params.get("examiner");
    const facilitator = examiner;
    useEffect(() => {
        dispatch(get_user_login_thunk());
    }, [dispatch]);

    useEffect(() => {
        setText(scoresheet?.examiner?.learning_center ?? "");
    }, [isEdit]);
    console.log("texttext", text);

    function double_tap(params) {
        if (user.user_type == "2") {
            setIsEdit(true);
        }
    }

    async function edit_ila_function(e) {
        if (user.user_type == "2" && e.key == "Enter") {
            try {
                await update_examiner_center_service({
                    id: scoresheet.examiner.id,
                    learning_center: text,
                });
                store.dispatch(
                    get_score_sheets_by_id_thunk(student_id, booklet_id),
                );
                setIsEdit(false);
            } catch (error) {
                setIsEdit(false);
            }
        }
    }

    return (
        <div className="flex flex-col py-3 mx-12">
            <div>
                <a 
                href={`/get_ila/${student_id}/${booklet_id}`}
                target="_blank">
                      <Print/>  Print
                </a>
            </div>
            <div className="uppercase flex items-center justify-center text-xl font-black">
                Individual Learning Agreement
            </div>

            <div className="flex gap-3 items-center justify-between">
                <div>Name of Learner: {scoresheet?.user?.name}</div>
                <div>Community Learning Center: ALS</div>
                {/* learning_center */}
            </div>

            <div className="flex gap-3 items-center justify-between">
                <div>Level: {scoresheet?.als_level}</div>
                <div className="flex gap-2">
                    <div>Name of Learning Facilitator:</div>
                    {isEdit ? (
                        <input
                            onKeyUp={edit_ila_function}
                            className="w-full h-full  "
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onBlur={() => setIsEdit(false)} // Exit edit mode when losing focus
                            autoFocus
                        />
                    ) : (
                        <div onDoubleClick={() => double_tap()}>
                            {scoresheet?.examiner?.learning_center ??
                                "No Learning Center"}
                        </div>
                    )}
                </div>
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

            {zeroScoreArray?.map((res, i) => {
                return (
                    <>
                        {res.questionnaire.specification && (
                            <Box
                                key={i}
                                sx={{
                                    borderLeft: 1,
                                    borderRight: 1,
                                    borderBottom: 1,
                                }}
                            >
                                <div className="flex">
                                    <Box className="w-[28%]  flex flex-col items-center justify-center">
                                        <div className=" text-sm m-2">
                                            {res.questionnaire.specification}
                                        </div>
                                    </Box>
                                    <Box
                                        className="w-[18%] "
                                        sx={{ borderLeft: 1 }}
                                    >
                                        <EditIlaFormComponents
                                            column="delivery_mode"
                                            data={res}
                                        />
                                    </Box>
                                    <Box
                                        className="w-[18%]"
                                        sx={{ borderLeft: 1 }}
                                    >
                                        <EditIlaFormComponents
                                            column="timeline"
                                            data={res}
                                        />
                                    </Box>
                                    <Box
                                        className="w-[18%]"
                                        sx={{ borderLeft: 1 }}
                                    >
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
                                    <Box
                                        className="w-[18%] "
                                        sx={{ borderLeft: 1 }}
                                    >
                                        <EditIlaFormComponents 
                                         column="facilitator"
                                        data={res} />
                                    </Box>
                                </div>
                            </Box>
                        )}
                    </>
                );
            })}
        </div>
    );
}
