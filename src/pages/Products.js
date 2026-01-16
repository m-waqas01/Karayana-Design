import { useState, useEffect } from "react";
import ProductFilters from "../components/products/ProductFilters";
import ProductsTable from "../components/products/ProductsTable";
import ProductDetailSidebar from "../components/products/ProductDetailSidebar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Load products from localStorage
  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      const initialProducts = [
        {
          id: 1,
          title_en: "iPhone 14",
          title_ur: "آئی فون 14",
          city: "Karachi",
          brand: "Apple",
          category: "Electronics",
          price: 1500,
          stock: 10,
          image: "https://via.placeholder.com/40",
          packings: [{ price: 1600, stock: 5 }],
          isActive: true,
          adminVerified: true,
        },
        {
          id: 2,
          title_en: "Galaxy S22",
          title_ur: "گیلیکسی S22",
          city: "Lahore",
          brand: "Samsung",
          category: "Electronics",
          price: 1200,
          stock: 0,
          image: "https://via.placeholder.com/40",
          packings: [],
          isActive: true,
          adminVerified: false,
        },
      ];
      setProducts(initialProducts);
      localStorage.setItem("products", JSON.stringify(initialProducts));
    }
  }, []);

  // Save products to localStorage whenever products state changes
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleSaveProduct = (newProduct) => {
    const imageUrl = newProduct.image
      ? URL.createObjectURL(newProduct.image)
      : "https://via.placeholder.com/40";

    const productWithId = {
      ...newProduct,
      id: products.length ? products[products.length - 1].id + 1 : 1,
      image: imageUrl,
      stock: Number(newProduct.stock) || 0,
      packings: newProduct.packings || [],
      isActive: true,
      adminVerified: false,
    };

    setProducts([...products, productWithId]);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
    if (selectedProduct?.id === id) setSelectedProduct(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-5">
        <h1 className="font-bold text-xl">Products</h1>
        <ProductFilters onSave={handleSaveProduct} />
      </div>

      <ProductsTable
        products={products}
        onDelete={handleDeleteProduct}
        onSelect={(product) => setSelectedProduct(product)}
      />

      {/* Product Detail Sidebar */}
      <ProductDetailSidebar
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Products;
