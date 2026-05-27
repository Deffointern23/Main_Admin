

const customers = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "amit@example.com",
    orders: 5,
    status: "Active",
  },
  {
    id: 2,
    name: "Neha Singh",
    email: "neha@example.com",
    orders: 2,
    status: "Inactive",
  },
  {
    id: 3,
    name: "Rahul Verma",
    email: "rahul@example.com",
    orders: 8,
    status: "Active",
  },
  {
    id: 4,
    name: "Rahul Verma",
    email: "rahul@example.com",
    orders: 8,
    status: "Active",
  },
  {
    id: 5,
    name: "Rahul Verma",
    email: "rahul@example.com",
    orders: 8,
    status: "Active",
  },
  {
    id: 6,
    name: "Rahul Verma",
    email: "rahul@example.com",
    orders: 8,
    status: "Active",
  },
];

function Customers() {
  return (
    <div className="min-h-screen bg-[#fbf7f2] p-6">
      <h1 className="text-3xl font-semibold text-[#2c2c2c] mb-6">Customers Details</h1>

      {/* Table Card */}
      <div className="bg-white border border-[#ead9c3] rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full">
          {/* Header */}
          <thead>
            <tr className="bg-[#c9a227] text-white">
              <th className="p-4 text-left font-medium">Name</th>
              <th className="p-4 text-left font-medium">Email</th>
              <th className="p-4 text-left font-medium">Orders</th>
              <th className="p-4 text-left font-medium">Status</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {customers.map((c) => (
              <tr
                key={c.id}
                className="border-b border-[#f1e6d6] hover:bg-[#fff8ec] transition"
              >
                {/* Name */}
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full bg-gradient-to-r from-[#c9a227] to-[#e6c46a]
                                text-white flex items-center justify-center font-semibold"
                    >
                      {c.name.charAt(0)}
                    </div>

                    <span className="font-medium text-gray-800">{c.name}</span>
                  </div>
                </td>

                {/* Email */}
                <td className="p-4 text-gray-600">{c.email}</td>

                {/* Orders */}
                <td className="p-4">
                  <span className="px-3 py-1 rounded-full bg-[#f7ecd2] text-[#8a6d1a] font-medium">
                    {c.orders}
                  </span>
                </td>

                {/* Status */}
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium
                  ${
                    c.status === "Active"
                      ? "bg-green-100 text-green-700 border border-green-200"
                      : "bg-gray-100 text-gray-600 border border-gray-200"
                  }`}
                  >
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customers;
