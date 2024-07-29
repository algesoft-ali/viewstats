"use client";

import { IDailySubscriber } from "@/interfaces/feature.interface";
import { useGetChannelDailySubscribersQuery } from "@/lib/features/channel/channelApi";
import { useAppSelector } from "@/lib/hooks";
import { formatNumberShort, formatNumberWithCommas } from "@/utils/formatter";
import clsx from "clsx";
import ReactECharts from "echarts-for-react";
import moment from "moment";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import StatusArrowIcon from "../icons/StatusArrowIcon";
import ChannelDetailsCard from "./ChannelDetailsCard";

const DailySubscribersChart = () => {
  // ----- State
  const { theme } = useTheme();
  const { channelId, channelLoading, channelName } = useAppSelector(
    (state) => state.channel
  );
  const [lastItem, setLastItem] = useState<IDailySubscriber | null>(null);
  const [dailySubs, setDailySubs] = useState<IDailySubscriber | []>([]);

  // ----- data fetching
  const { data, isLoading } = useGetChannelDailySubscribersQuery(
    {
      startDate: moment().subtract(28, "days").format("YYYY-MM-DD"),
      endDate: moment().subtract(1, "days").format("YYYY-MM-DD"),
      channel: channelId,
    },
    {
      skip: !channelId,
    }
  );

  useEffect(() => {
    if (data?.data?.length) {
      setLastItem(data?.data[data?.data?.length - 1]);
    }
  }, [data?.data]);

  // ----- chart options
  const option: echarts.EChartsOption = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: data?.data?.map((item) => item?.date) as any[],
      axisLabel: {
        formatter: (value: string) => {
          return moment(value).format("DD");
        },
      },
    },
    yAxis: {
      type: "value",
      position: "right",
      axisLabel: {
        formatter: (value: number) => {
          return formatNumberShort(value);
        },
      },
      startValue: data?.data[0]?.subscribers,
      splitLine: {
        lineStyle: {
          color: theme === "light" ? "#f1f3f4" : "#ffffff1a",
        },
      },
    },
    series: [
      {
        data: data?.data?.map((item) => item.subscribers) as number[],
        type: "line",
        lineStyle: {
          width: 3,
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(255, 0, 0, .5)", // start color
              },
              {
                offset: 1,
                color: "rgba(255, 0, 0, 0)", // end color
              },
            ],
            global: false,
          },
        },
      },
    ],
    tooltip: {
      trigger: "axis",
      backgroundColor: theme === "light" ? "white" : "black",
      borderColor: theme === "light" ? "#f1f3f4" : "#fff3",
      formatter: function (params: any) {
        const item = data?.data[params[0].dataIndex];
        const formattedDate = moment(item?.date).format("ll");
        return item
          ? `<div style="display: flex; align-items: center; gap: 40px;">
                 <div>
                   <p class="!text-xs text-grey-darker font-medium">${formattedDate}</p>
                   <p class="text-foreground text-lg font-bold">${formatNumberWithCommas(
                     item?.subscribers
                   )}</p>
                 </div>
                 <p style="color: ${
                   item?.rate === 0
                     ? "gray"
                     : item?.rate > 0
                     ? "#41b616"
                     : "red"
                 }; font-weight: 500;">${item?.rate}%</p>
               </div>`
          : "";
      },
    },
    grid: {
      left: "1%",
      right: "2%",
      bottom: "3%",
      containLabel: true,
    },
    color: ["#ff0000"],
  };

  return (
    <ChannelDetailsCard className="mt-6">
      <h6 className="text-xl mb-6">Daily Subscribers for <strong>{channelName}</strong></h6>
      <h5 className="font-semibold text-2xl">
        {formatNumberWithCommas(lastItem?.subscribers || 0)}
      </h5>
      <div className="flex items-center gap-2 text-xs font-semibold mt-1">
        <StatusArrowIcon success={(lastItem?.rate as any) > 0} />
        <p
          className={clsx(
            lastItem?.rate === 0
              ? "text-grey-dark"
              : (lastItem?.rate as any) > 0
              ? "text-[#41b616]"
              : "text-red-500",
            ""
          )}
        >
          {formatNumberShort(lastItem?.subscribers || 0)} ({lastItem?.rate || 0}%)
        </p>
        <p className="text-grey-dark">Past 28 days</p>
      </div>
      <ReactECharts
        style={{
          height: "500px",
        }}
        option={option}
        showLoading={isLoading || channelLoading}
        loadingOption={{
          text: "Loading",
          color: "#ff0000",
          textColor: "#000",
          maskColor: "rgba(255, 255, 255, 0.8)",
          fontSize: 14,
        }}
      />
    </ChannelDetailsCard>
  );
};

export default DailySubscribersChart;
