import { useState } from "react";
import { X } from "lucide-react";

const AddOrderModal = ({ open, onClose, onSave, products = [] }) => {
  const [form, setForm] = useState({
    customerName: "",
    email: "",
    product: "",
    quantity: 1,
    totalPrice: 0,
    paymentMethod: "Cash",
    status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedForm = { ...form, [name]: value };

    if (name === "product") {
      const selectedProduct = products.find((p) => p.name === value);
      updatedForm.totalPrice = selectedProduct
        ? selectedProduct.price * form.quantity
        : 0;
    }

    if (name === "quantity") {
      const qty = Number(value);
      const selectedProduct = products.find((p) => p.name === form.product);
      updatedForm.quantity = qty;
      updatedForm.totalPrice = selectedProduct
        ? selectedProduct.price * qty
        : 0;
    }

    setForm(updatedForm);
  };

  const handleSave = () => {
    if (!form.customerName || !form.email || !form.product) {
      return alert("Customer name, email, and product are required");
    }
    onSave(form);
    onClose();
    setForm({
      customerName: "",
      email: "",
      product: "",
      quantity: 1,
      totalPrice: 0,
      paymentMethod: "Cash",
      status: "Pending",
    });
  };

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/30 z-40" />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md rounded-xl shadow-xl flex flex-col h-full md:h-auto max-h-[90vh]">
          {/* Header */}
          <div className="p-5 flex items-center justify-between border-b">
            <h2 className="text-lg font-semibold">Add Order</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {/* Customer Name */}
            <div className="flex flex-col w-full">
              <label className="text-sm text-gray-500 mb-1">
                Customer Name
              </label>
              <input
                type="text"
                name="customerName"
                value={form.customerName}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col w-full">
              <label className="text-sm text-gray-500 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Product */}
            <div className="flex flex-col w-full">
              <label className="text-sm text-gray-500 mb-1">Product</label>
              <select
                name="product"
                value={form.product}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Select Product</option>
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
                <option value="book">Book</option>
              </select>
            </div>

            {/* Quantity */}
            <div className="flex flex-col w-full">
              <label className="text-sm text-gray-500 mb-1">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={form.quantity}
                min={1}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Total Price */}
            <div className="flex flex-col w-full">
              <label className="text-sm text-gray-500 mb-1">
                Total Price (Rs)
              </label>
              <input
                type="number"
                name="totalPrice"
                value={form.totalPrice}
                readOnly
                className="border rounded-lg px-3 py-2 bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Payment Method */}
            <div className="flex flex-col w-full">
              <label className="text-sm text-gray-500 mb-1">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={form.paymentMethod}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
              >
                <option value="Cash">Cash</option>
                <option value="Card">Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
            </div>

            {/* Status */}
            <div className="flex flex-col w-full">
              <label className="text-sm text-gray-500 mb-1">Status</label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          {/* Footer */}
          <div className="p-5 border-t flex gap-3">
            <button
              onClick={onClose}
              className="w-full border rounded-lg py-2 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="w-full bg-orange-500 text-white rounded-lg py-2 hover:bg-orange-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddOrderModal;
