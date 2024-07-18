import ArrowDownIcon from "../icons/ArrowDownIcon";
import ChannelChart from "./ChannelChart";
import ChannelDetailsCard from "./ChannelDetailsCard";

const ChannelyticsTop = () => {
  return (
    <div className="my-6 grid grid-cols-12 items-start gap-6">
      {/* Left Side */}
      <div className="col-span-8">
        {/* Top 3 Cards */}
        <div className="flex items-center gap-4">
          <ChannelDetailsCard className="w-full">
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold">Views</p>
              <p className="text-3xl font-semibold">2B</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-grey-dark text-sm">Last 28 days</p>
              <div className="bg-primary text-white flex items-center gap-2 px-3 py-1 rounded-full text-sm">
                1.25B
              </div>
            </div>
          </ChannelDetailsCard>
          <ChannelDetailsCard className="w-full">
            <div className="flex items-center justify-between">
              <p className="text-xl font-semibold">Subs</p>
              <p className="text-3xl font-semibold">18M</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-grey-dark text-sm">Last 28 days</p>
              <div className="bg-primary text-white flex items-center gap-2 px-3 py-1 rounded-full text-sm">
                1.25B
              </div>
            </div>
          </ChannelDetailsCard>
          <ChannelDetailsCard className="w-full">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">EST REV</p>
              <p className="text-2xl font-semibold">$2.4M-6.8M</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-grey-dark text-sm">Last 28 days</p>
              <div className="bg-primary text-white flex items-center gap-2 px-3 py-1 rounded-full text-sm">
                1.25B
              </div>
            </div>
          </ChannelDetailsCard>
        </div>

        {/* Graph/Chart */}
        <ChannelChart />
      </div>

      {/* Right Side */}
      <div className="col-span-4">
        <ChannelDetailsCard>
          <p className="text-grey-darker font-semibold mb-4">
            Most Recent Video
          </p>
          <div className="w-full h-[210px] bg-[url('https://i.ytimg.com/vi_webp/4SNThp0YiU4/hqdefault.webp')] rounded-lg bg-cover bg-center"></div>
          <div className="flex flex-col gap-3 mt-4">
            <p className="font-medium">50 YouTubers Fight For $1,000,000</p>
            <p className="text-grey-dark text-sm">First 4 days and 12 hours</p>
            <div className="flex items-center justify-between">
              <p>Estimated Rank by Views</p>
              <div className="flex items-center gap-2">
                1 of 10 <ArrowDownIcon className="-rotate-90" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p>Total Views</p>
              <p>140M </p>
            </div>

            <button className="w-full py-2 bg-primary text-white rounded-lg hover:saturate-50 duration-200 transition-all">
              More Video Analytics
            </button>
          </div>
        </ChannelDetailsCard>
      </div>
    </div>
  );
};

export default ChannelyticsTop;
