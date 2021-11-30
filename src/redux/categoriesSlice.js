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
        isSuccessful: false,
        categories: []
    },
    reducers: {},
    extraReducers: {
        [loadCategories.pending]: (state) => {
            state.isLoaded = false;
        },
        [loadCategories.fulfilled]: (state, action) => {
            const {categories} = action.payload;
            state.isLoaded = true;
            state.isSuccessful = true;
            state.categories = categories;
        },
        [loadCategories.rejected]: (state) => {
            state.isLoaded = true;
            state.isSuccessful = false;
        },
    }
});

export default categoriesSlice.reducer;