import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { Eye, RefreshCw } from "lucide-react";

const STATUS_COLORS = {
  PENDING:          "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  ACCEPTED:         "bg-blue-500/10 text-blue-400 border-blue-500/20",
  PICKUP_SCHEDULED: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  IN_PROGRESS:      "bg-orange-500/10 text-orange-400 border-orange-500/20",
  READY:            "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  DELIVERED:        "bg-green-500/10 text-green-400 border-green-500/20",
  CANCELLED:        "bg-red-500/10 text-red-400 border-red-500/20",
};

const ORDER_STATUSES = ["PENDING","ACCEPTED","PICKUP_SCHEDULED","IN_PROGRESS","READY","DELIVERED","CANCELLED"];

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [updating, setUpdating] = useState(false);

  const fetchOrders = () => {
    setLoading(true);
    api.get("/api/admin/orders")
      .then((d) => { if (d.success) setOrders(d.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetchOrders(); }, []);

  const updateStatus = async (id, orderStatus) => {
    setUpdating(true);
    try {
      const res = await api.patch(`/api/admin/orders/${id}/status`, { orderStatus });
      if (res.success) {
        setOrders((prev) => prev.map((o) => o.id === id ? { ...o, orderStatus } : o));
        if (selected?.id === id) setSelected((s) => ({ ...s, orderStatus }));
      }
    } finally {
      setUpdating(false);
    }
  };

  const stats = ORDER_STATUSES.reduce((acc, s) => {
    acc[s] = orders.filter((o) => o.orderStatus === s).length;
    return acc;
  }, {});

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-white">Orders</h1>
          <p className="text-gray-500 text-sm mt-0.5">Manage all service bookings</p>
        </div>
        <button onClick={fetchOrders} className="flex items-center gap-2 bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] px-4 py-2 rounded-xl text-sm hover:bg-[#C5A059]/20 transition">
          <RefreshCw size={14} /> Refresh
        </button>
      </div>

      {/* Status cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {ORDER_STATUSES.map((s) => (
          <div key={s} className="bg-[#111] border border-[#C5A059]/10 rounded-xl p-3 text-center">
            <p className="text-lg font-black text-white">{stats[s] || 0}</p>
            <p className="text-[10px] text-gray-500 uppercase tracking-wide mt-0.5">{s.replace(/_/g," ")}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-[#111] border border-[#C5A059]/10 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading orders…</div>
        ) : orders.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No orders yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#C5A059]/10 text-[10px] uppercase tracking-wider text-gray-500">
                  <th className="px-4 py-3 text-left">Order ID</th>
                  <th className="px-4 py-3 text-left">Customer</th>
                  <th className="px-4 py-3 text-left">Service</th>
                  <th className="px-4 py-3 text-left">Amount</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-[#C5A059]/5 hover:bg-[#C5A059]/5 transition">
                    <td className="px-4 py-3 font-mono text-xs text-gray-400">{order.id.slice(0, 8)}…</td>
                    <td className="px-4 py-3">
                      <p className="text-white font-medium">{order.customerName}</p>
                      <p className="text-gray-500 text-xs">{order.phone}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-300">{order.serviceType}</td>
                    <td className="px-4 py-3 text-[#C5A059] font-bold">₹{order.amount?.toLocaleString("en-IN")}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold border ${STATUS_COLORS[order.orderStatus] || "bg-gray-500/10 text-gray-400 border-gray-500/20"}`}>
                        {order.orderStatus}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs">
                      {new Date(order.createdAt).toLocaleDateString("en-IN")}
                    </td>
                    <td className="px-4 py-3">
                      <button onClick={() => setSelected(order)} className="text-gray-400 hover:text-[#C5A059] transition">
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-[#1a1a1a] border border-[#C5A059]/20 rounded-2xl p-6 w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-black text-white">Order Details</h2>
              <button onClick={() => setSelected(null)} className="text-gray-500 hover:text-white">✕</button>
            </div>

            <div className="space-y-3 text-sm">
              {[
                ["Order ID", selected.id],
                ["Customer", selected.customerName],
                ["Phone", selected.phone],
                ["Email", selected.email || "—"],
                ["Service", selected.serviceType],
                ["Amount", `₹${selected.amount?.toLocaleString("en-IN")}`],
                ["Payment", selected.paymentStatus],
                ["Date", new Date(selected.createdAt).toLocaleString("en-IN")],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span className="text-gray-500">{k}</span>
                  <span className="text-white font-medium">{v}</span>
                </div>
              ))}
            </div>

            {/* Status update */}
            <div className="mt-5">
              <label className="text-xs text-gray-500 uppercase tracking-wider">Update Status</label>
              <select
                value={selected.orderStatus}
                onChange={(e) => updateStatus(selected.id, e.target.value)}
                disabled={updating}
                className="w-full mt-2 bg-[#111] border border-[#333] text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] transition"
              >
                {ORDER_STATUSES.map((s) => (
                  <option key={s} value={s}>{s.replace(/_/g, " ")}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;
