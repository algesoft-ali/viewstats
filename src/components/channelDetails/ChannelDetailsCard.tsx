import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

type IProps = PropsWithChildren & {
  className?: string;
};

const ChannelDetailsCard: FC<IProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "bg-background border border-secondary-background px-6 py-4 shadow-card2 rounded-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ChannelDetailsCard;
