import {
  IChannel,
  IDailySubscriber,
  IDailyViews,
  IGetAllResponse,
  IGetResponse,
  IQueryParams,
} from "@/interfaces/feature.interface";
import { baseApi } from "@/lib/baseApi";
import { setChannelId, setChannelLoading } from "./channelSlice";

// ---- types
type TDailyViewsRequest = {
  startDate: string;
  endDate: string;
  channel: string;
  video?: string;
};

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
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          dispatch(setChannelLoading(true));
          const { data } = await queryFulfilled;
          if (data) {
            dispatch(setChannelId(data?.data?._id));
            dispatch(setChannelLoading(false));
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),

    // ----- get daily views
    getChannelDailyViews: builder.query<
      IGetAllResponse<IDailyViews>,
      TDailyViewsRequest
    >({
      query: ({ startDate, endDate, channel, video }) => ({
        url: "/daily-views",
        params: { startDate, endDate, channel, video },
      }),
    }),

    // ----- get daily subscribers
    getChannelDailySubscribers: builder.query<
      IGetAllResponse<IDailySubscriber>,
      Omit<TDailyViewsRequest, "video">
    >({
      query: ({ startDate, endDate, channel }) => ({
        url: `/daily-subscriber/${channel}`,
        params: { startDate, endDate },
      }),
    }),
  }),
});

export const {
  useGetAllChannelsQuery,
  useGetPopularChannelsQuery,
  useGetChannelInfoQuery,
  useGetChannelDailyViewsQuery,
  useGetChannelDailySubscribersQuery,
} = channelApi;
