import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import "dotenv";
export const API = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://socialnetworkapi-production.up.railway.app",
    credentials: "include",
  }),
  endpoints: () => ({}),
});
