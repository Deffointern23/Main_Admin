import { useState } from "react";
import {
  Search,
  Filter,
  Eye,
  MoreVertical,
  Download,
  ShoppingBag,
  CheckCircle,
  Truck,
  Clock3,
  XCircle,
} from "lucide-react";

function Orders() {
  const orders = [
    {
      id: "#ORD-2025-1248",
      customer: "Priya Sharma",
      customerId: "CUST-1001",
      service: "Tailoring",
      product: "Blouse Stitching",
      vendor: "Stitch & Style Tailors",
      city: "Bangalore",
      date: "May 24, 2025",
      time: "10:30 AM",
      amount: "₹1,250",
      status: "Processing",
      payment: "Paid",
    },
    {
      id: "#ORD-2025-1247",
      customer: "Aman Verma",
      customerId: "CUST-1002",
      service: "Laundry",
      product: "Wash & Fold",
      vendor: "FreshPress Laundry",
      city: "Delhi",
      date: "May 24, 2025",
      time: "09:55 AM",
      amount: "₹450",
      status: "Pending",
      payment: "Paid",
    },
    {
      id: "#ORD-2025-1246",
      customer: "Neha Kapoor",
      customerId: "CUST-1003",
      service: "Jewellery Rental",
      product: "Necklace Set",
      vendor: "Royal Jewellery",
      city: "Mumbai",
      date: "May 23, 2025",
      time: "07:20 PM",
      amount: "₹3,500",
      status: "Processing",
      payment: "Paid",
    },
    {
      id: "#ORD-2025-1245",
      customer: "Rohit Mehta",
      customerId: "CUST-1004",
      service: "Rental",
      product: "Men's Suit",
      vendor: "Glamour Rentals",
      city: "Chennai",
      date: "May 23, 2025",
      time: "06:15 PM",
      amount: "₹2,999",
      status: "Completed",
      payment: "Paid",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [serviceFilter, setServiceFilter] = useState("");
  const [orderTypeFilter, setOrderTypeFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [activeTab, setActiveTab] = useState("All Orders");
  const statusStyle = {
    Processing: "bg-blue-100 text-blue-600",
    Pending: "bg-orange-100 text-orange-600",
    Completed: "bg-green-100 text-green-600",
    Cancelled: "bg-red-100 text-red-600",
  };
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.vendor.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "" || order.status === statusFilter;

    const matchesService =
      serviceFilter === "" || order.service === serviceFilter;

    const matchesOrderType =
      orderTypeFilter === "" || order.payment === orderTypeFilter;

    const matchesDate = dateFilter === "" || order.date === dateFilter;
    const matchesTab =
  activeTab === "All Orders" ||
  order.status === activeTab;

   return (
  matchesSearch &&
  matchesStatus &&
  matchesService &&
  matchesOrderType &&
  matchesDate &&
  matchesTab
);
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <ShoppingBag className="text-purple-600" size={24} />
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase">Total Orders</p>
              <h2 className="text-3xl font-bold text-[#2E1463]">1,248</h2>
              <p className="text-green-500 text-sm">↑ 6% vs last week</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <CheckCircle className="text-green-600" size={24} />
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase">
                Completed Orders
              </p>
              <h2 className="text-3xl font-bold text-[#2E1463]">856</h2>
              <p className="text-green-500 text-sm">↑ 15% vs last week</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <Truck className="text-blue-600" size={24} />
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase">
                Processing Orders
              </p>
              <h2 className="text-3xl font-bold text-[#2E1463]">246</h2>
              <p className="text-green-500 text-sm">↑ 8% vs last week</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
              <Clock3 className="text-orange-500" size={24} />
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase">Pending Orders</p>
              <h2 className="text-3xl font-bold text-[#2E1463]">98</h2>
              <p className="text-red-500 text-sm">↓ 5% vs last week</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
              <XCircle className="text-red-500" size={24} />
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase">
                Cancelled Orders
              </p>
              <h2 className="text-3xl font-bold text-[#2E1463]">48</h2>
              <p className="text-red-500 text-sm">↓ 12% vs last week</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-5 bg-white rounded-md border border-gray-200 shadow-sm">
          <div className="hidden xl:flex justify-between gap-4">
            <div className="flex flex-wrap gap-3 flex-1">
              <div className="relative min-w-[300px] flex-1">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Search by order ID, customer..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white rounded-md border border-gray-200 shadow-sm py-3 pl-10 pr-4 outline-none focus:border-gray-500"
                />
              </div>

              <select
                className="bg-white rounded-md w-30 border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">All Status</option>
                <option value="Processing">Processing</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>

              <select
                className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
                value={orderTypeFilter}
                onChange={(e) => setOrderTypeFilter(e.target.value)}
              >
                <option value="">All Order Types</option>

                {[...new Set(orders.map((o) => o.orderType))].map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              <select
                className="bg-white rounded-md w-35 border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
              >
                <option value="">All Services</option>

                {[...new Set(orders.map((o) => o.service))].map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              <select
                className="bg-white rounded-md w-30 border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              >
                <option value="">All Dates</option>

                {[...new Set(orders.map((o) => o.date))].map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              </select>

              <button className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 flex items-center gap-2 outline-none focus:border-gray-500">
                <Filter size={16} />
                Filter
              </button>
            </div>

            <button className="bg-white rounded-md border border-gray-200 shadow-sm px-5 py-3 flex items-center gap-2 outline-none focus:border-gray-500">
              <Download size={16} />
              Export
            </button>
          </div>

          <div className="hidden md:block xl:hidden space-y-3">
            <div className="grid grid-cols-[2fr_1fr] gap-3">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Search by order ID, customer..."
                  className="w-full bg-white rounded-md border border-gray-200 shadow-sm py-3 pl-10 pr-4 outline-none focus:border-gray-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <select
                className="w-full bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">All Status</option>
                <option value="Processing">Processing</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <select
                className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
                value={orderTypeFilter}
                onChange={(e) => setOrderTypeFilter(e.target.value)}
              >
                <option value="">All Order Types</option>

                {[...new Set(orders.map((o) => o.orderType))].map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>

              <select
                className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
              >
                <option value="">All Services</option>

                {[...new Set(orders.map((o) => o.service))].map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              <select
                className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              >
                <option value="">All Dates</option>

                {[...new Set(orders.map((o) => o.date))].map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 flex items-center justify-center gap-2 outline-none focus:border-gray-500">
                <Filter size={16} />
                Filter
              </button>

              <button className="bg-white rounded-md border border-gray-200 shadow-sm px-5 py-3 flex items-center justify-center gap-2 outline-none focus:border-gray-500">
                <Download size={16} />
                Export
              </button>
            </div>
          </div>

          <div className="md:hidden space-y-3">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search by order ID, customer..."
                className="w-full bg-white rounded-md border border-gray-200 shadow-sm py-3 pl-10 pr-4 outline-none focus:border-gray-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <select
                className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">All Status</option>
                <option value="Processing">Processing</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>

              <select
                className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
                value={orderTypeFilter}
                onChange={(e) => setOrderTypeFilter(e.target.value)}
              >
                <option value="">Order Types</option>

                {[...new Set(orders.map((o) => o.orderType))].map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <select
                className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
              >
                <option value="">All Services</option>

                {[...new Set(orders.map((o) => o.service))].map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              <select
                className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              >
                <option value="">All Dates</option>

                {[...new Set(orders.map((o) => o.date))].map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 flex items-center justify-center gap-2 outline-none focus:border-gray-500">
                <Filter size={16} />
                Filter
              </button>

              <button className="bg-white rounded-md border border-gray-200 shadow-sm px-5 py-3 flex items-center justify-center gap-2 outline-none focus:border-gray-500">
                <Download size={16} />
                Export
              </button>
            </div>
          </div>
        </div>

        <div className="px-5 bg-white rounded-md border border-gray-200 shadow-sm">
       <div className="flex gap-8 overflow-x-auto">
  {[
    "All Orders",
    "Processing",
    "Completed",
    "Pending",
    "Cancelled",
  ].map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`py-4 text-sm font-medium whitespace-nowrap border-b-2 transition ${
        activeTab === tab
          ? "border-black text-black"
          : "border-transparent text-gray-500"
      }`}
    >
      {tab}
      {tab === "All Orders" && " (1,248)"}
      {tab === "Processing" && " (246)"}
      {tab === "Completed" && " (856)"}
      {tab === "Pending" && " (98)"}
      {tab === "Cancelled" && " (48)"}
    </button>
  ))}
</div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1200px]">
            <thead>
              <tr className="bg-gray-50 rounded-md border border-gray-200 shadow-sm text-xs uppercase text-gray-500">
                <th className="text-left px-6 py-4">Order ID</th>
                <th className="text-left px-6 py-4">Customer</th>
                <th className="text-left px-6 py-4">Service Type</th>
                <th className="text-left px-6 py-4">Vendor / Seller</th>
                <th className="text-left px-6 py-4">Order Date</th>
                <th className="text-left px-6 py-4">Amount</th>
                <th className="text-left px-6 py-4">Status</th>
                <th className="text-left px-6 py-4">Payment</th>
                <th className="text-left px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="bg-white rounded-md border border-gray-200 shadow-sm hover:bg-gray-50"
                >
                  <td className="px-6 py-5">
                    <div>
                      <p className="font-semibold text-[#2E1463]">{order.id}</p>
                      <p className="text-xs text-teal-600">View Details</p>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <div>
                      <p className="font-medium">{order.customer}</p>
                      <p className="text-xs text-gray-500">
                        {order.customerId}
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <div>
                      <p>{order.service}</p>
                      <p className="text-xs text-gray-500">{order.product}</p>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <div>
                      <p>{order.vendor}</p>
                      <p className="text-xs text-gray-500">{order.city}</p>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <div>
                      <p>{order.date}</p>
                      <p className="text-xs text-gray-500">{order.time}</p>
                    </div>
                  </td>

                  <td className="px-6 py-5 font-semibold">{order.amount}</td>

                  <td className="px-6 py-5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        statusStyle[order.status]
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {order.payment}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex gap-2">
                      <button className="w-10 h-10 bg-white rounded-md border border-gray-200 shadow-sm flex items-center justify-center">
                        <Eye size={16} />
                      </button>

                      <button className="w-10 h-10 bg-white rounded-md border border-gray-200 shadow-sm flex items-center justify-center">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 p-5 bg-white rounded-md border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            Showing 1 to {filteredOrders.length} of {orders.length} results
          </p>

          <div className="flex flex-wrap justify-center sm:justify-end gap-2">
            <button className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-md border border-gray-200 shadow-sm">
              ‹
            </button>

            <button className="w-8 h-8 sm:w-9 sm:h-9 bg-purple-600 text-white rounded-md border border-gray-200 shadow-sm">
              1
            </button>

            <button className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-md border border-gray-200 shadow-sm">
              2
            </button>

            <button className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-md border border-gray-200 shadow-sm">
              3
            </button>

            <button className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-md border border-gray-200 shadow-sm">
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
