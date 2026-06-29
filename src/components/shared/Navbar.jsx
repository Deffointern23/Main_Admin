import { useState } from "react";
import { Search, Bell, ChevronDown, LogOut } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function Navbar({ searchTerm, setSearchTerm }) {
  const [showProfile, setShowProfile] = useState(false);
  const { admin, logout } = useAuth();

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 px-5 py-4 mb-6 rounded-2xl bg-[#111] border border-[#C5A059]/10">
      {/* Search */}
      <div className="w-full lg:flex-1">
        <div className="flex items-center gap-3 bg-[#0f0f0f] border border-[#333] px-4 py-3 rounded-xl w-full lg:max-w-md focus-within:border-[#C5A059] transition">
          <Search size={16} className="text-gray-500 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none w-full text-sm text-white placeholder:text-gray-600"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-end gap-3">
        <div className="relative cursor-pointer bg-[#0f0f0f] border border-[#333] p-3 rounded-xl hover:border-[#C5A059]/40 transition">
          <Bell size={18} className="text-gray-400" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-3 bg-[#0f0f0f] border border-[#333] px-3 py-2 rounded-xl hover:border-[#C5A059]/40 transition cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center font-black text-[#C5A059] text-base">
              {admin?.name?.[0]?.toUpperCase() || "A"}
            </div>
            <div className="min-w-0 hidden sm:block">
              <h3 className="font-bold text-white text-sm whitespace-nowrap">{admin?.name || "Admin"}</h3>
              <p className="text-[11px] text-[#C5A059]">Super Admin</p>
            </div>
            <ChevronDown size={16} className={`text-gray-500 transition-transform ${showProfile ? "rotate-180" : ""}`} />
          </button>

          {showProfile && (
            <div className="absolute right-0 top-14 w-64 bg-[#1a1a1a] border border-[#C5A059]/20 rounded-2xl shadow-2xl p-4 z-50">
              <div className="flex items-center gap-3 border-b border-[#C5A059]/10 pb-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059] font-black text-lg">
                  {admin?.name?.[0]?.toUpperCase() || "A"}
                </div>
                <div>
                  <h3 className="font-black text-white text-sm">{admin?.name || "Admin"}</h3>
                  <p className="text-[11px] text-[#C5A059]">Super Admin</p>
                </div>
              </div>
              <div className="space-y-2 text-xs mb-4">
                {admin?.email && <div className="flex justify-between"><span className="text-gray-500">Email</span><span className="text-white">{admin.email}</span></div>}
                {admin?.phone && <div className="flex justify-between"><span className="text-gray-500">Phone</span><span className="text-white">{admin.phone}</span></div>}
              </div>
              <button
                onClick={() => { setShowProfile(false); logout(); }}
                className="w-full flex items-center justify-center gap-2 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-red-400 py-2 rounded-xl text-xs font-bold transition"
              >
                <LogOut size={14} /> Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
