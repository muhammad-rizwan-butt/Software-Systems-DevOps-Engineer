import { combineReducers } from "@reduxjs/toolkit";
import { authSliceReducer } from "./auth";

export const rootReducers = combineReducers({
  auth: authSliceReducer,
});
