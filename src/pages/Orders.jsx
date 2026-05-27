
const orders = [
  {
    id: "#ORD001",
    customer: "Amit Sharma",
    product: "Gold Ring",
    status: "Pending",
    amount: "₹5,000",
  },
  {
    id: "#ORD002",
    customer: "Rahul Verma",
    product: "Diamond Necklace",
    status: "Delivered",
    amount: "₹25,000",
  },
  {
    id: "#ORD003",
    customer: "Neha Singh",
    product: "Silver Earrings",
    status: "Shipped",
    amount: "₹2,500",
  },
];

function Orders() {
  return (
<div className="p-4 sm:p-6 min-h-screen bg-gradient-to-br from-[#fff7ef] via-[#fdf4ea] to-[#f8e7d2]">

  {/* HEADING */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

    <div>
      <h1 className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#C8A45D] via-[#E6C27A] to-[#8B5E3C] bg-clip-text text-transparent">
        Orders Dashboard
      </h1>

      <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
        Manage jewellery orders ✨
      </p>
    </div>

    <div className="bg-white shadow-lg border border-[#f1dfc2] px-4 sm:px-5 py-2 sm:py-3 rounded-2xl w-fit">
      <p className="text-xs sm:text-sm text-gray-500">Total Orders</p>
      <h2 className="text-xl sm:text-2xl font-bold text-[#B88A44]">
        {orders.length}
      </h2>
    </div>

  </div>

  {/* ================= DESKTOP TABLE ================= */}
  <div className="hidden md:block overflow-hidden rounded-3xl border border-[#f3dfbf] shadow-2xl bg-white/70 backdrop-blur-xl">

    <table className="w-full">

      <thead className="bg-gradient-to-r from-[#B88A44] via-[#D4AF37] to-[#8B5E3C] text-white">

        <tr>
          <th className="p-5 text-left">Order ID</th>
          <th className="p-5 text-left">Customer</th>
          <th className="p-5 text-left">Product</th>
          <th className="p-5 text-left">Status</th>
          <th className="p-5 text-left">Amount</th>
        </tr>

      </thead>

      <tbody>

        {orders.map((order, index) => (

          <tr
            key={index}
            className="border-b border-[#f5e8d3] hover:bg-[#fff8f0] transition"
          >

            <td className="p-5 font-bold text-[#6A4227]">
              #{order.id}
            </td>

            <td className="p-5 text-gray-700">
              {order.customer}
            </td>

            <td className="p-5 flex items-center gap-3">

  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#eeedea] to-[#F7E7CE] flex items-center justify-center shadow-md text-lg">

    {
      order.product.toLowerCase().includes("ring")
        ? "💍"
        : order.product.toLowerCase().includes("necklace")
        ? "📿"
        : order.product.toLowerCase().includes("bracelet")
        ? "✨"
        : order.product.toLowerCase().includes("earring")
        ? "👑"
        : order.product.toLowerCase().includes("diamond")
        ? "💎"
        : "🪙"
    }

  </div>

  {order.product}

</td>

            <td className="p-5">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                order.status === "Delivered"
                  ? "bg-green-100 text-green-700"
                  : order.status === "Pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-blue-100 text-blue-700"
              }`}>
                {order.status}
              </span>
            </td>

            <td className="p-5 font-bold text-[#C8A45D]">
              {order.amount}
            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

  {/* ================= MOBILE CARDS ================= */}
  <div className="grid gap-4 md:hidden">

    {orders.map((order, index) => (

      <div
        key={index}
        className="bg-white/80 backdrop-blur-xl border border-[#f3dfbf] rounded-2xl p-4 shadow-lg"
      >

        <div className="flex justify-between items-center mb-2">
          <p className="font-bold text-[#6A4227]">#{order.id}</p>

          <span className={`px-2 py-1 rounded-full text-xs font-bold ${
            order.status === "Delivered"
              ? "bg-green-100 text-green-700"
              : order.status === "Pending"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-blue-100 text-blue-700"
          }`}>
            {order.status}
          </span>
        </div>

        <p className="text-gray-700">
          <span className="font-semibold">Customer:</span> {order.customer}
        </p>

        <p className="text-gray-700 mt-1">
          <span className="font-semibold">Product:</span> {order.product}
        </p>

        <p className="mt-2 text-lg font-bold text-[#C8A45D]">
          {order.amount}
        </p>

      </div>

    ))}

  </div>

</div>
  );
}

export default Orders;