import { MoreVertical, Trash } from "lucide-react";
import { useState } from "react";

const CityRow = ({ city, onDelete, onToggle }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Desktop Row */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 px-3 sm:px-4 md:px-6 py-3 items-center gap-2 text-xs sm:text-sm border-b hover:bg-gray-50 transition-colors last:border-b-0">
        <span className="font-medium text-gray-800">{city.id}</span>
        <span className="text-gray-800 truncate">{city.name}</span>
        <span className="hidden md:block text-gray-600">
          {city.createdDate}
        </span>

        {/* Active Toggle */}
        <div className="hidden md:flex items-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={city.isActive}
              onChange={() => onToggle(city.id, "isActive")}
              className="sr-only peer"
            />
            <div className="w-8 h-5 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full peer-checked:translate-x-4 transition-transform"></div>
          </label>
        </div>

        {/* Admin Verified Toggle */}
        <div className="hidden lg:flex items-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={city.adminVerified}
              onChange={() => onToggle(city.id, "adminVerified")}
              className="sr-only peer"
            />
            <div className="w-8 h-5 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full peer-checked:translate-x-4 transition-transform"></div>
          </label>
        </div>

        {/* Actions Menu */}
        <div className="flex items-center justify-end gap-1 relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
            aria-label="More options"
          >
            <MoreVertical size={18} />
          </button>

          {showMenu && (
            <div className="absolute right-0 top-10 w-32 bg-white shadow-lg rounded-md border z-50">
              <button
                onClick={() => {
                  onDelete(city.id);
                  setShowMenu(false);
                }}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 w-full text-sm transition-colors"
              >
                <Trash size={16} /> Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Card */}
      <div className="sm:hidden bg-white p-3 space-y-3 border-b last:border-b-0">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-800 text-sm">{city.name}</p>
            <p className="text-xs text-gray-500">ID: {city.id}</p>
            {city.createdDate && (
              <p className="text-xs text-gray-400 mt-1">{city.createdDate}</p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Active:</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={city.isActive}
              onChange={() => onToggle(city.id, "isActive")}
              className="sr-only peer"
            />
            <div className="w-8 h-5 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full peer-checked:translate-x-4 transition-transform"></div>
          </label>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Verified:</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={city.adminVerified}
              onChange={() => onToggle(city.id, "adminVerified")}
              className="sr-only peer"
            />
            <div className="w-8 h-5 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full peer-checked:translate-x-4 transition-transform"></div>
          </label>
        </div>

        <div className="flex gap-2 pt-2">
          <button
            onClick={() => onDelete(city.id)}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded transition-colors text-sm"
          >
            <Trash size={16} /> Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default CityRow;
