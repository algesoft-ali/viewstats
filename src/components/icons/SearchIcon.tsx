import { IIconParams } from "@/interfaces/common.interface";
import { FC } from "react";

const SearchIcon: FC<IIconParams> = ({
  size = 28,
  color = "#000",
  className,
}) => {
  return (
    <svg
      width={27}
      height={26}
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0835 4.33317C7.89534 4.33317 4.50016 7.72834 4.50016 11.9165C4.50016 16.1047 7.89534 19.4998 12.0835 19.4998C16.2717 19.4998 19.6668 16.1047 19.6668 11.9165C19.6668 7.72834 16.2717 4.33317 12.0835 4.33317ZM2.3335 11.9165C2.3335 6.53173 6.69872 2.1665 12.0835 2.1665C17.4683 2.1665 21.8335 6.53173 21.8335 11.9165C21.8335 17.3013 17.4683 21.6665 12.0835 21.6665C6.69872 21.6665 2.3335 17.3013 2.3335 11.9165Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8173 17.6503C18.2404 17.2272 18.9263 17.2272 19.3494 17.6503L23.6827 21.9836C24.1058 22.4067 24.1058 23.0926 23.6827 23.5157C23.2596 23.9388 22.5737 23.9388 22.1506 23.5157L17.8173 19.1824C17.3942 18.7593 17.3942 18.0734 17.8173 17.6503Z"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
