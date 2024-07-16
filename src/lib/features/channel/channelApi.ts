import {
  IChannel,
  IGetAllResponse,
  IQueryParams,
} from "@/interfaces/feature.interface";
import { baseApi } from "@/lib/baseApi";

const channelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //  ----- get all channels
    getAllChannels: builder.query<IGetAllResponse<IChannel>, IQueryParams>({
      query: ({
        limit = 10,
        page = 1,
        search = "",
        sortBy = "",
        sortOrder = "",
      }) =>
        `/channel?limit=${limit}&page=${page}&search=${search}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
    }),

    // ----- get popular channels
    getPopularChannels: builder.query<IGetAllResponse<IChannel>, {}>({
      query: () => `/channel/popular`,
    }),
  }),
});

export const { useGetAllChannelsQuery, useGetPopularChannelsQuery } =
  channelApi;
