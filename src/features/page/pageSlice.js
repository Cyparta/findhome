import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    adddata: (state, action) => {
      state.data = [action.payload];
    },
  },
});

export const { adddata } = pageSlice.actions;
export default pageSlice.reducer;
