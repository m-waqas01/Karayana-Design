import { NavLink, useNavigate } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineShoppingBag,
  HiOutlineTag,
  HiOutlineClipboardDocumentList,
} from "react-icons/hi2";
import { BookImage, Building2, FileCheck, Files, Gem, X } from "lucide-react";
import { useSidebar } from "../context/SidebarContext";

const Sidebar = () => {
  const { isOpen, close } = useSidebar();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 sm:px-4 py-2 rounded-lg transition text-sm sm:text-base
     ${
       isActive
         ? "bg-orange-100 text-orange-600 font-semibold"
         : "text-gray-700 hover:bg-gray-100"
     }`;

  const handleNavClick = () => {
    close();
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    close();
    navigate("/login");
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`
          fixed md:static 
          inset-y-0 left-0 
          z-40 w-64 
          bg-white shadow-lg 
          flex flex-col 
          h-screen overflow-y-auto
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Mobile Close Button */}
        <div className="md:hidden flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-orange-500">Krayana</h2>
          <button
            onClick={close}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Close navigation"
            type="button"
          >
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        {/* Logo - Desktop Only */}
        <div className="hidden md:flex md:items-center md:justify-center px-6 py-4 border-b">
          <h1 className="text-2xl font-bold text-orange-500">Krayana</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-1">
          <NavLink to="/" className={linkClass} onClick={handleNavClick}>
            <HiOutlineHome size={20} className="flex-shrink-0" />
            <span className="truncate">Dashboard</span>
          </NavLink>

          <NavLink to="/users" className={linkClass} onClick={handleNavClick}>
            <HiOutlineUsers size={20} className="flex-shrink-0" />
            <span className="truncate">Users</span>
          </NavLink>

          <NavLink
            to="/products"
            className={linkClass}
            onClick={handleNavClick}
          >
            <HiOutlineShoppingBag size={20} className="flex-shrink-0" />
            <span className="truncate">Products</span>
          </NavLink>

          <NavLink
            to="/categories"
            className={linkClass}
            onClick={handleNavClick}
          >
            <HiOutlineTag size={20} className="flex-shrink-0" />
            <span className="truncate">Categories</span>
          </NavLink>

          <NavLink to="/brands" className={linkClass} onClick={handleNavClick}>
            <Gem size={20} className="flex-shrink-0" />
            <span className="truncate">Brands</span>
          </NavLink>

          <NavLink to="/orders" className={linkClass} onClick={handleNavClick}>
            <HiOutlineClipboardDocumentList
              size={20}
              className="flex-shrink-0"
            />
            <span className="truncate">Orders</span>
          </NavLink>

          <NavLink to="/cities" className={linkClass} onClick={handleNavClick}>
            <Building2 size={20} className="flex-shrink-0" />
            <span className="truncate">Cities</span>
          </NavLink>

          <NavLink to="/banners" className={linkClass} onClick={handleNavClick}>
            <BookImage size={20} className="flex-shrink-0" />
            <span className="truncate">Banners</span>
          </NavLink>

          <NavLink to="/logs" className={linkClass} onClick={handleNavClick}>
            <Files size={20} className="flex-shrink-0" />
            <span className="truncate">Logs</span>
          </NavLink>

          <NavLink
            to="/privacy-policy"
            className={linkClass}
            onClick={handleNavClick}
          >
            <FileCheck size={20} className="flex-shrink-0" />
            <span className="truncate">Privacy Policy</span>
          </NavLink>

          <NavLink to="/terms" className={linkClass} onClick={handleNavClick}>
            <FileCheck size={20} className="flex-shrink-0" />
            <span className="truncate">Terms & Conditions</span>
          </NavLink>
        </nav>

        {/* Bottom Auth Button */}
        <div className="p-4 border-t">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 text-orange-500 font-semibold hover:bg-orange-50 rounded-lg transition-colors text-sm"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                close();
                navigate("/login");
              }}
              className="w-full px-4 py-2 bg-green-500 text-white font-semibold hover:bg-green-600 rounded-lg transition-colors text-sm"
            >
              Login
            </button>
          )}
        </div>
      </aside>

      {/* Mobile Overlay - Closes sidebar when clicked */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity duration-300"
          onClick={close}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Sidebar;
