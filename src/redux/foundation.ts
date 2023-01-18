import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FoundataionDetail, FoundationVersion, StringifiedFoundationDetail } from "../constant/type";

export interface FoundationDetailState {
    foundationVersionList: FoundationVersion[];
    isUpdated: boolean;
}

const initialState: FoundationDetailState = {
    foundationVersionList: [],
    isUpdated: false,
};

export const targetSlice = createSlice({
    name: "foundation",
    initialState,
    reducers: {
        setFoundationVersionList: (state, action: PayloadAction<FoundationVersion[]>) => {
            state.foundationVersionList = action.payload;
        },
    },
});

export const { setFoundationVersionList } = targetSlice.actions;

export default targetSlice.reducer;
