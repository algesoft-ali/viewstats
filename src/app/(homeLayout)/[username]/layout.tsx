import ChannelInfoCard from "@/components/channelDetails/ChannelInfoCard";
import { FC, PropsWithChildren } from "react";

type IProps = PropsWithChildren & {
  params: { username: string };
};

const ChannelDetailsLayout: FC<IProps> = ({ children, params }) => {
  const username = params?.username;
  return (
    <div className="container py-12">
      <ChannelInfoCard username={username} />
      {children}
    </div>
  );
};

export default ChannelDetailsLayout;
