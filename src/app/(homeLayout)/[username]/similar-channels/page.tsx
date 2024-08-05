"use client";

import Skeleton from "@/components/shared/Skeleton";
import { useGetAllChannelsQuery } from "@/lib/features/channel/channelApi";
import { useAppSelector } from "@/lib/hooks";
import { formatNumberShort } from "@/utils/formatter";
import { clsx } from "clsx";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SimilarChannelsPage = () => {
  const { channelCategory, channelId } = useAppSelector(
    (state) => state.channel
  );
  const router = useRouter();

  const { data, isLoading } = useGetAllChannelsQuery(
    {
      page: 1,
      limit: 100,
      sortBy: "totalSubs",
      sortOrder: "desc",
      category: channelCategory,
    },
    {
      skip: !channelCategory,
    }
  );

  return (
    <div className="mt-6">
      <div className="border border-grey-base rounded-lg overflow-y-hidden shadow-card2">
        <table className="w-full overflow-x-scroll min-w-[560px]">
          <thead>
            <tr>
              <th className="pl-4 py-4 text-left text-sm !font-normal">
                Channel
              </th>
              <th className="py-4 text-left text-sm !font-normal">
                Total Subs
              </th>
              <th className="py-4 text-left text-sm !font-normal">
                Total Views
              </th>
              <th className="py-4 text-left text-sm !font-normal">Upload</th>
              <th className="py-4 text-left text-sm !font-normal">Country</th>
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
              {data?.data
                ?.filter((item) => item._id !== channelId)
                ?.map((item, i) => (
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
                    <td className="pl-4">
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
                    <td className="px-2">
                      {formatNumberShort(item?.totalVideos)}
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
  );
};

export default SimilarChannelsPage;
