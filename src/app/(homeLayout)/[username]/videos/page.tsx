"use client";

import ChannelDetailsCard from "@/components/channelDetails/ChannelDetailsCard";
import ChannelVideoCard from "@/components/channelDetails/ChannelVideoCard";
import SearchIcon from "@/components/icons/SearchIcon";
import Loading from "@/components/shared/Loading";
import useDebounce from "@/hooks/useDebounce";
import { useGetAllVideosQuery } from "@/lib/features/video/videoApi";
import { useAppSelector } from "@/lib/hooks";
import clsx from "clsx";
import { useState } from "react";

type IFilter = {
  type: string;
  search: string;
  sort: string;
};

const sortOptions = [
  {
    label: "Most Recent",
    value: "-uploadDate",
  },
  {
    label: "Most Popular",
    value: "-totalViews",
  },
  {
    label: "Oldest",
    value: "uploadDate",
  },
];

const ChannelVideos = () => {
  const { channelId } = useAppSelector((state) => state.channel);
  const [filter, setFilter] = useState<IFilter>({
    type: "long",
    search: "",
    sort: "-uploadDate",
  });
  const debouncedSearch = useDebounce(filter.search);

  const { data, isLoading } = useGetAllVideosQuery(
    {
      page: 1,
      limit: 100,
      type: filter.type,
      search: debouncedSearch,
      sortBy: filter.sort.startsWith("-")
        ? filter.sort.replace("-", "")
        : filter.sort,
      sortOrder: filter.sort.startsWith("-") ? "desc" : "asc",
      channel: channelId,
    },
    {
      skip: !channelId,
    }
  );

  return (
    <ChannelDetailsCard className="mt-6">
      {/* Sort & Filtering */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            className={clsx(
              "py-3 px-4 rounded-lg border border-grey-base duration-200 transition-all text-sm font-medium hover:backdrop-saturate-50",
              filter.type === "long" ? "bg-foreground text-background" : ""
            )}
            onClick={() => setFilter((prev) => ({ ...prev, type: "long" }))}
          >
            Longs
          </button>
          <button
            className={clsx(
              "py-3 px-4 rounded-lg border border-grey-base duration-200 transition-all text-sm font-medium hover:backdrop-saturate-50",
              filter.type === "short" ? "bg-foreground text-background" : ""
            )}
            onClick={() => setFilter((prev) => ({ ...prev, type: "short" }))}
          >
            Shorts
          </button>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-grey-base rounded-full px-4 py-2.5 flex items-center justify-between text-grey-darker">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search for a video..."
              className="w-full text-lg bg-transparent outline-none text-grey-text placeholder:text-grey-dark px-4 placeholder:text-sm"
              value={filter.search}
              onChange={(e) =>
                setFilter((prev) => ({ ...prev, search: e.target.value }))
              }
            />
          </div>
          <select
            name="sort"
            className="block outline-none border border-grey-base rounded-lg py-3 px-4 mt-2 cursor-pointer"
            value={filter.sort}
            onChange={(e) =>
              setFilter((prev) => ({ ...prev, sort: e?.target?.value }))
            }
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* All Videos Card */}
      {isLoading ? (
        <Loading className="h-[500px] mt-6" />
      ) : !data?.meta?.total ? (
        <div className="h-96 grid place-items-center">
          <p className="text-lg font-semibold">No videos found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
          {data?.data?.map((item, i) => (
            <ChannelVideoCard key={i} data={item} />
          ))}
        </div>
      )}
    </ChannelDetailsCard>
  );
};

export default ChannelVideos;
