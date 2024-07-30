import { IIconParams } from "@/interfaces/common.interface";
import { FC } from "react";

const FilterIcon: FC<IIconParams> = ({
  size = 24,
  color = "#000",
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 12 12"
      aria-label="filters icon"
    >
      <path
        fill="currentColor"
        d="M0 3a.6.6 0 0 1 .6-.6h10.8a.6.6 0 1 1 0 1.2H.6A.6.6 0 0 1 0 3ZM1.8 6a.6.6 0 0 1 .6-.6h7.2a.6.6 0 0 1 0 1.2H2.4a.6.6 0 0 1-.6-.6ZM4.8 8.4a.6.6 0 0 0 0 1.2h2.4a.6.6 0 0 0 0-1.2H4.8Z"
      ></path>
    </svg>
  );
};

export default FilterIcon;
