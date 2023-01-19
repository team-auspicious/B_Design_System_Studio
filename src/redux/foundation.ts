import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FoundataionDetail, FoundationVersion } from "../constant/type";

export interface FoundationDetailState {
    foundationVersionList: FoundationVersion[];
    selectedfoundationDetail: FoundataionDetail;
    isUpdated: boolean;
}

const initialState: FoundationDetailState = {
    foundationVersionList: [],
    isUpdated: false,
    selectedfoundationDetail: null as any,
};

export const targetSlice = createSlice({
    name: "foundation",
    initialState,
    reducers: {
        setFoundationVersionList: (state, action: PayloadAction<FoundationVersion[]>) => {
            state.foundationVersionList = action.payload;
        },
        setFoundationDetail: (state, action: PayloadAction<FoundataionDetail>) => {
            state.selectedfoundationDetail = action.payload;
        },
        addFoundationVersion: (state, action: PayloadAction<FoundationVersion>) => {
            state.foundationVersionList.push(action.payload);
        },
    },
});

export const { setFoundationDetail, setFoundationVersionList, addFoundationVersion } = targetSlice.actions;

export default targetSlice.reducer;
