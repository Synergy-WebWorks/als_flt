import React from "react";
import AdminLayout from "../../layout";
import TeachersIDTabsSection from "./sections/teacher-id-tabs-section";
import { useEffect } from "react";
import store from "@/app/pages/store/store";
import { get_teachers_by_id_thunk } from "../redux/teachers-thunk";
import TeacherIdTableSection from "./sections/teacher-id-table-section";

export default function TeachersIDPage() {
    const id = window.location.pathname.split('/')[3];
    useEffect(() => {
        store.dispatch(get_teachers_by_id_thunk(id));
    }, []);
    return (
        <AdminLayout>
            {/* <TeachersIDTabsSection /> */}
            <TeacherIdTableSection />
        </AdminLayout>
    );
}
