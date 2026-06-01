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
    <div className="min-h-screen bg-gradient-to-br from-[#F5F0FF] via-[#F8F5FF] to-[#FFFFFF] p-4 sm:p-6 lg:p-10">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">

        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-2 text-[#2E1463]">
            Jewellery Analytics
          </h1>

          <p className="text-[#7C3AED] mt-3 text-sm sm:text-base">
            Elegant Luxury Store Performance ✨
          </p>
        </div>

        {/* TOP BADGE */}
        <div className="flex items-center gap-4 bg-gradient-to-r from-[#EDE9FE] to-[#DDD6FE]
        border border-[#C4B5FD] px-5 py-4 rounded-3xl shadow-[0_10px_30px_rgba(124,58,237,0.25)] w-fit">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] flex items-center justify-center text-2xl shadow-lg">
            💎
          </div>

          <div>
            <p className="text-sm text-[#7C3AED]">
              This Month
            </p>

            <h3 className="font-bold text-[#2E1463] text-lg">
              +24% Growth
            </h3>
          </div>

        </div>

      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">

        {/* CARD 1 */}
        <div className="bg-gradient-to-br from-[#F3E8FF] via-[#EDE9FE] to-[#DDD6FE]
        border border-[#C4B5FD] rounded-[30px] p-6 shadow-[0_12px_35px_rgba(124,58,237,0.18)]
        hover:-translate-y-2 transition duration-300">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-[#7C3AED] text-sm sm:text-base">
                Total Sales
              </p>

              <h2 className="text-3xl sm:text-4xl font-black text-[#2E1463] mt-2">
                ₹85K
              </h2>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] flex items-center justify-center text-2xl shadow-lg">
              💰
            </div>

          </div>

        </div>

        {/* CARD 2 */}
        <div className="bg-gradient-to-br from-[#F5F3FF] via-[#EDE9FE] to-[#DDD6FE]
        border border-[#C4B5FD] rounded-[30px] p-6 shadow-[0_12px_35px_rgba(124,58,237,0.18)]
        hover:-translate-y-2 transition duration-300">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-[#7C3AED] text-sm sm:text-base">
                Total Orders
              </p>

              <h2 className="text-3xl sm:text-4xl font-black text-[#2E1463] mt-2">
                1240
              </h2>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#A855F7] to-[#7C3AED] flex items-center justify-center text-2xl shadow-lg">
              🛍️
            </div>

          </div>

        </div>

        {/* CARD 3 */}
        <div className="bg-gradient-to-br from-[#F3E8FF] via-[#EDE9FE] to-[#DDD6FE]
        border border-[#C4B5FD] rounded-[30px] p-6 shadow-[0_12px_35px_rgba(124,58,237,0.15)]
        hover:-translate-y-2 transition duration-300">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-[#7C3AED] text-sm sm:text-base">
                Conversion Rate
              </p>

              <h2 className="text-3xl sm:text-4xl font-black text-[#2E1463] mt-2">
                4.5%
              </h2>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] flex items-center justify-center text-2xl shadow-lg">
              👑
            </div>

          </div>

        </div>

      </div>

      {/* CHART SECTION */}
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6">

        {/* BAR CHART */}
        <div className="bg-gradient-to-br from-[#F3E8FF] via-[#EDE9FE] to-[#DDD6FE]
        border border-[#C4B5FD] rounded-[35px] p-5 sm:p-6 shadow-[0_15px_40px_rgba(124,58,237,0.18)]">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#2E1463]">
                Sales Overview
              </h2>

              <p className="text-[#7C3AED] mt-1 text-sm sm:text-base">
                Monthly Revenue Analytics
              </p>
            </div>

            <div className="px-4 py-2 rounded-full bg-[#EDE9FE] text-[#7C3AED] font-semibold text-sm w-fit shadow">
              +18%
            </div>

          </div>

          <div className="h-[280px] sm:h-[320px]">

            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>

                <defs>
                  <linearGradient id="goldBar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#A855F7" />
                    <stop offset="100%" stopColor="#6D28D9" />
                  </linearGradient>
                </defs>

                <XAxis dataKey="name" stroke="#7C3AED" />
                <YAxis stroke="#7C3AED" />

                <Tooltip
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    background: "#fff4ea",
                    boxShadow: "0 10px 30px rgba(124,58,237,0.12)"
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
        <div className="bg-gradient-to-br from-[#F5F3FF] via-[#EDE9FE] to-[#DDD6FE]
        border border-[#C4B5FD] rounded-[35px] p-5 sm:p-6 shadow-[0_15px_40px_rgba(124,58,237,0.18)]">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#2E1463]">
                Orders Trend
              </h2>

              <p className="text-[#7C3AED] mt-1 text-sm sm:text-base">
                Weekly Customer Orders
              </p>
            </div>

            <div className="px-4 py-2 rounded-full bg-white/60 text-[#7C3AED] font-semibold text-sm w-fit shadow">
              Trending
            </div>

          </div>

          <div className="h-[280px] sm:h-[320px]">

            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>

                <defs>
                  <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#6D28D9" />
                  </linearGradient>
                </defs>

                <XAxis dataKey="name" stroke="#7C3AED" />
                <YAxis stroke="#7C3AED" />

                <Tooltip
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    background: "#fff4ea",
                    boxShadow: "0 10px 30px rgba(124,58,237,0.12)"
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="url(#lineGlow)"
                  strokeWidth={5}
                  dot={{
                    r: 5,
                    fill: "#8B5CF6",
                    stroke: "#fff",
                    strokeWidth: 2
                  }}
                  activeDot={{ r: 8 }}
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