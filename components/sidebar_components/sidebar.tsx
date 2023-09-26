import { IconType } from "react-icons";
import { TbDashboard, TbPlayerPlay } from "react-icons/tb";
import SidebarItem from "./sidebar-item";

export type sidebarItem = {
  icon: React.ReactNode;
  label: string;
  href: string;
};

const sidebarItems: sidebarItem[] = [
  {
    icon: <TbDashboard size={20}/>,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: <TbPlayerPlay size={20}/>,
    label: "Browse",
    href: "/search",
  },
];

const Sidebar = () => {
  return (
    <div className="h-full w-full border-r border-zinc-900 p-3">
      <div className="text-2xl font-semibold p-5">LearnIt</div>
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
    </div>
  );
};

export default Sidebar;
