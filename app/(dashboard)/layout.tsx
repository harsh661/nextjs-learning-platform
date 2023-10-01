import Navbar from "@/components/navbar_components/navbar";
import Sidebar from "@/components/sidebar_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="hidden lg:flex h-full w-60 fixed inset-y-0">
        <Sidebar />
      </div>
      <main className="flex flex-col w-full">
        <Navbar />
        <section>{children}</section>
      </main>
    </div>
  );
};

export default DashboardLayout;
