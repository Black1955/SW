import { IReCommended } from "../ui/RecommendedBlog/IRecommended";
import { API } from "./Api";
import {
  Error,
  IUser,
  query,
  query1,
  res,
  IsearchRes,
  IUpdateProfile,
  IRefreshUser,
} from "./users_types";

const apiWithTag = API.enhanceEndpoints({ addTagTypes: ["user"] });

export const userAPI = apiWithTag.injectEndpoints({
  endpoints: build => ({
    getUser: build.query({
      query: id => ({
        url: `/getuser/${id}`,
      }),
      //@ts-ignore
      transformResponse: res => res.user,
      providesTags: ["user"],
    }),
    recomendUser: build.query<IReCommended[], number | string | undefined>({
      query: id => ({
        url: `/recomenduser/${id}`,
      }),
      providesTags: ["user"],
    }),
    subscribe: build.mutation({
      query: (id: number | string) => ({
        url: "/subscribe",
        method: "POST",
        body: { id },
      }),
      invalidatesTags: ["user"],
    }),
    unSubscribe: build.mutation({
      query: (id: number | string) => ({
        url: "/unsubscribe",
        method: "POST",
        body: { id },
      }),
      invalidatesTags: ["user"],
    }),
    findUser: build.query<IsearchRes[], string>({
      query: (text: string) => `/search?query=${text}`,
    }),
    updateProfile: build.mutation<IUser, IUpdateProfile>({
      query: ({ body }) => ({
        url: "/updateprofile",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    updatePhoto: build.mutation<string, IUpdateProfile>({
      query: ({ body }) => ({
        url: "/setphoto",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});
export const {
  useGetUserQuery,
  useRecomendUserQuery,
  useSubscribeMutation,
  useUnSubscribeMutation,
  useFindUserQuery,
  useUpdateProfileMutation,
  useUpdatePhotoMutation,
} = userAPI;
