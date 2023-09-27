"use client";

import React from "react";
import { sidebarItem } from "./sidebar";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const SidebarItem = ({ icon: Icon, label, href }: sidebarItem) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive =
    pathname === href ||
    (pathname === "/" && href === "/") ||
    pathname?.startsWith(`${href}/`);

  return (
    <button
      type="button"
      onClick={()=>router.push(href)}
      className={cn(
        "flex items-center gap-2 w-full p-2 rounded-md text-zinc-700 hover:border-zinc-900",
        isActive && "bg-zinc-200 text-zinc-950"
      )}
    >
      <Icon size={20}/>
      <span className="font-medium">{label}</span>
    </button>
  );
};

export default SidebarItem;
