import { useState } from "react";
import { Search } from "lucide-react";

const OrderFilters = ({ onFilter }) => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");

  // Call this function whenever filters change
  const handleFilterChange = () => {
    onFilter({
      search,
      city,
      status,
      date,
    });
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Search */}
      <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow">
        <Search size={18} className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search by customer, email, product..."
          className="outline-none text-sm"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            handleFilterChange();
          }}
        />
      </div>

      {/* City Filter */}
      <select
        className="bg-white px-4 py-2 rounded-lg shadow text-sm"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
          handleFilterChange();
        }}
      >
        <option value="">City</option>
        <option value="Karachi">Karachi</option>
        <option value="Lahore">Lahore</option>
        <option value="Islamabad">Islamabad</option>
      </select>

      {/* Status Filter */}
      <select
        className="bg-white px-4 py-2 rounded-lg shadow text-sm"
        value={status}
        onChange={(e) => {
          setStatus(e.target.value);
          handleFilterChange();
        }}
      >
        <option value="">Status</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
        <option value="Cancelled">Cancelled</option>
      </select>

      {/* Date Filter */}
      <input
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          handleFilterChange();
        }}
        className="bg-white px-3 py-2 rounded-lg shadow text-sm"
      />
    </div>
  );
};

export default OrderFilters;
