"use client";

import React from "react";
import { sidebarItem } from "./sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const SidebarItem = ({ icon, label, href }: sidebarItem) => {
  const pathname = usePathname();

  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 w-full p-2 rounded-md border border-transparent hover:border-zinc-900",
        isActive && "bg-accentpurple border-zinc-900"
      )}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export default SidebarItem;
