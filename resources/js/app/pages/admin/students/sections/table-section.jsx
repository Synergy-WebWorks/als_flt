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
// import { Visibility } from '@mui/icons-material';
import { Button } from "@mui/material";
import { router } from "@inertiajs/react";
import { Checklist, ListAlt } from "@mui/icons-material";
import DeleteSection from "./delete-section";
import UpdateSection from "./update-section";
import IsApprovedSection from "./is-approved-section";
import PaginationSection from "./pagination-section";
// import { router } from '@inertiajs/react';
// import AddEnrollmentSection from './add-enrollment-section';

export default function TableSection() {
    const { students } = useSelector((state) => state.students);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            {" "}
                            <div className="font-bold">Fullname</div>
                        </TableCell>
                        <TableCell>
                            {" "}
                            <div className="font-bold">Email</div>
                        </TableCell>
                        <TableCell>
                            {" "}
                            <div className="font-bold">Date of Birth</div>
                        </TableCell>
                        <TableCell>
                            {" "}
                            <div className="font-bold">Age</div>
                        </TableCell>
                        <TableCell>
                            {" "}
                            <div className="font-bold">Phone #</div>
                        </TableCell>
                        <TableCell>
                            {" "}
                            <div className="font-bold">Action</div>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {students?.data.map((res, i) => {
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
                                <TableCell>{res.name}</TableCell>
                                <TableCell>{res.email}</TableCell>
                                <TableCell>{moment(res.dob).format('LL') ?? ""}</TableCell>
                                <TableCell>{age ?? ""}</TableCell>
                                <TableCell>{res?.mobile ?? ""}</TableCell>
                                {/* <TableCell>{age}</TableCell> */}
                                {/* <TableCell>{res.address}</TableCell> */}
                                <TableCell>
                                    <div className="flex gap-2">
                                        {/* {
                      !res.enrollment && <AddEnrollmentSection data={res}/>
                    }
                     */}
                                        <UpdateSection datas={res} />
                                        <DeleteSection data={res} />
                                        {/* <a
                                            target="_blank"
                                            href={`/administrator/students/ila_assessment_form/${res.id}`}
                                        >
                                            <Button
                                                size="small"
                                                variant="contained"
                                                color="primary"
                                            >
                                                <ListAlt />
                                            </Button>
                                        </a>
                                        <a
                                            target="_blank"
                                            href={`/administrator/students/score_sheet/${res.id}`}
                                        >
                                            <Button
                                                size="small"
                                                variant="contained"
                                                color="success"
                                            >
                                                <Checklist />
                                            </Button>
                                        </a> */}
                                        {res.isApproved !== "true" && (
                                            <IsApprovedSection data={res} />
                                        )}
                                    </div>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            
          <PaginationSection />
        </TableContainer>
    );
}
