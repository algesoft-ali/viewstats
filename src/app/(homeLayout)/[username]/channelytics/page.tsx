import ChannelyticsTop from "@/components/channelDetails/ChannelyticsTop";
import DailySubscribersChart from "@/components/channelDetails/DailySubscribersChart";
import DailyViewsChart from "@/components/channelDetails/DailyViewsChart";

const ChannelyticsPage = () => {
  return (
    <>
      <ChannelyticsTop />
      <DailyViewsChart />
      <DailySubscribersChart />
    </>
  );
};

export default ChannelyticsPage;
