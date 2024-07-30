import {
  IChannel,
  IDailySubscriber,
  IDailyViews,
  IGetAllResponse,
  IGetResponse,
  IQueryParams,
} from "@/interfaces/feature.interface";
import { baseApi } from "@/lib/baseApi";
import {
  setChannelId,
  setChannelInfo,
  setChannelLoading,
} from "./channelSlice";

// ---- types
type TDailyViewsRequest = {
  startDate: string;
  endDate: string;
  channel: string;
  video?: string;
};

interface IChannelQueryParams extends IQueryParams {
  country?: string;
  category?: string;
}

const channelApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //  ----- get all channels
    getAllChannels: builder.query<IGetAllResponse<IChannel>, IChannelQueryParams>({
      query: ({ limit, page, search, sortBy, sortOrder, country, category }) => ({
        url: `/channel`,
        params: { limit, page, search, sortBy, sortOrder, country, category },
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
            dispatch(
              setChannelInfo({ field: "channelName", value: data?.data?.name })
            );
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
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const totalViews = data?.data?.reduce(
            (acc: number, curr: any) => acc + curr.views,
            0
          );
          dispatch(
            setChannelInfo({ field: "channelViews", value: totalViews })
          );
        } catch (error) {
          //
        }
      },
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
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const firstItem = data?.data[0];
          const lastItem = data?.data[data?.data?.length - 1];
          const totalSubs = lastItem?.subscribers - firstItem?.subscribers || 0;

          dispatch(setChannelInfo({ field: "channelSubs", value: totalSubs }));
        } catch (error) {
          //
        }
      },
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
