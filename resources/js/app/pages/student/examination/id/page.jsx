import React from "react";
import StudentLayout from "../../layout";
import QuestionnaireCardSection from "./sections/questionnaire-card-section";
import store from "@/app/pages/store/store";
import { useEffect } from "react";
import { get_questionnaires_by_id_thunk } from "@/app/pages/admin/literacy_test/_redux/questionaires-thunk";
import { get_booklet_by_id_thunk } from "@/app/pages/admin/booklet/redux/booklet-thunk";
import { get_score_sheets_by_id_thunk } from "@/app/pages/admin/students/redux/students-thunk";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/app/redux/app-slice";


export default function ExaminationPageID({auth}) {
    const booklet_id = window.location.pathname.split("/")[3];
    const dispatch =useDispatch()
    useEffect(() => {
        // store.dispatch(get_questionnaires_by_id_thunk(examination_id));
        async function get_data(params) {
            await store.dispatch(get_booklet_by_id_thunk(booklet_id));
            await store.dispatch(get_score_sheets_by_id_thunk(auth.user.id,booklet_id))
            dispatch(setLoading(false))
        }
        get_data()
    }, []);
    
    return (
        <StudentLayout>
            <QuestionnaireCardSection />
        </StudentLayout>
    );
}
