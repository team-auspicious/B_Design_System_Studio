import { configureStore } from "@reduxjs/toolkit";
import targetSlice from "./createSlice";

export const store = configureStore({
  reducer: {
    target: targetSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
