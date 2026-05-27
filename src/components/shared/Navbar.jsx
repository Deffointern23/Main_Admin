
import { Search, Bell } from "lucide-react";

function Navbar() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 px-4 sm:px-6 py-4 mb-6 rounded-3xl border border-[#f3dfbf] bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)]">

  {/* LEFT SECTION */}
  <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">

    {/* LOGO */}
    <div>
      <h1 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-[#B88A44] via-[#D4AF37] to-[#8B5E3C] bg-clip-text text-transparent">
        Shyam Jewels
      </h1>

      <p className="text-xs sm:text-sm text-gray-500">
        Shyam Gold House
      </p>
    </div>

    {/* SEARCH BAR */}
    <div className="flex items-center gap-3 bg-gradient-to-r from-[#fff7ef] to-[#fff2df] px-4 py-3 rounded-2xl border border-[#f1dfc2] shadow-sm w-full lg:max-w-md transition-all duration-300 hover:shadow-lg">

      <Search size={18} className="text-[#B88A44]" />

      <input
        type="text"
        placeholder="Search products, orders..."
        className="bg-transparent outline-none w-full text-sm placeholder:text-gray-400"
      />

    </div>

  </div>

  {/* RIGHT SECTION */}
  <div className="flex items-center justify-between sm:justify-end gap-4">

    {/* NOTIFICATION */}
    <div className="relative cursor-pointer bg-gradient-to-br from-[#D4AF37] to-[#B88A44] p-3 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">

      <Bell size={20} className="text-white" />

      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
        3
      </span>

    </div>

    {/* PROFILE */}
    <div className="flex items-center gap-3 bg-gradient-to-r from-[#fff7ef] to-[#fff2df] px-3 sm:px-4 py-2 rounded-2xl border border-[#f1dfc2] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">

      <img
        src="https://i.pravatar.cc/100"
        alt="Admin"
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#D4AF37] object-cover"
      />

      <div>
        <h3 className="font-bold text-[#4A3427] text-sm sm:text-base">
          Admin
        </h3>

        <p className="text-xs text-gray-500">
          Store Owner
        </p>
      </div>

    </div>

  </div>

</div>
  );
}

export default Navbar;