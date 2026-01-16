import { MoreVertical, Trash } from "lucide-react";
import { useState } from "react";

const BrandRow = ({ brand, onDelete, onSelect }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Desktop Row */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 px-3 sm:px-4 md:px-6 py-3 items-center gap-2 text-xs sm:text-sm border-b hover:bg-gray-50 transition-colors last:border-b-0">
        {/* Checkbox - Hidden on mobile */}
        <input type="checkbox" className="hidden md:inline w-4 h-4" />

        {/* Name + Image */}
        <div
          className="flex items-center gap-2 cursor-pointer min-w-0"
          onClick={() => onSelect(brand)}
        >
          <img
            src={brand.image || "/placeholder.png"}
            alt={brand.name_en}
            className="w-8 sm:w-10 h-8 sm:h-10 rounded object-cover flex-shrink-0"
          />
          <span className="font-medium text-gray-800 truncate">
            {brand.name_en}
          </span>
        </div>

        {/* Name Urdu */}
        <span className="hidden md:block text-gray-700 truncate">
          {brand.name_ur}
        </span>

        {/* ID */}
        <span className="hidden lg:block text-gray-600">{brand.id}</span>

        {/* Commission (%) */}
        <span className="hidden lg:block text-gray-600">
          {brand.commission || "-"}
        </span>

        {/* Created On */}
        <span className="hidden lg:block text-gray-600">
          {brand.createdOn || "-"}
        </span>

        {/* Active Toggle */}
        <div className="hidden md:flex items-center justify-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={brand.isActive}
              readOnly
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full peer-checked:translate-x-4 transition-transform"></div>
          </label>
        </div>

        {/* Admin Verified + Menu */}
        <div className="flex items-center justify-end gap-1 relative">
          {/* Admin Verified Toggle */}
          <div className="hidden md:flex items-center justify-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={brand.adminVerified}
                readOnly
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 transition-colors"></div>
              <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full peer-checked:translate-x-4 transition-transform"></div>
            </label>
          </div>

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
                  onDelete(brand.id);
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
        <div className="flex gap-3 items-start">
          <img
            src={brand.image || "/placeholder.png"}
            alt={brand.name_en}
            className="w-16 h-16 rounded object-cover flex-shrink-0 cursor-pointer"
            onClick={() => onSelect(brand)}
          />
          <div
            className="flex-1 min-w-0 cursor-pointer"
            onClick={() => onSelect(brand)}
          >
            <p className="font-semibold text-gray-800 text-sm truncate">
              {brand.name_en}
            </p>
            <p className="text-xs text-gray-500 truncate">{brand.name_ur}</p>
            {brand.createdOn && (
              <p className="text-xs text-gray-400 mt-1">{brand.createdOn}</p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Status:</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={brand.isActive}
              readOnly
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full peer-checked:translate-x-4 transition-transform"></div>
          </label>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Verified:</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={brand.adminVerified}
              readOnly
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full peer-checked:translate-x-4 transition-transform"></div>
          </label>
        </div>

        {brand.commission && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Commission:</span>
            <span className="font-semibold text-gray-800">
              {brand.commission}%
            </span>
          </div>
        )}

        <div className="flex gap-2 pt-2">
          <button
            onClick={() => onDelete(brand.id)}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded transition-colors text-sm"
          >
            <Trash size={16} /> Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default BrandRow;
