import { combineReducers } from "@reduxjs/toolkit";
import { API } from "../services/Api";
import AuthReducer from "./authSlice";
import { ModalSlice } from "./modal/modalSlice";
export const reducers = combineReducers({
  auth: AuthReducer,
  [API.reducerPath]: API.reducer,
  modal: ModalSlice.reducer,
});
