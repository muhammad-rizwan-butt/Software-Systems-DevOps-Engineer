import { createSlice } from "@reduxjs/toolkit";

let initialState = { user: {}, token: "" };
const authSlice = createSlice({
  name: "auth-slice",
  initialState,
  reducers: {
    logIn: (state, { type, payload }) => {
      return { ...state, user: payload.user, token: payload.token };
    },
    signUp: (state, { type, payload }) => {
      return { ...state, user: payload.user, token: payload.token };
    },
    logOut: (state, { type, payload }) => {
      return (state = initialState);
    },
    getMe: (state, { type, payload }) => {
      return { ...state, user: payload?.user };
    },
    updateUser: (state, { type, payload }) => {
      return { ...state, user: payload };
    },
  },
});

export const { logIn, signUp, logOut, getMe, updateUser } = authSlice.actions;
export const authSliceReducer = authSlice.reducer;
