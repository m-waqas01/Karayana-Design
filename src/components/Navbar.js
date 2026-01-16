import { HiOutlineBars3 } from "react-icons/hi2";
import { useSidebar } from "../context/SidebarContext";

const Navbar = () => {
  const { toggle } = useSidebar();
  const today = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[today.getDay()];
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <nav className="h-14 sm:h-16 bg-white shadow-md flex items-center justify-between px-3 sm:px-4 md:px-6 z-50">
      {/* Left Side */}
      <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
        {/* Hamburger Button - Mobile Only */}
        <button
          onClick={toggle}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 active:bg-gray-200"
          aria-label="Toggle navigation menu"
          type="button"
        >
          <HiOutlineBars3 size={28} className="text-gray-700" />
        </button>

        {/* Welcome Text - Desktop Only */}
        <div className="hidden md:block">
          <h1 className="text-lg md:text-xl font-semibold text-gray-800">
            Welcome Admin!
          </h1>
          <p className="text-gray-500 text-xs md:text-sm">
            {dayName}, {formattedDate}
          </p>
        </div>
      </div>

      {/* Right Side - User Profile */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
        <span className="text-gray-600 text-xs sm:text-sm hidden sm:inline">
          Muhammad Waqas
        </span>
        <img
          src="profile.png"
          alt="User profile"
          className="rounded-full w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;
