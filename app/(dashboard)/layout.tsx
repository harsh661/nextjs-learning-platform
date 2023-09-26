import Sidebar from "@/components/sidebar_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-full w-60 fixed inset-y-0">
        <Sidebar />
      </div>
    </div>
  );
};

export default DashboardLayout;
