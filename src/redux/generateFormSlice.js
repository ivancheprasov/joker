import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {myFetch} from "../helpers/myFetch";
import {requestURL} from "../const/request";

export const generate = createAsyncThunk(
    "generateForm/generate",
    (body) => myFetch({url: requestURL.generate, options: {method: "POST", body}})
);

const generateFormSlice = createSlice({
    name: "generateForm",
    initialState: {
        isLoaded: false,
        errorMessage: null,
        usedTemplate: null,
        result: null,
        isSuccessful: false,
        selectedOption: "",
        isShowingResult: false
    },
    reducers: {
        setSelectedOption(state, action) {
            state.selectedOption = action.payload;
        },
        isShowingResult(state, action) {
            state.isShowingResult = action.payload;
        }
    },
    extraReducers: {
        [generate.pending]: (state) => {
            state.isLoaded = false;
        },
        [generate.fulfilled]: (state, action) => {
            const {result, usedTemplate} = action.payload;
            state.isLoaded = true;
            state.isSuccessful = true;
            state.errorMessage = null;
            state.result = result;
            state.usedTemplate = usedTemplate;
        },
        [generate.rejected]: (state) => {
            state.isLoaded = true;
            state.isSuccessful = false;
        },
    }
});

export const {
    setSelectedOption,
    isShowingResult
} = generateFormSlice.actions

export default generateFormSlice.reducer;