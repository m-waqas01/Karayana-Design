const Dashboard = () => {
  return (
    <div className="w-full">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">
        Dashboard
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {/* Total Retailers */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm sm:text-base text-gray-600 mb-2">
            Total Retailers
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            120
          </p>
        </div>

        {/* Total Salesman */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm sm:text-base text-gray-600 mb-2">
            Total Salesman
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            400
          </p>
        </div>

        {/* Total Warehouse Managers */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm sm:text-base text-gray-600 mb-2">
            Total Warehouse Managers
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            76
          </p>
        </div>

        {/* Total Categories */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm sm:text-base text-gray-600 mb-2">
            Total Categories
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            50
          </p>
        </div>

        {/* Total Brands */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm sm:text-base text-gray-600 mb-2">
            Total Brands
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            80
          </p>
        </div>

        {/* Total Products */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm sm:text-base text-gray-600 mb-2">
            Total Products
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            185
          </p>
        </div>

        {/* Total Orders Completed */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm sm:text-base text-gray-600 mb-2">
            Total Orders Completed
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            70
          </p>
        </div>

        {/* Total Revenue */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <p className="text-sm sm:text-base text-gray-600 mb-2">
            Total Revenue
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            66
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
