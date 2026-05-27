

import { useState } from "react";
import Navbar from "../components/shared/Navbar";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";

function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Orders", path: "/orders", icon: ShoppingCart },
    { name: "Products", path: "/products", icon: Package },
    { name: "Customers", path: "/customers", icon: Users },
    { name: "Analytics", path: "/analytics", icon: BarChart3 },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`w-64 bg-[#583f2f] text-white p-5 shadow-xl fixed md:static h-full z-50 transition-transform duration-300
  ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="md:hidden mb-3">
          <button onClick={() => setOpen(false)} className="text-xl">
            ✕
          </button>
        </div>
        <h1 className="text-2xl font-bold text-[#C8A45D] mb-6 flex items-center gap-2">
          <span className="text-4xl">💎</span>
          Aurum
        </h1>

        <nav className="space-y-2">
          {menu.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 p-3 rounded-xl transition font-medium ${
                  active
                    ? "bg-[#C8A45D] text-black shadow-md"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <button
        className="md:hidden text-2xl mt-2 ml-2 self-start"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>
      <div className="flex-1 p-6 overflow-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
