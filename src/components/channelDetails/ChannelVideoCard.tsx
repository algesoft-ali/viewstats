import { IVideo } from "@/interfaces/feature.interface";
import { formatNumberShort } from "@/utils/formatter";
import moment from "moment";
import Image from "next/image";
import { FC } from "react";

type IProps = {
  data: IVideo;
};

const ChannelVideoCard: FC<IProps> = ({ data }) => {
  const handleClick = () => {
    window.open(`https://www.youtube.com/watch?v=${data?.ytId}`);
  };

  return (
    <div
      className="rounded-lg px-2 py-3 hover:bg-grey-light duration-200 transition-all cursor-pointer"
      onClick={handleClick}
    >
      {data?.type === "long" ? (
        <div className="w-full h-[161px] overflow-hidden grid place-items-center rounded-lg">
          <Image
            src={data?.thumbnail}
            alt="image"
            width={290}
            height={161}
            className="object-cover block overflow-hidden rounded-lg"
          />
        </div>
      ) : (
        <div
          className="w-full h-[360px] rounded-lg overflow-hidden"
          style={{
            background: `url(${data?.thumbnail})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      )}

      <h6 className="text-lg font-medium mt-2">{data?.title}</h6>
      <div className="mt-3 flex items-center gap-2 text-grey-darker text-sm">
        <p>{formatNumberShort(data?.totalViews)} Views</p>
        <div className="bg-grey-darker h-1 w-1 rounded-full"></div>
        <p>{moment(data?.uploadDate).fromNow()}</p>
      </div>
    </div>
  );
};

export default ChannelVideoCard;
