"use client";

import { topListOptions } from "@/components/shared/Navbar";
import TopChannels from "@/components/topList/TopChannels";
import TopVideos from "@/components/topList/TopVideos";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const TopListPage = ({
  searchParams,
}: {
  searchParams: { category: string };
}) => {
  const category = searchParams.category;
  const router = useRouter();

  return (
    <div className="py-16 container">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 mb-6">
          {topListOptions?.map((item, i) => (
            <button
              key={item.key}
              className={clsx(
                "py-4 px-6 border border-secondary-background grid place-items-center rounded-full text-sm  font-semibold hover:shadow-card duration-200 transition-all",
                category === item.key
                  ? "bg-black dark:bg-white text-background"
                  : ""
              )}
              onClick={() => router.replace(item.link)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <h6 className="text-lg font-semibold">All Time</h6>
      </div>

      {category === "channels" ? (
        <TopChannels />
      ) : category === "videos" ? (
        <TopVideos />
      ) : null}
    </div>
  );
};

export default TopListPage;
