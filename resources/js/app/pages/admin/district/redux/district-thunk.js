import { delete_district_service, get_district_by_id_service, get_district_service, store_district_service, update_district_service } from "@/app/services/district-service";
import { districtslice } from "./district-slice";


export function get_district_thunk() {
  return async function (dispatch, getState) {
    // dispatch(appSlice.actions.incrementByAmount(10));
    const res = await get_district_service()
     dispatch(districtslice.actions.setDistricts(res.data.response));
    return res
  };
}

export function get_district_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = await get_district_by_id_service(id)
    return res
  };
}

export function store_district_thunk(data) {
  return async function (dispatch, getState) {
    const res = await store_district_service(data)
    return res
  };
}

export function update_district_thunk(data) {
  return async function (dispatch, getState) {
    const res = await update_district_service(data)
    return res
  };
}

export function delete_district_thunk(id) {
  return async function (dispatch, getState) {
    const res = await delete_district_service(id)
    return res
  };
}
