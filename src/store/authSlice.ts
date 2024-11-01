import { IUser } from "./../services/users_types";
import { createSlice } from "@reduxjs/toolkit";
import { authAPI } from "../services/auth";

interface IInitialState {
  access: boolean;
  user: IUser | null;
}
const initialState: IInitialState = {
  access: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      authAPI.endpoints.signin.matchFulfilled,
      (state, payload) => {
        state.access = payload.payload.access;
      }
    );
    builder.addMatcher(authAPI.endpoints.signin.matchRejected, state => {
      state.access = false;
    });
    builder.addMatcher(
      authAPI.endpoints.signup.matchFulfilled,
      (state, payload) => {
        state.access = payload.payload.access;
      }
    );
    builder.addMatcher(authAPI.endpoints.signup.matchRejected, state => {
      state.access = false;
    });
    builder.addMatcher(
      authAPI.endpoints.refresh.matchFulfilled,
      (state, payload) => {
        localStorage.setItem("token", payload.payload.token);
        state.user = payload.payload.user;
      }
    );
  },
});

export default authSlice.reducer;
