import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const celsiusSlice = createSlice({
  name: "celsius",
  initialState,
  reducers: {
    setCelsiusValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCelsiusValue } = celsiusSlice.actions;

export default celsiusSlice.reducer;
