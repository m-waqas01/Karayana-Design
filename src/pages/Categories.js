import { useState, useEffect } from "react";
import CategoryFilters from "../components/categories/CategoryFilters";
import CategoriesTable from "../components/categories/CategoriesTable";
import CategoryDetailSidebar from "../components/categories/CategoryDetailSidebar";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Load categories from localStorage
  useEffect(() => {
    const savedCategories = localStorage.getItem("categories");
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
    } else {
      const initialCategories = [
        {
          id: 1,
          name: "Electronics",
          description: "All kinds of electronics",
          status: "Active",
        },
        {
          id: 2,
          name: "Grocery",
          description: "Daily grocery items",
          status: "Inactive",
        },
      ];
      setCategories(initialCategories);
      localStorage.setItem("categories", JSON.stringify(initialCategories));
    }
  }, []);

  // Save categories to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  // Add new category
  const handleSaveCategory = (newCategory) => {
    const categoryWithId = {
      ...newCategory,
      id: categories.length ? categories[categories.length - 1].id + 1 : 1,
    };
    setCategories([...categories, categoryWithId]);
  };

  // Delete category
  const handleDeleteCategory = (categoryId) => {
    setCategories(categories.filter((c) => c.id !== categoryId));
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-5">
        <h1 className="font-bold text-xl">Categories</h1>
        <CategoryFilters onSave={handleSaveCategory} />
      </div>

      <CategoriesTable
        categories={categories}
        onDelete={handleDeleteCategory}
        onSelect={setSelectedCategory}
      />

      <CategoryDetailSidebar
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />
    </div>
  );
};

export default Categories;
