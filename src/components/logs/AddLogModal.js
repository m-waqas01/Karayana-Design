import { useState } from "react";
import { X } from "lucide-react";

const AddLogModal = ({ open, onClose, onSave, cities = [], roles = [] }) => {
  const [form, setForm] = useState({
    user: "",
    role: roles[0] || "",
    city: cities[0] || "",
    detail: "",
    date: new Date().toLocaleString(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = () => {
    if (!form.user || !form.role || !form.city || !form.detail) {
      return alert("All fields are required!");
    }

    onSave(form);
    onClose();
    setForm({
      user: "",
      role: roles[0] || "",
      city: cities[0] || "",
      detail: "",
      date: new Date().toLocaleString(),
    });
  };

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/30 z-40"></div>

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md rounded-xl shadow-xl flex flex-col h-full md:h-auto max-h-[90vh]">
          {/* Header */}
          <div className="p-5 flex items-center justify-between border-b">
            <h2 className="text-lg font-semibold">Add Log</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {/* User */}
            <div className="flex flex-col w-full">
              <label className="text-sm text-gray-500 mb-1">User</label>
              <input
                type="text"
                name="user"
                value={form.user}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Role */}
            <div className="flex flex-col w-full">
              <label className="text-sm text-gray-500 mb-1">Role</label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
              >
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            {/* City */}
            <div className="flex flex-col w-full">
              <label className="text-sm text-gray-500 mb-1">City</label>
              <select
                name="city"
                value={form.city}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
              >
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Detail */}
            <div className="flex flex-col w-full">
              <label className="text-sm text-gray-500 mb-1">Detail</label>
              <textarea
                name="detail"
                value={form.detail}
                onChange={handleChange}
                rows={3}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>

            {/* Date */}
            <div className="flex flex-col w-full">
              <label className="text-sm text-gray-500 mb-1">Date & Time</label>
              <input
                type="datetime-local"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
              />
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

export default AddLogModal;
