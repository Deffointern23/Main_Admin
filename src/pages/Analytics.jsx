

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const salesData = [
  { name: "Jan", sales: 400, orders: 240 },
  { name: "Feb", sales: 800, orders: 300 },
  { name: "Mar", sales: 600, orders: 280 },
  { name: "Apr", sales: 1200, orders: 400 },
  { name: "May", sales: 900, orders: 350 },
  { name: "Jun", sales: 1500, orders: 500 },
];

function Analytics() {
  return (
<div className="min-h-screen bg-gradient-to-br from-[#fff8f2] via-[#fff4ec] to-[#fdebdc] p-4 sm:p-6 lg:p-10">

  {/* HEADER */}
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

    <div>
    

      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-2 text-[#5a3722]">
        Jewellery Analytics
      </h1>

      <p className="text-[#8c6a58] mt-3 text-sm sm:text-base">
        Elegant Luxury Store Performance ✨
      </p>
    </div>

    {/* TOP BADGE */}
    <div className="flex items-center gap-4 bg-gradient-to-r from-[#f7d9b9] to-[#f5cfa8] border border-[#efc89b] px-5 py-4 rounded-3xl shadow-[0_10px_30px_rgba(240,180,120,0.25)] w-fit">

      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c8a45d] to-[#f5d98f] flex items-center justify-center text-2xl shadow-lg">
        💎
      </div>

      <div>
        <p className="text-sm text-[#7b5a46]">
          This Month
        </p>

        <h3 className="font-bold text-[#5a3722] text-lg">
          +24% Growth
        </h3>
      </div>

    </div>

  </div>

  {/* STATS */}
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">

    {/* CARD 1 */}
    <div className="bg-gradient-to-br from-[#f8e7cf] via-[#f6ddba] to-[#efd0a5] border border-[#ebc896] rounded-[30px] p-6 shadow-[0_12px_35px_rgba(212,175,55,0.18)] hover:-translate-y-2 transition duration-300">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-[#7b5a46] text-sm sm:text-base">
            Total Sales
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-[#5a3722] mt-2">
            ₹85K
          </h2>
        </div>

        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#c8a45d] to-[#f5d98f] flex items-center justify-center text-2xl shadow-lg">
          💰
        </div>

      </div>

    </div>

    {/* CARD 2 */}
    <div className="bg-gradient-to-br from-[#ffe3e8] via-[#ffd6de] to-[#ffc7d2] border border-pink-200 rounded-[30px] p-6 shadow-[0_12px_35px_rgba(255,182,193,0.2)] hover:-translate-y-2 transition duration-300">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-[#7b5a46] text-sm sm:text-base">
            Total Orders
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-[#5a3722] mt-2">
            1240
          </h2>
        </div>

        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-300 flex items-center justify-center text-2xl shadow-lg">
          🛍️
        </div>

      </div>

    </div>

    {/* CARD 3 */}
    <div className="bg-gradient-to-br from-[#eee3ff] via-[#e5d6ff] to-[#dbc5ff] border border-purple-200 rounded-[30px] p-6 shadow-[0_12px_35px_rgba(168,85,247,0.15)] hover:-translate-y-2 transition duration-300">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-[#7b5a46] text-sm sm:text-base">
            Conversion Rate
          </p>

          <h2 className="text-3xl sm:text-4xl font-black text-[#5a3722] mt-2">
            4.5%
          </h2>
        </div>

        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-300 flex items-center justify-center text-2xl shadow-lg">
          👑
        </div>

      </div>

    </div>

  </div>

  {/* CHART SECTION */}
  <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">

    {/* BAR CHART */}
    <div className="bg-gradient-to-br from-[#f8e7cf] via-[#f6ddba] to-[#efd0a5] border border-[#ebc896] rounded-[35px] p-5 sm:p-6 shadow-[0_15px_40px_rgba(212,175,55,0.18)]">

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

        <div>

          <h2 className="text-2xl sm:text-3xl font-black text-[#5a3722]">
            Sales Overview
          </h2>

          <p className="text-[#7b5a46] mt-1 text-sm sm:text-base">
            Monthly Revenue Analytics
          </p>

        </div>

        <div className="px-4 py-2 rounded-full bg-[#fff1d6] text-[#b88a00] font-semibold text-sm w-fit shadow">
          +18%
        </div>

      </div>

      <div className="h-[280px] sm:h-[320px]">

        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={salesData}>

            <defs>
              <linearGradient id="goldBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f5d98f" />
                <stop offset="100%" stopColor="#c8a45d" />
              </linearGradient>
            </defs>

            <XAxis dataKey="name" stroke="#8b6b2f" />
            <YAxis stroke="#8b6b2f" />

            <Tooltip
              contentStyle={{
                borderRadius: "16px",
                border: "none",
                background: "#fff4ea",
                boxShadow: "0 10px 30px rgba(0,0,0,0.12)"
              }}
            />

            <Bar
              dataKey="sales"
              fill="url(#goldBar)"
              radius={[12, 12, 0, 0]}
            />

          </BarChart>
        </ResponsiveContainer>

      </div>

    </div>

    {/* LINE CHART */}
    <div className="bg-gradient-to-br from-[#ffe3e8] via-[#ffd6de] to-[#ffc7d2] border border-pink-200 rounded-[35px] p-5 sm:p-6 shadow-[0_15px_40px_rgba(255,182,193,0.22)]">

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

        <div>

          <h2 className="text-2xl sm:text-3xl font-black text-[#5a3722]">
            Orders Trend
          </h2>

          <p className="text-[#7b5a46] mt-1 text-sm sm:text-base">
            Weekly Customer Orders
          </p>

        </div>

        <div className="px-4 py-2 rounded-full bg-white/60 text-pink-600 font-semibold text-sm w-fit shadow">
          Trending
        </div>

      </div>

      <div className="h-[280px] sm:h-[320px]">

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={salesData}>

            <defs>
              <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ff8fab" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>
            </defs>

            <XAxis dataKey="name" stroke="#8b6b2f" />
            <YAxis stroke="#8b6b2f" />

            <Tooltip
              contentStyle={{
                borderRadius: "16px",
                border: "none",
                background: "#fff4ea",
                boxShadow: "0 10px 30px rgba(0,0,0,0.12)"
              }}
            />

            <Line
              type="monotone"
              dataKey="orders"
              stroke="url(#lineGlow)"
              strokeWidth={5}
              dot={{
                r: 5,
                fill: "#ff8fab",
                stroke: "#fff",
                strokeWidth: 2
              }}
              activeDot={{
                r: 8
              }}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>

  </div>

</div>
  );
}

export default Analytics;
