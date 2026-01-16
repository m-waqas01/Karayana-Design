import ProductRow from "./ProductRow";

const ProductsTable = ({ products, onDelete, onSelect }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Desktop Header */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-semibold text-gray-700 bg-gray-50 border-b sticky top-0 z-10 gap-2">
        <span>Name</span>
        <span className="hidden md:block">Brand</span>
        <span className="hidden md:block">Category</span>
        <span className="hidden lg:block">Packing</span>
        <span className="hidden lg:block">Price</span>
        <span className="hidden lg:block">Stock</span>
        <span className="hidden md:block">Active</span>
        <span className="text-right">Actions</span>
      </div>

      {/* Rows */}
      <div className="divide-y">
        {products.map((product) => (
          <ProductRow
            key={product.id}
            product={product}
            onDelete={onDelete}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsTable;
