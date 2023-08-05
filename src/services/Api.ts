import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import "dotenv";
export const API = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://socialnetworkapi-production.up.railway.app",
    credentials: "include",
    prepareHeaders: headers => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", token);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
