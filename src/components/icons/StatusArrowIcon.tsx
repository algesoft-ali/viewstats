import { IIconParams } from "@/interfaces/common.interface";
import clsx from "clsx";
import { FC } from "react";

type IProps = IIconParams & {
  success: boolean;
};

const StatusArrowIcon: FC<IProps> = ({ size = 16, className, success }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 34 34"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className, success ? "rotate-180" : "")}
    >
      <path
        d="M16.5117 33.8367C25.6197 33.8367 33.0117 26.4447 33.0117 17.3367C33.0117 8.22873 25.6197 0.83673 16.5117 0.83673C7.40372 0.836729 0.0117193 8.22873 0.0117191 17.3367C0.0117189 26.4447 7.40372 33.8367 16.5117 33.8367ZM10.6872 17.2872C10.9347 17.0397 11.2482 16.9242 11.5617 16.9242C11.8752 16.9242 12.1887 17.0397 12.4362 17.2872L15.2742 20.1252L15.2742 11.5617C15.2742 10.8852 15.8352 10.3242 16.5117 10.3242C17.1882 10.3242 17.7492 10.8852 17.7492 11.5617L17.7492 20.1252L20.5872 17.2872C21.0657 16.8087 21.8577 16.8087 22.3362 17.2872C22.8147 17.7657 22.8147 18.5577 22.3362 19.0362L17.3862 23.9862C16.9077 24.4647 16.1157 24.4647 15.6372 23.9862L10.6872 19.0362C10.2087 18.5577 10.2087 17.7657 10.6872 17.2872Z"
        fill={success ? "#41b616" : "#ff0000"}
      />
    </svg>
  );
};

export default StatusArrowIcon;
