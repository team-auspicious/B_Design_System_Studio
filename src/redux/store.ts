import { configureStore } from "@reduxjs/toolkit";
import targetSlice from "./createSlice";
import foundation from "./foundation";

export const store = configureStore({
    reducer: {
        target: targetSlice,
        foundation,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
