import { useState } from "react";
import { X, Package, Truck, ShieldCheck, Calendar, Eye } from "lucide-react";
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
  const [activePanel, setActivePanel] = useState("");
  return (
    <div className="p-4 sm:p-6 bg-[#FFF8EC] min-h-screen">
      {/* TOP HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#2E1463]">Orders</h1>

          <p className="text-gray-500 mt-1">
            Manage and track all your jewellery orders
          </p>
        </div>

        <div className="flex gap-3">
     <button className="bg-[#0c9952] text-white border border-[#c9c1cf] px-4 py-2 rounded-xl text-sm">
            Export Orders
          </button>

          <button className="bg-[#0c9952] text-white px-4 py-2 rounded-xl text-sm">
            New Order
          </button>
        </div>
      </div>

      {/* STATUS CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {[
          { title: "In Process", value: 12 },
          { title: "Packed", value: 8 },
          { title: "Shipping", value: 6 },
          { title: "Out For Delivery", value: 4 },
          { title: "Delivered", value: 2 },
        ].map((item, index) => (
          <div
            key={index}
            onClick={() => setActivePanel(item.title)}
            className="bg-white border border-[#C4B5FD] rounded-2xl p-4 transition cursor-pointer hover:shadow-xl hover:border-[#8B5CF6] text-center"
          >
            <h2 className="text-2xl font-bold text-[#3a4b40]">{item.value}</h2>

            <p className="text-gray-500 text-sm mt-1">{item.title}</p>
          </div>
        ))}
      </div>

      {/* MAIN SECTION */}
      <div className="grid lg:grid-cols-4 gap-6">
        {/* LEFT SIDE */}
        <div className="lg:col-span-3 space-y-4">
          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white border border-[#C4B5FD] rounded-2xl p-5"
            >
              {/* TOP */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <h2 className="font-bold text-lg text-[#2E1463]">
                    {order.id}
                  </h2>

                  <p className="text-gray-500 text-sm">{order.customer}</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-[#EDE9FE] flex items-center justify-center text-2xl">
                    💎
                  </div>

                  <div>
                    <h3 className="font-semibold">{order.product}</h3>

                    <p className="text-sm text-gray-500">Premium Jewellery</p>
                  </div>
                </div>

                <div>
                  <span
                    className={`px-4 py-2 rounded-full text-xs font-bold ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>

                <div className="text-right">
                  <h2 className="font-bold text-xl text-[#279447]">
                    {order.amount}
                  </h2>

                  <p className="text-sm text-gray-500">25 May, 2025</p>
                </div>
              </div>

              {/* TRACKING */}
              <div className="mt-6">
                <div className="flex items-center justify-between">
                  {[
                    "Ordered",
                    "Packed",
                    "Shipping",
                    "Out For Delivery",
                    "Delivered",
                  ].map((step, i) => (
                    <div
                      key={i}
                      className="flex-1 flex flex-col items-center relative"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#23bb49] text-white flex items-center justify-center text-xs z-10">
                        ✓
                      </div>

                      {i !== 4 && (
                        <div className="absolute top-4 left-1/2 w-full h-1 bg-[#C4B5FD]"></div>
                      )}

                      <p className="text-xs text-gray-500 mt-2 text-center">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex justify-end gap-3 mt-6">
                <button className="border border-[#C4B5FD] px-4 py-2 rounded-xl text-sm">
                  View Details
                </button>

                <button className="bg-[#0c9952] text-white px-4 py-2 rounded-xl text-sm">
                  Update Status
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4">
          {/* SUMMARY */}
          <div className="bg-white border border-[#C4B5FD] rounded-2xl p-5">
            <h2 className="font-bold text-lg text-[#2E1463] mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Total Orders</span>
                <span className="font-bold">28</span>
              </div>

              <div className="flex justify-between">
                <span>Total Revenue</span>
                <span className="font-bold">₹1,25,000</span>
              </div>

              <div className="flex justify-between">
                <span>Average Order</span>
                <span className="font-bold">₹4,460</span>
              </div>
            </div>
          </div>

          {/* ACTIVITY */}
          <div className="bg-white border border-[#C4B5FD] rounded-2xl p-5">
            <h2 className="font-bold text-lg text-[#2E1463] mb-4">
              Recent Activity
            </h2>

            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium">New order received</p>

                <p className="text-gray-500">10 mins ago</p>
              </div>

              <div>
                <p className="font-medium">Order shipped</p>

                <p className="text-gray-500">1 hour ago</p>
              </div>

              <div>
                <p className="font-medium">Order delivered</p>

                <p className="text-gray-500">Yesterday</p>
              </div>
            </div>
          </div>
          {/* PANELS */}

          {activePanel && (
            <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-start overflow-y-auto p-6">
              <div className="bg-[#FFFFFF] w-full max-w-7xl rounded-3xl p-6 shadow-2xl border border-[#C4B5FD]">
                {/* TOP BAR */}

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-[#2E1463]">
                      {activePanel === "In Process" && "In Process Orders"}

                      {activePanel === "Packed" && "Packed Orders"}

                      {activePanel === "Shipping" && "Shipped Orders"}

                      {activePanel === "Out For Delivery" &&
                        "Out for Delivery Orders"}

                      {activePanel === "Delivered" && "Delivered Orders"}
                    </h1>

                    <p className="text-gray-500 mt-1">
                      {activePanel === "In Process" &&
                        "Orders currently being processed"}

                      {activePanel === "Packed" &&
                        "Orders packed and ready to ship"}

                      {activePanel === "Shipping" &&
                        "Orders currently in shipping"}

                      {activePanel === "Out For Delivery" &&
                        "Orders currently on the way"}

                      {activePanel === "Delivered" &&
                        "Successfully delivered orders"}
                    </p>
                  </div>

                  <button
                    onClick={() => setActivePanel("")}
                    className="w-10 h-10 rounded-full bg-[#EDE9FE] flex items-center justify-center"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* TOP STATS */}

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                  {[
                    {
                      title: "Out For Delivery",
                      value: "9",
                      icon: <Truck size={18} />,
                    },
                    {
                      title: "Avg Hours",
                      value: "2.1",
                      icon: <Calendar size={18} />,
                    },
                    {
                      title: "Total Value",
                      value: "₹2,18,750",
                      icon: <Package size={18} />,
                    },
                    {
                      title: "Tracking",
                      value: "100%",
                      icon: <ShieldCheck size={18} />,
                    },
                    {
                      title: "Issues",
                      value: "0",
                      icon: <Package size={18} />,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white border border-[#DDD6FE] rounded-2xl p-4 text-center"
                    >
                      <div className="w-10 h-10 rounded-xl border-[#DDD6FE] flex items-center justify-center text-[#7C3AED] mb-3 mx-auto">
                        {item.icon}
                      </div>

                      <h2 className="text-2xl font-bold text-[#2E1463]">
                        {item.value}
                      </h2>

                      <p className="text-sm text-gray-500 mt-1">{item.title}</p>
                    </div>
                  ))}
                </div>

                {/* TABLE */}

                <div className="overflow-x-auto rounded-2xl border border-[#DDD6FE]">
                  <table className="w-full">
                    <thead className="bg-[#F5F3FF]">
                      <tr className="text-left text-sm text-gray-500">
                        <th className="p-4">Order</th>
                        <th className="p-4">Customer</th>
                        <th className="p-4">Items</th>
                        <th className="p-4">Courier</th>
                        <th className="p-4">Out For Delivery</th>
                        <th className="p-4">ETA</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {orders.map((order, index) => (
                        <tr key={index} className="border-t border-[#E9DDFD]">
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-14 h-14 rounded-2xl bg-[#EDE9FE] flex items-center justify-center text-2xl">
                                💎
                              </div>

                              <div>
                                <h2 className="font-bold text-[#2E1463]">
                                  {order.id}
                                </h2>

                                <p className="text-sm text-gray-500">
                                  {order.product}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="p-4">
                            <p className="font-medium">{order.customer}</p>

                            <p className="text-sm text-gray-500">
                              Mumbai, India
                            </p>
                          </td>

                          <td className="p-4">1 Item</td>

                          <td className="p-4">
                            <p className="font-medium">BlueDart</p>

                            <p className="text-sm text-[#6ed1f0]">TRK234567</p>
                          </td>

                          <td className="p-4 text-sm text-gray-500">
                            25 May, 2025
                          </td>

                          <td className="p-4 text-sm text-gray-500">By 7 PM</td>

                          <td className="p-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-bold

  ${
    activePanel === "Delivered"
      ? "bg-green-100 text-green-700"
      : activePanel === "Packed"
        ? "bg-orange-100 text-red-700"
        : activePanel === "Shipping"
          ? "bg-blue-100 text-blue-700"
          : activePanel === "In Process"
            ? "bg-purple-100 text-sky-400"
            : "bg-purple-100 text-green-700"
  }
`}
                            >
                              {activePanel}
                            </span>
                          </td>

                          <td className="p-4">
         <button className="border border-[#DDD6FE] px-4 py-2 rounded-xl text-sm flex items-center gap-2">
                              <Eye size={16} />
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Orders;
