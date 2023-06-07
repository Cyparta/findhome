import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // {
  //   keyword: "",
  //   propertyType: "",
  //   location: "",
  //   price: 0,
  //   amenities: [],
  //   status: "",
  //   Baths: "",
  //   Beds: "",
  //   garages: "",
  //   yearBuilt: "",
  //   area: {
  //     min: "",
  //     max: "",
  //   },
  //   length: 0,
  // },
];

export const buildingSlice = createSlice({
  name: "building",
  initialState,
  reducers: {
    addbuilding: (state, action) => {
      state = [].push(action.payload);
    },
  },
});

export const { addbuilding } = buildingSlice.actions;
export default buildingSlice.reducer;
