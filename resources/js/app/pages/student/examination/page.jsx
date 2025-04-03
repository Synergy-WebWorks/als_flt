import React from "react";
import StudentLayout from "../layout";
import { useEffect } from "react";
import store from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { get_examiner_by_examiner_id_thunk } from "../../admin/schedule/redux/schedule-thunk";
import ExaminationSection from "./sections/examination-section";
import { setLoading } from "@/app/redux/app-slice";

export default function ExaminationPage() {
    const { user } = useSelector((store) => store.app);
    const dispatch = useDispatch();
    useEffect(() => {
        if (user?.id) {
            store.dispatch(get_examiner_by_examiner_id_thunk(user.id));
        }
        dispatch(setLoading(true));
    }, [user?.id]);
    return (
        <StudentLayout>
            <ExaminationSection />
        </StudentLayout>
    );
}
