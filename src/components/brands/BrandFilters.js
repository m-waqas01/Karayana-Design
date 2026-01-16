import { useState } from "react";
import { Search, Plus, Image } from "lucide-react";
import AddBrandModal from "./AddBrandModal.js";

const BrandFilters = ({ onSave }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const handleAddClick = () => setShowAddModal(true);
  const handleClose = () => setShowAddModal(false);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Search */}
      <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow">
        <Search size={18} className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search brands..."
          className="outline-none text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* City Filter */}
      <select
        className="bg-white px-4 py-2 rounded-lg shadow text-sm"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="">City</option>
        <option value="Active">Lahore</option>
        <option value="Inactive">Karachi</option>
      </select>

      {/* Status Filter */}
      <select
        className="bg-white px-4 py-2 rounded-lg shadow text-sm"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="">Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      {/* Add Brand Button */}
      <button
        onClick={handleAddClick}
        className="flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-medium"
      >
        <Plus size={18} />
        Add Brand
      </button>

      {/* Add Brand Modal */}
      <AddBrandModal
        open={showAddModal}
        onClose={handleClose}
        onSave={onSave}
      />
    </div>
  );
};

export default BrandFilters;
