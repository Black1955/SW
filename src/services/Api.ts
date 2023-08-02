import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import "dotenv";
export const API = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_URL,
    credentials: "include",
  }),
  endpoints: () => ({}),
});
