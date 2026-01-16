import { X } from "lucide-react";

const BrandDetailSidebar = ({ brand, onClose }) => {
  if (!brand) return null;

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 bg-black/30 z-40" />

      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col">
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="font-bold text-lg">Brand Details</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-5 flex-1 overflow-y-auto space-y-4">
          <div className="flex flex-col items-center">
            <img
              src={brand.image || "/placeholder.png"}
              alt={brand.name_en}
              className="w-32 h-32 object-cover rounded-lg mb-3"
            />
            <h3 className="text-xl font-semibold">{brand.name_en}</h3>
            <p className="text-gray-500">{brand.name_ur}</p>
          </div>

          <div className="space-y-2">
            <p>
              <span className="font-medium">City:</span> {brand.city || "-"}
            </p>
            <p>
              <span className="font-medium">Active:</span>{" "}
              {brand.isActive ? "Yes" : "No"}
            </p>
            <p>
              <span className="font-medium">Admin Verified:</span>{" "}
              {brand.adminVerified ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandDetailSidebar;
