import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import userSlice from "./userSlice";
import headerSlice from "./headerSlice";
import generateFormSlice from "./generateFormSlice";
import categoriesSlice from "./categoriesSlice";
import templatesSlice from "./templatesSlice";

const rootReducer = combineReducers({
    user: userSlice,
    header: headerSlice,
    generateForm: generateFormSlice,
    categories: categoriesSlice,
    templates: templatesSlice
});

const store = configureStore({
    reducer: (state, action) => rootReducer(state, action),
    middleware: [thunk]
});

export default store;