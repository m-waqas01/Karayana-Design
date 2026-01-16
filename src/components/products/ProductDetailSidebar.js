import { X } from "lucide-react";

const ProductDetailSidebar = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/30 z-40 transition-opacity"
      />

      {/* SIDEBAR */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-50 shadow-xl z-50 flex flex-col transition-transform transform">
        {/* HEADER */}
        <div className="flex items-center justify-between p-5 border-b bg-white shadow-sm">
          <h2 className="font-bold text-lg text-gray-800">Product Details</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 flex-1 overflow-y-auto space-y-6">
          {/* Product Image */}
          <div className="flex flex-col items-center">
            <div className="w-36 h-36 rounded-xl overflow-hidden shadow-md mb-4">
              <img
                src={product.image || "/placeholder.png"}
                alt={product.title_en}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-1">
              {product.title_en}
            </h3>
            {product.title_ur && (
              <p className="text-gray-500 text-sm">{product.title_ur}</p>
            )}
          </div>

          {/* Product Info Card */}
          <div className="bg-white rounded-xl shadow p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
              <div>
                <span className="font-medium text-gray-800">Brand:</span>{" "}
                {product.brand || "-"}
              </div>
              <div>
                <span className="font-medium text-gray-800">Category:</span>{" "}
                {product.category || "-"}
              </div>
              <div>
                <span className="font-medium text-gray-800">City:</span>{" "}
                {product.city || "-"}
              </div>
              <div>
                <span className="font-medium text-gray-800">Price:</span> Rs{" "}
                {product.price || "-"}
              </div>
              <div>
                <span className="font-medium text-gray-800">Stock:</span>{" "}
                {product.stock || 0}
              </div>
              <div>
                <span className="font-medium text-gray-800">Active:</span>{" "}
                {product.isActive ? (
                  <span className="text-green-600 font-semibold">Yes</span>
                ) : (
                  <span className="text-red-500 font-semibold">No</span>
                )}
              </div>
              <div>
                <span className="font-medium text-gray-800">
                  Admin Verified:
                </span>{" "}
                {product.adminVerified ? (
                  <span className="text-blue-600 font-semibold">Yes</span>
                ) : (
                  <span className="text-red-500 font-semibold">No</span>
                )}
              </div>
            </div>

            {/* Packings */}
            {product.packings && product.packings.length > 0 && (
              <div className="mt-2">
                <h4 className="font-medium text-gray-800 mb-1">Packings:</h4>
                <ul className="space-y-1">
                  {product.packings.map((p, i) => (
                    <li
                      key={i}
                      className="text-gray-700 text-sm bg-gray-50 px-3 py-1 rounded-lg shadow-sm flex justify-between"
                    >
                      <span>Rs {p.price}</span>
                      <span>Stock: {p.stock}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailSidebar;
