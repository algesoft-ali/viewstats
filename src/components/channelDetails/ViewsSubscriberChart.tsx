"use client";

import moment from "moment";
import ChannelDetailsCard from "./ChannelDetailsCard";
import ReactECharts from "echarts-for-react";
import { formatNumberShort, formatNumberWithCommas } from "@/utils/formatter";

const ViewsSubscriberChart = () => {
  const option = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "2024-07-11T17:59:59.999Z",
        "2024-07-12T17:59:59.999Z",
        "2024-07-13T17:59:59.999Z",
        "2024-07-14T17:59:59.999Z",
        "2024-07-15T17:59:59.999Z",
        "2024-07-16T17:59:59.999Z",
        "2024-07-17T17:59:59.999Z",
      ],
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
        data: [820, 932, 901, 934, 1290, 1330, 1320],
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
        const formattedDate = moment(params[0].axisValue).format("ll");
        const yAxisValue = params[0].value;
        return `<div style="display: flex; align-items: center; gap: 40px;">
                <div>
                  <p class="text-grey-darker font-medium">${formattedDate}</p>
                  <p class="text-black text-lg font-bold">${formatNumberWithCommas(yAxisValue)}</p>
                </div>
                <p style="color: green;">38.96%</p>
              </div>`;
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
    <ChannelDetailsCard className="mt-6">
      <div className="flex items-center justify-between"></div>

      <ReactECharts option={option} />
    </ChannelDetailsCard>
  );
};

export default ViewsSubscriberChart;
