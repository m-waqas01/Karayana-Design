import { X } from "lucide-react";
import { useState } from "react";

const EditPrivacyModal = ({ open, onClose, text, onSave }) => {
  const [newText, setNewText] = useState(text);

  if (!open) return null;

  const handleSave = () => {
    if (!newText.trim()) return alert("Policy text cannot be empty.");
    onSave(newText);
  };

  return (
    <>
      {/* Backdrop */}
      <div onClick={onClose} className="fixed inset-0 bg-black/30 z-40" />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-lg rounded-xl shadow-xl flex flex-col max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="p-5 flex justify-between items-center border-b">
            <h2 className="text-lg font-semibold">Edit Privacy Policy</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 flex-1">
            <textarea
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="w-full h-64 border rounded-lg p-3 focus:ring-2 focus:ring-orange-400 resize-none"
            />
          </div>

          {/* Footer */}
          <div className="p-5 border-t flex gap-3 justify-end">
            <button
              onClick={onClose}
              className="border rounded-lg py-2 px-4 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="bg-orange-500 text-white rounded-lg py-2 px-4 hover:bg-orange-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPrivacyModal;
