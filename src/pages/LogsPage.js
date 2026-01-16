import { useState, useEffect } from "react";
import LogsTable from "../components/logs/LogsTable";
import LogFilters from "../components/logs/LogFilters";
import AddLogModal from "../components/logs/AddLogModal";

const LogsPage = () => {
  const [logs, setLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const [search, setSearch] = useState("");
  const [cityFilter, setCityFilter] = useState("All");
  const [roleFilter, setRoleFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("All");

  const cities = ["Karachi", "Lahore", "Islamabad"];
  const roles = ["Admin", "User", "Manager"];

  useEffect(() => {
    const saved = localStorage.getItem("logs");
    if (saved) {
      const parsed = JSON.parse(saved);
      setLogs(parsed);
      setFilteredLogs(parsed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("logs", JSON.stringify(logs));
    applyFilters();
  }, [logs, search, cityFilter, roleFilter, dateFilter]);

  const applyFilters = () => {
    let data = [...logs];
    if (search) {
      data = data.filter(
        (l) =>
          l.user.toLowerCase().includes(search.toLowerCase()) ||
          l.detail.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (cityFilter !== "All") data = data.filter((l) => l.city === cityFilter);
    if (roleFilter !== "All") data = data.filter((l) => l.role === roleFilter);
    if (dateFilter !== "All")
      data = data.filter((l) => l.date.includes(dateFilter));

    setFilteredLogs(data);
  };

  const handleAddLog = (log) => {
    const newLog = {
      ...log,
      id: logs.length ? logs[logs.length - 1].id + 1 : 1,
    };
    setLogs([...logs, newLog]);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <h1 className="font-bold text-xl">Logs</h1>

        <LogFilters
          search={search}
          onSearchChange={setSearch}
          cityFilter={cityFilter}
          onCityChange={setCityFilter}
          roleFilter={roleFilter}
          onRoleChange={setRoleFilter}
          dateFilter={dateFilter}
          onDateChange={setDateFilter}
        />
      </div>

      <button
        onClick={() => setShowAddModal(true)}
        className="bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-medium"
      >
        Add Log
      </button>

      <LogsTable logs={filteredLogs} />

      <AddLogModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={handleAddLog}
        cities={cities}
        roles={roles}
      />
    </div>
  );
};

export default LogsPage;
