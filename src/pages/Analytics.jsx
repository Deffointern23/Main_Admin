import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { TrendingUp, ShoppingBag, Percent } from "lucide-react";

const salesData = [
  { name: "Jan", sales: 400, orders: 240 },
  { name: "Feb", sales: 800, orders: 300 },
  { name: "Mar", sales: 600, orders: 280 },
  { name: "Apr", sales: 1200, orders: 400 },
  { name: "May", sales: 900, orders: 350 },
  { name: "Jun", sales: 1500, orders: 500 },
];

const tooltipStyle = {
  borderRadius: "12px",
  border: "1px solid rgba(197,160,89,0.3)",
  background: "#1a1a1a",
  color: "#fff",
  fontSize: "12px",
};

function StatCard({ icon: Icon, label, value, sub }) {
  return (
    <div className="bg-[#111] border border-[#C5A059]/10 rounded-2xl p-6 hover:border-[#C5A059]/30 transition">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{label}</p>
          <h2 className="text-4xl font-black text-white mt-2">{value}</h2>
          {sub && <p className="text-xs text-gray-600 mt-1">{sub}</p>}
        </div>
        <div className="w-14 h-14 rounded-2xl bg-[#C5A059]/10 flex items-center justify-center">
          <Icon size={24} className="text-[#C5A059]" />
        </div>
      </div>
    </div>
  );
}

function Analytics() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] p-6 space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-white">Analytics</h1>
          <p className="text-[#C5A059] text-sm mt-0.5">Store Performance Overview</p>
        </div>
        <div className="flex items-center gap-4 bg-[#111] border border-[#C5A059]/20 px-5 py-4 rounded-2xl w-fit">
          <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 flex items-center justify-center">
            <TrendingUp size={22} className="text-[#C5A059]" />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider">This Month</p>
            <h3 className="font-black text-white text-lg">+24% Growth</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard icon={TrendingUp} label="Total Sales" value="₹85K" sub="This month" />
        <StatCard icon={ShoppingBag} label="Total Orders" value="1,240" sub="This month" />
        <StatCard icon={Percent} label="Conversion Rate" value="4.5%" sub="Avg. this quarter" />
      </div>

      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">
        <div className="bg-[#111] border border-[#C5A059]/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-black text-white">Sales Overview</h2>
              <p className="text-gray-500 text-xs mt-0.5">Monthly Revenue Analytics</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">+18%</span>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <defs>
                  <linearGradient id="goldBar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C5A059" />
                    <stop offset="100%" stopColor="#8B6A2E" />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#444" tick={{ fontSize: 12, fill: "#666" }} />
                <YAxis stroke="#444" tick={{ fontSize: 12, fill: "#666" }} />
                <Tooltip contentStyle={tooltipStyle} />
                <Bar dataKey="sales" fill="url(#goldBar)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#111] border border-[#C5A059]/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-black text-white">Orders Trend</h2>
              <p className="text-gray-500 text-xs mt-0.5">Weekly Customer Orders</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#C5A059]/10 text-[#C5A059] text-xs font-bold border border-[#C5A059]/20">Trending</span>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <XAxis dataKey="name" stroke="#444" tick={{ fontSize: 12, fill: "#666" }} />
                <YAxis stroke="#444" tick={{ fontSize: 12, fill: "#666" }} />
                <Tooltip contentStyle={tooltipStyle} />
                <Line type="monotone" dataKey="orders" stroke="#C5A059" strokeWidth={2.5} dot={{ r: 4, fill: "#C5A059", stroke: "#0f0f0f", strokeWidth: 2 }} activeDot={{ r: 7 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
