import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Block, Delete } from "@mui/icons-material";
import store from "@/app/pages/store/store";
import { Alert, CircularProgress, Snackbar } from "@mui/material";
import { useState } from "react";

import { approved_account_service } from "@/app/services/user-service";
import { get_teachers_thunk } from "../redux/teachers-thunk";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    p: 4,
};

export default function IsApprovedSection({ data }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [notify, setNotify] = useState(false);
    const [loading, setLoading] = useState(false);

    async function approved_data(params) {
        setLoading(true);
        const result = await approved_account_service({
            ...data,
            isApproved: "true",
        });
        if (result.status == 200) {
            setOpen(false);
            await store.dispatch(get_teachers_thunk());
            setNotify(true);
            setOpen(false);
            setLoading(false);
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
                color="warning"
                onClick={() => setOpen(true)}
            >
                <Block />
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
                        Approve Teacher
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Are you sure you want to approve?
                    </Typography>
                    <div className="flex w-full pt-5 items-center justify-end">
                        <Button
                            color="primary"
                            onClick={approved_data}
                            disabled={loading}
                            variant="contained"
                            className=" w-full"
                        >
                            {loading ? (
                                <CircularProgress size={24} color="inherit" />
                            ) : (
                                "Approve"
                            )}
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
