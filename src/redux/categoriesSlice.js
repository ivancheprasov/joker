import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {myFetch} from "../helpers/myFetch";
import {requestURL} from "../const/request";

export const loadCategories = createAsyncThunk(
    "categories/loadCategories",
    () => myFetch({url: requestURL.loadCategories})
);

export const addCategory = createAsyncThunk(
    "categories/addCategory",
    (body) => myFetch({url: requestURL.addCategory, options: {method: "POST", body}})
);

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        isLoaded: false,
        isLoadSuccessful: false,
        isAddPending: false,
        isAddSuccessful: false,
        categories: []
    },
    reducers: {
        resetAddSuccess(state) {
            state.isAddPending = false;
            state.isAddSuccessful = false;
        }
    },
    extraReducers: {
        [loadCategories.pending]: (state) => {
            state.isLoaded = false;
        },
        [loadCategories.fulfilled]: (state, action) => {
            const {categories} = action.payload;
            state.isLoaded = true;
            state.isLoadSuccessful = true;
            state.categories = categories;
        },
        [loadCategories.rejected]: (state) => {
            state.isLoaded = true;
            state.isLoadSuccessful = false;
        },
        [addCategory.pending]: (state) => {
            state.isAddPending = true;
            state.isAddSuccessful = false;
        },
        [addCategory.fulfilled]: (state) => {
            state.isAddPending = false;
            state.isAddSuccessful = true;
        },
        [addCategory.rejected]: (state) => {
            state.isAddPending = false;
            state.isAddSuccessful = false;
        }
    }
});

export const {
    resetAddSuccess
} = categoriesSlice.actions

export default categoriesSlice.reducer;