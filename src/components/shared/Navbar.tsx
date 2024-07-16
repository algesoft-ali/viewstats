"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import MoonIcon from "../icons/MoonIcon";
import SunIcon from "../icons/SunIcon";
import clsx from "clsx";
import YTIcon from "../icons/YTIcon";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="py-2 px-3 sticky top-0 z-[99] bg-background backdrop-blur-md">
      <div className="max-w-[1920px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          {theme === "light" ? (
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={270}
              height={50}
              className="cursor-pointer"
              priority
            />
          ) : (
            <Image
              src="/images/logo_white.svg"
              alt="Logo"
              width={270}
              height={50}
              className="cursor-pointer"
              priority
            />
          )}
        </Link>

        {/* Theme Toggle */}
        <div className="flex items-center gap-4">
          <Link href="/login">
            <button className="flex items-center gap-4 px-6 border border-grey-base py-2.5 rounded-lg hover:shadow-button duration-200 transition-all">
              <YTIcon size={20} color="#FF0000" />
              <span>Sign In</span>
            </button>
          </Link>
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
