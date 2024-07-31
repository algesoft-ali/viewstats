import { useTheme } from "next-themes";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { ITopVideoFilter } from "./TopVideos";
import { categoryOptions, countryOptions } from "@/constants/filterOptions";
import clsx from "clsx";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import FilterIcon from "../icons/FilterIcon";
import YTIcon from "../icons/YTIcon";
import ShortsIcon from "../icons/ShortsIcon";

type IProps = {
  filter: ITopVideoFilter;
  setFilter: Dispatch<SetStateAction<ITopVideoFilter>>;
};

const TopVideosFilter: FC<IProps> = ({ filter, setFilter }) => {
  const { theme } = useTheme();
  const [filterOpen, setFilterOpen] = useState(true);

  const handleClear = () => {
    setFilter({
      type: "all",
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
          <div className="flex items-center w-full justify-between gap-3">
            <button
              className={clsx(
                "w-full rounded-lg border border-grey-base py-3 px-4 flex items-center gap-2 justify-center font-medium hover:bg-foreground hover:text-background duration-200 transition-all",
                filter.type === "all" && "bg-foreground text-background"
              )}
              onClick={() => setFilter(prev => ({...prev, type: "all"}))}
            >
              All
            </button>
            <button
              className={clsx(
                "w-full rounded-lg border border-grey-base py-3 px-4 flex items-center gap-2 justify-center font-medium hover:bg-foreground hover:text-background duration-200 transition-all",
                filter.type === "long" && "bg-foreground text-background"
              )}
              onClick={() => setFilter(prev => ({...prev, type: "long"}))}
            >
              <YTIcon color="#ff0000" size={20} /> Longs
            </button>
            <button
              className={clsx(
                "w-full rounded-lg border border-grey-base py-3 px-4 flex items-center gap-2 justify-center font-medium hover:bg-foreground hover:text-background duration-200 transition-all",
                filter.type === "short" && "bg-foreground text-background"
              )}
              onClick={() => setFilter(prev => ({...prev, type: "short"}))}
            >
              <ShortsIcon /> Shorts
            </button>
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
              {countryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
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
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopVideosFilter;
