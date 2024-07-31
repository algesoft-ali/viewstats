import { useGetAllChannelsQuery } from "@/lib/features/channel/channelApi";
import { formatNumberShort, formatNumberWithCommas } from "@/utils/formatter";
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Skeleton from "../shared/Skeleton";
import TopChannelsFilter from "./TopChannelsFilter";
import TopVideosFilter from "./TopVideosFilter";
import { useGetAllVideosQuery } from "@/lib/features/video/videoApi";
import moment from "moment";

export type ITopVideoFilter = {
  type: string;
  category: string;
  country: string;
};

const TopVideos = () => {
  const router = useRouter();
  const [filter, setFilter] = useState<ITopVideoFilter>({
    type: "all",
    category: "all",
    country: "all",
  });

  const { data, isFetching } = useGetAllVideosQuery({
    page: 1,
    limit: 100,
    channel: true,
    type: filter.type !== "all" ? filter.type : undefined,
    category: filter.category !== "all" ? filter.category : undefined,
    // country: filter.country !== "all" ? filter.country : undefined,
    sortBy: "totalViews",
    sortOrder: "desc",
  });
  return (
    <div>
      <h4 className="text-2xl font-semibold">Top 100 Viewed YouTube Videos</h4>

      <div className="flex flex-col xl:flex-row gap-4 mt-6">
        <div className="w-full xl:w-[480px]">
          <TopVideosFilter filter={filter} setFilter={setFilter} />
        </div>
        <div className="w-full">
          <div className="border border-grey-base rounded-lg overflow-y-hidden shadow-card2">
            <table className="w-full overflow-x-scroll min-w-[560px]">
              <thead>
                <tr>
                  <th className="pl-4 py-4 text-left text-sm !font-normal">
                    Rank
                  </th>
                  <th className="py-4 text-left text-sm !font-normal">Video</th>
                  <th className="py-4 text-left text-sm !font-normal">
                    Video Views
                  </th>
                  <th className="py-4 text-left text-sm !font-normal">
                    Uploaded
                  </th>
                  <th className="py-4 text-left text-sm !font-normal">
                    Channel
                  </th>
                </tr>
              </thead>
              {isFetching ? (
                <tbody>
                  {Array.from({ length: 10 })?.map((_, i) => (
                    <tr
                      key={i}
                      className={clsx(
                        "border-secondary-background",
                        i === 0 ? "border-t-2" : "border-t"
                      )}
                    >
                      <td className="py-4 px-4">
                        <Skeleton />
                      </td>
                      <td className="py-4 px-4">
                        <Skeleton />
                      </td>
                      <td className="py-4 px-4">
                        <Skeleton />
                      </td>
                      <td className="py-4 px-4">
                        <Skeleton />
                      </td>
                      <td className="py-4 px-4">
                        <Skeleton />
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : (
                <tbody>
                  {data?.data?.map((item, i) => (
                    <tr
                      key={item?._id}
                      className={clsx(
                        "text-sm hover:bg-grey-light duration-200 transition-all cursor-pointer border-secondary-background",
                        i === 0 ? "border-t-2" : "border-t"
                      )}
                    >
                      <td className="pl-4 font-semibold">{i + 1}</td>
                      <td className="px-2">
                        <div className="flex items-center justify-start gap-3 py-4">
                          <div className="w-[100px] h-[57px] overflow-hidden grid place-items-center rounded-lg">
                            <Image
                              src={item?.thumbnail as string}
                              alt="image"
                              width={100}
                              height={57}
                              className="object-cover block overflow-hidden"
                              priority
                            />
                          </div>

                          <p className="max-w-[300px] truncate">{item?.title}</p>
                        </div>
                      </td>
                      <td className="px-2 text-green-500">
                        {formatNumberWithCommas(item?.totalViews)}
                      </td>
                      <td className="px-2 min-w-28">
                        {moment(item?.uploadDate).fromNow()}
                      </td>

                      <td className="px-2">
                        <div className="flex items-center gap-2">
                          <Image
                            src={item?.channel?.logo as any}
                            alt="channel"
                            width={30}
                            height={30}
                            className="object-cover"
                          />
                          <p className="max-w-24 truncate">{item?.channel?.name}</p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopVideos;
