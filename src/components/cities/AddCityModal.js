import { useState } from "react";
import { X } from "lucide-react";

const AddCityModal = ({ open, onClose, onSave }) => {
  const [cityName, setCityName] = useState("");

  const handleSave = () => {
    if (!cityName) return alert("City name is required");
    onSave({ name: cityName });
    setCityName("");
    onClose();
  };

  if (!open) return null;

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 bg-black/30 z-40" />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-sm rounded-xl shadow-xl flex flex-col">
          {/* Header */}
          <div className="p-5 flex items-center justify-between border-b">
            <h2 className="text-lg font-semibold">Add City</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            <div className="flex flex-col w-full">
              <label className="text-sm text-gray-500 mb-1">City Name</label>
              <input
                type="text"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
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

export default AddCityModal;
