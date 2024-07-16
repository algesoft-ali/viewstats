import { IIconParams } from "@/interfaces/common.interface";
import { FC } from "react";

const ArrowDownIcon: FC<IIconParams> = ({
  size = 28,
  color = "#000",
  className,
}) => {
  return (
    <svg
      width="13"
      height="6"
      viewBox="0 0 13 6"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.04886 6C5.56034 6 5.07183 5.81157 4.70195 5.4417L0.151789 0.891542C-0.0505963 0.689157 -0.0505963 0.354174 0.151789 0.151789C0.354174 -0.0505963 0.689157 -0.0505963 0.891542 0.151789L5.4417 4.70194C5.77669 5.03692 6.32103 5.03692 6.65602 4.70194L11.2062 0.151789C11.4086 -0.0505963 11.7436 -0.0505963 11.946 0.151789C12.1483 0.354174 12.1483 0.689157 11.946 0.891542L7.39577 5.4417C7.02589 5.81157 6.53738 6 6.04886 6Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDownIcon;
