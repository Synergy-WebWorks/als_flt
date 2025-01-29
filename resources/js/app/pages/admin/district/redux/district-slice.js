import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const districtslice = createSlice({
  name: 'districts',
  initialState: {
    districts: [],
    district: {},
  },
  reducers: {
    setDistricts: (state, action) => {
      state.districts = action.payload
    },
    setDistrict: (state, action) => {
      state.district = action.payload
    },
  },
})
export const { 
  setDistricts,
  setDistrict
 } = districtslice.actions

export default districtslice.reducer
