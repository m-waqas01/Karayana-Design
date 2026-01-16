const LogRow = ({ log }) => {
  return (
    <>
      {/* Desktop Row */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-3 sm:px-4 md:px-6 py-3 items-center gap-2 text-xs sm:text-sm border-b hover:bg-gray-50 transition-colors last:border-b-0">
        <span className="font-medium text-gray-800">{log.id}</span>
        <span className="hidden md:block text-gray-700 truncate">
          {log.user}
        </span>
        <span className="hidden md:block text-gray-700 truncate">
          {log.role}
        </span>
        <span className="hidden lg:block text-gray-700 truncate">
          {log.detail}
        </span>
        <span className="text-gray-600">{log.date}</span>
      </div>

      {/* Mobile Card */}
      <div className="sm:hidden bg-white p-3 space-y-2 border-b last:border-b-0">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-800 text-sm">Log {log.id}</p>
            <p className="text-xs text-gray-500 truncate">
              {log.user} ({log.role})
            </p>
          </div>
          <span className="text-xs text-gray-400 ml-2 flex-shrink-0">
            {log.date}
          </span>
        </div>
        <p className="text-xs text-gray-600 line-clamp-2">{log.detail}</p>
      </div>
    </>
  );
};

export default LogRow;
