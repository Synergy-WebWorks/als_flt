import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import {
    Alert,
    CircularProgress,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    Snackbar,
    TextField,
} from "@mui/material";
import { useState } from "react";
import { Edit } from "@mui/icons-material";
import { useEffect } from "react";
import store from "@/app/pages/store/store";
import { useSelector } from "react-redux";
import {
    get_students_thunk,
    update_students_thunk,
} from "../redux/students-thunk";

export default function UpdateSection({ datas }) {
    const [open, setOpen] = React.useState(false);
    const [form, setForm] = useState({});
    const [error, setError] = useState({});
    const [notify, setNotify] = useState(false);
    const [loading, setLoading] = useState(false);
    const { districts } = useSelector((state) => state.districts);
    const [data, setData] = useState({});
    useEffect(() => {
        setData(datas);
    }, []);
    console.log("datadata", data);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    async function submitForm(params) {
        setLoading(true);
        const result = await store.dispatch(update_students_thunk(data));
        if (result.status == 200) {
            await store.dispatch(get_students_thunk());
            setNotify(true);
            setError({});
            setLoading(false);
        } else {
            setLoading(false);
            setError(result.response.data.errors);
        }
    }
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setNotify(false);
        setOpen(false);
    };

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
                    Successfully Updated!
                </Alert>
            </Snackbar>
            <Button
                size="small"
                variant="contained"
                onClick={toggleDrawer(true)}
            >
                <Edit />
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box className="w-[500px] h-full flex" role="presentation">
                    <div className="pt-20 px-3 w-full flex flex-col items-center justify-between pb-5">
                        <div className="flex flex-col gap-3  w-full">
                            <div className="text-2xl font-black">
                                Edit Student
                            </div>

                            <form onSubmit={submitForm}>
                                <div className="flex flex-col gap-4 mt-4">
                                    <TextField
                                        value={data?.name}
                                        className="w-full"
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                [e.target.name]: e.target.value,
                                            })
                                        }
                                        error={error?.name ? true : false}
                                        helperText={error?.name ?? ""}
                                        name="name"
                                        type="text"
                                        id="outlined-basic"
                                        label="Name"
                                        variant="outlined"
                                    />
                                    <TextField
                                        value={data?.email}
                                        className="w-full"
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                [e.target.name]: e.target.value,
                                            })
                                        }
                                        error={error?.email ? true : false}
                                        helperText={error?.email ?? ""}
                                        name="email"
                                        type="email"
                                        id="outlined-basic"
                                        label="Email"
                                        variant="outlined"
                                    />
                                    <TextField
                                        value={data.mobile}
                                        className="w-full"
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                [e.target.name]: e.target.value,
                                            })
                                        }
                                        error={error.mobile ? true : false}
                                        helperText={error.mobile ?? ""}
                                        name="mobile"
                                        type="number"
                                        id="outlined-basic"
                                        label="Mobile"
                                        variant="outlined"
                                    />
                                    <TextField
                                        value={data?.dob}
                                        className="w-full"
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                [e.target.name]: e.target.value,
                                            })
                                        }
                                        error={error?.dob ? true : false}
                                        helperText={error?.dob ?? ""}
                                        name="dob"
                                        type="date"
                                        id="outlined-basic"
                                        label=""
                                        variant="outlined"
                                    />

                                    <TextField
                                        value={data?.password}
                                        className="w-full"
                                        onChange={(e) =>
                                            setData({
                                                ...data,
                                                [e.target.name]: e.target.value,
                                            })
                                        }
                                        error={error?.password ? true : false}
                                        helperText={error?.password ?? ""}
                                        name="password"
                                        type="password"
                                        id="outlined-basic"
                                        label="Password"
                                        variant="outlined"
                                    />
                                </div>
                            </form>
                        </div>
                        <Button
                            onClick={submitForm}
                            disabled={loading}
                            variant="contained"
                            className=" w-full"
                        >
                            {loading ? (
                                <CircularProgress size={24} color="inherit" />
                            ) : (
                                "Submit"
                            )}
                        </Button>
                    </div>
                </Box>
            </Drawer>
        </div>
    );
}
