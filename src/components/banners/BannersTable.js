import BannerRow from "./BannerRow";

const BannersTable = ({ banners, onDelete, onToggleStatus }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Desktop Header - Hidden on mobile */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-semibold text-gray-700 bg-gray-50 border-b sticky top-0 z-10 gap-2">
        <span>Banner</span>
        <span className="hidden md:inline">Alt Text</span>
        <span className="hidden lg:inline">Created Date</span>
        <span className="hidden md:inline">Status</span>
        <span className="hidden lg:inline">Verified</span>
        <span className="text-right">Actions</span>
      </div>

      {/* Rows */}
      <div className="divide-y">
        {banners.map((banner) => (
          <BannerRow
            key={banner.id}
            banner={banner}
            onDelete={onDelete}
            onToggleStatus={onToggleStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default BannersTable;
