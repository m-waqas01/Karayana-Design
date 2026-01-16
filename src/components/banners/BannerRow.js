import { useState } from "react";
import { X, MoreVertical, Trash2 } from "lucide-react";

const BannerRow = ({ banner, onDelete, onToggleStatus, onToggleAdmin }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      {/* Desktop Row */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 px-3 sm:px-4 md:px-6 py-3 items-center gap-2 text-xs sm:text-sm border-b hover:bg-gray-50 transition-colors last:border-b-0">
        {/* Banner Image */}
        <div className="flex items-center">
          <img
            src={banner.image}
            alt={banner.altText}
            className="w-12 h-8 sm:w-14 md:w-16 object-cover cursor-pointer rounded"
            onClick={() => setShowImage(true)}
          />
        </div>

        {/* Alt Text */}
        <div className="hidden md:block truncate text-gray-700">
          {banner.altText}
        </div>

        {/* Created Date */}
        <div className="hidden lg:block text-gray-600">
          {banner.createdDate}
        </div>

        {/* Status Toggle */}
        <div className="hidden md:flex justify-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={banner.status === "Active"}
              onChange={() => onToggleStatus(banner.id)}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-md peer-checked:translate-x-4 transition-transform"></div>
          </label>
        </div>

        {/* Admin Verified Toggle */}
        <div className="hidden lg:flex justify-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={banner.adminVerifiedDate !== null}
              onChange={() => onToggleAdmin && onToggleAdmin(banner.id)}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-md peer-checked:translate-x-4 transition-transform"></div>
          </label>
        </div>

        {/* Actions */}
        <div className="flex justify-end relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="More options"
          >
            <MoreVertical size={18} />
          </button>

          {showMenu && (
            <div className="absolute right-0 top-8 w-32 bg-white shadow-lg rounded-md border z-50">
              <button
                onClick={() => {
                  onDelete(banner.id);
                  setShowMenu(false);
                }}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 w-full text-sm transition-colors"
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Card */}
      <div className="sm:hidden bg-white p-3 space-y-3 border-b last:border-b-0">
        <div className="flex gap-3 items-start">
          <img
            src={banner.image}
            alt={banner.altText}
            className="w-20 h-16 object-cover cursor-pointer rounded flex-shrink-0"
            onClick={() => setShowImage(true)}
          />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-800 text-sm truncate">
              {banner.altText}
            </p>
            <p className="text-xs text-gray-500">{banner.createdDate}</p>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Status:</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={banner.status === "Active"}
              onChange={() => onToggleStatus(banner.id)}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-md peer-checked:translate-x-4 transition-transform"></div>
          </label>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Verified:</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={banner.adminVerifiedDate !== null}
              onChange={() => onToggleAdmin && onToggleAdmin(banner.id)}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-300 rounded-full peer peer-checked:bg-blue-500 transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-md peer-checked:translate-x-4 transition-transform"></div>
          </label>
        </div>

        <div className="flex gap-2 pt-2">
          <button
            onClick={() => onDelete(banner.id)}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded transition-colors text-sm"
          >
            <Trash2 size={16} /> Delete
          </button>
        </div>
      </div>

      {/* Image Popup */}
      {showImage && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-full sm:max-w-2xl">
            <img
              src={banner.image}
              alt={banner.altText}
              className="max-h-[80vh] max-w-full rounded"
            />
            <button
              onClick={() => setShowImage(false)}
              className="absolute -top-2 -right-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Close image"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BannerRow;
