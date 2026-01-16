import { MoreVertical, Trash } from "lucide-react";
import { useState } from "react";

const ProductRow = ({ product, onDelete, onSelect }) => {
  const [showMenu, setShowMenu] = useState(false);

  const totalStock =
    (Number(product.stock) || 0) +
    (product.packings
      ? product.packings.reduce((sum, p) => sum + Number(p.stock || 0), 0)
      : 0);

  return (
    <>
      {/* Desktop Row */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 px-3 sm:px-4 md:px-6 py-3 items-center gap-2 text-xs sm:text-sm border-b hover:bg-gray-50 transition-colors last:border-b-0">
        {/* Name - clickable */}
        <div
          className="flex items-center gap-2 cursor-pointer min-w-0"
          onClick={() => onSelect(product)}
        >
          <img
            src={product.image || "/placeholder.png"}
            alt={product.title_en}
            className="w-8 sm:w-10 h-8 sm:h-10 rounded object-cover flex-shrink-0"
          />
          <span className="font-medium text-gray-800 hover:text-orange-500 truncate">
            {product.title_en}
          </span>
        </div>

        <span className="hidden md:block text-gray-700 truncate">
          {product.brand || "-"}
        </span>
        <span className="hidden md:block text-gray-700 truncate">
          {product.category || "-"}
        </span>

        <span className="hidden lg:block text-gray-700 truncate">
          {product.packings && product.packings.length > 0
            ? product.packings.map((p) => `Rs ${p.price}`).join(", ")
            : "-"}
        </span>

        <span className="hidden lg:block text-gray-800 font-medium">
          {product.price}
        </span>

        <span
          className={`hidden lg:block font-medium ${
            totalStock > 0 ? "text-green-600" : "text-red-500"
          }`}
        >
          {totalStock}
        </span>

        {/* Active */}
        <div className="hidden md:flex justify-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={product.isActive}
              readOnly
              className="sr-only peer"
            />
            <div className="w-8 h-5 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full peer-checked:translate-x-3 transition-transform"></div>
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
                  onDelete(product.id);
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
          onClick={() => onSelect(product)}
        >
          <img
            src={product.image || "/placeholder.png"}
            alt={product.title_en}
            className="w-16 h-16 rounded object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-800 text-sm truncate">
              {product.title_en}
            </p>
            {product.brand && (
              <p className="text-xs text-gray-500 truncate">
                Brand: {product.brand}
              </p>
            )}
            {product.category && (
              <p className="text-xs text-gray-500 truncate">
                Category: {product.category}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="text-gray-600 text-xs">Price:</span>
            <p className="font-semibold text-gray-800">{product.price}</p>
          </div>
          <div>
            <span className="text-gray-600 text-xs">Stock:</span>
            <p
              className={`font-semibold ${
                totalStock > 0 ? "text-green-600" : "text-red-500"
              }`}
            >
              {totalStock}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Active:</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={product.isActive}
              readOnly
              className="sr-only peer"
            />
            <div className="w-8 h-5 bg-gray-200 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full peer-checked:translate-x-3 transition-transform"></div>
          </label>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Verified:</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={product.adminVerified}
              readOnly
              className="sr-only peer"
            />
            <div className="w-8 h-5 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 transition-colors"></div>
            <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full peer-checked:translate-x-3 transition-transform"></div>
          </label>
        </div>

        <div className="flex gap-2 pt-2">
          <button
            onClick={() => onDelete(product.id)}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded transition-colors text-sm"
          >
            <Trash size={16} /> Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductRow;
