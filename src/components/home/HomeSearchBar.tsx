import SearchIcon from "../icons/SearchIcon";

const HomeSearchBar = () => {
  return (
    <div className="home_search_bar !w-[668px]">
      <div className="bg-background px-3 py-2 rounded-full flex items-center justify-between">
        <input
          type="text"
          placeholder="Search any YouTube Channel"
          className="w-full text-lg font-semibold bg-transparent outline-none text-grey-text placeholder:text-grey-dark px-4"
        />
        <button className="bg-primary rounded-full p-2 grid place-items-center text-white">
          <SearchIcon  />
        </button>
      </div>
    </div>
  );
};

export default HomeSearchBar;
