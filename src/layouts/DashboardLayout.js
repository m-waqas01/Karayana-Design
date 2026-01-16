import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />
        <main className="p-6 bg-gray-100 min-h-[calc(100vh-64px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
