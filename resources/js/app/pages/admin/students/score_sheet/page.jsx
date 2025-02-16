import React from "react";
import AdminLayout from "../../layout";
import { useEffect } from "react";
import store from "@/app/pages/store/store";
import {
    get_score_sheets_by_id_thunk,
    get_students_by_id_thunk,
} from "../redux/students-thunk";
import ScoreSheetForm from "./sections/score-sheet-form";
import { useSelector } from "react-redux";

export default function ScoreSheet() {
    const student_id = window.location.pathname.split("/")[4];
    const booklet_id = window.location.pathname.split("/")[5];

    useEffect(() => {
        store.dispatch(get_score_sheets_by_id_thunk(student_id, booklet_id));
    }, []);
    return (
        <>
            <ScoreSheetForm />
        </>
    );
}
