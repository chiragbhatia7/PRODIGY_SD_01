import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const kelvinSlice = createSlice({
  name: "kelvin",
  initialState,
  reducers: {
    setKelvinValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setKelvinValue } = kelvinSlice.actions;

export default kelvinSlice.reducer;
