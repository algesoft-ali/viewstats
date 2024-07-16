import config from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "cookies-next";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: config.server_url,
    prepareHeaders: (headers) => {
      const accessToken = getCookie("accessToken");
      if (accessToken) headers.set("Authorization", "Bearer " + accessToken);
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: [],
  refetchOnFocus: false,
  refetchOnMountOrArgChange: true,
});
