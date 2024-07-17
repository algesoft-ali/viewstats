"use client";

import { useGetChannelInfoQuery } from "@/lib/features/channel/channelApi";
import { formatNumberWithCommas } from "@/utils/formatter";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC } from "react";
import ChannelDetailsCard from "./ChannelDetailsCard";

type IProps = {
  username: string;
};

const tabLinks = [
  {
    label: "Channelytics",
    path: "/channelytics",
  },
  {
    label: "Videos",
    path: "/videos",
  },
  {
    label: "Projections",
    path: "/projections",
  },
  {
    label: "Similar Channels",
    path: "/similar-channels",
  },
  {
    label: "About",
    path: "/about",
  },
];

const ChannelInfoCard: FC<IProps> = ({ username }) => {
  const { data } = useGetChannelInfoQuery(username, { skip: !username });
  const pathname = usePathname();

  return (
    <ChannelDetailsCard>
      <div className="flex items-center justify-between">
        {/* Name and logo */}
        <div className="flex items-center gap-4">
          <Image
            src={data?.data?.logo as string}
            alt="logo"
            width={110}
            height={110}
            className="object-cover rounded-lg"
            priority
          />
          <div>
            <div className="flex items-center gap-4">
              <h3 className="text-3xl font-semibold">{data?.data?.name}</h3>
              <Image
                src={`https://flagcdn.com/w40/${data?.data?.country}.png`}
                alt="flag"
                width={30}
                height={30}
                className="object-cover"
              />
            </div>
            <div className="flex items-center mt-2 gap-4">
              <a
                href={`http://youtube.com/@${data?.data?.username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-grey-darker font-semibold">
                  @{data?.data?.username}
                </p>
              </a>
              <p className="text-grey-dark">
                {formatNumberWithCommas(data?.data?.totalVideos)} videos
              </p>
            </div>
          </div>
        </div>

        {/* Subscribers & Views */}
        <div className="flex items-center gap-8">
          <div className="text-end">
            <p>Subscribers</p>
            <h4 className="font-bold text-2xl mt-2">
              {formatNumberWithCommas(data?.data?.totalSubscribers)}
            </h4>
          </div>
          <div className="h-16 w-[1px] bg-secondary-background"></div>
          <div className="text-end">
            <p>Total Views</p>
            <h4 className="font-bold text-2xl mt-2">
              {formatNumberWithCommas(data?.data?.totalViews)}
            </h4>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6 flex items-center gap-4 w-full">
        {tabLinks.map((item, i) => (
          <Link
            href={`/${username}${item.path}`}
            key={i}
            className={clsx(
              "w-full py-3 text-center rounded-lg text-lg font-medium duration-200 transition-all",
              pathname === `/${username}${item.path}`
                ? "text-white dark:text-background bg-primary dark:bg-grey-text"
                : "text-grey-darker bg-grey-base hover:text-white dark:hover:text-background hover:bg-primary dark:hover:bg-grey-text"
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </ChannelDetailsCard>
  );
};

export default ChannelInfoCard;
