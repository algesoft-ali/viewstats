"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import { useTheme } from "next-themes";

type IOption = {
  label: string;
  link: string;
};

type IProps = {
  label: string;
  options: IOption[];
  className?: string;
};

const SelectMenu: FC<IProps> = ({ label, options, className }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();
  return (
    <div
      className={clsx(
        "relative border border-grey-base duration-200 transition-all rounded-lg cursor-pointer",
        menuOpen ? "border-none" : "",
        className
      )}
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
    >
      {/* Menu Trigger */}
      <div className="w-full min-w-44 flex items-center justify-between gap-4 px-6 py-2.5 cursor-pointer">
        <p>{label}</p>
        <span className="text-grey-dark">
          <ArrowDownIcon
            className={clsx(
              "text-grey-dark duration-200",
              menuOpen ? "rotate-180" : ""
            )}
            color={theme === "light" ? "#ababab" : "#747575"}
          />
        </span>
      </div>

      {/* Menu List Container */}
      <div
        className={clsx(
          "border border-grey-base absolute top-0 rounded-lg overflow-hidden w-full",
          menuOpen ? "h-auto pt-11 shadow-button" : "opacity-0 h-0"
        )}
      >
        <ul
          className={clsx(
            "bg-background border-t border-grey-base transition-all duration-200 p-3 w-full",
            {
              "opacity-100": menuOpen,
              "opacity-0": !menuOpen,
            }
          )}
        >
          {options.map((option, index) => (
            <li key={index} className="w-full">
              <Link
                href={option?.link}
                className="block px-3 py-3 text-sm rounded-lg hover:bg-grey-light cursor-pointer w-full"
              >
                {option?.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectMenu;
