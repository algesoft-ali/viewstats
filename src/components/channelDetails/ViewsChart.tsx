"use client";

import { useGetChannelDailyViewsQuery } from "@/lib/features/channel/channelApi";
import { useAppSelector } from "@/lib/hooks";
import { formatNumberShort, formatNumberWithCommas } from "@/utils/formatter";
import ReactECharts from "echarts-for-react";
import moment from "moment";

const ViewsChart = () => {
  const { channelId, startDate, endDate, channelLoading } = useAppSelector(
    (state) => state.channel
  );

  const { data, isLoading } = useGetChannelDailyViewsQuery(
    {
      startDate,
      endDate,
      channel: channelId,
    },
    {
      skip: !channelId || !startDate || !endDate,
    }
  );

  const option = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: data?.data?.map((item) => item?.date),
      axisLabel: {
        formatter: (value: string) => {
          return moment(value).format("DD");
        },
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: (value: number) => {
          return formatNumberShort(value);
        },
      },
    },
    series: [
      {
        data: data?.data?.map((item) => item.views) as number[],
        type: "line",
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

      formatter: function (params: any) {
        const item = data?.data[params[0].dataIndex];
        const formattedDate = moment(item?.date).format("ll");
        return item
          ? `<div style="display: flex; align-items: center; gap: 40px;">
                <div>
                  <p class="text-grey-darker font-medium">${formattedDate}</p>
                  <p class="text-black text-lg font-bold">${formatNumberWithCommas(
                    item?.views
                  )}</p>
                </div>
                <p style="color: ${
                  item?.rate === 0 ? "gray" : item?.rate > 0 ? "green" : "red"
                };">${item?.rate}%</p>
              </div>`
          : "";
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    color: ["#ff0000"],
  };

  return (
    <ReactECharts
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
  );
};

export default ViewsChart;
