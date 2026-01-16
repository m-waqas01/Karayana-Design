import { MoreVertical, Trash } from "lucide-react";
import { useState } from "react";

const CategoryRow = ({ category, onDelete, onSelect }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Desktop Row */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 px-3 sm:px-4 md:px-6 py-3 items-center gap-2 text-xs sm:text-sm border-b hover:bg-gray-50 transition-colors last:border-b-0">
        {/* Name */}
        <span
          className="font-medium text-gray-800 cursor-pointer truncate hover:text-orange-500"
          onClick={() => onSelect(category)}
        >
          {category.name}
        </span>

        {/* Urdu Name */}
        <span className="hidden md:block text-gray-700 truncate">
          {category.urduName || "-"}
        </span>

        {/* ID */}
        <span className="hidden md:block text-gray-600">{category.id}</span>

        {/* Created On */}
        <span className="hidden lg:block text-gray-600">
          {category.createdOn || "-"}
        </span>

        {/* Active Toggle */}
        <div className="hidden md:flex items-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={category.isActive}
              readOnly
              className="sr-only peer"
            />
            <div className="w-8 h-5 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full peer-checked:translate-x-4 transition-transform"></div>
          </label>
        </div>

        {/* Admin Verified Toggle + Menu */}
        <div className="flex items-center justify-end gap-1 relative">
          <label className="relative inline-flex items-center cursor-pointer hidden md:block">
            <input
              type="checkbox"
              checked={category.adminVerified}
              readOnly
              className="sr-only peer"
            />
            <div className="w-8 h-5 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full peer-checked:translate-x-4 transition-transform"></div>
          </label>

          {/* Menu Button */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
            aria-label="More options"
          >
            <MoreVertical size={18} />
          </button>

          {/* Dropdown Menu */}
          {showMenu && (
            <div className="absolute right-0 top-10 w-32 bg-white shadow-lg rounded-md border z-50">
              <button
                onClick={() => {
                  onDelete(category.id);
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
        <div
          className="flex items-start justify-between cursor-pointer"
          onClick={() => onSelect(category)}
        >
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-800 text-sm truncate">
              {category.name}
            </p>
            {category.urduName && (
              <p className="text-xs text-gray-500 truncate">
                {category.urduName}
              </p>
            )}
          </div>
          <span className="text-xs text-gray-400 ml-2 flex-shrink-0">
            ID: {category.id}
          </span>
        </div>

        {category.createdOn && (
          <p className="text-xs text-gray-500">Created: {category.createdOn}</p>
        )}

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Active:</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={category.isActive}
              readOnly
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
              checked={category.adminVerified}
              readOnly
              className="sr-only peer"
            />
            <div className="w-8 h-5 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full peer-checked:translate-x-4 transition-transform"></div>
          </label>
        </div>

        <div className="flex gap-2 pt-2">
          <button
            onClick={() => onDelete(category.id)}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded transition-colors text-sm"
          >
            <Trash size={16} /> Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default CategoryRow;
