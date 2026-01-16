import { useState } from "react";
import { X, Image } from "lucide-react";

const AddCategoryModal = ({ open, onClose, onSave }) => {
  const [form, setForm] = useState({
    name_en: "",
    name_ur: "",
    city: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: files[0] || null });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleRemoveImage = () => {
    setForm({ ...form, image: null });
  };

  const handleSave = () => {
    if (!form.name_en || !form.name_ur) {
      return alert("Both English and Urdu names are required");
    }
    onSave(form);
    onClose();
    setForm({ name_en: "", name_ur: "", city: "", image: null });
  };

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/30 z-40" />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white w-full max-w-md rounded-xl shadow-xl flex flex-col">
          {/* Header */}
          <div className="p-5 flex items-center justify-between border-b">
            <h2 className="text-lg font-semibold">Create Category</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {/* Image Upload */}
            <div className="flex flex-col items-center relative">
              {form.image ? (
                <>
                  <img
                    src={URL.createObjectURL(form.image)}
                    alt="category"
                    className="w-24 h-24 rounded-lg object-cover mb-2"
                  />
                  <button
                    onClick={handleRemoveImage}
                    className="absolute top-0 right-0 bg-white rounded-full p-1 shadow hover:bg-gray-100"
                  >
                    <X size={16} />
                  </button>
                </>
              ) : (
                <div className="w-24 h-24 rounded-lg bg-gray-200 flex items-center justify-center mb-2">
                  <Image size={24} className="text-gray-400" />
                </div>
              )}
              <input
                type="file"
                name="image"
                onChange={handleChange}
                accept="image/*"
              />
            </div>

            {/* Name English */}
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

            {/* Name Urdu */}
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

export default AddCategoryModal;
