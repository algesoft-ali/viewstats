import { useGetAllChannelsQuery } from "@/lib/features/channel/channelApi";
import { formatNumberShort } from "@/utils/formatter";
import clsx from "clsx";
import Image from "next/image";
import TopChannelsFilter from "./TopChannelsFilter";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Skeleton from "../shared/Skeleton";

export type ITopChannelFilter = {
  type: string;
  category: string;
  country: string;
};

const TopChannels = () => {
  const router = useRouter();
  const [filter, setFilter] = useState<ITopChannelFilter>({
    type: "totalSubscribers",
    category: "all",
    country: "all",
  });

  const { data, isLoading, isFetching } = useGetAllChannelsQuery({
    page: 1,
    limit: 100,
    sortBy: filter.type,
    sortOrder: "desc",
    country: filter?.country !== "all" ? filter?.country : "",
    category: filter?.category !== "all" ? filter?.category : "",
  });

  return (
    <div>
      <h4 className="text-2xl font-semibold">
        Top 100 Subscribed YouTube Channels
      </h4>

      <div className="flex flex-col xl:flex-row gap-4 mt-6">
        <div className="w-full xl:w-[480px]">
          <TopChannelsFilter filter={filter} setFilter={setFilter} />
        </div>
        <div className="w-full">
          <div className="border border-grey-base rounded-lg overflow-y-hidden shadow-card2">
            <table className="w-full overflow-x-scroll min-w-[560px]">
              <thead>
                <tr>
                  <th className="pl-4 py-4 text-left text-sm !font-normal">
                    Rank
                  </th>
                  <th className="py-4 text-left text-sm !font-normal">
                    Channel
                  </th>
                  <th className="py-4 text-left text-sm !font-normal">
                    Total Subs
                  </th>
                  <th className="py-4 text-left text-sm !font-normal">
                    Total Views
                  </th>
                  <th className="py-4 text-left text-sm !font-normal">
                    Country
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
              ) : !data?.meta?.total ? (
                <tbody>
                  <tr>
                    <td
                      colSpan={5}
                      className="text-center font-medium py-20 border-t border-secondary-background"
                    >
                      No data found
                    </td>
                  </tr>
                </tbody>
              ) : (
                <tbody>
                  {data?.data?.map((item, i) => (
                    <tr
                      key={item?._id}
                      className={clsx(
                        "hover:bg-grey-light duration-200 transition-all cursor-pointer border-secondary-background",
                        i === 0 ? "border-t-2" : "border-t"
                      )}
                      onClick={() =>
                        router.push(`/${item?.username}/channelytics`)
                      }
                    >
                      <td className="pl-4 font-semibold">{i + 1}</td>
                      <td className="px-2">
                        <div className="flex items-center justify-start gap-3 py-4">
                          <Image
                            src={item?.logo as string}
                            alt="image"
                            width={48}
                            height={48}
                            className="object-cover block rounded-lg"
                            priority
                          />
                          <div>
                            <p className="font-semibold">{item?.name}</p>
                            <p className="text-grey-dark text-sm">
                              @{item?.username}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-2">
                        {formatNumberShort(item?.totalSubscribers)}
                      </td>
                      <td className="px-2">
                        {formatNumberShort(item?.totalViews)}
                      </td>
                      <td title={item?.country} className="uppercase px-2">
                        <Image
                          src={`https://flagcdn.com/w40/${item?.country}.png`}
                          alt="flag"
                          width={30}
                          height={30}
                          className="object-cover"
                        />
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

export default TopChannels;
