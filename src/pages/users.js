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
      role: "Warehouse Manager",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(null); // selected user for profile drawer

  // Save new user
  const handleSaveUser = (newUser) => {
    // Convert avatar File to object URL if it exists
    const avatarUrl = newUser.avatar
      ? URL.createObjectURL(newUser.avatar)
      : "https://i.pravatar.cc/40"; // fallback

    const userWithId = {
      ...newUser,
      id: users.length + 1,
      role: activeTab,
      avatar: avatarUrl, // store URL for table and profile drawer
    };

    setUsers([...users, userWithId]);
  };

  // Open profile drawer
  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  // Close profile drawer
  const handleCloseProfile = () => setSelectedUser(null);

  // Delete user
  const handleDeleteUser = (userId) => {
    const filteredUsers = users.filter((u) => u.id !== userId);
    setUsers(filteredUsers);

    // Close profile drawer if deleted user is open
    if (selectedUser?.id === userId) setSelectedUser(null);
  };

  return (
    <div className="space-y-6">
      {/* Tabs Row */}
      <UserTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Header Row */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{activeTab}</h2>

        {/* Right: Filters */}
        <UserFilters activeTab={activeTab} onSave={handleSaveUser} />
      </div>

      {/* Users List */}
      <UsersTable
        activeTab={activeTab}
        users={users}
        onUserSelect={handleUserSelect} // open profile drawer
        onDelete={handleDeleteUser} // delete user
      />

      {/* Profile Drawer */}
      <UserProfile user={selectedUser} onClose={handleCloseProfile} />
    </div>
  );
};

export default Users;
