import { useState } from "react";
import { Edit, X } from "lucide-react";
import EditPrivacyModal from "../components/privacy/EditPrivacyModal";

const PrivacyPolicyPage = () => {
  const [policyText, setPolicyText] = useState(
    "This is the Privacy Policy of your application. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et ligula eget justo cursus venenatis. Nullam non eros vel nibh commodo tincidunt."
  );

  const [showEditModal, setShowEditModal] = useState(false);

  // Save updated policy
  const handleSavePolicy = (newText) => {
    setPolicyText(newText);
    setShowEditModal(false);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Privacy Policy</h1>
        <button
          onClick={() => setShowEditModal(true)}
          className="flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-orange-200"
        >
          <Edit size={16} /> Edit
        </button>
      </div>

      {/* Privacy Policy Text */}
      <div className="bg-white p-6 rounded-xl shadow text-gray-700 leading-relaxed whitespace-pre-line">
        {policyText}
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <EditPrivacyModal
          open={showEditModal}
          onClose={() => setShowEditModal(false)}
          text={policyText}
          onSave={handleSavePolicy}
        />
      )}
    </div>
  );
};

export default PrivacyPolicyPage;
