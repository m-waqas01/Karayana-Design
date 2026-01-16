import { useState } from "react";
import { X } from "lucide-react";

const AddBrandModal = ({ open, onClose, onSave, categories = [] }) => {
  const [form, setForm] = useState({
    name_en: "",
    name_ur: "",
    category: "",
    commission: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = () => {
    if (!form.name_en || !form.name_ur)
      return alert("Both English and Urdu names are required");
    if (!form.category) return alert("Category is required");
    if (!form.commission) return alert("Commission is required");
    if (!form.city) return alert("City is required");

    onSave(form);
    onClose();
    setForm({
      name_en: "",
      name_ur: "",
      category: "",
      commission: "",
      city: "",
    });
  };

  if (!open) return null;

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 bg-black/30 z-40" />
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white w-full max-w-md rounded-xl shadow-xl flex flex-col">
          {/* Header */}
          <div className="p-5 flex items-center justify-between border-b">
            <h2 className="text-lg font-semibold">Add Brand</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {/* Name (English) */}
            <div className="flex flex-col w-full">
              <label className="text-sm text-gray-500 mb-1">
                Name (English)
              </label>
              <input
                type="text"
                name="name_en"
                value={form.name_en}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Name (Urdu) */}
            <div className="flex flex-col w-full">
              <label className="text-sm text-gray-500 mb-1">Name (Urdu)</label>
              <input
                type="text"
                name="name_ur"
                value={form.name_ur}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Category Dropdown */}
            <div className="flex flex-col w-full">
              <label className="text-sm text-gray-500 mb-1">Category</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name_en}>
                    {cat.name_en}
                  </option>
                ))}
              </select>
            </div>

            {/* Commission */}
            <div className="flex flex-col w-full">
              <label className="text-sm text-gray-500 mb-1">
                Commission (%)
              </label>
              <input
                type="number"
                name="commission"
                value={form.commission}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
                placeholder="Enter commission in %"
              />
            </div>

            {/* City Dropdown */}
            <div className="flex flex-col w-full">
              <label className="text-sm text-gray-500 mb-1">City</label>
              <select
                name="city"
                value={form.city}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Select City</option>
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Islamabad">Islamabad</option>
              </select>
            </div>
          </div>

          {/* Footer */}
          <div className="p-5 border-t flex gap-3">
            <button onClick={onClose} className="w-full border rounded-lg py-2">
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="w-full bg-orange-500 text-white rounded-lg py-2"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBrandModal;
