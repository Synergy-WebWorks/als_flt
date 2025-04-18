import { router, useForm } from "@inertiajs/react";
import { Button, Checkbox, CircularProgress, TextField } from "@mui/material";
import { useState } from "react";

export default function LoginPage() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const params = new URLSearchParams(window.location.search);

    const searchQuery = params.get("error");

    const submit = (e) => {
        e.preventDefault();
        post(route("login.auth"));
    };
    return (
        <>
            <div className="absolute inset-0 -z-10 items-center px-5 py-24 bg-blue-800"></div>
            <div className="relative items-center justify-center flex min-h-full flex-1 flex-col px-6 lg:px-8 ">
               
                <div className="mt-64 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-5 rounded-md">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm flex w-full items-center justify-center">
                    <img
                    alt="Your Company"
                    src="/images/login.png"
                    className="mx-auto h-96 md:w-1/2 sm:w-full xxs:w-full -mt-64  absolute"
                />
                        <div className="flex items-center justify-center flex-col">
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
                                {/* Educational Portal */}
                            </h2>
                            {searchQuery == "true" && (
                                <div className="my-3 text-red-600">
                                    You're account are not verify yet!
                                </div>
                            )}
                        </div>
                    </div>

                    <form onSubmit={submit} className="space-y-6">
                        <TextField
                            className="w-full z-20 bg-white"
                            onChange={(e) => setData("email", e.target.value)}
                            error={errors?.email ? true : false}
                            helperText={errors?.email ?? ""}
                            name="email"
                            type="text"
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                        />

                        <TextField
                            className="w-full"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            error={errors?.password ? true : false}
                            helperText={errors?.password ?? ""}
                            name="password"
                            type="password"
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                        />
                        <div className="block mt-4">
                            <label className="flex flex-row items-center justify-between">
                                <div>
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked,
                                            )
                                        }
                                    />
                                    <span className="ms-2 text-sm text-gray-600">
                                        Remember me
                                    </span>
                                </div>
                                <a
                                    onClick={() => router.visit("/register")}
                                    className="ms-2 text-sm text-gray-600 underline"
                                >
                                    Account Registration
                                </a>
                            </label>
                        </div>
                        <div>
                            <Button
                                type="submit"
                                disabled={processing}
                                variant="contained"
                                className="w-full"
                            >
                                {processing ? (
                                    <CircularProgress
                                        size={24}
                                        color="inherit"
                                    />
                                ) : (
                                    " Sign in"
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
