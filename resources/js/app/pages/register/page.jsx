import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { FormControl, MenuItem, Select, TextField } from "@mui/material";
import moment from "moment";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        mobile: "",
        user_type:'',
        dob: moment().format('d-m-Y'),
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

    post(route("register"), {
        onFinish: () => {
            reset("password", "password_confirmation")
  
            router.visit('/')
        },
    });
    };
    return (
      <>
      
        <div className="flex min-h-screen flex-1">
      
          <div className="relative hidden w-0 flex-1 lg:block">
            <img
              alt=""
              src="images/registration.gif"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20">
            <div className="mx-auto w-full  lg:w-[500px]">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8 ">
                    <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm bg-white rounded-md">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex w-full items-center justify-center">
                            <div className="flex items-center justify-center flex-col">
                                {/* <img
                                    alt="Your Company"
                                    src="/images/logo.png"
                                    className="mx-auto h-32 w-32 "
                                /> */}
                                <h2 className=" text-center text-2xl font-bold m-0 leading-9 tracking-tight ">
                                   Registration Portal
                                </h2>
                            </div>
                        </div>
                        <form onSubmit={submit} className="w-full">
                            <div className="flex flex-col gap-4 mt-4">
                                <TextField
                                    value={data.name}
                                    className="w-full"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    error={errors.name ? true : false}
                                    helperText={errors.name ?? ""}
                                    name="name"
                                    type="text"
                                    id="outlined-basic"
                                    label="Name"
                                    variant="outlined"
                                />
                                <TextField
                                    value={data.email}
                                    className="w-full"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
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
                                        setData("mobile", e.target.value)
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
                                        setData("dob", e.target.value)
                                    }
                                    error={errors.dob ? true : false}
                                    helperText={errors.dob ?? ""}
                                    name="dob"
                                    type="date"
                                    id="outlined-basic"
                                    label="Date of Birth"
                                    variant="outlined"
                                />

                                <FormControl fullWidth>
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
                                            setData("user_type", e.target.value)
                                        }
                                    >
                                        <MenuItem value={2}>Teacher</MenuItem>
                                        <MenuItem value={3}>Student</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    value={data.password}
                                    className="w-full"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    error={errors.password ? true : false}
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
                                        setData(
                                            "password_confirmation",
                                            e.target.value,
                                        )
                                    }
                                    error={
                                        errors.password_confirmation
                                            ? true
                                            : false
                                    }
                                    helperText={
                                        errors.password_confirmation ?? ""
                                    }
                                    name="password_confirmation"
                                    type="password"
                                    id="outlined-basic"
                                    label="Confirm Password"
                                    variant="outlined"
                                />
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <Link
                                    href={route("login")}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Already registered?
                                </Link>

                                <PrimaryButton
                                    className="ms-4"
                                    disabled={processing}
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
    )
  }
  