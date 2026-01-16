import CategoryRow from "./CategoryRow";

const CategoriesTable = ({ categories, onDelete, onSelect }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Desktop Header */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-semibold text-gray-700 bg-gray-50 border-b sticky top-0 z-10 gap-2">
        <span>Name</span>
        <span className="hidden md:block">Urdu Name</span>
        <span className="hidden md:block">ID</span>
        <span className="hidden lg:block">Created Date</span>
        <span className="hidden md:block">Active</span>
        <span className="text-right">Actions</span>
      </div>

      {/* Rows */}
      <div className="divide-y">
        {categories.map((category) => (
          <CategoryRow
            key={category.id}
            category={category}
            onDelete={onDelete}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesTable;
