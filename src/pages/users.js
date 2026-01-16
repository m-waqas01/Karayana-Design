import { useState } from "react";
import UserTabs from "../components/users/UserTabs";
import UserFilters from "../components/users/UserFilters";
import UsersTable from "../components/users/UsersTable";
import UserProfile from "../components/users/UserProfile";

const Users = () => {
  const [activeTab, setActiveTab] = useState("Sales Person");
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Lincoln Bergson",
      email: "alinizami@gmail.com",
      code: "abs1121",
      phone: "0332 22525151",
      cnic: "36202-2925920-2",
      target: "14K",
      role: "Sales Person",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: 2,
      name: "Cristofer Lipshutz",
      email: "alinizami@gmail.com",
      code: "abs1121",
      phone: "0332 22525151",
      cnic: "36202-2925920-2",
      target: "14K",
      role: "Warehouse Managers",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);

  const handleSaveUser = (newUser) => {
    const avatarUrl = newUser.avatar
      ? URL.createObjectURL(newUser.avatar)
      : "https://i.pravatar.cc/40";

    const userWithId = {
      ...newUser,
      id: users.length + 1,
      role: activeTab,
      avatar: avatarUrl,
    };

    setUsers([...users, userWithId]);
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleCloseProfile = () => setSelectedUser(null);

  const handleDeleteUser = (userId) => {
    const filteredUsers = users.filter((u) => u.id !== userId);
    setUsers(filteredUsers);

    if (selectedUser?.id === userId) setSelectedUser(null);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Tabs Row - Responsive */}
      <div className="overflow-x-auto">
        <UserTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Header Row - Stack on mobile, flex on sm+ */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          {activeTab}
        </h2>

        {/* Right: Filters */}
        <div className="w-full sm:w-auto">
          <UserFilters activeTab={activeTab} onSave={handleSaveUser} />
        </div>
      </div>

      {/* Users List */}
      <UsersTable
        activeTab={activeTab}
        users={users}
        onUserSelect={handleUserSelect}
        onDelete={handleDeleteUser}
      />

      {/* Profile Drawer */}
      <UserProfile user={selectedUser} onClose={handleCloseProfile} />
    </div>
  );
};

export default Users;
