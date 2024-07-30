import { useGetAllChannelsQuery } from "@/lib/features/channel/channelApi";
import { formatNumberShort } from "@/utils/formatter";
import clsx from "clsx";
import Image from "next/image";
import TopChannelsFilter from "./TopChannelsFilter";
import { useState } from "react";
import { useRouter } from "next/navigation";

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

  const { data, isLoading } = useGetAllChannelsQuery({
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

      <div className="grid grid-cols-12 gap-4 mt-6">
        <div className="col-span-12 xl:col-span-4">
          <TopChannelsFilter filter={filter} setFilter={setFilter} />
        </div>
        <div className="col-span-12 xl:col-span-8">
          <div className="border border-grey-base rounded-lg overflow-hidden shadow-card2">
            <table className="w-full">
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
                </tr>
              </thead>
              {isLoading ? (
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
                    </tr>
                  ))}
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
                      <td>
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
                      <td>{formatNumberShort(item?.totalSubscribers)}</td>
                      <td>{formatNumberShort(item?.totalViews)}</td>
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

const Skeleton = () => {
  return (
    <div className="bg-grey-base animate-pulse min-h-2 min-w-6 rounded"></div>
  );
};

export default TopChannels;
