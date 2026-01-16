import { useState } from "react";
import { Search } from "lucide-react";

const LogFilters = ({
  search,
  onSearchChange,
  cityFilter,
  onCityChange,
  roleFilter,
  onRoleChange,
  dateFilter,
  onDateChange,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Search */}
      <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow">
        <Search size={18} className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search logs..."
          className="outline-none text-sm"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      {/* City Dropdown */}
      <select
        value={cityFilter}
        onChange={(e) => onCityChange(e.target.value)}
        className="bg-white px-4 py-2 rounded-lg shadow text-sm"
      >
        <option value="All">All Cities</option>
        <option value="Karachi">Karachi</option>
        <option value="Lahore">Lahore</option>
        <option value="Islamabad">Islamabad</option>
      </select>

      {/* Role Dropdown */}
      <select
        value={roleFilter}
        onChange={(e) => onRoleChange(e.target.value)}
        className="bg-white px-4 py-2 rounded-lg shadow text-sm"
      >
        <option value="All">All Roles</option>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
        <option value="Manager">Manager</option>
      </select>

      {/* Date&Time Dropdown */}
      <select
        value={dateFilter}
        onChange={(e) => onDateChange(e.target.value)}
        className="bg-white px-4 py-2 rounded-lg shadow text-sm"
      >
        <option value="All">All Dates</option>
        <option value="Today">Today</option>
        <option value="Last 7 Days">Last 7 Days</option>
        <option value="Last 30 Days">Last 30 Days</option>
      </select>
    </div>
  );
};

export default LogFilters;
