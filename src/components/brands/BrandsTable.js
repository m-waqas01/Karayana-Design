import BrandRow from "./BrandRow";

const BrandsTable = ({ brands, onDelete, onSelect }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Desktop Header */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-semibold text-gray-700 bg-gray-50 border-b sticky top-0 z-10 gap-2">
        <span className="hidden md:block"></span>
        <span>Name</span>
        <span className="hidden md:block">Urdu Name</span>
        <span className="hidden lg:block">ID</span>
        <span className="hidden lg:block">Commission</span>
        <span className="hidden lg:block">Created</span>
        <span className="hidden md:block">Status</span>
        <span className="text-right">Actions</span>
      </div>

      {/* Rows */}
      <div className="divide-y">
        {brands.map((brand) => (
          <BrandRow
            key={brand.id}
            brand={brand}
            onDelete={onDelete}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandsTable;
