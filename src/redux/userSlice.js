import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {myFetch} from "../helpers/myFetch";
import {requestURL} from "../const/request";
import Cookies from "js-cookie";

export const loadProfile = createAsyncThunk(
    "user/loadProfile",
    () => myFetch({url: requestURL.loadProfile})
);

export const login = createAsyncThunk(
    "user/login",
    (body) => myFetch({url: requestURL.login, options: {method: "POST", body}})
);

export const register = createAsyncThunk(
    "user/register",
    (body) => myFetch({url: requestURL.register, options: {method: "POST", body}})
);

const setUser = (state, action) => {
    const {username, password, isSuperuser} = action.payload;
    state.isLoaded = true;
    state.isAuthorized = true;
    state.isSuperuser = isSuperuser;
    state.errorMessage = null;
    state.username = username;
    Cookies.set('username', username, {expires: 30, path: ''});
    Cookies.set('password', password, {expires: 30, path: ''});
    return state;
};

const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoaded: false,
        isAuthorized: false,
        username: null,
        isSuperuser: false,
        errorMessage: null
    },
    reducers: {
        clearErrorMessage(state) {
            state.errorMessage = null;
        },
        logout(state) {
            state.isAuthorized = false;
            state.username = null;
            state.isSuperuser = false;
            Cookies.remove('username');
            Cookies.remove('password');
        }
    },
    extraReducers: {
        [loadProfile.pending]: (state) => {
            state.isLoaded = false;
        },
        [loadProfile.fulfilled]: (state, action) => {
            const {username, isSuperuser} = action.payload;
            state.isLoaded = true;
            state.isAuthorized = true;
            state.username = username;
            state.isSuperuser = isSuperuser;
            state.errorMessage = null;
        },
        [loadProfile.rejected]: (state) => {
            state.isLoaded = true;
            state.isAuthorized  = false;
        },
        [login.pending]: (state) => {
            state.isLoaded = false;
        },
        [login.fulfilled]: (state, action) => {
            setUser(state, action);
        },
        [login.rejected]: (state) => {
            state.isLoaded = true;
            state.isAuthorized = false;
            state.errorMessage = "Unable to sign in";
        },
        [register.fulfilled]: (state, action) => {
            setUser(state, action);
        },
        [register.rejected]: (state) => {
            state.isLoaded = true;
            state.isAuthorized = false;
            state.errorMessage = "Unable to sign up";
        },
        [register.pending]: (state) => {
            state.isLoaded = false;
        }
    }
});

export const {
    clearErrorMessage,
    logout
} = userSlice.actions

export default userSlice.reducer;