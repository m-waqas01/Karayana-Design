import { useState, useEffect } from "react";
import OrdersTable from "../components/orders/OrdersTable";
import AddOrderModal from "../components/orders/AddOrderModal";
import OrderDetailSidebar from "../components/orders/OrderDetailSidebar";
import OrderFilters from "../components/orders/OrderFilters";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    city: "",
    status: "",
    date: "",
  });

  // Load orders from localStorage
  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) setOrders(JSON.parse(savedOrders));
  }, []);

  // Save orders to localStorage
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  // Filter orders whenever filters or orders change
  useEffect(() => {
    const filtered = orders.filter((o) => {
      const matchSearch =
        o.customerName.toLowerCase().includes(filters.search.toLowerCase()) ||
        o.product.toLowerCase().includes(filters.search.toLowerCase()) ||
        (o.email || "").toLowerCase().includes(filters.search.toLowerCase());

      const matchCity = filters.city ? o.city === filters.city : true;
      const matchStatus = filters.status ? o.status === filters.status : true;
      const matchDate = filters.date ? o.orderDate === filters.date : true;

      return matchSearch && matchCity && matchStatus && matchDate;
    });

    setFilteredOrders(filtered);
  }, [filters, orders]);

  // Add new order
  const handleSaveOrder = (newOrder) => {
    const orderWithId = {
      ...newOrder,
      id: orders.length ? orders[orders.length - 1].id + 1 : 1,
      orderDate: new Date().toLocaleDateString(),
      status: "Pending", // default status
    };
    setOrders([...orders, orderWithId]);
  };

  // Delete order
  const handleDeleteOrder = (id) => {
    setOrders(orders.filter((o) => o.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header + Add Button */}
      <div className="flex flex-wrap gap-5 items-center justify-between">
        <h1 className="font-bold text-xl">Orders</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-lg font-medium"
        >
          Add Order
        </button>
      </div>

      {/* Filters */}
      <OrderFilters onFilter={setFilters} />

      {/* Orders Table */}
      <OrdersTable
        orders={filteredOrders}
        onDelete={handleDeleteOrder}
        onSelect={setSelectedOrder}
      />

      {/* Add Order Modal */}
      <AddOrderModal
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSave={handleSaveOrder}
      />

      {/* Order Detail Sidebar */}
      {selectedOrder && (
        <OrderDetailSidebar
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
};

export default Orders;
