import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FoundataionDetail, FoundationVersion, StringifiedFoundationDetail } from "../constant/type";

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

        // setStringifyFoundationDetail: (state, action: PayloadAction<StringifiedFoundationDetail>) => {
        //     state.stringifyFoundationDetail = action.payload;
        // },
        // updateStringifyFoundationDetail: (state, action: PayloadAction<{ item: string; value: string }>) => {
        //     const { item, value } = action.payload;
        //     if (state.stringifyFoundationDetail) {
        //         state.stringifyFoundationDetail[item as keyof StringifiedFoundationDetail] = value;
        //     }
        // },
        // setIsUpdated: (state, action: PayloadAction<boolean>) => {
        //     state.isUpdated = action.payload;
        // },
    },
});

export const {
    setFoundationDetail,
    setFoundationVersionList,
    // setStringifyFoundationDetail,
    // updateStringifyFoundationDetail,
    // setIsUpdated,
} = targetSlice.actions;

export default targetSlice.reducer;
