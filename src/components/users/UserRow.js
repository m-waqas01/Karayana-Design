import { MoreVertical, Trash } from "lucide-react";
import { useState } from "react";

const UserRow = ({ user, onUserSelect, onDelete }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Desktop Row */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-3 sm:px-4 md:px-6 py-3 items-center gap-2 text-xs sm:text-sm border-b hover:bg-gray-50 transition-colors last:border-b-0">
        {/* Name */}
        <div
          className="flex items-center gap-2 cursor-pointer min-w-0"
          onClick={() => onUserSelect(user)}
        >
          <img
            src={user.avatar}
            alt={user.name}
            className="w-8 sm:w-10 h-8 sm:h-10 rounded-full object-cover flex-shrink-0"
          />
          <div className="min-w-0">
            <p className="font-medium text-gray-800 truncate hover:text-orange-500">
              {user.name}
            </p>
            <p className="text-xs text-gray-500 truncate hidden md:block">
              {user.email}
            </p>
          </div>
        </div>

        {/* Email */}
        <span className="hidden md:block text-gray-700 truncate">
          {user.email}
        </span>
        {/* Phone */}
        <span className="hidden lg:block text-gray-600">{user.phone}</span>
        {/* CNIC */}
        <span className="hidden lg:block text-gray-600">{user.cnic}</span>

        {/* Status Toggle */}
        <div className="hidden md:flex items-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-8 h-5 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full peer-checked:translate-x-4 transition-transform"></div>
          </label>
        </div>

        {/* Menu */}
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
                  onDelete(user.id);
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
          className="flex gap-3 items-start cursor-pointer"
          onClick={() => onUserSelect(user)}
        >
          <img
            src={user.avatar}
            alt={user.name}
            className="w-14 h-14 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-800 text-sm truncate">
              {user.name}
            </p>
            <p className="text-xs text-gray-500 truncate">{user.email}</p>
            <p className="text-xs text-gray-500 mt-1">{user.phone}</p>
          </div>
        </div>

        {user.cnic && (
          <div className="text-sm">
            <span className="text-gray-600">CNIC: </span>
            <span className="font-medium text-gray-800">{user.cnic}</span>
          </div>
        )}

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Status:</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-8 h-5 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full peer-checked:translate-x-4 transition-transform"></div>
          </label>
        </div>

        <div className="flex gap-2 pt-2">
          <button
            onClick={() => onDelete(user.id)}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded transition-colors text-sm"
          >
            <Trash size={16} /> Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default UserRow;
