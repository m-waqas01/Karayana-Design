const tabs = [
  "Sales Person",
  "Warehouse Managers",
  "Retailers",
  "Coordinators",
];

const UserTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex bg-white rounded-xl p-1 shadow w-fit">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition
            ${
              activeTab === tab
                ? "bg-orange-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default UserTabs;
