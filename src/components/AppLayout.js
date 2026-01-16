import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const AppLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-50">
      {/* Sidebar - Fixed on mobile when open, static on desktop */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar with hamburger toggle */}
        <Navbar onToggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-3 sm:p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>

      {/* Mobile Overlay - Closes sidebar when clicked */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={closeSidebar}
        />
      )}
    </div>
  );
};

export default AppLayout;
