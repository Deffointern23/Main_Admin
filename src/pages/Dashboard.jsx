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
    <div className="min-h-screen bg-[#F8F5FF] p-6 space-y-6">
      {/* HEADER */}
      <div
        className="flex items-center justify-between bg-gradient-to-r from-[#7150be] via-[#b3a3ce] to-[#bba6db]
      p-6 rounded-2xl shadow-xl"
      >
        <div>
          <h1 className="text-3xl font-black text-white tracking-wide">
            Jewellery Dashboard
          </h1>

          <p className="text-purple-100 mt-1 text-sm">
            Elegant Jewellery Collection ✨
          </p>
        </div>

        <div className="hidden md:flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
          <span className="text-3xl">👑</span>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* CARD 1 */}
        <div className="bg-white rounded-2xl p-5 border border-[#E9DDFD] shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
          <div
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#A78BFA] to-[#DDD6FE]
          flex items-center justify-center text-xl mb-3"
          >
            💰
          </div>

          <p className="text-gray-500 text-xs">Revenue</p>
          <h2 className="text-2xl font-black text-[#3ec949] mt-1">₹45K</h2>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-2xl p-5 border border-[#E9DDFD] shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center text-xl text-white mb-3">
            🛍️
          </div>

          <p className="text-gray-500 text-xs">Orders</p>
          <h2 className="text-2xl font-black text-[#536a74] mt-1">320</h2>
        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-2xl p-5 border border-[#E9DDFD] shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-xl bg-violet-500 flex items-center justify-center text-xl text-white mb-3">
            👑
          </div>

          <p className="text-gray-500 text-xs">Customers</p>
          <h2 className="text-2xl font-black text-[#536a74] mt-1">120</h2>
        </div>

        {/* CARD 4 */}
        <div className="bg-white rounded-2xl p-5 border border-[#E9DDFD] shadow-sm hover:shadow-md transition flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center text-xl text-white mb-3">
            ⏳
          </div>

          <p className="text-gray-500 text-xs">Pending</p>
          <h2 className="text-2xl font-black text-orange-600 mt-1">12</h2>
        </div>
      </div>

      {/* CHART */}
      <div className="bg-white rounded-2xl p-6 shadow-md border border-[#E9DDFD]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-black text-[#2E1463]">
              Sales Analytics
            </h2>
            <p className="text-gray-500 text-xs">Monthly Jewellery Sales</p>
          </div>

          <div className="px-3 py-1 rounded-full bg-purple-100 text-green-700 text-xs font-semibold">
            +24% Growth
          </div>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#536a74" />
              <YAxis stroke="#536a74" />

              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  background: "#2E1463",
                  color: "#fff",
                  fontSize: "12px",
                }}
              />

              <Line
                type="monotone"
                dataKey="sales"
               stroke="#536a74"
                strokeWidth={3}
                dot={{ r: 4, fill: "#536a74" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
