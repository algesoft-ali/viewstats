import clsx from "clsx";
import { FC } from "react";

type IProps = {
  className?: string;
};

const Loading: FC<IProps> = ({ className }) => {
  return (
    <div className={clsx(className, "min-h-20 grid place-items-center")}>
      <div className="loading"></div>
    </div>
  );
};

export default Loading;
