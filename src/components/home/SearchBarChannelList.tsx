import useDebounce from "@/hooks/useDebounce";
import { IChannel } from "@/interfaces/feature.interface";
import { useGetAllChannelsQuery } from "@/lib/features/channel/channelApi";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type IProps = {
  searchInput?: string;
};

const SearchBarChannelList: FC<IProps> = ({ searchInput }) => {
  const debouncedSearch = useDebounce(searchInput as string);
  const { data, isLoading } = useGetAllChannelsQuery(
    {
      search: debouncedSearch,
      limit: 20,
    },
    {
      skip: !debouncedSearch,
    }
  );
  return (
    <div
      className={clsx(
        "overflow-y-auto scrollbar_hidden transition-all duration-200",
        debouncedSearch ? "h-60 border-t border-secondary-background" : "h-0"
      )}
    >
      {isLoading ? (
        <div className="h-full grid place-items-center">
          <p className="text-center font-semibold">Loading...</p>
        </div>
      ) : !data?.meta?.total ? (
        <div className="h-full grid place-items-center">
          <p className="text-center font-semibold">No Channel Found</p>
        </div>
      ) : (
        <>
          {data?.data?.map((item: IChannel, i) => (
            <Link
              key={item?._id}
              href={`/${item?.username}/channelytics`}
              className={clsx(
                "flex items-center justify-start gap-3 px-8 py-2 hover:bg-grey-light duration-200 transition-all",
                i !== 0 && "border-t border-secondary-background"
              )}
            >
              <Image
                src={item?.logo as string}
                alt="image"
                width={40}
                height={40}
                className="object-cover block rounded-lg"
                priority
              />
              <div>
                <p className="font-semibold">{item?.name}</p>
                <p className="text-grey-dark text-sm">@{item?.username}</p>
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default SearchBarChannelList;
