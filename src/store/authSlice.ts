import { IUser } from "./../services/users_types";
import { createSlice } from "@reduxjs/toolkit";
import { userAPI } from "../services/user";

interface IInitialState {
  access: boolean;
  user: IUser | null;
  policy: string | null;
  signature: string | null;
}
const initialState: IInitialState = {
  access: false,
  user: null,
  policy: null,
  signature: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      userAPI.endpoints.signin.matchFulfilled,
      (state, payload) => {
        state.access = payload.payload.access;
      }
    );
    builder.addMatcher(userAPI.endpoints.signin.matchRejected, state => {
      state.access = false;
    });
    builder.addMatcher(
      userAPI.endpoints.signup.matchFulfilled,
      (state, payload) => {
        state.access = payload.payload.access;
      }
    );
    builder.addMatcher(userAPI.endpoints.signup.matchRejected, state => {
      state.access = false;
    });
    builder.addMatcher(
      userAPI.endpoints.refresh.matchFulfilled,
      (state, payload) => {
        localStorage.setItem("token", payload.payload.token);
        state.user = payload.payload.user;
        state.policy = payload.payload.policy;
        state.signature = payload.payload.signature;
      }
    );
  },
});

export default authSlice.reducer;
