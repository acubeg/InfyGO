import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./reducer/flightSlice";

export const store = configureStore({
  reducer: {
    flights: flightReducer,
  },
});
