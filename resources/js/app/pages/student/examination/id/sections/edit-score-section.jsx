import { get_booklet_by_id_thunk } from "@/app/pages/admin/booklet/redux/booklet-thunk";
import { get_students_by_id_thunk } from "@/app/pages/admin/students/redux/students-thunk";
import store from "@/app/pages/store/store";
import { update_answers_service } from "@/app/services/answer-service";
import { Edit, Save } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function EditScoreSection({ data }) {
    const [isEdit, setIsEdit] = useState(false);
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setScore(data?.score??0);
    }, []);

    const student_id = window.location.pathname.split("/")[4];
    async function submit_edit_score(event) {
        setLoading(true);
        if (event.key === "Enter") {
            try {
                await update_answers_service({
                    ...data,
                    score: score ?? 0,
                });
                await store.dispatch(get_students_by_id_thunk(student_id));
                setIsEdit(false);
                setLoading(false);
            } catch (error) {
                setIsEdit(false);
                setLoading(false);
            }
        }
    }
    return (
        <div>
            {isEdit && (
                <input
                    type="number"
                    onKeyDown={(e) => submit_edit_score(e)}
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                />
            )}
            {!isEdit && (
                <Button onClick={() => setIsEdit(true)}>
                    <Edit />
                </Button>
            )}
            {isEdit && (
                <Button onClick={() => submit_edit_score({ key: "Enter" })}>
                    <Save />
                </Button>
            )}
        </div>
    );
}
