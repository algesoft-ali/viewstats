import { useState } from "react";
import SearchIcon from "../icons/SearchIcon";
import CloseIcon from "../icons/CloseIcon";
import SearchBarChannelList from "./SearchBarChannelList";

const HomeSearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="home_search_bar w-full md:!w-[668px] transition-all duration-200">
      <div className="bg-background rounded-[34px] overflow-hidden transition-all duration-200">
        <div className=" px-3 py-2  flex items-center justify-between gap-3">
          <input
            type="text"
            placeholder="Search any YouTube Channel"
            className="w-full text-lg font-semibold bg-transparent outline-none text-grey-text placeholder:text-grey-dark px-4"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          {searchInput && (
            <button
              className="grid place-items-center"
              onClick={() => setSearchInput("")}
            >
              <CloseIcon />
            </button>
          )}
          <button className="bg-primary rounded-full p-2 grid place-items-center text-white">
            <SearchIcon />
          </button>
        </div>

        <SearchBarChannelList searchInput={searchInput} />
      </div>
    </div>
  );
};

export default HomeSearchBar;
