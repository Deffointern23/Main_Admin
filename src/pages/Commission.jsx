import { useState } from "react";
import {
  Search,
  Filter,
  Download,
  MoreVertical,
  Receipt,
  Wallet,
  CheckCircle2,
  RotateCcw,
  Percent,
} from "lucide-react";

function Commission() {
  const commissions = [
    {
      invoice: "INV-2025-1421",
      orderId: "#ORD-2025-1248",
      vendor: "Stitch & Style Tailors",
      city: "Bangalore",
      initials: "SS",
      type: "Service Commission (Tailoring)",
      orderDate: "May 24, 2025",
      time: "10:30 AM",
      orderAmount: "₹1,250",
      rate: "15%",
      commission: "₹187.50",
      status: "Paid",
      payout: "May 25, 2025",
    },
    {
      invoice: "INV-2025-1420",
      orderId: "#ORD-2025-1247",
      vendor: "FreshPress Laundry",
      city: "Delhi",
      initials: "FP",
      type: "Service Commission (Laundry)",
      orderDate: "May 24, 2025",
      time: "09:15 AM",
      orderAmount: "₹450",
      rate: "12%",
      commission: "₹54.00",
      status: "Pending",
      payout: "-",
    },
    {
      invoice: "INV-2025-1419",
      orderId: "#ORD-2025-1246",
      vendor: "Royal Jewellery",
      city: "Mumbai",
      initials: "RJ",
      type: "Jewellery Rental",
      orderDate: "May 23, 2025",
      time: "07:20 PM",
      orderAmount: "₹3,800",
      rate: "10%",
      commission: "₹380.00",
      status: "Paid",
      payout: "May 24, 2025",
    },
    {
      invoice: "INV-2025-1418",
      orderId: "#ORD-2025-1245",
      vendor: "Glamour Rentals",
      city: "Chennai",
      initials: "GR",
      type: "Rental Commission",
      orderDate: "May 23, 2025",
      time: "06:15 PM",
      orderAmount: "₹2,999",
      rate: "12%",
      commission: "₹359.88",
      status: "Refunded",
      payout: "May 23, 2025",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
const [vendorFilter, setVendorFilter] = useState("");
const [statusFilter, setStatusFilter] = useState("");
const [typeFilter, setTypeFilter] = useState("");
const [dateFilter, setDateFilter] = useState("");
const [activeTab, setActiveTab] = useState("All");
const filteredCommissions = commissions.filter((item) => {
  const matchesSearch =
    item.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.invoice.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesVendor =
    vendorFilter === "" || item.vendor === vendorFilter;

  const matchesStatus =
    statusFilter === "" || item.status === statusFilter;

  const matchesType =
    typeFilter === "" || item.type === typeFilter;

  const matchesDate =
    dateFilter === "" || item.orderDate === dateFilter;
    const matchesTab =
  activeTab === "All" || item.status === activeTab;

return (
  matchesSearch &&
  matchesVendor &&
  matchesStatus &&
  matchesType &&
  matchesDate &&
  matchesTab
);
});

  const statusStyles = {
    Paid: "bg-green-100 text-green-600",
    Pending: "bg-orange-100 text-orange-600",
    Refunded: "bg-red-100 text-red-600",
  };

  return (
    <div className="space-y-6">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <Receipt className="text-purple-600" size={24} />
            </div>

            <div>
              <p className="text-xs uppercase text-gray-500">
                Total Commission
              </p>
              <h2 className="text-3xl font-bold text-[#2E1463]">₹8,74,560</h2>
              <p className="text-green-500 text-sm">↑ 4.8% vs last week</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <Wallet className="text-green-600" size={24} />
            </div>

            <div>
              <p className="text-xs uppercase text-gray-500">
                Pending Commission
              </p>
              <h2 className="text-3xl font-bold text-[#2E1463]">₹1,24,850</h2>
              <p className="text-orange-500 text-sm">↑ 8.4% vs last week</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <CheckCircle2 className="text-blue-600" size={24} />
            </div>

            <div>
              <p className="text-xs uppercase text-gray-500">Paid Commission</p>
              <h2 className="text-3xl font-bold text-[#2E1463]">₹6,98,120</h2>
              <p className="text-green-500 text-sm">↑ 10.3% vs last week</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
              <RotateCcw className="text-orange-500" size={24} />
            </div>

            <div>
              <p className="text-xs uppercase text-gray-500">
                Refunded Commission
              </p>
              <h2 className="text-3xl font-bold text-[#2E1463]">₹51,590</h2>
              <p className="text-red-500 text-sm">↓ 8.7% vs last week</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
              <Percent className="text-red-500" size={24} />
            </div>

            <div>
              <p className="text-xs uppercase text-gray-500">Average Rate</p>
              <h2 className="text-3xl font-bold text-[#2E1463]">12.5%</h2>
              <p className="text-gray-500 text-sm">No change</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      
    <div className="p-5 bg-white rounded-md border border-gray-200 shadow-sm">

  
  <div className="hidden xl:flex gap-4 justify-between">
    <div className="flex flex-wrap gap-3 flex-1">

      <div className="relative min-w-[300px] flex-1">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search by vendor, order ID or invoice ID..."
           value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white rounded-md border border-gray-200 shadow-sm py-3 pl-10 pr-4 outline-none focus:border-gray-500"
        />
      </div>

      <select
  value={vendorFilter}
  onChange={(e) => setVendorFilter(e.target.value)}
  className="bg-white rounded-md w-35 border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
>
  <option value="">All Vendors</option>

  {[...new Set(commissions.map((c) => c.vendor))].map((vendor) => (
    <option key={vendor} value={vendor}>
      {vendor}
    </option>
  ))}
</select>

      <select
  value={statusFilter}
  onChange={(e) => setStatusFilter(e.target.value)}
  className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
>
  <option value="">All Status</option>
  <option value="Paid">Paid</option>
  <option value="Pending">Pending</option>
  <option value="Refunded">Refunded</option>
</select>

     <select
  value={typeFilter}
  onChange={(e) => setTypeFilter(e.target.value)}
  className="bg-white rounded-md w-48 border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
>
  <option value="">Commission Types</option>

  {[...new Set(commissions.map((c) => c.type))].map((type) => (
    <option key={type} value={type}>
      {type}
    </option>
  ))}
</select>

     <select
  value={dateFilter}
  onChange={(e) => setDateFilter(e.target.value)}
  className="bg-white rounded-md w-30 border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
>
  <option value="">All Dates</option>

  {[...new Set(commissions.map((c) => c.orderDate))].map((date) => (
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
          placeholder="Search by vendor, order ID or invoice ID..."
           value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-white rounded-md border border-gray-200 shadow-sm py-3 pl-10 pr-4 outline-none focus:border-gray-500"
        />
      </div>

      <select
  value={vendorFilter}
  onChange={(e) => setVendorFilter(e.target.value)}
  className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
>
  <option value="">All Vendors</option>

  {[...new Set(commissions.map((c) => c.vendor))].map((vendor) => (
    <option key={vendor} value={vendor}>
      {vendor}
    </option>
  ))}
</select>
    </div>

    
    <div className="grid grid-cols-3 gap-3">
      <select
  value={statusFilter}
  onChange={(e) => setStatusFilter(e.target.value)}
  className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
>
  <option value="">All Status</option>
  <option value="Paid">Paid</option>
  <option value="Pending">Pending</option>
  <option value="Refunded">Refunded</option>
</select>

      <select
  value={typeFilter}
  onChange={(e) => setTypeFilter(e.target.value)}
  className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
>
  <option value="">Commission Types</option>

  {[...new Set(commissions.map((c) => c.type))].map((type) => (
    <option key={type} value={type}>
      {type}
    </option>
  ))}
</select>

     <select
  value={dateFilter}
  onChange={(e) => setDateFilter(e.target.value)}
  className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
>
  <option value="">All Dates</option>

  {[...new Set(commissions.map((c) => c.orderDate))].map((date) => (
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
        placeholder="Search by vendor, order ID or invoice ID..."
         value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-white rounded-md border border-gray-200 shadow-sm py-3 pl-10 pr-4 outline-none focus:border-gray-500"
      />
    </div>

    <div className="grid grid-cols-2 gap-3">
      <select
  value={vendorFilter}
  onChange={(e) => setVendorFilter(e.target.value)}
  className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
>
  <option value="">All Vendors</option>

  {[...new Set(commissions.map((c) => c.vendor))].map((vendor) => (
    <option key={vendor} value={vendor}>
      {vendor}
    </option>
  ))}
</select>

      <select
  value={statusFilter}
  onChange={(e) => setStatusFilter(e.target.value)}
  className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
>
  <option value="">All Status</option>
  <option value="Paid">Paid</option>
  <option value="Pending">Pending</option>
  <option value="Refunded">Refunded</option>
</select>
    </div>

    <div className="grid grid-cols-2 gap-3">
      <select
  value={typeFilter}
  onChange={(e) => setTypeFilter(e.target.value)}
  className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
>
  <option value="">All Types</option>

  {[...new Set(commissions.map((c) => c.type))].map((type) => (
    <option key={type} value={type}>
      {type}
    </option>
  ))}
</select>

     <select
  value={dateFilter}
  onChange={(e) => setDateFilter(e.target.value)}
  className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
>
  <option value="">All Dates</option>

  {[...new Set(commissions.map((c) => c.orderDate))].map((date) => (
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
    {["All", "Pending", "Paid", "Refunded"].map((tab, index) => (
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
        {index === 0 && " (342)"}
        {index === 1 && " (56)"}
        {index === 2 && " (254)"}
        {index === 3 && " (32)"}
      </button>
    ))}
  </div>
</div>

        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1500px]">
            <thead>
              <tr className="bg-gray-50 border-b text-xs uppercase text-gray-500">
                <th className="text-left px-6 py-4">Invoice ID</th>
                <th className="text-left px-6 py-4">Order ID</th>
                <th className="text-left px-6 py-4">Vendor</th>
                <th className="text-left px-6 py-4">Commission Type</th>
                <th className="text-left px-6 py-4">Order Date</th>
                <th className="text-left px-6 py-4">Order Amount</th>
                <th className="text-left px-6 py-4">Rate</th>
                <th className="text-left px-6 py-4">Commission</th>
                <th className="text-left px-6 py-4">Status</th>
                <th className="text-left px-6 py-4">Payout Date</th>
                <th className="text-left px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
             {filteredCommissions.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white rounded-md border border-gray-200 shadow-sm hover:bg-gray-50"
                >
                  <td className="px-6 py-5 font-medium">{item.invoice}</td>

                  <td className="px-6 py-5 font-medium">{item.orderId}</td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold flex items-center justify-center text-xs">
                        {item.initials}
                      </div>

                      <div>
                        <p className="font-medium">{item.vendor}</p>
                        <p className="text-xs text-gray-500">{item.city}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-5">{item.type}</td>

                  <td className="px-6 py-5">
                    <div>
                      <p>{item.orderDate}</p>
                      <p className="text-xs text-gray-500">{item.time}</p>
                    </div>
                  </td>

                  <td className="px-6 py-5 font-semibold">
                    {item.orderAmount}
                  </td>

                  <td className="px-6 py-5">{item.rate}</td>

                  <td className="px-6 py-5 font-semibold">{item.commission}</td>

                  <td className="px-6 py-5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        statusStyles[item.status]
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-6 py-5">{item.payout}</td>

                  <td className="px-6 py-5">
                    <button className="w-10 h-10 bg-white rounded-md border border-gray-200 shadow-sm flex items-center justify-center">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 p-5 bg-white rounded-md border border-gray-200 shadow-sm">

  
  <p className="text-sm text-gray-500 text-center sm:text-left">
    Showing 1 to 4 of 342 results
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

export default Commission;
