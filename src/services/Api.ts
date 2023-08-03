import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import "dotenv";
export const API = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://socialnetwork.adaptable.app",
    credentials: "include",
  }),
  endpoints: () => ({}),
});
