import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { TextField } from "@mui/material";
import { useState } from "react";
import store from "@/app/pages/store/store";
import {
    delete_district_thunk,
    get_district_thunk,
    store_district_thunk,
    update_district_thunk,
} from "../redux/district-thunk";
import { get_district_service } from "@/app/services/district-service";
import { useEffect } from "react";
import { Delete, Edit } from "@mui/icons-material";

export default function DeleteDistrictSection({ data }) {
    const [open, setOpen] = React.useState(false);
    const [form, setForm] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setForm({
            id: data.id,
            name: data.name,
        });
    }, []);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    async function submit_form(params) {
        try {
            setLoading(true);
            const result = await store.dispatch(delete_district_thunk(data.id));
            if (result.status == 200) {
                await store.dispatch(get_district_thunk());
                setLoading(false);
                setOpen(false);
            } else {
                setLoading(false);
                setError(result.response.data.errors);
            }
        } catch (error) {
            setLoading(false);
        }
    }
    return (
        <React.Fragment>
            <Button color="error" variant="outlined" onClick={handleClickOpen}>
                <Delete />
            </Button>
            <Dialog fullWidth open={open} onClose={handleClose}>
                <Toolbar className="flex items-center justify-end">
                    <Typography
                        sx={{ ml: 2, flex: 1 }}
                        variant="h6"
                        component="div"
                    >
                        Delete District
                    </Typography>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <Toolbar className="flex-col gap-3 flex">
                    Are you sure you want to delete the district?
                </Toolbar>
                <Toolbar>
                    <Typography
                        sx={{ ml: 2, flex: 1 }}
                        variant="h6"
                        component="div"
                    ></Typography>
                    <Button
                        disabled={loading}
                        variant="contained"
                        color="error"
                        autoFocus
                        onClick={submit_form}
                    >
                        Delete
                    </Button>
                </Toolbar>
            </Dialog>
        </React.Fragment>
    );
}
