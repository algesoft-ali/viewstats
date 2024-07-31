import {
  IGetAllResponse,
  IQueryParams,
  IVideo,
} from "@/interfaces/feature.interface";
import { baseApi } from "@/lib/baseApi";

interface IVideoQueryParams extends IQueryParams {
  type?: string;
  country?: string;
  category?: string;
  populate?: boolean;
  channel?: string;
}

export const videoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // ----- get all videos
    getAllVideos: builder.query<IGetAllResponse<IVideo>, IVideoQueryParams>({
      query: ({
        limit,
        page,
        search,
        sortBy,
        sortOrder,
        country,
        category,
        type,
        populate,
        channel,
      }) => ({
        url: "/video",
        params: {
          limit,
          page,
          search,
          sortBy,
          sortOrder,
          country,
          category,
          type,
          populate,
          channel,
        },
      }),
    }),
  }),
});

export const { useGetAllVideosQuery } = videoApi;
