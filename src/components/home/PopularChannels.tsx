import { IChannel } from "@/interfaces/feature.interface";
import { useGetPopularChannelsQuery } from "@/lib/features/channel/channelApi";
import Image from "next/image";
import Link from "next/link";

const PopularChannels = () => {
  const { data } = useGetPopularChannelsQuery({});

  return (
    <div className="max-md:px-4 w-full md:!w-[668px]">
      <h5 className="font-semibold">Popular Channels</h5>

      <div className="mt-3 flex items-center gap-4 flex-wrap">
        {data?.data?.map((item: IChannel, i: number) => (
          <Link
            href={`/${item?.username}/channelytics`}
            key={i}
            className="rounded-lg py-1.5 px-3 border border-grey-base hover:bg-secondary-background flex items-center gap-3 duration-200 cursor-pointer"
          >
            <Image
              src={item?.logo as string}
              alt="image"
              width={40}
              height={40}
              className="object-cover block rounded-lg"
            />
            <p>{item?.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularChannels;
