import { baseApi } from "@/lib/baseApi";
import { setUser } from "./userSlice";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ----- get user info
    getUser: builder.query({
      query: () => "/users/me",
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data?.data));
        } catch (error) {
          // console.log(error);
        }
      },
    }),
  }),
});

export const { useGetUserQuery } = userApi;
