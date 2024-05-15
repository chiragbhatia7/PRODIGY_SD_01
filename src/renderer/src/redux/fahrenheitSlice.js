import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const fahrenheitSlice = createSlice({
  name: "fahrenheit",
  initialState,
  reducers: {
    setFahrenheitValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFahrenheitValue } = fahrenheitSlice.actions;

export default fahrenheitSlice.reducer;
