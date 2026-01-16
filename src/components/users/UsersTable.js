import UserRow from "./UserRow";

const UsersTable = ({ activeTab, users, onUserSelect, onDelete }) => {
  const filteredUsers = users.filter((user) => user.role === activeTab);

  return (
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Desktop Header */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-semibold text-gray-700 bg-gray-50 border-b sticky top-0 z-10 gap-2">
        <span>Name</span>
        <span className="hidden md:block">Email</span>
        <span className="hidden lg:block">Phone</span>
        <span className="hidden lg:block">CNIC</span>
        <span className="hidden md:block">Status</span>
        <span className="text-right">Actions</span>
      </div>

      {/* Rows */}
      <div className="divide-y">
        {filteredUsers.length === 0 ? (
          <div className="p-6 text-center text-gray-500 text-sm">
            No users found
          </div>
        ) : (
          filteredUsers.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              onUserSelect={onUserSelect}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default UsersTable;
