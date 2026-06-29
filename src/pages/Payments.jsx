import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { RefreshCw } from "lucide-react";

function Payments() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = () => {
    setLoading(true);
    api.get("/api/admin/orders")
      .then((d) => {
        if (d.success) {
          setOrders(d.data.filter((o) => o.paymentStatus === "PAID" || o.razorpayPaymentId));
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => { loadData(); }, []);

  const totalRevenue = orders.reduce((s, o) => s + (o.amount || 0), 0);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white">Payments</h1>
          <p className="text-gray-500 text-sm mt-0.5">
            {orders.length} paid transactions · ₹{totalRevenue.toLocaleString("en-IN")} collected
          </p>
        </div>
        <button onClick={loadData} className="flex items-center gap-2 bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] px-4 py-2 rounded-xl text-sm hover:bg-[#C5A059]/20 transition">
          <RefreshCw size={14} /> Refresh
        </button>
      </div>

      <div className="bg-[#111] border border-[#C5A059]/10 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading payments…</div>
        ) : orders.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No completed payments yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#C5A059]/10 text-[10px] uppercase tracking-wider text-gray-500">
                  <th className="px-4 py-3 text-left">Payment ID</th>
                  <th className="px-4 py-3 text-left">Customer</th>
                  <th className="px-4 py-3 text-left">Service</th>
                  <th className="px-4 py-3 text-left">Amount</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-b border-[#C5A059]/5 hover:bg-[#C5A059]/5 transition">
                    <td className="px-4 py-3 font-mono text-xs text-gray-400">
                      {o.razorpayPaymentId ? o.razorpayPaymentId.slice(0, 16) + "…" : o.id.slice(0, 8) + "…"}
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-white font-medium">{o.customerName}</p>
                      <p className="text-gray-500 text-xs">{o.email || o.phone}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-300">{o.serviceType}</td>
                    <td className="px-4 py-3 text-[#C5A059] font-black">
                      ₹{o.amount?.toLocaleString("en-IN")}
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 rounded-full text-[10px] font-bold bg-green-500/10 text-green-400 border border-green-500/20">
                        {o.paymentStatus}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs">
                      {new Date(o.createdAt).toLocaleDateString("en-IN")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payments;
