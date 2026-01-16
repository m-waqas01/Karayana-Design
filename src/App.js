import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout.js";
import Dashboard from "./pages/Dashboard.js";
import Users from "./pages/users.js";
import Products from "./pages/Products.js";
import Categories from "./pages/Categories.js";
import Brands from "./pages/Brands.js";
import Orders from "./pages/Orders.js";
import CitiesPage from "./pages/CitiesPage.js";
import BannersPage from "./pages/BannerPage.js";
import LogsPage from "./pages/LogsPage.js";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.js";
import TermsPage from "./pages/TermsPage.js";

import LoginPage from "./pages/LoginPage.js";
import ProtectedRoute from "./components/ProtectedRoute.js";

function App() {
  return (
    <Routes>
      {/* Public route */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected routes */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cities" element={<CitiesPage />} />
        <Route path="/banners" element={<BannersPage />} />
        <Route path="/logs" element={<LogsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
