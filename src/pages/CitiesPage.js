import { useState, useEffect } from "react";
import CitiesTable from "../components/cities/CitiesTable";
import AddCityModal from "../components/cities/AddCityModal";

const CitiesPage = () => {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Load from localStorage
  useEffect(() => {
    const savedCities = localStorage.getItem("cities");
    if (savedCities) {
      const parsed = JSON.parse(savedCities);
      setCities(parsed);
      setFilteredCities(parsed);
    }
  }, []);

  // Save to localStorage whenever cities change
  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
    applyFilters(searchText, statusFilter);
  }, [cities]);

  // Add new city
  const handleSaveCity = (newCity) => {
    const cityWithId = {
      ...newCity,
      id: cities.length ? cities[cities.length - 1].id + 1 : 1,
      createdDate: new Date().toLocaleDateString(),
      isActive: true,
      adminVerified: false,
    };
    setCities([...cities, cityWithId]);
  };

  // Delete city
  const handleDeleteCity = (id) => {
    setCities(cities.filter((c) => c.id !== id));
  };

  // Toggle Active / Admin Verified
  const handleToggle = (id, field) => {
    setCities(
      cities.map((c) => (c.id === id ? { ...c, [field]: !c[field] } : c))
    );
  };

  // Handle Search
  const handleSearch = (text) => {
    setSearchText(text);
    applyFilters(text, statusFilter);
  };

  // Handle Status Filter
  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    applyFilters(searchText, status);
  };

  // Apply both search and status filters
  const applyFilters = (search, status) => {
    let filtered = [...cities];

    if (search) {
      filtered = filtered.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (status === "Active") filtered = filtered.filter((c) => c.isActive);
    else if (status === "Inactive")
      filtered = filtered.filter((c) => !c.isActive);

    setFilteredCities(filtered);
  };

  return (
    <div className="space-y-6">
      {/* Header and Filters */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div className="flex gap-4 items-center flex-wrap">
          <h1 className="font-bold text-xl">Cities</h1>

          {/* Search */}
          <input
            type="text"
            placeholder="Search city..."
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
          />

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => handleStatusFilter(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
          >
            <option value="All">Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Add City Button */}
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-medium"
        >
          Add City
        </button>
      </div>

      {/* Cities Table */}
      <CitiesTable
        cities={filteredCities}
        onDelete={handleDeleteCity}
        onToggle={handleToggle}
      />

      {/* Add City Modal */}
      <AddCityModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={handleSaveCity}
      />
    </div>
  );
};

export default CitiesPage;
