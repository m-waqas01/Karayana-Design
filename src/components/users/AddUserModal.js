import { useState } from "react";
import { X, Image } from "lucide-react"; // Image icon

const AddUserModal = ({ open, onClose, onSave, activeTab }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    cnic: "",
    city: "",
    address: "",
    avatar: null,
  });

  const handleChange = (e) => {
    const { name, files, value } = e.target;
    if (name === "avatar") {
      setForm({ ...form, avatar: files[0] || null }); // reset if canceled
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleRemoveAvatar = () => {
    setForm({ ...form, avatar: null });
  };

  const handleSave = () => {
    onSave(form);
    setForm({
      name: "",
      email: "",
      password: "",
      phone: "",
      cnic: "",
      city: "",
      address: "",
      avatar: null,
    });
    onClose();
  };

  if (!open) return null;

  return (
    <>
      {/* BACKDROP */}
      <div onClick={onClose} className="fixed inset-0 bg-black/30 z-40" />

      {/* MODAL */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-md rounded-xl shadow-xl flex flex-col h-[90vh] relative">
          {/* HEADER */}
          <div className="p-6 flex items-center justify-between border-b flex-shrink-0">
            <h2 className="text-xl font-semibold">Add {activeTab}</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          {/* SCROLLABLE FORM */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {/* AVATAR UPLOAD */}
            <div className="flex flex-col items-center mb-4 relative">
              {form.avatar ? (
                <>
                  <img
                    src={URL.createObjectURL(form.avatar)}
                    alt="avatar"
                    className="w-24 h-24 rounded-full object-cover mb-2"
                  />
                  <button
                    onClick={handleRemoveAvatar}
                    className="absolute top-0 right-10 bg-white rounded-full p-1 shadow hover:bg-gray-100"
                  >
                    <X size={16} />
                  </button>
                </>
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                  <Image size={24} className="text-gray-400" />
                </div>
              )}
              <input
                type="file"
                name="avatar"
                onChange={handleChange}
                accept="image/*"
              />
            </div>

            {/* FORM FIELDS */}
            <InputField
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            <InputField
              label="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
            />
            <InputField
              label="Phone No"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
            <InputField
              label="CNIC"
              name="cnic"
              value={form.cnic}
              onChange={handleChange}
            />
            <InputField
              label="City "
              name="city"
              value={form.city}
              onChange={handleChange}
            />
            <InputField
              label="Address"
              name="address"
              value={form.address}
              onChange={handleChange}
            />
          </div>

          {/* BUTTONS FULL WIDTH */}
          <div className="p-6 flex gap-3 flex-shrink-0 border-t">
            <button
              onClick={onClose}
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="w-full px-4 py-3 rounded-lg bg-orange-500 text-white"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// Input field component
const InputField = ({ label, name, value, onChange, type = "text" }) => (
  <div className="flex flex-col">
    <label className="text-sm text-gray-500 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
    />
  </div>
);

export default AddUserModal;
