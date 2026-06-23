import { useState } from "react";
import { Bell, ChevronDown } from "lucide-react";

function Navbar({ searchTerm, setSearchTerm }) {
  const [showProfile, setShowProfile] = useState(false);
  const admin = JSON.parse(localStorage.getItem("admin"));

  return (
    <div className="flex flex-col md:flex-row md:justify-end">
    
      <div className="flex flex-row md:flex-row items-center justify-start md:justify-end gap-3 w-full md:w-auto">
        
        <div className="relative cursor-pointer bg-white p-3 rounded-2xl border border-[#E9DDFD] shadow-sm hover:shadow-md transition">
          <Bell size={20} className="text-[#7C3AED]" />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
            3
          </span>
        </div>

      
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

              <p className="text-xs text-[#8B5CF6] truncate">Super Admin</p>
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

                  <p className="text-sm text-[#8B5CF6]">Super Admin</p>
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
