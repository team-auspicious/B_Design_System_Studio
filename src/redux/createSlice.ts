import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TargetState {
  menu: string;
  item: string;
}

const initialState: TargetState = {
  menu: "-",
  item: "",
};

export const targetSlice = createSlice({
  name: "target",
  initialState,
  reducers: {
    menuUpdate: (state, action: PayloadAction<string>) => {
      state.menu = action.payload;
    },
    itemUpdate: (state, action: PayloadAction<string>) => {
      state.item = action.payload;
    },
  },
});

export const { menuUpdate, itemUpdate } = targetSlice.actions;

export default targetSlice.reducer;
