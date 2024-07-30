import { useTheme } from "next-themes";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import FilterIcon from "../icons/FilterIcon";
import { Dispatch, FC, SetStateAction, useState } from "react";
import clsx from "clsx";
import { ITopChannelFilter } from "./TopChannels";

type IProps = {
  filter: ITopChannelFilter;
  setFilter: Dispatch<SetStateAction<ITopChannelFilter>>;
};

const TopChannelsFilter: FC<IProps> = ({ filter, setFilter }) => {
  const { theme } = useTheme();
  const [filterOpen, setFilterOpen] = useState(true);

  const handleClear = () => {
    setFilter({
      type: "totalSubscribers",
      category: "all",
      country: "all",
    });
  };

  return (
    <div className="border rounded-lg border-grey-base overflow-hidden shadow-card2 hover:shadow-card duration-200 transition-all">
      <div
        className="px-4 py-4 flex items-center justify-between cursor-pointer"
        onClick={() => setFilterOpen((prev) => !prev)}
      >
        <div className="flex items-center gap-4 font-medium">
          <FilterIcon />
          <p>Filters</p>
        </div>
        <ArrowDownIcon
          color={theme === "light" ? "#ababab" : "#747575"}
          className={clsx(
            filterOpen ? "rotate-180" : "",
            "duration-150 transition-all"
          )}
        />
      </div>
      <div
        className={clsx(
          "duration-200 transition-all",
          filterOpen ? "max-h-[600px] border-t border-grey-base" : "max-h-0"
        )}
      >
        <div className="flex flex-col gap-6 px-4 py-6">
          <button
            className="border border-grey-dark rounded-lg py-3 w-full font-semibold"
            onClick={handleClear}
          >
            Clear
          </button>

          {/* Type */}
          <div>
            <label htmlFor="type" className="font-semibold">
              Type
            </label>
            <select
              name="type"
              className="block outline-none border border-grey-base rounded-lg py-3 px-4 w-full mt-2 cursor-pointer"
              value={filter.type}
              onChange={(e) =>
                setFilter((prev) => ({ ...prev, type: e?.target?.value }))
              }
            >
              <option value="totalSubscribers">Most Subscribers</option>
              <option value="totalViews">Most Views</option>
            </select>
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country" className="font-semibold">
              Country
            </label>
            <select
              name="country"
              className="block outline-none border border-grey-base rounded-lg py-3 px-4 w-full mt-2 cursor-pointer"
              value={filter.country}
              onChange={(e) =>
                setFilter((prev) => ({ ...prev, country: e?.target?.value }))
              }
            >
              <option value="all">All</option>
              <option value="us">United States</option>
              <option value="in">India</option>
              <option value="bd">Bangladesh</option>
              <option value="de">Germany</option>
              <option value="jp">Japan</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="font-semibold">
              Category
            </label>
            <select
              name="category"
              className="block outline-none border border-grey-base rounded-lg py-3 px-4 w-full mt-2 cursor-pointer"
              value={filter.category}
              onChange={(e) =>
                setFilter((prev) => ({ ...prev, category: e?.target?.value }))
              }
            >
              <option value="all">All</option>
              <option value="entertainment">Entertainment</option>
              <option value="comedy">Comedy</option>
              <option value="education">Education</option>
              <option value="music">Music</option>
              <option value="gaming">Gaming</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopChannelsFilter;
