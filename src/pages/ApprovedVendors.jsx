import { useState } from "react";
import {
  Search,
  Filter,
  Download,
  Plus,
  Eye,
  MoreVertical,
  Store,
  CheckCircle,
  PauseCircle,
  Ban,
  Star,
} from "lucide-react";

function ApprovedVendors() {
  const vendors = [
    
    {
      id: 1,
      name: "Lustre Diamonds",
      owner: "Neha Kapoor",
      category: "Jewellery",
      city: "Mumbai",
      joined: "May 18, 2025",
      status: "Active",
      rating: "4.8",
      orders: 156,
    },
    {
      id: 2,
      name: "Shubh Bridal Boutique",
      owner: "Pooja Sharma",
      category: "Bridal Wear",
      city: "Jaipur",
      joined: "May 04, 2025",
      status: "Active",
      rating: "4.9",
      orders: 128,
    },
    {
      id: 3,
      name: "Aura Jewellers",
      owner: "Manav Singh",
      category: "Jewellery",
      city: "Hyderabad",
      joined: "May 02, 2025",
      status: "On Hold",
      rating: "4.7",
      orders: 94,
    },
    {
      id: 4,
      name: "The Bridal Collection",
      owner: "Ishita Joshi",
      category: "Bridal Wear",
      city: "Delhi",
      joined: "Apr 30, 2025",
      status: "Suspended",
      rating: "4.2",
      orders: 66,
    },
    {
  id: 5,
  name: "ABC Jewellers",
  owner: "Rahul Sharma",
  category: "Jewellery",
  city: "Udaipur",
  joined: "May 10, 2025",
  status: "Inactive",
  rating: "4.5",
  orders: 50,
},
  ];

  const hiddenIds =
  JSON.parse(localStorage.getItem("hiddenVendors"))?.map(
    (v) => v.id
  ) || [];

const [vendorsList, setVendorsList] = useState(
  vendors.filter((vendor) => !hiddenIds.includes(vendor.id))
);
  const cities = [
  "Mumbai",
  "Delhi",
  "Jaipur",
  "Hyderabad",
  "Udaipur",
  "Bengaluru",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Surat",
  "Lucknow",
  "Indore",
  "Bhopal",
  "Patna",
  "Chandigarh",
  "Jodhpur",
  "Kota",
  "Ajmer",
];
const categories = [
  "Jewellery",
  "Bridal Wear",
  "Makeup Artist",
  "Photography",
  "Decoration",
  "Catering",
  "Wedding Planner",
];

  const [searchTerm, setSearchTerm] = useState("");
const [statusFilter, setStatusFilter] = useState("");
const [cityFilter, setCityFilter] = useState("");
const [categoryFilter, setCategoryFilter] = useState("");
const filteredVendors = vendorsList.filter((vendor) => {
  const matchesSearch =
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.category.toLowerCase().includes(searchTerm.toLowerCase());

 const matchesStatus =
  statusFilter === "" || vendor.status === statusFilter;

const matchesCity =
  cityFilter === "" || vendor.city === cityFilter;

const matchesCategory =
  categoryFilter === "" || vendor.category === categoryFilter;

return (
  matchesSearch &&
  matchesStatus &&
  matchesCity &&
  matchesCategory
);
});

const handleHideVendor = (vendor) => {
  const hidden =
    JSON.parse(localStorage.getItem("hiddenVendors")) || [];

  localStorage.setItem(
    "hiddenVendors",
    JSON.stringify([...hidden, vendor])
  );

  setVendorsList((prev) =>
    prev.filter((item) => item.id !== vendor.id)
  );
};

  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "On Hold":
        return "bg-orange-100 text-orange-600";
      case "Suspended":
        return "bg-red-100 text-red-600";
        case "Inactive":
  return "bg-gray-300 text-gray-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-15 h-15 rounded-xl bg-purple-100 flex items-center justify-center">
              <Store className="text-purple-600" size={30} />
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase">
                Total Approved Vendors
              </p>

              <h2 className="text-3xl font-bold mt-1 text-[#2E1463]">62</h2>

              <p className="text-green-500 text-sm mt-1">↑ 6 last week</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-15 h-15 rounded-xl bg-green-100 flex items-center justify-center">
              <CheckCircle className="text-green-600" size={30} />
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase">Active Vendors</p>

              <h2 className="text-3xl font-bold mt-1 text-[#2E1463]">58</h2>

              <p className="text-green-500 text-sm mt-1">↑ 7 this week</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-15 h-15 rounded-xl bg-orange-100 flex items-center justify-center">
              <PauseCircle className="text-orange-500" size={30} />
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase">On Hold</p>

              <h2 className="text-3xl font-bold mt-1 text-[#2E1463]">2</h2>

              <p className="text-orange-500 text-sm mt-1">↓ 1 this week</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-15 h-15 rounded-xl bg-red-100 flex items-center justify-center">
              <Ban className="text-red-500" size={30} />
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase">Suspended</p>

              <h2 className="text-3xl font-bold mt-1 text-[#2E1463]">2</h2>

              <p className="text-gray-500 text-sm mt-1">No change</p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
        
      
<div className="p-5 border-b border-gray-200">

  
  <div className="hidden xl:flex gap-4 justify-between">
    <div className="flex flex-wrap gap-3 flex-1">
      <div className="relative min-w-[260px] flex-1">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
      <input
  type="text"
  placeholder="Search by business name, owner..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full pl-10 pr-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
/>
      </div>

   <select
  value={categoryFilter}
  onChange={(e) => setCategoryFilter(e.target.value)}
  className="px-4 py-3 bg-white rounded-md w-39 border border-gray-200 shadow-sm outline-none focus:border-gray-500"
>
  <option value="">All Categories</option>

  {categories.map((category) => (
    <option key={category} value={category}>
      {category}
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
  <option value="On Hold">On Hold</option>
  <option value="Suspended">Suspended</option>
  <option value="Inactive">Inactive</option>
</select>

      <select
  value={cityFilter}
  onChange={(e) => setCityFilter(e.target.value)}
  className="px-4 py-3 bg-white rounded-md w-30 border border-gray-200 shadow-sm outline-none focus:border-gray-500"
>
  <option value="">All Cities</option>

  {cities.map((city) => (
    <option key={city} value={city}>
      {city}
    </option>
  ))}
</select>

      <button className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm flex items-center gap-2 outline-none focus:border-gray-500">
        <Filter size={16} />
        Filter
      </button>
    </div>

    <div className="flex gap-3">
      <button className="bg-[#6D28D9] text-white px-5 py-3 rounded-xl flex items-center gap-2">
        <Plus size={18} />
        Add Vendor
      </button>

      <button className="px-5 py-3 bg-white rounded-md border border-gray-200 shadow-sm flex items-center gap-2 outline-none focus:border-gray-500">
        <Download size={18} />
        Export
      </button>
    </div>
  </div>


  <div className="xl:hidden space-y-3">

    
<div className="hidden md:block xl:hidden space-y-3">

  
  <div className="grid grid-cols-[1fr_auto] gap-3">
    <div className="relative">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />
    <input
  type="text"
  placeholder="Search by business name, owner..."
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
  <option value="">All Categories</option>

  {categories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ))}
</select>
  </div>

  
  <div className="grid grid-cols-3 gap-3">
   <select
  value={statusFilter}
  onChange={(e) => setStatusFilter(e.target.value)}
  className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
>
  <option value="">All Status</option>
  <option value="Active">Active</option>
  <option value="On Hold">On Hold</option>
  <option value="Suspended">Suspended</option>
  <option value="Inactive">Inactive</option>
</select>

    <select
  value={cityFilter}
  onChange={(e) => setCityFilter(e.target.value)}
  className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
>
  <option value="">All Cities</option>

  {cities.map((city) => (
    <option key={city} value={city}>
      {city}
    </option>
  ))}
</select>

    <button className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm flex items-center justify-center gap-2 outline-none focus:border-gray-500">
      <Filter size={16} />
      Filter
    </button>
  </div>

  
  <div className="grid grid-cols-2 gap-3">
    <button className="bg-[#6D28D9] text-white px-5 py-3 rounded-xl flex items-center justify-center gap-2">
      <Plus size={18} />
      Add Vendor
    </button>

    <button className="px-5 py-3 bg-white rounded-md border border-gray-200 shadow-sm flex items-center justify-center gap-2 outline-none focus:border-gray-500">
      <Download size={18} />
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
  placeholder="Search by business name, owner..."
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
  <option value="">Categories</option>

  {categories.map((category) => (
    <option key={category} value={category}>
      {category}
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
  <option value="On Hold">On Hold</option>
  <option value="Suspended">Suspended</option>
  <option value="Inactive">Inactive</option>
</select>
      </div>

      
      <div className="grid grid-cols-2 gap-3">
      <select
  value={cityFilter}
  onChange={(e) => setCityFilter(e.target.value)}
  className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm outline-none focus:border-gray-500"
>
  <option value="">All Cities</option>

  {cities.map((city) => (
    <option key={city} value={city}>
      {city}
    </option>
  ))}
</select>

        <button className="px-4 py-3 bg-white rounded-md border border-gray-200 shadow-sm flex items-center justify-center gap-2 outline-none focus:border-gray-500">
          <Filter size={16} />
          Filter
        </button>
      </div>

      
      <button className="w-full bg-[#6D28D9] text-white px-5 py-3 rounded-xl flex items-center justify-center gap-2">
        <Plus size={18} />
        Add Vendor
      </button>

      
      <button className="w-full px-5 py-3 bg-white rounded-md border border-gray-200 shadow-sm flex items-center justify-center gap-2 outline-none focus:border-gray-500">
        <Download size={18} />
        Export
      </button>
    </div>

  </div>
</div>

        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="border-b bg-gray-50 text-xs text-gray-500 uppercase">
                <th className="text-left px-6 py-4">Business Name</th>
                <th className="text-left px-6 py-4">Owner</th>
                <th className="text-left px-6 py-4">Category</th>
                <th className="text-left px-6 py-4">City</th>
                <th className="text-left px-6 py-4">Joined On</th>
                <th className="text-left px-6 py-4">Status</th>
                <th className="text-left px-6 py-4">Rating</th>
                <th className="text-left px-6 py-4">Orders</th>
                <th className="text-left px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
             {filteredVendors.map((vendor) => (
                <tr
                  key={vendor.id}
                  className="bg-white rounded-md border border-gray-200 shadow-sm hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4">
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] flex items-center justify-center text-white font-bold">
      {vendor.name
  .split(" ")
  .map((word) => word[0])
  .slice(0, 2)
  .join("")
  .toUpperCase()}
    </div>

    <div>
      <p className="font-semibold text-gray-800">
        {vendor.name}
      </p>
    </div>
  </div>
</td>

                  <td className="px-6 py-4">{vendor.owner}</td>

                  <td className="px-6 py-4">{vendor.category}</td>

                  <td className="px-6 py-4">{vendor.city}</td>

                  <td className="px-6 py-4">{vendor.joined}</td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                        vendor.status,
                      )}`}
                    >
                      {vendor.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      {vendor.rating}
                      <Star
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    </div>
                  </td>

                  <td className="px-6 py-4">{vendor.orders}</td>

                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                     <button
  onClick={() => handleHideVendor(vendor)}
  className="w-9 h-9 bg-white rounded-md border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-100"
>
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

        {/* Footer */}
       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 p-5 bg-white rounded-md border border-gray-200 shadow-sm">

  
  <p className="text-sm text-gray-500 text-center sm:text-left">
    Showing 1 to 4 of 62 results
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
    </div>
  );
}

export default ApprovedVendors;
