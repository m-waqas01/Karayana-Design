const tabs = [
  "Sales Person",
  "Warehouse Managers",
  "Retailers",
  "Coordinators",
];

const UserTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex bg-white rounded-lg p-1 shadow overflow-x-auto scrollbar-hide">
      <div className="flex gap-1 flex-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition whitespace-nowrap flex-shrink-0
              ${
                activeTab === tab
                  ? "bg-orange-500 text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserTabs;
