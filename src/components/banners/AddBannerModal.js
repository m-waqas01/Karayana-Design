import { useState } from "react";
import { X } from "lucide-react";

const AddBannerModal = ({ open, onClose, onSave, cities = [] }) => {
  const [form, setForm] = useState({
    image: "",
    altText: "",
    city: cities[0] || "",
    status: "Active",
    adminVerified: false,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle image upload and convert to Base64
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result }); // Base64 string
    };
    reader.readAsDataURL(file);
  };

  // Save banner
  const handleSave = () => {
    if (!form.image || !form.altText || !form.city)
      return alert("Please fill all required fields");
    onSave(form);
    setForm({
      image: "",
      altText: "",
      city: cities[0] || "",
      status: "Active",
      adminVerified: false,
    });
    onClose();
  };

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/30 z-40" />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md rounded-xl shadow-xl flex flex-col max-h-[90vh] overflow-auto">
          {/* Header */}
          <div className="p-5 flex items-center justify-between border-b">
            <h2 className="text-lg font-semibold">Add Banner</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 flex flex-col gap-4">
            {/* Image */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-1">Banner Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {form.image && (
                <img
                  src={form.image}
                  alt="Preview"
                  className="w-32 h-32 object-cover mt-2 rounded"
                />
              )}
            </div>

            {/* Alt Text */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-1">Alt Text</label>
              <input
                type="text"
                name="altText"
                value={form.altText}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* City */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-1">City</label>
              <select
                name="city"
                value={form.city}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
              >
                {cities.map((c, i) => (
                  <option key={i} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Status */}
            <div className="flex flex-col">
              <label className="text-sm text-gray-500 mb-1">Status</label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
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

export default AddBannerModal;
