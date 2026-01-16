import { useState, useEffect } from "react";
import BannersTable from "../components/banners/BannersTable";
import AddBannerModal from "../components/banners/AddBannerModal";
import BannerFilters from "../components/banners/BannerFilters";

const BannersPage = () => {
  const [banners, setBanners] = useState([]);
  const [filteredBanners, setFilteredBanners] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [cityFilter, setCityFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");

  const cities = ["Karachi", "Lahore", "Islamabad"];

  /* Load banners */
  useEffect(() => {
    const saved = localStorage.getItem("banners");
    if (saved) {
      const parsed = JSON.parse(saved);
      setBanners(parsed);
      setFilteredBanners(parsed);
    }
  }, []);

  /* Save + Apply Filters */
  useEffect(() => {
    localStorage.setItem("banners", JSON.stringify(banners));
    applyFilters(search, cityFilter, statusFilter);
  }, [banners, search, cityFilter, statusFilter]);

  /* Add Banner */
  const handleSaveBanner = (banner) => {
    const newBanner = {
      ...banner,
      id: banners.length ? banners[banners.length - 1].id + 1 : 1,
      createdDate: new Date().toLocaleDateString(),
      adminVerifiedDate: null,
    };
    setBanners([...banners, newBanner]);
  };

  /* Delete Banner */
  const handleDeleteBanner = (id) => {
    setBanners(banners.filter((b) => b.id !== id));
  };

  /* Toggle Status */
  const handleToggleStatus = (id) => {
    setBanners(
      banners.map((b) =>
        b.id === id
          ? { ...b, status: b.status === "Active" ? "Inactive" : "Active" }
          : b
      )
    );
  };

  /* Toggle Admin Verified */
  const handleToggleAdmin = (id) => {
    setBanners(
      banners.map((b) =>
        b.id === id
          ? {
              ...b,
              adminVerifiedDate:
                b.adminVerifiedDate === null
                  ? new Date().toLocaleDateString()
                  : null,
            }
          : b
      )
    );
  };

  /* Filters */
  const applyFilters = (searchValue, city, status) => {
    let data = [...banners];

    if (searchValue) {
      data = data.filter((b) =>
        b.altText.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (city !== "All") {
      data = data.filter((b) => b.city === city);
    }

    if (status !== "All") {
      data = data.filter((b) => b.status === status);
    }

    setFilteredBanners(data);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <h1 className="font-bold text-xl">Banners</h1>

        <BannerFilters
          onAddBanner={() => setShowAddModal(true)}
          onCityChange={setCityFilter}
          onStatusChange={setStatusFilter}
        />
      </div>

      <BannersTable
        banners={filteredBanners}
        onDelete={handleDeleteBanner}
        onToggleStatus={handleToggleStatus}
        onToggleAdmin={handleToggleAdmin}
      />

      <AddBannerModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={handleSaveBanner}
        cities={cities}
      />
    </div>
  );
};

export default BannersPage;
