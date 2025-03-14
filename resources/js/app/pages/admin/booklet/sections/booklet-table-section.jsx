import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import UpdateSection from './update-section';
// import DeleteSection from './delete-section';
import { useSelector } from "react-redux";
import moment from "moment";
import { router } from "@inertiajs/react";
import { Button } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import BookletEditSection from "./booklet-edit-section";
import DeleteSection from "./delete-section";
// import { Visibility } from '@mui/icons-material';
// import { Button } from '@mui/material';
// import { router } from '@inertiajs/react';
// import AddEnrollmentSection from './add-enrollment-section';

export default function BookletTableSection() {
    const { booklets } = useSelector((state) => state.booklets);
    console.log("booklets", booklets);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <div className="font-bold">Booklet Name</div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold">Als Level</div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold">Created At</div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold">Action</div>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {booklets?.map((res, i) => {
                        const dob = moment(res.dob, "YYYY-MM-DD"); // Replace with actual date of birth
                        const age = moment().diff(dob, "years");
                        return (
                            <TableRow
                                key={i}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell>{res.title}</TableCell>
                                <TableCell>{res?.als_level ?? ""}</TableCell>
                                <TableCell>
                                    {moment(res.created_at).format("LLLL")}
                                </TableCell>
                                <TableCell>
                                    <div className="flex gap-2">
                                        <DeleteSection data={res} />
                                        <BookletEditSection datas={res} />
                                        <Button
                                            onClick={() =>
                                                router.visit(
                                                    `/administrator/booklet/${res.id}`,
                                                )
                                            }
                                            size="small"
                                            variant="outlined"
                                            color="success"
                                        >
                                            <Visibility />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
