import { useState } from "react";
import { Search, Plus } from "lucide-react";
import AddUserModal from "./AddUserModal";

const UserFilters = ({ activeTab, onSave }) => {
  const [showAddModal, setShowAddModal] = useState(false);

  const handleAddClick = () => setShowAddModal(true);
  const handleClose = () => setShowAddModal(false);

  return (
    <div className="flex flex-col sm:flex-row flex-wrap items-center gap-2 sm:gap-3">
      {/* Search */}
      <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow w-full sm:w-auto">
        <Search size={18} className="text-gray-400 mr-2 flex-shrink-0" />
        <input
          type="text"
          placeholder={`Search...`}
          className="outline-none text-sm w-full sm:w-auto"
        />
      </div>

      {/* City - Hidden on small screens, visible on sm+ */}
      <select className="hidden sm:block bg-white px-3 sm:px-4 py-2 rounded-lg shadow text-sm">
        <option>City</option>
      </select>

      {/* Status - Hidden on small screens, visible on sm+ */}
      <select className="hidden sm:block bg-white px-3 sm:px-4 py-2 rounded-lg shadow text-sm">
        <option>Status</option>
      </select>

      {/* Add Button - Full width on mobile, auto on sm+ */}
      <button
        onClick={handleAddClick}
        className="flex items-center justify-center sm:justify-start gap-2 bg-orange-100 text-orange-600 px-3 sm:px-4 py-2 rounded-lg font-medium text-sm w-full sm:w-auto hover:bg-orange-200 transition"
      >
        <Plus size={18} />
        <span className="hidden sm:inline">Add</span>
      </button>

      {/* Add User Modal */}
      <AddUserModal
        open={showAddModal}
        onClose={handleClose}
        onSave={(data) => {
          onSave(data);
          setShowAddModal(false);
        }}
        activeTab={activeTab}
      />
    </div>
  );
};

export default UserFilters;
