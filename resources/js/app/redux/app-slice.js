import { createSlice } from '@reduxjs/toolkit'

const path = window.location.hash.substring(1); // Get the hash without the first character
const hash = path.split('&')[0];

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isModalOpen: false,
    pathname:'/'+window.location.pathname.split("/")[2],
    user:{},
    timeLeft:parseInt(localStorage.getItem("timer")??0)??5400,
    timerActive:false,
    data:[],
    loading:true
  },
  reducers: {
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setPathname: (state, action) => {
      state.pathname = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    setTimeLeft: (state, action) => {
      localStorage.setItem("timer", action.payload);
      state.timeLeft = parseInt(localStorage.getItem("timer"))
    },
    setTimerActive:(state, action) => {
      state.timerActive = action.payload
    },
    setData:(state, action) => {
      state.data = action.payload
    },
  },
})
export const { 
  setPathname,
  setUser,
  setTimeLeft,
  setTimerActive,
  setData,
  setLoading
 } = appSlice.actions

export default appSlice.reducer
