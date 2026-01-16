import { useState } from "react";

const CityFilters = ({ onSearch, onStatusChange, onAdd }) => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    onStatusChange(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
      {/* Search Field */}
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search city..."
        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 w-full md:w-1/3"
      />

      {/* Status Dropdown */}
      <select
        value={status}
        onChange={handleStatusChange}
        className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 w-full md:w-1/4"
      >
        <option value="All">All</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      {/* Add City Button */}
      <button
        onClick={onAdd}
        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 w-full md:w-auto"
      >
        Add City
      </button>
    </div>
  );
};

export default CityFilters;
