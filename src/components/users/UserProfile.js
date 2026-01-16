import { ArrowLeft, Pencil } from "lucide-react";

const UserProfile = ({ user, onClose }) => {
  return (
    <>
      {/* BACKDROP */}
      {user && (
        <div onClick={onClose} className="fixed inset-0 bg-black/30 z-40" />
      )}

      {/* DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[380px] bg-white z-50 shadow-xl
        transform transition-transform duration-300
        ${user ? "translate-x-0" : "translate-x-full"}`}
      >
        {user && (
          <div className="flex flex-col h-full">
            {/* HEADER */}
            <div className="relative h-32 bg-gray-100 flex-shrink-0">
              <button
                onClick={onClose}
                className="absolute top-4 left-4 bg-white rounded-full p-2 shadow"
              >
                <ArrowLeft size={18} />
              </button>

              {/* AVATAR: overlaps header */}
              <div className="absolute left-6 bottom-[-40px]">
                <img
                  src={user.avatar}
                  alt=""
                  className="w-24 h-24 rounded-full border-4 border-white object-cover"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex-1 overflow-y-auto px-6 pt-12">
              {/* BASIC INFO */}
              <div className=" relative">
                {" "}
                {/* shift right so avatar doesn't overlap text */}
                <button className="absolute right-0 top-0 text-orange-500">
                  <Pencil size={18} />
                </button>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-orange-500 font-medium">{user.role}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>

              {/* DETAILS */}
              <div className="mt-6 divide-y">
                <Info label="Phone No" value={user.phone} />
                <Info label="Date of Birth" value="16 May, 1998" />
                <Info label="CNIC" value={user.cnic} />
                <Info
                  label="Address"
                  value={user.address || "College Town Rawalpindi Road Jand"}
                />
              </div>
            </div>

            {/* ACTION BUTTON */}
            <div className="p-6 flex-shrink-0">
              <button className="w-full bg-red-100 text-red-600 py-3 rounded-lg font-medium">
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
  <div className="px-6 py-4">
    <p className="text-sm text-gray-500">{label}</p>
    <p className="font-medium">{value}</p>
  </div>
);

export default UserProfile;
