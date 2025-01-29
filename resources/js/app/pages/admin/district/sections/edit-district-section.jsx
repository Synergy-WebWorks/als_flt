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
    get_district_thunk,
    store_district_thunk,
    update_district_thunk,
} from "../redux/district-thunk";
import { get_district_service } from "@/app/services/district-service";
import { useEffect } from "react";
import { Edit } from "@mui/icons-material";

export default function EditDistrictSection({ data }) {
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
            const result = await store.dispatch(update_district_thunk(form));
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
            <Button variant="outlined" onClick={handleClickOpen}>
                <Edit />
            </Button>
            <Dialog fullWidth open={open} onClose={handleClose}>
                <Toolbar className="flex items-center justify-end">
                    <Typography
                        sx={{ ml: 2, flex: 1 }}
                        variant="h6"
                        component="div"
                    >
                        Edit District
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
                    <TextField
                        value={form.name}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                [e.target.name]: e.target.value,
                            })
                        }
                        error={error?.name ? true : false}
                        helperText={error?.name ?? ""}
                        name="name"
                        type="text"
                        id="outlined-basic"
                        label="District Name"
                        variant="outlined"
                        className="w-full"
                    />
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
                        autoFocus
                        onClick={submit_form}
                    >
                        save
                    </Button>
                </Toolbar>
            </Dialog>
        </React.Fragment>
    );
}
