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
// import { Visibility } from '@mui/icons-material';
// import { Button } from '@mui/material';
// import { router } from '@inertiajs/react';
// import AddEnrollmentSection from './add-enrollment-section';

export default function ExaminationSection() {
    const { examiners } = useSelector((state) => state.schedule);
    console.log("examiners", examiners);
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Reference Test ID</TableCell>
                        <TableCell>Teacher Assigned</TableCell>
                        <TableCell>Als Level</TableCell>
                        <TableCell>Start At</TableCell>
                        <TableCell>End At</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {examiners?.map((res, i) => {
                        const dob = moment(res?.dob, "YYYY-MM-DD"); // Replace with actual date of birth
                        const age = moment().diff(dob, "years");

                        function isOverdue(obj) {
                            const endDate = new Date(obj.end_at);
                            const now = new Date();
                            return endDate < now;
                        }
                        const over_due = isOverdue(res?.schedule ?? {});
                        console.log("over_due", res);
                        return (
                            <>
                                {res?.schedule?.teacher && res?.schedule && (
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
                                            {res.reference_id}
                                        </TableCell>
                                        <TableCell>
                                            {res?.schedule?.teacher?.name}
                                        </TableCell>
                                        <TableCell>
                                            {res?.schedule?.als_level ?? ""}
                                        </TableCell>
                                        <TableCell>
                                            {moment(
                                                res?.schedule?.start_at,
                                            ).format("LLLL")}
                                        </TableCell>
                                        <TableCell>
                                            {moment(
                                                res?.schedule?.end_at,
                                            ).format("LLLL")}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex gap-2">
                                                {/* {
                  !res.enrollment && <AddEnrollmentSection data={res}/>
                }
                 */}
                                                {/* <UpdateSection data={res} />
                <DeleteSection data={res} /> */}

                                                {res.score_sheet != null && (
                                                    <>
                                                        <a
                                                            target="_blank"
                                                            href={`/student/examination/ila_assessment_form/${res.examiner_id}/${res.schedule?.booklet_id}?examiner=${res?.schedule?.teacher?.name}&reference_id=${res.reference_id}`}
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
                                                            href={`/student/examination/score_sheet/${res.examiner_id}/${res.schedule?.booklet_id}?reference_id=${res.reference_id}`}
                                                        >
                                                            <Button
                                                                size="small"
                                                                variant="contained"
                                                                color="success"
                                                            >
                                                                <Checklist />
                                                            </Button>
                                                        </a>
                                                    </>
                                                )}
                                                {res.score_sheet == null && (
                                                    <div className="bg-red-500 text-center px-8 py-1.5 text-white rounded-md">
                                                        No Answer
                                                    </div>
                                                )}
                                                <Button
                                                    onClick={() =>
                                                        router.visit(
                                                            `/student/examination/${res.schedule?.booklet_id}?reference_id=${res.reference_id}`,
                                                        )
                                                    }
                                                    disabled={over_due}
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
        </TableContainer>
    );
}
