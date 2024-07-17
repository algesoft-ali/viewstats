import {
  IChannel,
  IGetAllResponse,
  IGetResponse,
  IQueryParams,
} from "@/interfaces/feature.interface";
import { baseApi } from "@/lib/baseApi";

const channelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //  ----- get all channels
    getAllChannels: builder.query<IGetAllResponse<IChannel>, IQueryParams>({
      query: ({ limit, page, search, sortBy, sortOrder }) => ({
        url: `/channel`,
        params: { limit, page, search, sortBy, sortOrder },
      }),
    }),

    // ----- get popular channels
    getPopularChannels: builder.query<IGetAllResponse<IChannel>, {}>({
      query: () => `/channel/popular`,
    }),

    // ----- get channel info
    getChannelInfo: builder.query<IGetResponse<IChannel>, string>({
      query: (username) => `/channel/${username}`,
    }),
  }),
});

export const {
  useGetAllChannelsQuery,
  useGetPopularChannelsQuery,
  useGetChannelInfoQuery,
} = channelApi;
