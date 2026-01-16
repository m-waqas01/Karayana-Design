import { X } from "lucide-react";

const CategoryDetailSidebar = ({ category, onClose }) => {
  if (!category) return null;

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 bg-black/30 z-40" />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col">
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="font-bold text-lg">Category Details</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-5 flex-1 overflow-y-auto space-y-4">
          <div className="bg-gray-50 rounded-lg p-4 shadow">
            <h3 className="text-xl font-semibold">{category.name}</h3>
            <p className="text-gray-500">{category.description}</p>
            <p className="mt-2">
              <span className="font-medium">Status:</span> {category.status}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryDetailSidebar;
