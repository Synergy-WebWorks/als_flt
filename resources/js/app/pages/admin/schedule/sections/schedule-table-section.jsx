import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import moment from "moment";
import { router } from "@inertiajs/react";
import { Button, Pagination } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import PaginationSection from "./pagination-section";
import DeleteSection from "./delete-section";

export default function ScheduleTableSection() {
    const { schedules } = useSelector((state) => state.schedule);
    console.log("schedules", schedules);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <div className="font-bold">Reference Test ID</div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold">Teacher Assigned</div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold">Als Level</div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold">Start At</div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold">End At</div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold">Action</div>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {schedules?.data?.map((res, i) => {
                        const dob = moment(res?.dob, "YYYY-MM-DD"); // Replace with actual date of birth
                        const age = moment().diff(dob, "years");
                        return (
                            <>
                                {res?.user && (
                                    <TableRow
                                        key={i}
                                        sx={{
                                            "&:last-child td, &:last-child th":
                                                { border: 0 },
                                        }}
                                    >
                                        <TableCell>{res?.unique_id}</TableCell>
                                        <TableCell>{res?.user?.name}</TableCell>
                                        <TableCell>
                                            {res?.als_level ?? ""}
                                        </TableCell>
                                        <TableCell>
                                            {moment(res?.start_at).format(
                                                "LLLL",
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            {moment(res?.end_at).format("LLLL")}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex gap-2">
                                                <DeleteSection data={res} />
                                                {/* {
                  !res?.enrollment && <AddEnrollmentSection data={res}/>
                }
                 */}
                                                {/* <UpdateSection data={res} />
                <DeleteSection data={res} /> */}
                                                <Button
                                                    onClick={() =>
                                                        router.visit(
                                                            `/administrator/schedule/${res?.unique_id}`,
                                                        )
                                                    }
                                                    size="small"
                                                    variant="contained"
                                                    color="success"
                                                >
                                                    <Visibility />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </>
                        );
                    })}
                </TableBody>
            </Table>
            <br />
            <div className="p-3 flex w-full items-center justify-end">
                <PaginationSection />
            </div>
        </TableContainer>
    );
}
