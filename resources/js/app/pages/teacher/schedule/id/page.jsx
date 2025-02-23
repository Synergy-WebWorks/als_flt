import { get_examiner_by_id_thunk } from "@/app/pages/admin/schedule/redux/schedule-thunk";
import store from "@/app/pages/store/store";
import React from "react";
import { useEffect } from "react";
import InstructorLayout from "../../layout";
import ExaminerTableSection from "./sections/examiner-table-section";
import CreateExaminerSection from "@/app/pages/admin/schedule/id/sections/create-examiner-section";
import { get_students_thunk } from "@/app/pages/admin/students/redux/students-thunk";

export default function ScheduleIDPage() {
    useEffect(() => {
        store.dispatch(
            get_examiner_by_id_thunk(window.location.pathname.split("/")[3]),
        );

        store.dispatch(get_students_thunk());
    }, []);
    return (
        <InstructorLayout>
            <div className="flex gap-4">
                <div className="w-1/3">
                    <CreateExaminerSection />
                </div>
                <div className="w-2/3">
                    <ExaminerTableSection />
                </div>
            </div>
        </InstructorLayout>
    );
}
