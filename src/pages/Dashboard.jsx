
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 800 },
  { name: "Mar", sales: 600 },
  { name: "Apr", sales: 1200 },
  { name: "May", sales: 900 },
  { name: "Jun", sales: 1500 },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#fffaf5] p-8 space-y-8">
      {/* HEADER */}
      <div className="flex items-center justify-between bg-gradient-to-r from-[#4b2e2e] via-[#7a4e2d] to-[#d4af37] p-8 rounded-[30px] shadow-2xl">
        <div>
          <h1 className="text-5xl font-black text-white tracking-wide">
            Jewellery Dashboard
          </h1>

          <p className="text-[#fff3d6] mt-3 text-lg">
            Elegant jewellery Collection ✨
          </p>
        </div>

        <div className="hidden md:flex items-center justify-center w-28 h-28 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-xl">
          <span className="text-5xl">👑</span>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* CARD */}
        <div className="bg-white rounded-[28px] p-6 border-2 border-[#f3e1b6] shadow-lg hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(212,175,55,0.35)] transition duration-300">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#d4af37] to-[#f7e7b4] flex items-center justify-center text-2xl shadow-lg">
            💰
          </div>

          <p className="text-gray-500 mt-5">Revenue</p>

          <h2 className="text-4xl font-black text-[#4b2e2e] mt-2">₹45K</h2>
        </div>

        {/* CARD */}
        <div className="bg-gradient-to-br from-[#fff0f3] to-[#ffe2ec] rounded-[28px] p-6 shadow-lg hover:-translate-y-2 hover:shadow-pink-200 transition duration-300">
          <div className="w-14 h-14 rounded-2xl bg-pink-500 text-white flex items-center justify-center text-2xl shadow-lg">
            🛍️
          </div>

          <p className="text-gray-500 mt-5">Orders</p>

          <h2 className="text-4xl font-black text-[#4b2e2e] mt-2">320</h2>
        </div>

        {/* CARD */}
        <div className="bg-gradient-to-br from-[#f4f0ff] to-[#ebe3ff] rounded-[28px] p-6 shadow-lg hover:-translate-y-2 hover:shadow-purple-200 transition duration-300">
          <div className="w-14 h-14 rounded-2xl bg-purple-500 text-white flex items-center justify-center text-2xl shadow-lg">
            👑
          </div>

          <p className="text-gray-500 mt-5">Customers</p>

          <h2 className="text-4xl font-black text-[#4b2e2e] mt-2">120</h2>
        </div>

        {/* CARD */}
        <div className="bg-gradient-to-br from-[#fff5f5] to-[#ffe3e3] rounded-[28px] p-6 shadow-lg hover:-translate-y-2 hover:shadow-red-200 transition duration-300">
          <div className="w-14 h-14 rounded-2xl bg-red-500 text-white flex items-center justify-center text-2xl shadow-lg">
            ⏳
          </div>

          <p className="text-gray-500 mt-5">Pending</p>

          <h2 className="text-4xl font-black text-red-500 mt-2">12</h2>
        </div>
      </div>

      {/* CHART */}
      <div className="bg-white rounded-[35px] p-8 shadow-2xl border border-[#f1dfb0]">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-black text-[#4b2e2e]">
              Sales Analytics
            </h2>

            <p className="text-gray-500 mt-1">Monthly Jewellery Sales</p>
          </div>

          <div className="px-5 py-2 rounded-full bg-[#fff4d6] text-[#b88a00] font-semibold">
            Growth +24%
          </div>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <defs>
                <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#d4af37" />
                  <stop offset="100%" stopColor="#ffdf7f" />
                </linearGradient>
              </defs>

              <XAxis dataKey="name" stroke="#9c7b36" />

              <YAxis stroke="#9c7b36" />

              <Tooltip
                contentStyle={{
                  borderRadius: "16px",
                  border: "none",
                  background: "#4b2e2e",
                  color: "#fff",
                }}
              />

              <Line
                type="monotone"
                dataKey="sales"
                stroke="url(#goldLine)"
                strokeWidth={5}
                dot={{
                  r: 6,
                  fill: "#d4af37",
                  strokeWidth: 3,
                  stroke: "#fff",
                }}
                activeDot={{
                  r: 9,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
