import { MoreVertical, Trash, Mail, Phone } from "lucide-react";
import { useState } from "react";

const UserRow = ({ user, onUserSelect, onDelete }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Desktop Row - Hidden on small screens */}
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
              {user.code}
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
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 w-full text-sm transition-colors rounded-md"
              >
                <Trash size={16} /> Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Card - Visible only on small screens (sm:hidden) */}
      <div className="sm:hidden bg-white p-4 space-y-3 border-b last:border-b-0 rounded-lg">
        {/* User Header */}
        <div
          className="flex gap-3 items-start cursor-pointer pb-3 border-b"
          onClick={() => onUserSelect(user)}
        >
          <img
            src={user.avatar}
            alt={user.name}
            className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2 border-gray-200"
          />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-800 text-base truncate hover:text-orange-500">
              {user.name}
            </p>
            <p className="text-xs text-orange-500 font-medium mt-1">
              {user.code}
            </p>
            <p className="text-xs text-gray-500 mt-1">{user.role}</p>
          </div>
        </div>

        {/* User Details Grid */}
        <div className="space-y-2 text-sm">
          {/* Email */}
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-gray-400 flex-shrink-0" />
            <span className="text-gray-600 truncate">{user.email}</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-gray-400 flex-shrink-0" />
            <span className="text-gray-600">{user.phone}</span>
          </div>

          {/* CNIC */}
          <div className="flex items-start gap-2">
            <span className="text-gray-600 font-medium flex-shrink-0 text-xs mt-0.5">
              CNIC:
            </span>
            <span className="text-gray-700 break-all">{user.cnic}</span>
          </div>

          {/* Target/Code */}
          {user.target && (
            <div className="flex items-start gap-2">
              <span className="text-gray-600 font-medium flex-shrink-0 text-xs">
                Target:
              </span>
              <span className="text-gray-700">{user.target}</span>
            </div>
          )}
        </div>

        {/* Status & Actions */}
        <div className="space-y-3 pt-3 border-t">
          {/* Status Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm font-medium">Status:</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-8 h-5 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
              <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full peer-checked:translate-x-4 transition-transform"></div>
            </label>
          </div>

          {/* Delete Button */}
          <button
            onClick={() => onDelete(user.id)}
            className="flex items-center justify-center gap-2 w-full px-3 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors text-sm font-medium"
          >
            <Trash size={16} /> Delete User
          </button>
        </div>
      </div>
    </>
  );
};

export default UserRow;
