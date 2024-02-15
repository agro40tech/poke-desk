import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type typeState = {
  count: number;
};

const initialState: typeState = {
  count: 0,
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const exportTestSlice = testSlice.reducer;
export const { increment } = testSlice.actions;
