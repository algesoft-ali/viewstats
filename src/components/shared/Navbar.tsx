"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import clsx from "clsx";
import YTIcon from "../icons/YTIcon";
import SelectMenu from "./SelectMenu";
import { useAppSelector } from "@/lib/hooks";
import { useGetUserQuery } from "@/lib/features/user/userApi";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";

export const topListOptions = [
  {
    label: "Top Channels",
    link: "/top-list?category=channels",
    key: "channels",
  },
  {
    label: "Top Videos",
    link: "/top-list?category=videos",
    key: "videos",
  },
];

const moreToolOptions = [
  {
    label: "Compare",
    link: "/",
  },
  {
    label: "MrBeast Live Subscriber Count",
    link: "/",
  },
  {
    label: "Chrome Extension",
    link: "/",
  },
  {
    label: "Vid Summit",
    link: "/",
  },
];

const Navbar = () => {
  const [logoPath, setLogoPath] = useState("/images/logo.svg");
  const windowWidth = useWindowWidth();

  const { theme, setTheme } = useTheme();
  const { user } = useAppSelector((state) => state.user);

  const {} = useGetUserQuery(
    {},
    {
      skip: getCookie("accessToken") ? false : true,
    }
  );

  useEffect(() => {
    if (theme === "light") {
      setLogoPath("/images/logo.svg");
    } else {
      setLogoPath("/images/logo_white.svg");
    }
  }, [theme]);

  return (
    <nav className="py-3 px-6 sticky top-0 z-[99] bg-background/50 backdrop-blur-md">
      <div className="max-w-[1920px] flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link href="/">
            {windowWidth > 768 ? (
              <Image
                src={logoPath}
                alt="Logo"
                width={270}
                height={50}
                className="cursor-pointer"
                priority
              />
            ) : (
              <Image
                src="/images/logo_icon.svg"
                alt="Logo"
                width={40}
                height={40}
                className="cursor-pointer rounded-full"
                priority
              />
            )}
          </Link>
          <SelectMenu
            label="Top Lists"
            options={topListOptions}
            className="hidden lg:block"
          />
          <SelectMenu
            label="More Tools"
            options={moreToolOptions}
            className="hidden lg:block min-w-60"
          />
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden xl:flex text-white bg-[#4262ff] hover:bg-[#334dcc] items-center gap-2 px-6 py-2.5 rounded-lg font-bold transition-all duration-200">
            <span>Pro Tools</span>
            <span className="font-normal bg-[#5c71d6] px-2 py-.5 rounded-full text-sm">
              New
            </span>
          </button>
          {user ? (
            <div className="flex items-center gap-3 px-2 border border-grey-base py-1 rounded-lg hover:shadow-button duration-200 transition-all cursor-pointer">
              <Image
                src={user?.avatar as string}
                alt="image"
                width={40}
                height={40}
                className="object-cover block rounded-lg"
              />
              <div>
                <p>{user.name}</p>
                <p className="text-xs text-grey-dark">{user.email}</p>
              </div>
            </div>
          ) : (
            <Link href="/login">
              <button className="flex items-center gap-4 px-6 border border-grey-base py-2.5 rounded-lg hover:shadow-button duration-200 transition-all">
                <YTIcon size={20} color="#FF0000" />
                <span>Sign In</span>
              </button>
            </Link>
          )}
          <button
            className={clsx(
              "text-3xl bg-secondary-background p-2 rounded-full duration-200 transition-all",
              theme === "light" ? "pr-10" : "pl-10"
            )}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <span className="bg-grey-lighter rounded-full">
              {theme === "light" ? <SunIcon /> : <MoonIcon />}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
