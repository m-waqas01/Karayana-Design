import { useState } from "react";
import { Search, Plus } from "lucide-react";

const BannerFilters = ({
  onAddBanner,
  onCityChange,
  onStatusChange,
  onSearchChange,
}) => {
  const [city, setCity] = useState("All");
  const [status, setStatus] = useState("All");
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Search */}
      <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow">
        <Search size={18} className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search banners..."
          className="outline-none text-sm"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            onSearchChange(e.target.value); // 🔥 send to page
          }}
        />
      </div>

      {/* City Filter */}
      <select
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
          onCityChange(e.target.value);
        }}
        className="bg-white px-4 py-2 rounded-lg shadow text-sm"
      >
        <option value="All">All Cities</option>
        <option value="Karachi">Karachi</option>
        <option value="Lahore">Lahore</option>
        <option value="Islamabad">Islamabad</option>
      </select>

      {/* Status Filter */}
      <select
        value={status}
        onChange={(e) => {
          setStatus(e.target.value);
          onStatusChange(e.target.value);
        }}
        className="bg-white px-4 py-2 rounded-lg shadow text-sm"
      >
        <option value="All">All Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      {/* Add Banner Button */}
      <button
        onClick={onAddBanner}
        className="flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-medium"
      >
        <Plus size={18} />
        Add Banner
      </button>
    </div>
  );
};

export default BannerFilters;
