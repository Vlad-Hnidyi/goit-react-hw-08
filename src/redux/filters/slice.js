import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filtersReducer = filterSlice.reducer;

export const { setFilter } = filterSlice.actions;
