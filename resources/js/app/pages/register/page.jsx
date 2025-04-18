import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import moment from "moment";
import Swal from "sweetalert2";
import { create_account_service } from "@/app/services/user-service";
import { useState } from "react";
import { useEffect } from "react";

export default function Register() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
        user_type: "3",
        dob: moment().format("d-m-Y"),
        password_confirmation: "",
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const submit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const res = await create_account_service(data);

            if (res.status == 200) {
                Swal.fire({
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500,
                });
                setData({
                    name: "",
                    email: "",
                    password: "",
                    mobile: "",
                    user_type: "",
                    dob: moment().format("d-m-Y"),
                    password_confirmation: "",
                });
            } else {
                setErrors(res.response.data.errors);
            }

            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="flex h-screen flex-1">
                <div className="relative hidden w-0 flex-1 lg:block">
                    {/* <img
              alt=""
              src="images/registration.gif"
              className="absolute inset-0 size-full object-cover"
            /> */}
                    <lottie-player
                        src="/images/register.json"
                        background="transparent"
                        speed="1"
                        // style={{ width: "200px", height: "200px" }}
                        className="w-full h-full"
                        loop
                        autoPlay
                    ></lottie-player>
                </div>
                <div className="overflow-auto flex flex-1 flex-col justify-center bg-gray-200 px-4 sm:px-6 lg:flex-none lg:px-20">
                    <div className="mx-auto w-full  lg:w-[500px]">
                        <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8 ">
                            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm rounded-md">
                                <div className="sm:mx-auto sm:w-full sm:max-w-sm flex w-full items-center justify-center">
                                    <div className="flex items-center justify-center flex-col">
                                        {/* <img
                                    alt="Your Company"
                                    src="/images/logo.png"
                                    className="mx-auto h-32 w-32 "
                                /> */}
                                        <h2 className="font-black text-center text-blue-700 text-4xl  m-0 leading-9 tracking-tight ">
                                            <b>REGISTER</b>
                                        </h2>
                                    </div>
                                </div>
                                <form onSubmit={submit} className="w-full ">
                                    <div className="flex flex-col gap-4 mt-4">
                                        <TextField
                                            value={data.name}
                                            className="w-full"
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    [e.target.name]:
                                                        e.target.value,
                                                })
                                            }
                                            error={errors.name ? true : false}
                                            helperText={errors.name ?? ""}
                                            name="name"
                                            type="text"
                                            id="outlined-basic"
                                            label="Fullname"
                                            variant="outlined"
                                        />
                                        <TextField
                                            value={data.email}
                                            className="w-full"
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    [e.target.name]:
                                                        e.target.value,
                                                })
                                            }
                                            error={errors.email ? true : false}
                                            helperText={errors.email ?? ""}
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
                                                    [e.target.name]:
                                                        e.target.value,
                                                })
                                            }
                                            error={errors.mobile ? true : false}
                                            helperText={errors.mobile ?? ""}
                                            name="mobile"
                                            type="number"
                                            id="outlined-basic"
                                            label="Mobile"
                                            variant="outlined"
                                        />
                                        <TextField
                                            value={data.dob}
                                            className="w-full"
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    [e.target.name]:
                                                        e.target.value,
                                                })
                                            }
                                            error={errors.dob ? true : false}
                                            helperText={errors.dob ?? ""}
                                            name="dob"
                                            type="date"
                                            id="outlined-basic"
                                            label="Date of Birth"
                                            variant="outlined"
                                        />

                                        {/* <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">
                                                Account Type
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={data?.user_type ?? ""}
                                                name="user_type"
                                                label="Account Type"
                                                onChange={(e) =>
                                                    setData({
                                                        ...data,
                                                        [e.target.name]:
                                                            e.target.value,
                                                    })
                                                }
                                            >
                                                <MenuItem value={2}>
                                                    Teacher
                                                </MenuItem>
                                                <MenuItem value={3}>
                                                    Student
                                                </MenuItem>
                                            </Select>
                                        </FormControl> */}
                                        <TextField
                                            value={data.password}
                                            className="w-full"
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    [e.target.name]:
                                                        e.target.value,
                                                })
                                            }
                                            error={
                                                errors.password ? true : false
                                            }
                                            helperText={errors.password ?? ""}
                                            name="password"
                                            type="password"
                                            id="outlined-basic"
                                            label="Password"
                                            variant="outlined"
                                        />
                                        <TextField
                                            value={data.password_confirmation}
                                            className="w-full"
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    [e.target.name]:
                                                        e.target.value,
                                                })
                                            }
                                            error={
                                                errors.password_confirmation
                                                    ? true
                                                    : false
                                            }
                                            helperText={
                                                errors.password_confirmation ??
                                                ""
                                            }
                                            name="password_confirmation"
                                            type="password"
                                            id="outlined-basic"
                                            label="Confirm Password"
                                            variant="outlined"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        <Link
                                            href={route("login")}
                                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Already registered?
                                        </Link>

                                        <PrimaryButton
                                            className="ms-4"
                                            disabled={loading}
                                        >
                                            Register
                                        </PrimaryButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
