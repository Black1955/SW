import { configureStore } from "@reduxjs/toolkit";
import { API } from "../services/Api";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
import { reducers } from "./reducers";
const errorMiddleware: Middleware = (api: MiddlewareAPI) => next => action => {
  if (action.error && action.payload.status === 401) {
    localStorage.removeItem("token");
  }
  return next(action);
};
export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(API.middleware).concat(errorMiddleware),
});
export type RootState = ReturnType<typeof store.getState>;
