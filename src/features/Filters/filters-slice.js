import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  new: true,
  in_progress: true,
  done: true,
};
export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setNew: (state, action) => {
      state.new = action.payload;
    },
    setProgress: (state, action) => {
      state.in_progress = action.payload;
    },
    setDone: (state, action) => {
      state.done = action.payload;
    },
  },
});

export const { setNew, setProgress, setDone } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
