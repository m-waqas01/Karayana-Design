import CityRow from "./CityRow";

const CitiesTable = ({ cities, onDelete, onToggle }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Desktop Header */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-semibold text-gray-700 bg-gray-50 border-b sticky top-0 z-10 gap-2">
        <span>ID</span>
        <span>Name</span>
        <span className="hidden md:block">Created Date</span>
        <span className="hidden md:block">Active</span>
        <span className="hidden lg:block">Verified</span>
        <span className="text-right">Actions</span>
      </div>

      {/* Rows */}
      <div className="divide-y">
        {cities.map((city) => (
          <CityRow
            key={city.id}
            city={city}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default CitiesTable;
