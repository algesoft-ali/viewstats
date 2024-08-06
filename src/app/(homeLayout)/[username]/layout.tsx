"use client";

import ChannelInfoCard from "@/components/channelDetails/ChannelInfoCard";
import Loading from "@/components/shared/Loading";
import { useGetChannelInfoQuery } from "@/lib/features/channel/channelApi";
import { FC, PropsWithChildren } from "react";

type IProps = PropsWithChildren & {
  params: { username: string };
};

const ChannelDetailsLayout: FC<IProps> = ({ children, params }) => {
  const username = params?.username;
  const { data, isLoading } = useGetChannelInfoQuery(username, {
    skip: !username,
  });

  return (
    <div className="container py-12">
      {isLoading ? (
        <Loading className="w-full h-[calc(100vh-300px)]"></Loading>
      ) : (
        <>
          <ChannelInfoCard data={data?.data as any} username={username} />
          {children}
        </>
      )}
    </div>
  );
};

export default ChannelDetailsLayout;
