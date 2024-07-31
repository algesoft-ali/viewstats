import { IIconParams } from "@/interfaces/common.interface";
import { FC } from "react";

const ShortsIcon: FC<IIconParams> = ({ size = 20, color = "#ff0000", className }) => {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 12 12"
      aria-label="shorts fill icon"
    >
      <path
        fill={color}
        d="M9.473 4.995a.37.37 0 0 1-.031-.667l.169-.09a2.24 2.24 0 0 0 .937-3.04A2.253 2.253 0 0 0 7.503.263l-5.1 2.702a2.252 2.252 0 0 0 .132 4.049c.296.098.306.52.03.665l-.162.085A2.255 2.255 0 0 0 1.22 9.747 2.264 2.264 0 0 0 3.472 12c.363 0 .719-.087 1.04-.254l5.106-2.703a2.247 2.247 0 0 0 .8-3.261 2.264 2.264 0 0 0-.945-.787Zm-4.08 2.289a.4.4 0 0 1-.587-.354V5.077a.4.4 0 0 1 .587-.354l1.75.927a.4.4 0 0 1 0 .707l-1.75.927Z"
      ></path>
    </svg>
  );
};

export default ShortsIcon;
