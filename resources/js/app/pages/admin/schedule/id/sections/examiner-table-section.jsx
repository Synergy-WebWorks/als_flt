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
import { Checklist, ListAlt, Visibility } from "@mui/icons-material";
import DeleteExaminerSection from "./delete-examiner-section";
// import { Visibility } from '@mui/icons-material';
// import { Button } from '@mui/material';
// import { router } from '@inertiajs/react';
// import AddEnrollmentSection from './add-enrollment-section';

export default function ExaminerTableSection() {
    const { examiners } = useSelector((state) => state.schedule);
    
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <div className="font-bold">Reference Test ID</div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold">Examiner</div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold">Mobile</div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold">Action</div>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {examiners?.response &&
                        examiners?.response?.map((res, i) => {
                            const dob = moment(res.dob, "YYYY-MM-DD"); // Replace with actual date of birth
                            const age = moment().diff(dob, "years");
                            console.log('resresres',res)
                            return (
                                <TableRow
                                    key={i}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell>{res.reference_id}</TableCell>
                                    <TableCell>{res.user.name}</TableCell>
                                    <TableCell>
                                        {res?.user?.mobile ?? ""}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex gap-2">
                                            <a
                                                target="_blank"
                                                href={`/administrator/students/ila_assessment_form/${res.examiner_id}/${res.schedule.booklet_id}?examiner=${res?.schedule?.teacher?.name}`}
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
                                                href={`/administrator/students/score_sheet/${res.examiner_id}/${res.schedule.booklet_id}`}
                                            >
                                                <Button
                                                    size="small"
                                                    variant="contained"
                                                    color="success"
                                                >
                                                    <Checklist />
                                                </Button>
                                            </a>
                                            {/* <Button
                                            onClick={() => router.visit(`/administrator/schedule/${res.id}`)}
                                            size='small'
                                            variant='contained'
                                            color='success'>
                                            <Visibility />
                                        </Button> */}
                                            <DeleteExaminerSection data={res} />
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
