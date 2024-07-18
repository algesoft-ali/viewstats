import { IIconParams } from "@/interfaces/common.interface";
import { FC } from "react";

const LinkedinIcon: FC<IIconParams> = ({
  size = 26,
  color = "#000",
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_12184_86953)">
        <path
          d="M22.2234 0.5H1.77187C0.792187 0.5 0 1.27344 0 2.22969V22.7656C0 23.7219 0.792187 24.5 1.77187 24.5H22.2234C23.2031 24.5 24 23.7219 24 22.7703V2.22969C24 1.27344 23.2031 0.5 22.2234 0.5ZM7.12031 20.9516H3.55781V9.49531H7.12031V20.9516ZM5.33906 7.93438C4.19531 7.93438 3.27188 7.01094 3.27188 5.87187C3.27188 4.73281 4.19531 3.80937 5.33906 3.80937C6.47813 3.80937 7.40156 4.73281 7.40156 5.87187C7.40156 7.00625 6.47813 7.93438 5.33906 7.93438ZM20.4516 20.9516H16.8937V15.3828C16.8937 14.0562 16.8703 12.3453 15.0422 12.3453C13.1906 12.3453 12.9094 13.7937 12.9094 15.2891V20.9516H9.35625V9.49531H12.7687V11.0609H12.8156C13.2891 10.1609 14.4516 9.20938 16.1813 9.20938C19.7859 9.20938 20.4516 11.5813 20.4516 14.6656V20.9516Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_12184_86953">
          <rect
            width="26"
            height="26"
            fill={color}
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LinkedinIcon;
