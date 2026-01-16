import { useState } from "react";
import { Edit } from "lucide-react";
import EditTermsModal from "../components/terms/EditTermsModal";

const TermsPage = () => {
  const [termsText, setTermsText] = useState(
    "These are the Terms & Conditions of your application. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et ligula eget justo cursus venenatis. Nullam non eros vel nibh commodo tincidunt."
  );

  const [showEditModal, setShowEditModal] = useState(false);

  // Save updated terms
  const handleSaveTerms = (newText) => {
    setTermsText(newText);
    setShowEditModal(false);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Terms & Conditions</h1>
        <button
          onClick={() => setShowEditModal(true)}
          className="flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-orange-200"
        >
          <Edit size={16} /> Edit
        </button>
      </div>

      {/* Terms Text */}
      <div className="bg-white p-6 rounded-xl shadow text-gray-700 leading-relaxed whitespace-pre-line">
        {termsText}
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <EditTermsModal
          open={showEditModal}
          onClose={() => setShowEditModal(false)}
          text={termsText}
          onSave={handleSaveTerms}
        />
      )}
    </div>
  );
};

export default TermsPage;
