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
  populate?: boolean
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
          populate
        },
      }),
    }),
  }),
});


export const { useGetAllVideosQuery } = videoApi