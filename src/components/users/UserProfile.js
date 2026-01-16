import { ArrowLeft, Pencil, X } from "lucide-react";

const UserProfile = ({ user, onClose }) => {
  return (
    <>
      {/* BACKDROP */}
      {user && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
        />
      )}

      {/* DRAWER - Responsive width */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl
        transform transition-transform duration-300 ease-in-out
        ${user ? "translate-x-0" : "translate-x-full"}`}
      >
        {user && (
          <div className="flex flex-col h-full">
            {/* HEADER - Responsive */}
            <div className="relative h-28 sm:h-32 bg-gradient-to-br from-orange-400 to-orange-500 flex-shrink-0">
              <button
                onClick={onClose}
                className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
                aria-label="Close profile"
              >
                <X size={20} className="text-gray-700" />
              </button>

              {/* AVATAR: overlaps header */}
              <div className="absolute left-4 sm:left-6 bottom-[-48px] sm:bottom-[-40px]">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-20 sm:w-24 h-20 sm:h-24 rounded-full border-4 border-white object-cover shadow-lg"
                />
              </div>
            </div>

            {/* CONTENT - Responsive padding and scrolling */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 pt-16 sm:pt-12 pb-4">
              {/* BASIC INFO */}
              <div className="relative mb-8">
                <button className="absolute right-0 top-0 text-orange-500 hover:text-orange-600 transition p-1">
                  <Pencil size={18} />
                </button>
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 pr-8">
                  {user.name}
                </h2>
                <p className="text-orange-500 font-semibold text-sm mt-1">
                  {user.role}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 break-all">
                  {user.email}
                </p>
              </div>

              {/* DETAILS - Responsive layout */}
              <div className="space-y-0 divide-y">
                <Info label="Code" value={user.code} />
                <Info label="Phone No" value={user.phone} />
                <Info label="Date of Birth" value="16 May, 1998" />
                <Info label="CNIC" value={user.cnic} />
                <Info
                  label="Address"
                  value={user.address || "College Town Rawalpindi Road Jand"}
                />
                {user.target && <Info label="Target" value={user.target} />}
              </div>
            </div>

            {/* ACTION BUTTON - Responsive */}
            <div className="p-4 sm:p-6 flex-shrink-0 border-t bg-gray-50">
              <button className="w-full bg-red-100 text-red-600 hover:bg-red-200 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors">
                Disable User
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const Info = ({ label, value }) => (
  <div className="px-4 sm:px-6 py-3 sm:py-4">
    <p className="text-xs sm:text-sm text-gray-500 font-medium mb-1">{label}</p>
    <p className="text-sm sm:text-base font-semibold text-gray-800 break-all">
      {value}
    </p>
  </div>
);

export default UserProfile;
