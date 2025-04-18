import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Delete } from "@mui/icons-material";
import store from "@/app/pages/store/store";
import { Alert, CircularProgress, Snackbar } from "@mui/material";
import { useState } from "react";
import { delete_schedule_service } from "@/app/services/schedule-service";
import { get_schedule_thunk } from "../redux/schedule-thunk";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    p: 4,
};

export default function DeleteSection({ data }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [notify, setNotify] = useState(false);
    const [loading, setLoading] = useState(false);

    async function delete_data(params) {
        setLoading(true);
        const result = await delete_schedule_service(data.id);
        if (result.status == 200) {
            await store.dispatch(get_schedule_thunk());
            setNotify(true);
            setLoading(false);
            handleClose()
        } else {
            setLoading(false);
        }
    }
    return (
        <div>
            <Snackbar
                open={notify}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    Successfully Deleted!
                </Alert>
            </Snackbar>
            <Button
                size="small"
                variant="contained"
                color="error"
                onClick={() => setOpen(true)}
            >
                <Delete />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Delete Schedule
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Are you sure you want to delete?
                    </Typography>
                    <div className="flex w-full pt-5 items-center justify-end">
                        <Button
                            color="error"
                            onClick={delete_data}
                            disabled={loading}
                            variant="contained"
                            className=" w-full"
                        >
                            {loading ? (
                                <CircularProgress size={24} color="inherit" />
                            ) : (
                                "Delete"
                            )}
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
