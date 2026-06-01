import { useState } from "react";
import { Search, Bell, ChevronDown } from "lucide-react";

function Navbar({ searchTerm, setSearchTerm }) {
  const [showProfile, setShowProfile] = useState(false);
  const admin = JSON.parse(localStorage.getItem("admin"));

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 px-4 sm:px-5 md:px-6 py-4 mb-6 rounded-3xl bg-gradient-to-r from-[#F5F0FF] via-[#F8F5FF] to-[#FFFFFF] border border-[#E9DDFD] shadow-lg">
      {/* SEARCH BAR */}
      <div className="w-full lg:flex-1">
        <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl border border-[#E9DDFD] shadow-sm w-full lg:max-w-md">
          <Search size={18} className="text-[#7C3AED] flex-shrink-0" />

          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
     <div className="flex items-center justify-center lg:justify-end gap-4 w-full lg:w-auto">
        {/* NOTIFICATION */}
        <div className="relative cursor-pointer bg-white p-3 rounded-2xl border border-[#E9DDFD] shadow-sm hover:shadow-md transition">
          <Bell size={20} className="text-[#7C3AED]" />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
            3
          </span>
        </div>

        {/* PROFILE */}
        <div className="relative">
          <div
            onClick={() => setShowProfile(!showProfile)}
          className="flex items-center gap-3 bg-white px-3 sm:px-4 py-2 rounded-2xl border border-[#E9DDFD] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] flex items-center justify-center font-bold text-white text-lg">
              {admin?.name?.charAt(0)?.toUpperCase() || "A"}
            </div>

            <div className="min-w-0">
            <h3 className="font-semibold text-[#2E1463] text-sm sm:text-base whitespace-nowrap">
                {admin?.name || "Admin"}
              </h3>

              <p className="text-xs text-[#8B5CF6] truncate">
                Jewellery Vendor
              </p>
            </div>

            <ChevronDown
              size={18}
              className={`text-[#8B5CF6] transition-transform ${
                showProfile ? "rotate-180" : ""
              }`}
            />
          </div>

          {showProfile && (
            <div className="absolute right-0 top-16 w-[280px] max-w-[90vw] bg-white rounded-2xl border border-[#E9DDFD] shadow-xl p-4 z-50">
              <div className="flex items-center gap-3 border-b pb-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] flex items-center justify-center text-white font-bold">
                  {admin?.name?.charAt(0)?.toUpperCase()}
                </div>

                <div>
                  <h3 className="font-bold text-[#2E1463]">{admin?.name}</h3>

                  <p className="text-sm text-[#8B5CF6]">Jewellery Vendor</p>
                </div>
              </div>

              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className="text-gray-400">Email</p>
                  <p>{admin?.email}</p>
                </div>

                <div>
                  <p className="text-gray-400">Phone</p>
                  <p>{admin?.phone}</p>
                </div>

                <div>
                  <p className="text-gray-400">Store</p>
                  <p>{admin?.store}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
