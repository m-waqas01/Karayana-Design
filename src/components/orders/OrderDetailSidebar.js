import { X } from "lucide-react";

const OrderDetailSidebar = ({ order, onClose }) => {
  if (!order) return null;

  return (
    <>
      {/* BACKDROP */}
      <div onClick={onClose} className="fixed inset-0 bg-black/30 z-40" />

      {/* SIDEBAR */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="font-bold text-lg">Order Details</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 flex-1 overflow-y-auto space-y-3">
          <p>
            <span className="font-medium">Order ID:</span> {order.id}
          </p>
          <p>
            <span className="font-medium">Customer Name:</span>{" "}
            {order.customerName}
          </p>
          <p>
            <span className="font-medium">Email:</span> {order.email}
          </p>
          <p>
            <span className="font-medium">Product:</span> {order.product}
          </p>
          <p>
            <span className="font-medium">Quantity:</span> {order.quantity}
          </p>
          <p>
            <span className="font-medium">Total Price:</span> Rs{" "}
            {order.totalPrice}
          </p>
          <p>
            <span className="font-medium">Payment Method:</span>{" "}
            {order.paymentMethod}
          </p>
          <p>
            <span className="font-medium">Status:</span> {order.status}
          </p>
          <p>
            <span className="font-medium">Order Date:</span> {order.orderDate}
          </p>
        </div>
      </div>
    </>
  );
};

export default OrderDetailSidebar;
