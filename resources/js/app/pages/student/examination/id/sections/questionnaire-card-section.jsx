import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import {
    CardMedia,
    FormControl,
    FormControlLabel,
    FormLabel,
    Modal,
    Radio,
    RadioGroup,
    TextField,
} from "@mui/material";
import { useState } from "react";
import store from "@/app/pages/store/store";
import { store_answers_thunk } from "@/app/pages/admin/students/redux/students-thunk";
import moment from "moment";
import { get_user_login_thunk } from "@/app/redux/app-thunk";
import { setData, setTimeLeft } from "@/app/redux/app-slice";
import { router } from "@inertiajs/react";
import { useEffect } from "react";

export default function QuestionnaireCardSection({loadingData}) {
    const { scoresheet } = useSelector((state) => state.students);
    const { booklet } = useSelector((store) => store.booklets);
    const { user, data, timeLeft, timerActive } = useSelector(
        (store) => store.app,
    );
    const params = new URLSearchParams(window.location.search);
    const reference_id = params.get("reference_id");

    const [loading, setLoading] = useState(false);
    const booklet_id = window.location.pathname.split("/")[3];
    const dispatch = useDispatch();
    const HtmlRenderer = ({ htmlContent }) => (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOptionChange = (dataValue, value) => {
        const prevData = store.getState().app.data; // Get current state directly
        const answers = prevData?.answers || []; // Ensure it's always an array

        const existingAnswerIndex = answers.findIndex(
            (answer) => answer.questionnaire_id === dataValue.id,
        );

        let updatedAnswers;

        if (existingAnswerIndex !== -1) {
            // Update existing answer
            updatedAnswers = answers.map((answer, index) =>
                index === existingAnswerIndex
                    ? {
                          ...answer,
                          answer: value,
                          isCorrect: dataValue.answer_key === value,
                      }
                    : answer,
            );
        } else {
            // Add a new answer
            updatedAnswers = [
                ...answers,
                {
                    questionnaire_id: dataValue.id,
                    answer: value,
                    isCorrect: dataValue.answer_key === value, // Check correctness
                },
            ];
        }

        dispatch(setData({ ...prevData, answers: updatedAnswers })); // Dispatch as an object
    };

    useEffect(() => {
        if (timeLeft == 0 && timerActive) {
            submit_answer();
        }
    }, [timeLeft]);

    function submit_answer(params) {
        setLoading(true);
        try {
            store.dispatch(
                store_answers_thunk({
                    ...data,
                    user,
                    date: moment().format("LLLL"),
                    als_level: booklet.als_level,
                    booklet_id: booklet_id,
                    reference_id: reference_id,
                }),
            );
            dispatch(setTimeLeft(0));
            // store.dispatch(get_user_login_thunk());
            localStorage.clear();
            window.location.href = "/student/examination";
            setOpen(false);
            setLoading(false);
        } catch (error) {
            setOpen(false);
            setLoading(false);
        }
    }
    console.log("datasssdadadkjs", scoresheet?.answers);

    return (
        <div className="flex flex-col gap-5">
            {booklet.examinations?.map((res, i) => {
                console.log("dawdawdwa", res);
                return (
                    <Card key={i} sx={{ minWidth: 275 }}>
                        <div className="p-5 font-black text-xl">
                            {res.instruction}
                        </div>
                        <CardContent>
                            <Typography variant="body2">
                                <div className="flex gap-2 flex-col">
                                    <div className="text-2xl font-black">
                                        {res.title}
                                    </div>
                                    <div className="text-xl">
                                        {res.sub_title}
                                    </div>
                                </div>
                            </Typography>
                        </CardContent>

                        {res.question.map((ress, i) => {
                            let find_answer = {};
                            if (scoresheet?.answers && ress.id) {
                                find_answer = scoresheet?.answers.find(
                                    (answer) =>
                                        answer.questionnaire_id == ress.id,
                                );
                            }
                            return (
                                <Box
                                    sx={{
                                        borderBottom: 2,
                                        borderColor: "primary.main",
                                    }}
                                >
                                    <div className="px-3 mt-6" key={i}>
                                        <div className="flex gap-3 ">
                                            <div>{ress.item_number}.</div>
                                            <div className="-mt-4">
                                                <HtmlRenderer
                                                    htmlContent={ress.question}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-col items-center justify-center">
                                            <div className="flex w-1/2 items-center justify-center">
                                                {ress?.image_header && (
                                                    <CardMedia
                                                        component="img"
                                                        height="full"
                                                        width="full"
                                                        className="w-full flex"
                                                        image={
                                                            ress?.image_header
                                                        }
                                                        alt="Your Image Description"
                                                    />
                                                )}
                                            </div>
                                            <div className="flex items-center justify-center">
                                                {ress?.image_a && (
                                                    <CardMedia
                                                        component="img"
                                                        height="full"
                                                        width="full"
                                                        className="w-full flex"
                                                        image={ress?.image_a}
                                                        alt="Your Image Description"
                                                    />
                                                )}
                                                {/* {res.a} */}
                                            </div>
                                        </div>

                                        <CardActions>
                                            <div className="flex items-start justify-start w-full px-3">
                                                {ress.isEssay == "true" && (
                                                    <>
                                                        <TextField
                                                            onChange={(e) =>
                                                                handleOptionChange(
                                                                    ress,
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                            disabled={
                                                                find_answer?.answer
                                                                    ? true
                                                                    : false
                                                            }
                                                            value={
                                                                find_answer?.answer
                                                            }
                                                            multiline
                                                            rows={3}
                                                            name="answer"
                                                            type="text"
                                                            id="outlined-basic"
                                                            label="Write Here..."
                                                            variant="outlined"
                                                            className="w-full"
                                                        />
                                                    </>
                                                )}
                                                {ress.isEssay != "true" && (
                                                    <FormControl>
                                                        <RadioGroup
                                                            onChange={(e) =>
                                                                handleOptionChange(
                                                                    ress,
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                            row
                                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                                            name="answer_key"
                                                        >
                                                            <FormControlLabel
                                                                value="A"
                                                                control={
                                                                    <Radio />
                                                                }
                                                                label="A"
                                                                checked={
                                                                    find_answer?.answer ==
                                                                    "A"
                                                                        ? true
                                                                        : undefined
                                                                }
                                                                disabled={
                                                                    find_answer?.answer ==
                                                                    "A"
                                                                        ? true
                                                                        : false
                                                                }
                                                            />{" "}
                                                            <FormControlLabel
                                                                value="B"
                                                                control={
                                                                    <Radio />
                                                                }
                                                                label="B"
                                                                checked={
                                                                    find_answer?.answer ==
                                                                    "B"
                                                                        ? true
                                                                        : undefined
                                                                }
                                                                disabled={
                                                                    find_answer?.answer ==
                                                                    "B"
                                                                        ? true
                                                                        : false
                                                                }
                                                            />
                                                            <FormControlLabel
                                                                value="C"
                                                                control={
                                                                    <Radio />
                                                                }
                                                                label="C"
                                                                checked={
                                                                    find_answer?.answer ==
                                                                    "C"
                                                                        ? true
                                                                        : undefined
                                                                }
                                                                disabled={
                                                                    find_answer?.answer ==
                                                                    "C"
                                                                        ? true
                                                                        : false
                                                                }
                                                            />
                                                            <FormControlLabel
                                                                value="D"
                                                                control={
                                                                    <Radio />
                                                                }
                                                                label="D"
                                                                checked={
                                                                    find_answer?.answer ==
                                                                    "D"
                                                                        ? true
                                                                        : undefined
                                                                }
                                                                disabled={
                                                                    find_answer?.answer ==
                                                                    "D"
                                                                        ? true
                                                                        : false
                                                                }
                                                            />
                                                        </RadioGroup>
                                                    </FormControl>
                                                )}
                                            </div>
                                        </CardActions>
                                    </div>
                                </Box>
                            );
                        })}
                    </Card>
                );
            })}

            {!scoresheet && (
                <Button onClick={handleOpen} variant="contained">
                    SUBMIT ANSWER
                </Button>
            )}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        p: 4,
                    }}
                >
                    <Typography id="modal-modal-description">
                        Are you sure you want to submit your answer?
                    </Typography>
                    <div className="w-full flex gap-3 mt-12">
                        <Button
                            onClick={handleClose}
                            variant="outlined"
                            className="w-full"
                            color="error"
                        >
                            Cancel
                        </Button>
                        <Button
                            disabled={loading}
                            onClick={submit_answer}
                            variant="contained"
                            className="w-full"
                            color="primary"
                        >
                            Submit
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
