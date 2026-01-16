import { useState } from "react";
import { Search, Plus } from "lucide-react";
import AddUserModal from "./AddUserModal";

const UserFilters = ({ activeTab, onSave }) => {
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddClick = () => setShowAddModal(true);
  const handleClose = () => setShowAddModal(false);

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Search */}
      <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow">
        <Search size={18} className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder={`Search ${activeTab.toLowerCase()}...`}
          className="outline-none text-sm"
        />
      </div>

      {/* City */}
      <select className="bg-white px-4 py-2 rounded-lg shadow text-sm">
        <option>City</option>
      </select>

      {/* Status */}
      <select className="bg-white px-4 py-2 rounded-lg shadow text-sm">
        <option>Status</option>
      </select>

      {/* Add Button */}
      <button
        onClick={handleAddClick}
        className="flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-medium"
      >
        <Plus size={18} />
        Add {activeTab}
      </button>

      {/* Add User Modal */}
      <AddUserModal
        open={showAddModal}
        onClose={handleClose}
        onSave={(data) => {
          onSave(data); // pass new user data to parent
          setShowAddModal(false); // close modal
        }}
        activeTab={activeTab}
      />
    </div>
  );
};

export default UserFilters;
