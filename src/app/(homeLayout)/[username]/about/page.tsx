"use client";

import ChannelDetailsCard from "@/components/channelDetails/ChannelDetailsCard";
import ChannelInfoCard from "@/components/channelDetails/ChannelInfoCard";
import { useGetChannelInfoQuery } from "@/lib/features/channel/channelApi";
import { formatNumberShort } from "@/utils/formatter";
import moment from "moment";
import Image from "next/image";
import { useParams } from "next/navigation";

const ChannelAboutPage = () => {
  const params = useParams();
  const username = params?.username as string;
  const { data } = useGetChannelInfoQuery(username, { skip: !username });
  return (
    <div className="mt-6">
      <div className="flex items-center gap-4">
        <ChannelDetailsCard className="py-8 flex flex-col items-center justify-center gap-4 w-full">
          <p className="text-xl font-semibold text-grey-darker">Views</p>
          <p className="text-4xl font-bold">
            {formatNumberShort(data?.data?.totalViews)}
          </p>
          <p className="text-center px-4 py-1 rounded-full border border-secondary-background font-semibold">
            #19
          </p>
        </ChannelDetailsCard>
        <ChannelDetailsCard className="py-8 flex flex-col items-center justify-center gap-4 w-full">
          <p className="text-xl font-semibold text-grey-darker">Subscribers</p>
          <p className="text-4xl font-bold">
            {formatNumberShort(data?.data?.totalSubscribers)}
          </p>
          <p className="text-center px-4 py-1 rounded-full border border-secondary-background font-semibold">
            #1
          </p>
        </ChannelDetailsCard>
        <ChannelDetailsCard className="py-8 flex flex-col items-center justify-center gap-4 w-full">
          <p className="text-xl font-semibold text-grey-darker">Country</p>
          <p className="text-4xl font-bold uppercase">
            {formatNumberShort(data?.data?.country)}
          </p>
          <p className="text-center px-4 py-1 rounded-full border border-secondary-background font-semibold">
            #1
          </p>
        </ChannelDetailsCard>
        <ChannelDetailsCard className="py-8 flex flex-col items-center justify-center gap-4 w-full">
          <p className="text-xl font-semibold text-grey-darker">Category</p>
          <p className="text-3xl font-bold">
            {formatNumberShort(data?.data?.category)}
          </p>
          <p className="text-center px-4 py-1 rounded-full border border-secondary-background font-semibold">
            #1
          </p>
        </ChannelDetailsCard>
      </div>

      <div className="bg-background border border-secondary-background shadow-card2 rounded-lg mt-6">
        <div className="flex items-center justify-evenly py-8 border-b border-secondary-background">
          <Image
            src={data?.data?.logo as string}
            alt="logo"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />

          <div className="text-center">
            <p className="text-lg text-grey-darker">Category</p>
            <p className="text-xl font-medium mt-2">
              {formatNumberShort(data?.data?.category)}
            </p>
          </div>

          <div className="text-center">
            <p className="text-lg text-grey-darker">Channel Age</p>
            <p className="text-xl font-medium mt-2">
              {/* remove ago words from the last */}
              {moment(data?.data?.createDate).fromNow().replace(" ago", "")}
            </p>
          </div>
        </div>

        <div className="px-16 py-12">
          <h4 className="text-3xl font-semibold mb-8">About</h4>
          <div
            className="details"
            dangerouslySetInnerHTML={{
              __html: data?.data?.description as string,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ChannelAboutPage;
