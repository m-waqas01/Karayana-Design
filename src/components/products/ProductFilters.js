import { useState } from "react";
import { Search, Plus } from "lucide-react";
import AddProductModal from "./AddProductModal";

const ProductFilters = ({ onSave }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [search, setSearch] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [filterBrand, setFilterBrand] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
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
          placeholder="Search products..."
          className="outline-none text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Dropdown filters */}
      <select
        className="bg-white px-4 py-2 rounded-lg shadow text-sm"
        value={filterCity}
        onChange={(e) => setFilterCity(e.target.value)}
      >
        <option value="">City</option>
        <option value="Karachi">Karachi</option>
        <option value="Lahore">Lahore</option>
      </select>

      <select
        className="bg-white px-4 py-2 rounded-lg shadow text-sm"
        value={filterBrand}
        onChange={(e) => setFilterBrand(e.target.value)}
      >
        <option value="">Brand</option>
        <option value="Apple">Apple</option>
        <option value="Samsung">Samsung</option>
      </select>

      <select
        className="bg-white px-4 py-2 rounded-lg shadow text-sm"
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="">Category</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothes">Clothes</option>
      </select>

      <select
        className="bg-white px-4 py-2 rounded-lg shadow text-sm"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="">Status</option>
        <option value="Available">Available</option>
        <option value="OutOfStock">Out Of Stock</option>
      </select>

      {/* Add Button */}
      <button
        onClick={handleAddClick}
        className="flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-medium"
      >
        <Plus size={18} />
        Add Product
      </button>

      {/* Add Product Modal */}
      <AddProductModal
        open={showAddModal}
        onClose={handleClose}
        onSave={onSave}
      />
    </div>
  );
};

export default ProductFilters;
