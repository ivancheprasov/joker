import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userSlice from "./userSlice";
import headerSlice from "./headerSlice";
import generateFormSlice from "./generateFormSlice";

const rootReducer = combineReducers({
    user: userSlice,
    header: headerSlice,
    generateForm: generateFormSlice
});

const store = configureStore({
    reducer: (state, action) => rootReducer(state, action),
    middleware: [thunk]
});

export default store;