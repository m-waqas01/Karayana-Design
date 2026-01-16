import { useState, useEffect } from "react";
import BrandFilters from "../components/brands/BrandFilters";
import BrandsTable from "../components/brands/BrandsTable";
import BrandDetailSidebar from "../components/brands/BrandDetailSidebar";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const savedBrands = localStorage.getItem("brands");
    if (savedBrands) setBrands(JSON.parse(savedBrands));
  }, []);

  // Save to localStorage whenever brands change
  useEffect(() => {
    localStorage.setItem("brands", JSON.stringify(brands));
  }, [brands]);

  // Add new brand
  const handleSaveBrand = (newBrand) => {
    const imageUrl = newBrand.image
      ? URL.createObjectURL(newBrand.image)
      : "https://via.placeholder.com/40";

    const brandWithId = {
      ...newBrand,
      id: brands.length ? brands[brands.length - 1].id + 1 : 1,
      image: imageUrl,
      isActive: true,
      adminVerified: false,
    };

    setBrands([...brands, brandWithId]);
  };

  // Delete brand
  const handleDeleteBrand = (brandId) => {
    setBrands(brands.filter((b) => b.id !== brandId));
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-5">
        <h1 className="font-bold text-xl">Brands</h1>
        <BrandFilters onSave={handleSaveBrand} />
      </div>

      <BrandsTable
        brands={brands}
        onDelete={handleDeleteBrand}
        onSelect={setSelectedBrand}
      />

      <BrandDetailSidebar
        brand={selectedBrand}
        onClose={() => setSelectedBrand(null)}
      />
    </div>
  );
};

export default Brands;
