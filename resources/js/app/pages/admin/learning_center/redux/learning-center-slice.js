import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const learningCenterSlice = createSlice({
  name: 'learning_center',
  initialState: {
    learning_centers: [],
    learningCenter: {},
  },
  reducers: {
    setLearningCenters: (state, action) => {
      state.learning_centers = action.payload
    },
    setLearningCenter: (state, action) => {
      state.learning_center = action.payload
    },
  },
})
export const { 
  setLearningCenters,
  setLearningCenter
 } = learningCenterSlice.actions

export default learningCenterSlice.reducer
