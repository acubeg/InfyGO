// counterReducer.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  destinationCities: [],
  souceCities: [],
};

const flightSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    getDestinationCities: (state, action) => {
      state.destinationCities = action.payload;
    },
    getSourceCities: (state, action) => {
      state.souceCities = action.payload;
    },
  },
});

export const { getDestinationCities, getSourceCities } = flightSlice.actions;

export default flightSlice.reducer;
