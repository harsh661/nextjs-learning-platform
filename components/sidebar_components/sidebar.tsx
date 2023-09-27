"use client";

import { IconType } from "react-icons";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoLogoBuffer } from "react-icons/io";
import { LuCompass } from "react-icons/lu";
import SidebarItem from "./sidebar-item";
import { UserButton } from "@clerk/nextjs";

export type sidebarItem = {
  icon: IconType;
  label: string;
  href: string;
};

const sidebarItems: sidebarItem[] = [
  {
    icon: MdOutlineDashboardCustomize,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: LuCompass,
    label: "Browse",
    href: "/search",
  },
];

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full w-full border-r p-3">
      <div className="text-2xl font-semibold px-2 py-5 flex items-center gap-2">
        <IoLogoBuffer />
        LearnIt
      </div>
      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col gap-3 py-5">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.href}
              label={item.label}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </div>
        <div className="p-2 flex items-center">
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
