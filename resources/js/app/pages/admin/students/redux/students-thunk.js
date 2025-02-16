import { store_students_service, delete_students_service, update_students_service, get_students_by_id_service, get_students_service } from "@/app/services/students-service";
import {studentsSlice} from "./students-slice";
import { store_answers_service } from "@/app/services/answer-service";
import { get_score_sheets_by_id_service } from "@/app/services/score_sheets-service";



export function get_score_sheets_by_id_thunk(id,booklet_id) {
  return async function (dispatch, getState) {
    const res = await get_score_sheets_by_id_service(id,booklet_id)
    dispatch(studentsSlice.actions.setScoreSheet(res.data.response));
    return res
  };
}
export function get_students_thunk() {
  return async function (dispatch, getState) {
    const res = await get_students_service()
    dispatch(studentsSlice.actions.setStudents(res.data.response));
    return res
  };
}

export function get_students_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res =await get_students_by_id_service(id)
    dispatch(studentsSlice.actions.setStudent(res.data.response));
    return res
  };
}

export function store_students_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_students_service(data)
    return res
  };
}

export function update_students_thunk(data) {
  return async function (dispatch, getState) {
    const res = update_students_service(data)
    return res
  };
}

export function delete_students_thunk(id) {
  return async function (dispatch, getState) {
    const res = delete_students_service(id)
    return res
  };
}


// answers

export function store_answers_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_answers_service(data)
    return res
  };
}