import { MoreVertical, Trash } from "lucide-react";
import { useState } from "react";

const OrderRow = ({ order, onDelete, onSelect }) => {
  const [showMenu, setShowMenu] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-600";
      case "Cancelled":
        return "text-red-500";
      default:
        return "text-yellow-500";
    }
  };

  return (
    <>
      {/* Desktop Row */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 px-3 sm:px-4 md:px-6 py-3 items-center gap-2 text-xs sm:text-sm border-b hover:bg-gray-50 transition-colors last:border-b-0">
        <span className="font-medium text-gray-800">{order.id}</span>

        <span
          className="text-gray-800 cursor-pointer font-medium hidden md:block truncate hover:text-orange-500"
          onClick={() => onSelect(order)}
        >
          {order.customerName}
        </span>

        <span className="hidden md:block text-gray-700 truncate">
          {order.email}
        </span>
        <span className="hidden lg:block text-gray-700 truncate">
          {order.product}
        </span>
        <span className="hidden lg:block text-gray-600">{order.quantity}</span>
        <span className="hidden lg:block text-gray-800 font-medium">
          Rs {order.totalPrice}
        </span>

        <span
          className={`hidden md:block text-sm font-medium ${getStatusColor(
            order.status
          )}`}
        >
          {order.status}
        </span>

        {/* Actions */}
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
                  onDelete(order.id);
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
          onClick={() => onSelect(order)}
        >
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-800 text-sm">
              Order {order.id}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {order.customerName}
            </p>
            <p className="text-xs text-gray-500 truncate">{order.email}</p>
          </div>
          <span
            className={`text-xs font-medium whitespace-nowrap ml-2 ${getStatusColor(
              order.status
            )}`}
          >
            {order.status}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="text-gray-600 text-xs">Product:</span>
            <p className="font-semibold text-gray-800 truncate">
              {order.product}
            </p>
          </div>
          <div>
            <span className="text-gray-600 text-xs">Quantity:</span>
            <p className="font-semibold text-gray-800">{order.quantity}</p>
          </div>
        </div>

        <div>
          <span className="text-gray-600 text-xs">Total Price:</span>
          <p className="font-semibold text-gray-800">Rs {order.totalPrice}</p>
        </div>

        <div className="flex gap-2 pt-2">
          <button
            onClick={() => onDelete(order.id)}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded transition-colors text-sm"
          >
            <Trash size={16} /> Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderRow;
