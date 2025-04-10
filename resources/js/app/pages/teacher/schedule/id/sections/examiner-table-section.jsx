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
// import DeleteExaminerSection from './delete-examiner-section';
// import { Visibility } from '@mui/icons-material';
// import { Button } from '@mui/material';
// import { router } from '@inertiajs/react';
// import AddEnrollmentSection from './add-enrollment-section';

export default function ExaminerTableSection() {
    const { examiners } = useSelector((state) => state.schedule);

    console.log("examiners", examiners.response);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <div className="font-bold">Reference Test ID</div>
                        </TableCell>
                        <TableCell>
                            <div className="font-bold">Examinee</div>
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
                            const dob = moment(res?.dob, "YYYY-MM-DD"); // Replace with actual date of birth
                            const age = moment().diff(dob, "years");
                            console.log("res", res);
                            return (
                                <>
                                    {res.user && (
                                        <TableRow
                                            key={i}
                                            sx={{
                                                "&:last-child td, &:last-child th":
                                                    {
                                                        border: 0,
                                                    },
                                            }}
                                        >
                                            <TableCell>
                                                {res?.reference_id}
                                            </TableCell>
                                            <TableCell>
                                                {res?.user?.name}
                                            </TableCell>
                                            <TableCell>
                                                {res?.user?.mobile ?? ""}
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex gap-2">
                                                    {res.score_sheet !=
                                                        null && (
                                                        <>
                                                            <Button
                                                                target="_blank"
                                                                href={`/teacher/schedule/ila_assessment_form/${res?.examiner_id}/${res?.schedule?.booklet_id}?examiner=${res?.schedule?.teacher?.name}&reference_id=${res?.reference_id}`}
                                                                size="small"
                                                                variant="contained"
                                                                color="primary"
                                                            >
                                                                <ListAlt />
                                                            </Button>
                                                            <Button
                                                                target="_blank"
                                                                href={`/teacher/schedule/score_sheet/${res?.examiner_id}/${res?.schedule?.booklet_id}?reference_id=${res?.reference_id}`}
                                                                size="small"
                                                                variant="contained"
                                                                color="success"
                                                            >
                                                                <Checklist />
                                                            </Button>
                                                        </>
                                                    )}
                                                    {res.score_sheet ==
                                                        null && (
                                                        <div className="bg-red-500 px-2.5 py-1.5 text-white rounded-md">
                                                            No Answer Sheets
                                                        </div>
                                                    )}
                                                    {/* <DeleteExaminerSection data={res}/> */}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </>
                            );
                        })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
