import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "@inertiajs/react";
import { useDispatch, useSelector } from "react-redux";
import { setTimeLeft, setTimerActive } from "@/app/redux/app-slice";
import { useEffect } from "react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    p: 4,
};

export default function TimerSection() {
    const [open, setOpen] = React.useState(false);
    const {
        timeLeft,
        timerActive,
        loading: loadingData,
    } = useSelector((store) => store.app);

    const { scoresheet } = useSelector((state) => state.students);
    const dispatch = useDispatch();
    const handleOpen = () => setOpen(true);
    const { booklet } = useSelector((store) => store.booklets);
    const handleClose = () => setOpen(false);

    const path = window.location.pathname.split("/")[3];

    function start_timer() {
        const start = timeLeft == 0 ? 5400 : timeLeft;
        dispatch(setTimeLeft(start)); // Set timer for 1 hour and 30 minutes (5400 seconds)
        dispatch(setTimerActive(true));
        setOpen(false);
    }
    React.useEffect(() => {
        if (timerActive && timeLeft > 0) {
            const timer = setTimeout(() => {
                dispatch(setTimeLeft(parseInt(timeLeft) - 1)); // Dispatch a plain value
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, timerActive, dispatch]);

    useEffect(() => {
        console.log("bookletbookletssss", scoresheet?.id);
        console.log("bookletbookletssss", loadingData);
        if (scoresheet?.id == undefined && path !== undefined && !loadingData) {
            setOpen(true);
        } else {
            setOpen(false);
        }
        // if (scoresheet) {
        //     setOpen(false);
        // }  else if (scoresheet && path == undefined) {
        //     setOpen(false);
        // } else if (booklet.id !== undefined && scoresheet == null && path != undefined) {
        //     setOpen(true);
        // }else if(scoresheet == null){
        //     setOpen(true);
        // }
        // if (timeLeft != 0) {
        //     start_timer();
        // }
    }, [loadingData]);

    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="text-md font-black">
                        Would you like to start your examination?
                    </div>
                    <div className="flex w-full gap-5 mt-12">
                        <Link className="w-full" href="/student/examination">
                            <Button
                                className="w-full"
                                variant="outlined"
                                color="error"
                            >
                                Cancel
                            </Button>
                        </Link>
                        <Button
                            onClick={start_timer}
                            className="w-full"
                            variant="contained"
                            color="primary"
                        >
                            YES
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
