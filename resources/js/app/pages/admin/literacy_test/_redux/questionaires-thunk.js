import { store_questionnaires_service, delete_questionnaires_service, update_questionnaires_service, get_questionnaires_by_id_service, get_questionnaires_service } from "@/app/services/questionnaires-service";
import { literacyTestSlice } from "./literacy-test-slice";
import { questionnairesSlice } from "./questionaires-slice";



export function get_questionnaires_thunk() {
  return async function (dispatch, getState) {
    // dispatch(appSlice.actions.incrementByAmount(10));
    const res = await get_questionnaires_service()
    dispatch(questionnairesSlice.actions.setQuestionaires(res.data.response));
    return res
  };
}

export function get_questionnaires_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = get_questionnaires_by_id_service(id)
    return res
  };
}

export function store_questionnaires_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_questionnaires_service(data)
    return res
  };
}

export function update_questionnaires_thunk(data) {
  return async function (dispatch, getState) {
    const res = update_questionnaires_service(data)
    return res
  };
}

export function delete_questionnaires_thunk(id) {
  return async function (dispatch, getState) {
    const res = delete_questionnaires_service(id)
    return res
  };
}