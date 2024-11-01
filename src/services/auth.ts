import { API } from "./Api";
import { res, query, query1, IRefreshUser, Error } from "./users_types";

export const authAPI = API.injectEndpoints({
  endpoints: build => ({
    signin: build.mutation<res, query>({
      query: args => ({
        url: "/auth/signin",
        method: "POST",
        body: args,
      }),
    }),
    signup: build.mutation<res, query1>({
      query: args => ({
        url: "/auth/signup",
        method: "POST",
        body: args,
      }),
    }),
    refresh: build.query<IRefreshUser, Error>({
      query: () => "/auth/refresh",
    }),
  }),
});

export const {
  useSigninMutation,
  useSignupMutation,
  useRefreshQuery,
  useLazyRefreshQuery,
} = authAPI;
