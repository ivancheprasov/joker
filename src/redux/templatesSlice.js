import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {myFetch} from "../helpers/myFetch";
import {requestURL} from "../const/request";

export const suggestCategories = createAsyncThunk(
    "categories/suggestCategories",
    (body) => myFetch({url: requestURL.suggestCategories, options: {method: "POST", body}})
);

export const addTemplate = createAsyncThunk(
    "categories/addTemplate",
    (body) => myFetch({url: requestURL.addTemplate, options: {method: "POST", body}})
);

const templatesSlice = createSlice({
    name: "templates",
    initialState: {
        isLoaded: false,
        isAddPending: false,
        isAddSuccessful: false,
        hasSuggestedCategories: false,
        newTemplateBody: "",
        suggestedCategories: []
    },
    reducers: {
        resetAddSuccess(state) {
            state.isAddPending = false;
            state.isAddSuccessful = false;
        },
        setNewTemplateBody(state, action) {
            state.newTemplateBody = action.payload;
        },
        isShowingSuggestedCategories(state, action) {
            state.hasSuggestedCategories = action.payload;
        }
    },
    extraReducers: {
        [suggestCategories.pending]: (state) => {
            state.isLoaded = false;
        },
        [suggestCategories.fulfilled]: (state, action) => {
            const {suggestedCategories} = action.payload;
            state.suggestedCategories = suggestedCategories;
            state.isLoaded = true;
        },
        [suggestCategories.rejected]: (state) => {
            state.isLoaded = false;
            state.suggestedCategories = [];
        },
        [addTemplate.pending]: (state) => {
            state.isAddPending = true;
            state.isAddSuccessful = false;
        },
        [addTemplate.fulfilled]: (state) => {
            state.isAddPending = false;
            state.isAddSuccessful = true;
            state.hasSuggestedCategories = false;
        },
        [addTemplate.rejected]: (state) => {
            state.isAddPending = false;
            state.isAddSuccessful = false;
            state.hasSuggestedCategories = false;
        }
    }
});

export const {
    resetAddSuccess,
    isShowingSuggestedCategories,
    setNewTemplateBody
} = templatesSlice.actions

export default templatesSlice.reducer;