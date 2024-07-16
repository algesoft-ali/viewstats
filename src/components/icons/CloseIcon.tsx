import { IIconParams } from "@/interfaces/common.interface";
import { FC } from "react";

const CloseIcon: FC<IIconParams> = ({
  size = 24,
  color = "#000",
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`lucide lucide-x ${className}`}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};

export default CloseIcon;
