import store from "@/app/pages/store/store";
import { edit_ila_service } from "@/app/services/answer-service";
import React, { useState } from "react";
import { useEffect } from "react";
import { get_students_by_id_thunk } from "../../redux/students-thunk";
import { useSelector } from "react-redux";

export default function EditIlaFormComponents({ data, column }) {
    const [isEdit, setIsEdit] = useState(false);
    const [text, setText] = useState("");
    const { user } = useSelector((state) => state.app);
    const student_id = window.location.pathname.split("/")[4];

    console.log("studentsssssss", user);
    useEffect(() => {
        setText(data[column]);
    }, []);
    async function edit_ila_function(e) {
        if (e.key == "Enter") {
            try {
                const res = await edit_ila_service({
                    ...data,
                    column,
                    value: text,
                });
                store.dispatch(get_students_by_id_thunk(student_id));
                setIsEdit(false);
            } catch (error) {
                setIsEdit(false);
            }
        }
    }

    function double_tap(params) {
        if (user.user_type != "3") {
            setIsEdit(true);
        }
    }
    return (
        <div
            className="w-full h-full border border-gray-300 "
            onDoubleClick={() => double_tap()}
        >
            {isEdit ? (
                <textarea
                    onKeyUp={edit_ila_function}
                    className="w-full h-full  "
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onBlur={() => setIsEdit(false)} // Exit edit mode when losing focus
                    autoFocus
                />
            ) : (
                <div className="px-2 flex items-center justify-center h-full">
                    {text || ""}
                </div>
            )}
        </div>
    );
}
