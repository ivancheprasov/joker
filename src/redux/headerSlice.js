import {createSlice} from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: "header",
    initialState: {
        selectedTab: "Generate"
    },
    reducers: {
        setSelectedTab(state, action) {
            state.selectedTab = action.payload;
        }
    }
});

export const {
    setSelectedTab
} = headerSlice.actions

export default headerSlice.reducer;
