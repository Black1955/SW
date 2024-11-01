import { API } from "./Api";
import { IPost } from "../components/Post/IPost";
import { IrecomendPosts, likeBody, likeres } from "./post_types";

export const userAPI = API.injectEndpoints({
  endpoints: build => ({
    getPosts: build.query<IPost[], IrecomendPosts>({
      query: ({ id, limit, page, type }) => ({
        url: `/post/recomendposts/${id}?limit=${limit}&page=${page}&type=${type}`,
      }),
    }),
    likePost: build.mutation<likeres, likeBody>({
      query: body => ({
        url: "/post/like",
        method: "POST",
        body: body,
      }),
    }),
    disLikePost: build.mutation<likeres, likeBody>({
      query: body => ({
        url: "/post/dislike",
        method: "POST",
        body: body,
      }),
    }),
    createPost: build.mutation({
      query: body => ({
        url: "/post/create",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useLazyGetPostsQuery,
  useLikePostMutation,
  useDisLikePostMutation,
  useCreatePostMutation,
} = userAPI;
