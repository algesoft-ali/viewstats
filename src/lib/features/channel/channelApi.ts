import { IChannel, IGetAllResponse } from "@/interfaces/feature.interface";
import { baseApi } from "@/lib/baseApi";

const channelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ----- get popular channels
    getPopularChannels: builder.query<IGetAllResponse<IChannel>, {}>({
      query: () => `/channel/popular`,
    }),
  }),
});

export const { useGetPopularChannelsQuery } = channelApi;
