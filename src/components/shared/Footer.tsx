import React from "react";
import DiscordIcon from "../icons/DiscordIcon";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import XIcon from "../icons/XIcon";
import YTIcon from "../icons/YTIcon";
import Link from "next/link";

const socialLinks = [
  {
    icon: YTIcon,
    link: "https://youtube.com",
  },
  {
    icon: DiscordIcon,
    link: "https://discord.com",
  },
  {
    icon: InstagramIcon,
    link: "https://instagram.com",
  },
  {
    icon: LinkedinIcon,
    link: "https://linkedin.com",
  },
  {
    icon: XIcon,
    link: "https://twitter.com",
  },
];

const footerLinks = [
  {
    label: "Accessibility",
    path: "/",
  },
  {
    label: "Terms of Use",
    path: "/",
  },
  {
    label: "Privacy Policy",
    path: "/",
  },
  {
    label: "Help Center",
    path: "/",
  },
  {
    label: "FAQ",
    path: "/",
  },
];

const Footer = () => {
  return (
    <footer className="px-4 border-t border-secondary-background py-6">
      <div className="container flex items-center justify-between flex-wrap gap-6">
        {/* Social Media */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary duration-200 transition-all"
            >
              {React.createElement(link.icon, {
                color: "currentColor",
              })}
            </a>
          ))}
        </div>

        {/* Footer Links Center */}
        <div className="text-grey-darker text-sm flex items-center flex-wrap gap-4 md:gap-10">
          {footerLinks?.slice(0, 3)?.map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className="hover:text-primary duration-200 transition-all"
            >
              {item.label}
            </Link>
          ))}
          <p>Copyright ©ViewStats 2024</p>
        </div>

        {/* Footer Links Right */}
        <div className="text-grey-darker text-sm flex items-center gap-10">
          {footerLinks?.slice(3, 5)?.map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className="hover:text-primary duration-200 transition-all"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
