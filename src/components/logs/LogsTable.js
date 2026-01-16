import LogRow from "./LogRow";

const LogsTable = ({ logs }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Desktop Header */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-semibold text-gray-700 bg-gray-50 border-b sticky top-0 z-10 gap-2">
        <span>ID</span>
        <span className="hidden md:block">User</span>
        <span className="hidden md:block">Role</span>
        <span className="hidden lg:block">Detail</span>
        <span>Date & Time</span>
      </div>

      {/* Rows */}
      <div className="divide-y">
        {logs.length === 0 ? (
          <div className="p-6 text-center text-gray-500 text-sm">
            No logs found
          </div>
        ) : (
          logs.map((log) => <LogRow key={log.id} log={log} />)
        )}
      </div>
    </div>
  );
};

export default LogsTable;
