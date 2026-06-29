import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { api } from "../lib/api";
import { TrendingUp, ShoppingBag, Users, Clock, Store } from "lucide-react";

const fmt = (n) =>
  n >= 100000
    ? `₹${(n / 100000).toFixed(1)}L`
    : n >= 1000
    ? `₹${(n / 1000).toFixed(1)}K`
    : `₹${n}`;

function StatCard({ icon: Icon, label, value, color }) {
  return (
    <div className="bg-[#111] border border-[#C5A059]/10 rounded-2xl p-5 flex flex-col items-center text-center hover:border-[#C5A059]/30 transition">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${color}`}>
        <Icon size={22} className="text-white" />
      </div>
      <p className="text-gray-500 text-xs uppercase tracking-wider">{label}</p>
      <h2 className="text-2xl font-black text-white mt-1">{value}</h2>
    </div>
  );
}

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [vendorStats, setVendorStats] = useState({ total: 0, pending: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get("/api/admin/stats").catch(() => null),
      api.get("/api/admin/vendor-applications").catch(() => null),
      api.get("/api/admin/vendors").catch(() => null),
    ]).then(([statsData, appsData, vendorsData]) => {
      if (statsData?.success) setStats(statsData.data);
      if (appsData?.data && vendorsData?.data) {
        setVendorStats({
          total: vendorsData.data.length,
          pending: appsData.data.filter(a => a.status === "PENDING").length,
        });
      }
    }).finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between bg-gradient-to-r from-[#1a1a1a] to-[#111] border border-[#C5A059]/20 p-6 rounded-2xl">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">
            Curves <span className="text-[#C5A059]">&</span> Fitz
          </h1>
          <p className="text-gray-400 mt-1 text-sm">Fashion Services — Admin Dashboard</p>
        </div>
        <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-2xl bg-[#C5A059]/10 border border-[#C5A059]/20">
          <span className="text-3xl">✦</span>
        </div>
      </div>

      {/* Stats */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-[#111] border border-[#C5A059]/10 rounded-2xl p-5 h-32 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          <div className="xl:col-span-1"><StatCard icon={TrendingUp} label="Revenue" value={fmt(stats?.totalRevenue || 0)} color="bg-[#C5A059]" /></div>
          <div className="xl:col-span-1"><StatCard icon={ShoppingBag} label="Orders" value={stats?.totalOrders ?? 0} color="bg-[#1d4ed8]" /></div>
          <div className="xl:col-span-1"><StatCard icon={Users} label="Customers" value={stats?.totalCustomers ?? 0} color="bg-[#059669]" /></div>
          <div className="xl:col-span-1"><StatCard icon={Clock} label="Pending" value={stats?.pendingOrders ?? 0} color="bg-[#dc2626]" /></div>
          <div className="xl:col-span-1"><StatCard icon={Store} label="Vendors" value={vendorStats.total} color="bg-[#7c3aed]" /></div>
          <div className="xl:col-span-1"><StatCard icon={Store} label="Awaiting Review" value={vendorStats.pending} color="bg-[#d97706]" /></div>
        </div>
      )}

      {/* Chart */}
      <div className="bg-[#111] border border-[#C5A059]/10 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-black text-white">Revenue Analytics</h2>
            <p className="text-gray-500 text-xs mt-0.5">Last 6 months</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#C5A059]/10 text-[#C5A059] text-xs font-semibold border border-[#C5A059]/20">
            Live Data
          </span>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={stats?.monthlyRevenue || []}>
              <XAxis dataKey="name" stroke="#555" tick={{ fontSize: 12 }} />
              <YAxis stroke="#555" tick={{ fontSize: 12 }} tickFormatter={(v) => `₹${(v/1000).toFixed(0)}K`} />
              <Tooltip
                contentStyle={{ borderRadius: "12px", border: "1px solid #C5A059", background: "#1a1a1a", color: "#fff", fontSize: "12px" }}
                formatter={(v) => [fmt(v), "Revenue"]}
              />
              <Line type="monotone" dataKey="revenue" stroke="#C5A059" strokeWidth={2.5} dot={{ r: 4, fill: "#C5A059" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
