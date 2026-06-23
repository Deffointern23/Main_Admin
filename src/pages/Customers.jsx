import { useState } from "react";
import {
  Search,
  Filter,
  Download,
  Eye,
  MoreVertical,
  Users,
  UserPlus,
  UserCheck,
  ShoppingBag,
  IndianRupee,
} from "lucide-react";

function Customers() {
  const customers = [
    {
      name: "Priya Sharma",
      id: "CUST1001",
      email: "priya.sharma@email.com",
      phone: "+91 98765 43210",
      city: "Mumbai",
      state: "Maharashtra",
      joined: "May 24, 2025",
      orders: 18,
      spend: "₹18,450",
      status: "Active",
    },
    {
      name: "Rahul Verma",
      id: "CUST1002",
      email: "rahul.verma@email.com",
      phone: "+91 91234 56789",
      city: "Delhi",
      state: "Delhi",
      joined: "May 23, 2025",
      orders: 12,
      spend: "₹14,780",
      status: "Active",
    },
    {
      name: "Ananya Iyer",
      id: "CUST1003",
      email: "ananya.iyer@email.com",
      phone: "+91 99887 44556",
      city: "Bengaluru",
      state: "Karnataka",
      joined: "May 21, 2025",
      orders: 25,
      spend: "₹42,350",
      status: "Active",
    },
    {
      name: "Vikram Singh",
      id: "CUST1004",
      email: "vikram.singh@email.com",
      phone: "+91 88771 23456",
      city: "Chennai",
      state: "Tamil Nadu",
      joined: "May 20, 2025",
      orders: 8,
      spend: "₹9,450",
      status: "Inactive",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
const [statusFilter, setStatusFilter] = useState("");
const [cityFilter, setCityFilter] = useState("");
const [joinedFilter, setJoinedFilter] = useState("");
const filteredCustomers = customers.filter((customer) => {
  const matchesSearch =
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesStatus =
    statusFilter === "" || customer.status === statusFilter;

  const matchesCity =
    cityFilter === "" || customer.city === cityFilter;

  const matchesJoined =
    joinedFilter === "" || customer.joined === joinedFilter;

  return (
    matchesSearch &&
    matchesStatus &&
    matchesCity &&
    matchesJoined
  );
});

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
              <Users className="text-purple-600" size={24} />
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase">Total Customers</p>
              <h2 className="text-3xl font-bold text-[#2E1463]">8,642</h2>
              <p className="text-green-500 text-sm">↑ 24% vs last week</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <UserPlus className="text-green-600" size={24} />
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase">New Customers</p>
              <h2 className="text-3xl font-bold text-[#2E1463]">642</h2>
              <p className="text-green-500 text-sm">↑ 18% vs last week</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
              <UserCheck className="text-blue-600" size={24} />
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase">
                Active Customers
              </p>
              <h2 className="text-3xl font-bold text-[#2E1463]">6,128</h2>
              <p className="text-green-500 text-sm">↑ 9.5% vs last week</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
              <ShoppingBag className="text-orange-500" size={24} />
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase">Total Orders</p>
              <h2 className="text-3xl font-bold text-[#2E1463]">24,851</h2>
              <p className="text-green-500 text-sm">↑ 15.4% vs last week</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center">
              <IndianRupee className="text-pink-500" size={24} />
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase">Total Spent</p>
              <h2 className="text-2xl font-bold text-[#2E1463]">
                ₹1,28,75,430
              </h2>
              <p className="text-green-500 text-sm">↑ 14.2% vs last week</p>
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
                  placeholder="Search by name, email or phone number..."
                  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white rounded-md border border-gray-200 shadow-sm py-3 pl-10 pr-4 outline-none focus:border-gray-500"
                />
              </div>

              <select
  value={statusFilter}
  onChange={(e) => setStatusFilter(e.target.value)}
  className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
>
  <option value="">All Status</option>
  <option value="Active">Active</option>
  <option value="Inactive">Inactive</option>
</select>
              <select
  value={cityFilter}
  onChange={(e) => setCityFilter(e.target.value)}
  className="bg-white rounded-md w-30 border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
>
  <option value="">All Cities</option>

  {[...new Set(customers.map((c) => c.city))].map((city) => (
    <option key={city} value={city}>
      {city}
    </option>
  ))}
</select>
             <select
  value={joinedFilter}
  onChange={(e) => setJoinedFilter(e.target.value)}
  className="bg-white rounded-md w-32 border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
>
  <option value="">Joined On</option>

  {[...new Set(customers.map((c) => c.joined))].map((date) => (
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
                  placeholder="Search by name, email or phone number..."
                  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white rounded-md border border-gray-200 shadow-sm py-3 pl-10 pr-4 outline-none focus:border-gray-500"
                />
              </div>

             <select
  value={statusFilter}
  onChange={(e) => setStatusFilter(e.target.value)}
  className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
>
  <option value="">All Status</option>
  <option value="Active">Active</option>
  <option value="Inactive">Inactive</option>
</select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <select
  value={cityFilter}
  onChange={(e) => setCityFilter(e.target.value)}
  className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
>
  <option value="">All Cities</option>

  {[...new Set(customers.map((c) => c.city))].map((city) => (
    <option key={city} value={city}>
      {city}
    </option>
  ))}
</select>

             <select
  value={joinedFilter}
  onChange={(e) => setJoinedFilter(e.target.value)}
  className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
>
  <option value="">Joined On</option>

  {[...new Set(customers.map((c) => c.joined))].map((date) => (
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
                placeholder="Search by name, email or phone number..."
                value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white rounded-md border border-gray-200 shadow-sm py-3 pl-10 pr-4 outline-none focus:border-gray-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
             <select
  value={statusFilter}
  onChange={(e) => setStatusFilter(e.target.value)}
  className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
>
  <option value="">All Status</option>
  <option value="Active">Active</option>
  <option value="Inactive">Inactive</option>
</select>

             <select
  value={cityFilter}
  onChange={(e) => setCityFilter(e.target.value)}
  className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
>
  <option value="">All Cities</option>

  {[...new Set(customers.map((c) => c.city))].map((city) => (
    <option key={city} value={city}>
      {city}
    </option>
  ))}
</select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <select
  value={joinedFilter}
  onChange={(e) => setJoinedFilter(e.target.value)}
  className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 outline-none focus:border-gray-500"
>
  <option value="">Joined On</option>

  {[...new Set(customers.map((c) => c.joined))].map((date) => (
    <option key={date} value={date}>
      {date}
    </option>
  ))}
</select>

              <button className="bg-white rounded-md border border-gray-200 shadow-sm px-4 py-3 flex items-center justify-center gap-2 outline-none focus:border-gray-500">
                <Filter size={16} />
                Filter
              </button>
            </div>

            <button className="w-full bg-white rounded-md border border-gray-200 shadow-sm px-5 py-3 flex items-center justify-center gap-2 outline-none focus:border-gray-500">
              <Download size={16} />
              Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1200px]">
            <thead>
              <tr className="bg-gray-50 border-b text-xs uppercase text-gray-500">
                <th className="px-6 py-4"></th>
                <th className="text-left px-6 py-4">Customer</th>
                <th className="text-left px-6 py-4">Email / Phone</th>
                <th className="text-left px-6 py-4">City</th>
                <th className="text-left px-6 py-4">Joined On</th>
                <th className="text-left px-6 py-4">Orders</th>
                <th className="text-left px-6 py-4">Total Spend</th>
                <th className="text-left px-6 py-4">Status</th>
                <th className="text-left px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
             {filteredCustomers.map((customer, index) => (
                <tr
                  key={index}
                  className="bg-white rounded-md border border-gray-200 shadow-sm hover:bg-gray-50"
                >
                  <td className="px-6 py-5">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold text-sm">
                      {getInitials(customer.name)}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div>
                      <p className="font-semibold text-[#2E1463]">
                        {customer.name}
                      </p>

                      <p className="text-xs text-gray-500">#{customer.id}</p>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <div>
                      <p>{customer.email}</p>
                      <p className="text-xs text-gray-500">{customer.phone}</p>
                    </div>
                  </td>

                  <td className="px-6 py-5">
                    <div>
                      <p>{customer.city}</p>
                      <p className="text-xs text-gray-500">{customer.state}</p>
                    </div>
                  </td>

                  <td className="px-6 py-5">{customer.joined}</td>

                  <td className="px-6 py-5 font-semibold">{customer.orders}</td>

                  <td className="px-6 py-5 font-semibold">{customer.spend}</td>

                  <td className="px-6 py-5">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        customer.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex gap-2">
                      <button className="w-10 h-10 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center justify-center">
                        <Eye size={16} />
                      </button>

                      <button className="w-10 h-10 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center justify-center">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center p-5 bg-white rounded-md border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 text-center sm:text-left">
            Showing 1 to 4 of 8,642 results
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

export default Customers;
