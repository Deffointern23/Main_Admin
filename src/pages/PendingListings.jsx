import { useState } from "react";
import {
  Search,
  Filter,
  Eye,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function PendingListings() {
  const [activeTab, setActiveTab] = useState("All");

  const listings = [
    {
      id: 1,
      name: "Premium Bridal Lehenga",
      vendor: "Lustre Diamonds",
      category: "Bridal Wear",
      submitted: "Jun 02, 2026",
      status: "New",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200",
    },
    {
      id: 2,
      name: "Designer Jewellery Set",
      vendor: "Aura Jewellers",
      category: "Jewellery",
      submitted: "Jun 03, 2026",
      status: "Under Review",
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=200",
    },
    {
      id: 3,
      name: "Wedding Suit Collection",
      vendor: "Royal Tailors",
      category: "Menswear",
      submitted: "Jun 04, 2026",
      status: "Changes Requested",
      image:
        "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=100",
    },
    {
      id: 4,
      name: "Luxury Saree Collection",
      vendor: "Shree Boutique",
      category: "Ethnic Wear",
      submitted: "Jun 05, 2026",
      status: "New",
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=100",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [vendorFilter, setVendorFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const filteredListings = listings.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.vendor.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      categoryFilter === "" || item.category === categoryFilter;

    const matchesVendor = vendorFilter === "" || item.vendor === vendorFilter;

    const matchesStatus = statusFilter === "" || item.status === statusFilter;

    const matchesDate = dateFilter === "" || item.submitted === dateFilter;
    const matchesTab =
      activeTab === "All"
        ? true
        : activeTab === "Newly Added"
          ? item.status === "New"
          : item.status === activeTab;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesVendor &&
      matchesStatus &&
      matchesDate &&
      matchesTab
    );
  });

  const getStatusStyle = (status) => {
    switch (status) {
      case "New":
        return "bg-orange-100 text-orange-600";
      case "Under Review":
        return "bg-purple-100 text-purple-700";
      case "Changes Requested":
        return "bg-pink-100 text-pink-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-6 bg-white rounded-md border border-gray-200 shadow-sm">
        <div className="hidden xl:flex gap-4 justify-between">
          <div className="flex flex-wrap gap-3 flex-1">
            <div className="relative min-w-[280px] flex-1">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search listings..."
                className="w-full pl-10 pr-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select
              className="px-4 py-3 bg-white rounded-md w-36 border border-gray-200 shadow-sm text-sm outline-none focus:border-gray-500"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Bridal Wear">Bridal Wear</option>
              <option value="Jewellery">Jewellery</option>
              <option value="Menswear">Menswear</option>
              <option value="Ethnic Wear">Ethnic Wear</option>
            </select>

            <select
              className="px-4 py-3 bg-white rounded-md w-32 border border-gray-200 shadow-sm text-sm outline-none focus:border-gray-500"
              value={vendorFilter}
              onChange={(e) => setVendorFilter(e.target.value)}
            >
              <option value="">All Vendors</option>
              <option value="Lustre Diamonds">Lustre Diamonds</option>
              <option value="Aura Jewellers">Aura Jewellers</option>
              <option value="Royal Tailors">Royal Tailors</option>
              <option value="Shree Boutique">Shree Boutique</option>
            </select>

            <select
              className="px-4 py-3 bg-white rounded-md w-28 border border-gray-200 shadow-sm text-sm outline-none focus:border-gray-500"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
            >
              <option value="">All Dates</option>
              {filteredListings.map((item) => (
                <option key={item.id} value={item.submitted}>
                  {item.submitted}
                </option>
              ))}
            </select>

            <select
              className="px-4 py-3 bg-white rounded-md w-29 border border-gray-200 shadow-sm text-sm outline-none focus:border-gray-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">All Status</option>
              <option value="New">New</option>
              <option value="Under Review">Under Review</option>
              <option value="Changes Requested">Changes Requested</option>
            </select>

            <button className="px-5 py-3 bg-white rounded-md border border-gray-200 shadow-sm flex items-center gap-2 hover:bg-gray-50 outline-none focus:border-gray-500">
              <Filter size={16} />
              Filter
            </button>
          </div>

          <button className="bg-[#6D28D9] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#5B21B6]">
            Review All
          </button>
        </div>

        <div className="hidden md:block xl:hidden space-y-3">
          <div className="grid grid-cols-[1fr_auto] gap-3">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search listings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
              />
            </div>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
            >
              <option value="">Category</option>
              <option>Bridal Wear</option>
              <option>Jewellery</option>
              <option>Menswear</option>
              <option>Ethnic Wear</option>
            </select>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <select
              value={vendorFilter}
              onChange={(e) => setVendorFilter(e.target.value)}
              className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
            >
              <option value="">Vendor</option>
              <option>Lustre Diamonds</option>
              <option>Aura Jewellers</option>
              <option>Royal Tailors</option>
              <option>Shree Boutique</option>
            </select>

            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
            >
              <option value="">Date</option>
              {listings.map((item) => (
                <option key={item.id} value={item.submitted}>
                  {item.submitted}
                </option>
              ))}
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
            >
              <option value="">Status</option>
              <option>New</option>
              <option>Under Review</option>
              <option>Changes Requested</option>
            </select>

            <button className="px-5 py-3 bg-white rounded-md border border-gray-200 shadow-sm flex items-center justify-center gap-2 outline-none focus:border-gray-500">
              <Filter size={16} />
              Filter
            </button>
          </div>

          <button className="w-full bg-[#6D28D9] text-white px-6 py-3 rounded-xl font-medium">
            Review All
          </button>
        </div>

        <div className="md:hidden space-y-3">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search listings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
            >
              <option value="">Category</option>
              <option>Bridal Wear</option>
              <option>Jewellery</option>
              <option>Menswear</option>
              <option>Ethnic Wear</option>
            </select>

            <select
              value={vendorFilter}
              onChange={(e) => setVendorFilter(e.target.value)}
              className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
            >
              <option value="">Vendor</option>
              <option>Lustre Diamonds</option>
              <option>Aura Jewellers</option>
              <option>Royal Tailors</option>
              <option>Shree Boutique</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
            >
              <option value="">Date</option>
              {listings.map((item) => (
                <option key={item.id} value={item.submitted}>
                  {item.submitted}
                </option>
              ))}
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
            >
              <option value="">Status</option>
              <option>New</option>
              <option>Under Review</option>
              <option>Changes Requested</option>
            </select>
          </div>

          <button className="w-full px-5 py-3 bg-white rounded-md border border-gray-200 shadow-sm flex items-center justify-center gap-2 outline-none focus:border-gray-500">
            <Filter size={16} />
            Filter
          </button>

          <button className="w-full bg-[#6D28D9] text-white px-6 py-3 rounded-xl font-medium">
            Review All
          </button>
        </div>
      </div>

      <div className="px-6 bg-white rounded-md border border-gray-200 shadow-sm">
        <div className="flex gap-8 overflow-x-auto">
          {["All", "Newly Added", "Under Review", "Changes Requested"].map(
            (tab, index) => (
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
                {index === 0 && " (32)"}
                {index === 1 && " (12)"}
                {index === 2 && " (12)"}
                {index === 3 && " (8)"}
              </button>
            ),
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px]">
          <thead>
            <tr className="bg-gray-50 border-b text-xs uppercase text-gray-500">
              <th className="text-left px-6 py-4">Listing</th>
              <th className="text-left px-6 py-4">Vendor</th>
              <th className="text-left px-6 py-4">Category</th>
              <th className="text-left px-6 py-4">Price</th>
              <th className="text-left px-6 py-4">Submitted On</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-left px-6 py-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredListings.map((item) => (
              <tr
                key={item.id}
                className="bg-white rounded-md border border-gray-200 shadow-sm hover:bg-gray-50 transition"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-xl object-cover"
                    />

                    <div>
                      <p className="font-semibold text-gray-800">{item.name}</p>

                      <p className="text-sm text-gray-500">
                        Pending admin approval
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] text-white flex items-center justify-center font-bold">
                      {item.vendor
                        .split(" ")
                        .map((word) => word[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()}
                    </div>

                    <span className="font-medium">{item.vendor}</span>
                  </div>
                </td>

                <td className="px-6 py-5">{item.category}</td>

                <td className="px-6 py-5 font-medium">
                  ₹{Math.floor(Math.random() * 50000 + 5000).toLocaleString()}
                </td>

                <td className="px-6 py-5">{item.submitted}</td>

                <td className="px-6 py-5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                      item.status,
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <div className="flex gap-2">
                    <button className="w-10 h-10 bg-white rounded-md border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-100">
                      <Eye size={16} />
                    </button>

                    <button className="w-10 h-10 bg-white rounded-md border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-100">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 px-6 py-5 bg-white rounded-md border border-gray-200 shadow-sm">
        <p className="text-sm text-gray-500 text-center sm:text-left">
          Showing 1 to 4 of 32 pending listings
        </p>

        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2">
          <button className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-md border border-gray-200 shadow-sm flex items-center justify-center">
            <ChevronLeft size={16} />
          </button>

          <button className="w-9 h-9 sm:w-10 sm:h-10 bg-purple-600 text-white rounded-lg">
            1
          </button>

          <button className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-md border border-gray-200 shadow-sm">
            2
          </button>

          <button className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-md border border-gray-200 shadow-sm">
            3
          </button>

          <button className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-md border border-gray-200 shadow-sm flex items-center justify-center">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PendingListings;
