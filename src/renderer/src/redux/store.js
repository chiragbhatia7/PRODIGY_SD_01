import { configureStore } from "@reduxjs/toolkit";
import celsiusReducer from "./celsiusSlice";
import fahrenheitReducer from "./fahrenheitSlice";
import kelvinReducer from "./kelvinSlice";

export const store = configureStore({
  reducer: {
    celsius: celsiusReducer,
    fahrenheit: fahrenheitReducer,
    kelvin: kelvinReducer,
  },
});
