"use client";

import {
  setDateFilter,
  setFilterType,
} from "@/lib/features/channel/channelSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import clsx from "clsx";
import ChannelDetailsCard from "./ChannelDetailsCard";
import ViewsChart from "./ViewsChart";
import moment from "moment";

const dateFilterOptions = [
  {
    label: "7D",
    startDate: moment().subtract(7, "days").format("YYYY-MM-DD"),
    endDate: moment().subtract(1, "days").format("YYYY-MM-DD"),
  },
  {
    label: "28D",
    startDate: moment().subtract(28, "days").format("YYYY-MM-DD"),
    endDate: moment().subtract(1, "days").format("YYYY-MM-DD"),
  },
  {
    label: "3M",
    startDate: moment().subtract(3, "months").format("YYYY-MM-DD"),
    endDate: moment().subtract(1, "days").format("YYYY-MM-DD"),
  },
  {
    label: "1Y",
    startDate: moment().subtract(1, "years").format("YYYY-MM-DD"),
    endDate: moment().subtract(1, "days").format("YYYY-MM-DD"),
  },
];

const ChannelChart = () => {
  const dispatch = useAppDispatch();
  const { type, startDate, endDate } = useAppSelector((state) => state.channel);

  return (
    <ChannelDetailsCard className="mt-6">
      <div className="flex items-center justify-between">
        {/* Type Filter */}
        <div className="flex items-center gap-3">
          <button
            className={clsx(
              "text-2xl",
              type === "views" ? "text-grey-text" : "text-grey-dark"
            )}
            onClick={() => dispatch(setFilterType("views"))}
          >
            Views
          </button>
          <div className="h-6 w-[1px] bg-secondary-background"></div>
          <button
            className={clsx(
              "text-2xl",
              type === "subscribers" ? "text-grey-text" : "text-grey-dark"
            )}
            onClick={() => dispatch(setFilterType("subscribers"))}
          >
            Subscribers
          </button>
        </div>

        {/* Date Filter Options */}
        <div className="flex items-center gap-3">
          {dateFilterOptions.map((option) => (
            <button
              key={option.label}
              className={clsx(
                "py-2 px-4 border border-secondary-background grid place-items-center rounded-lg text-sm shadow-card2 hover:shadow-card duration-200 transition-all",
                option.startDate === startDate
                  ? "bg-foreground text-background"
                  : ""
              )}
              onClick={() =>
                dispatch(
                  setDateFilter({
                    startDate: option.startDate,
                    endDate: option.endDate,
                  })
                )
              }
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">{type === "views" && <ViewsChart />}</div>
    </ChannelDetailsCard>
  );
};

export default ChannelChart;
