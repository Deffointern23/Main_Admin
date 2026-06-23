import { useState } from "react";
import { Search, Filter, Plus, Eye, MoreVertical } from "lucide-react";

function Listings() {
  const listings = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=100",
      name: "Bridal Lehenga Stitching",
      subtitle: "Custom stitching for bridal lehenga",
      vendor: "Stitch & Style Tailors",
      category: "Tailoring",
      price: "₹25,000",
      status: "Active",
      listedOn: "May 24, 2025",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=100",
      name: "Dry Cleaning Premium",
      subtitle: "Premium dry cleaning service",
      vendor: "FreshFold Laundry",
      category: "Laundry",
      price: "₹450",
      status: "Active",
      listedOn: "May 23, 2025",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=100",
      name: "22K Gold Necklace Set",
      subtitle: "Elegant gold necklace set",
      vendor: "Lustre Diamonds",
      category: "Jewellery",
      price: "₹1,25,000",
      status: "Under Review",
      listedOn: "May 21, 2025",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=100",
      name: "Men's Suit Stitching",
      subtitle: "Premium suit stitching",
      vendor: "Shreewell Bespoke",
      category: "Tailoring",
      price: "₹11,000",
      status: "Inactive",
      listedOn: "May 20, 2025",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [vendorFilter, setVendorFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredListings = listings.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      categoryFilter === "" || item.category === categoryFilter;

    const matchesVendor = vendorFilter === "" || item.vendor === vendorFilter;

    const matchesStatus = statusFilter === "" || item.status === statusFilter;

    return matchesSearch && matchesCategory && matchesVendor && matchesStatus;
  });
  const categories = ["Tailoring", "Laundry", "Jewellery"];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Inactive":
        return "bg-red-100 text-red-600";
      case "Under Review":
        return "bg-orange-100 text-orange-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-5 bg-white rounded-md border border-gray-200 shadow-sm">
        <div className="hidden xl:flex gap-4 justify-between">
          <div className="flex flex-wrap gap-3 flex-1">
            <div className="relative min-w-[280px] flex-1">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by listing name, vendor or category..."
                className="w-full pl-10 pr-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
              />
            </div>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
            >
              <option value="">All Categories</option>

              {[...new Set(listings.map((i) => i.category))].map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <select
              value={vendorFilter}
              onChange={(e) => setVendorFilter(e.target.value)}
              className="px-4 py-3 bg-white rounded-md w-34 border border-gray-200 shadow-sm outline-none focus:border-gray-500"
            >
              <option value="">All Vendors</option>

              {[...new Set(listings.map((i) => i.vendor))].map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-3 bg-white rounded-md w-30 border border-gray-200 shadow-sm outline-none focus:border-gray-500"
            >
              <option value="">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Under Review">Under Review</option>
            </select>

            <button className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm flex items-center gap-2 outline-none focus:border-gray-500">
              <Filter size={16} />
              Filter
            </button>
          </div>

          <button className="bg-[#6D28D9] text-white px-5 py-3 rounded-xl flex items-center gap-2">
            <Plus size={18} />
            Add Listing
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by listing name, vendor or category..."
                className="w-full pl-10 pr-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
              />
            </div>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
            >
              <option value="">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <select
              value={vendorFilter}
              onChange={(e) => setVendorFilter(e.target.value)}
              className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
            >
              <option value="">All Vendors</option>
              {listings
                .map((i) => i.vendor)
                .filter((v, idx, arr) => arr.indexOf(v) === idx)
                .map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
            >
              <option value="">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Under Review">Under Review</option>
            </select>

            <button className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm flex items-center justify-center gap-2 outline-none focus:border-gray-500">
              <Filter size={16} />
              Filter
            </button>
          </div>

          <button className="w-full bg-[#6D28D9] text-white px-5 py-3 rounded-xl flex items-center justify-center gap-2">
            <Plus size={18} />
            Add Listing
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by listing name, vendor or category..."
              className="w-full pl-10 pr-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
            />
          </div>

          
          <div className="grid grid-cols-2 gap-3">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
            >
              <option value="">Categories</option>
              {[...new Set(listings.map((i) => i.category))].map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <select
              value={vendorFilter}
              onChange={(e) => setVendorFilter(e.target.value)}
              className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
            >
              <option value="">Vendors</option>
              {[...new Set(listings.map((i) => i.vendor))].map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

        
          <div className="grid grid-cols-2 gap-3">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
            >
              <option value="">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Under Review">Under Review</option>
            </select>

            <button className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm flex items-center justify-center gap-2 outline-none focus:border-gray-500">
              <Filter size={16} />
              Filter
            </button>
          </div>

        
          <button className="w-full bg-[#6D28D9] text-white px-5 py-3 rounded-xl flex items-center justify-center gap-2">
            <Plus size={18} />
            Add Listing
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead>
            <tr className="border-b bg-gray-50 text-xs text-gray-500 uppercase">
              <th className="text-left px-6 py-4">Listing Name</th>
              <th className="text-left px-6 py-4">Vendor</th>
              <th className="text-left px-6 py-4">Category</th>
              <th className="text-left px-6 py-4">Price</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-left px-6 py-4">Listed On</th>
              <th className="text-left px-6 py-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredListings.map((item) => (
              <tr
                key={item.id}
                className="bg-white rounded-md border border-gray-200 shadow-sm hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />

                    <div>
                      <p className="font-semibold text-gray-800">{item.name}</p>

                      <p className="text-xs text-gray-500">{item.subtitle}</p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">{item.vendor}</td>

                <td className="px-6 py-4">{item.category}</td>

                <td className="px-6 py-4 font-medium">{item.price}</td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                      item.status,
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="px-6 py-4">{item.listedOn}</td>

                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button className="w-9 h-9 bg-white rounded-md border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-100">
                      <Eye size={16} />
                    </button>

                    <button className="w-9 h-9 bg-white rounded-md border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-100">
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
          Showing 1 to 4 of 248 listings
        </p>

        <div className="flex flex-wrap justify-center sm:justify-end gap-2">
          <button className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-md border border-gray-200 shadow-sm">
            &lt;
          </button>

          <button className="w-8 h-8 sm:w-9 sm:h-9 bg-[#6D28D9] text-white rounded-lg">
            1
          </button>

          <button className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-md border border-gray-200 shadow-sm">
            2
          </button>

          <button className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-md border border-gray-200 shadow-sm">
            3
          </button>

          <button className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-md border border-gray-200 shadow-sm">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Listings;
