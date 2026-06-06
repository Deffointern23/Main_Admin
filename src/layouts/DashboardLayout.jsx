import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/shared/Navbar";

import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Boxes,
  Users,
  Star,
  BarChart3,
  CreditCard,
  Settings,
} from "lucide-react";

function DashboardLayout() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const menu = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Orders", path: "/orders", icon: ShoppingCart },
    { name: "Products", path: "/products", icon: Package },
    { name: "Inventory", path: "/inventory", icon: Boxes },
    { name: "Customers", path: "/customers", icon: Users },
    { name: "Reviews", path: "/reviews", icon: Star },
    { name: "Analytics", path: "/analytics", icon: BarChart3 },
    { name: "Payments", path: "/payments", icon: CreditCard },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`w-60 bg-gradient-to-b from-[#2E1463] to-[#1B0E3A] text-white p-4 fixed md:static h-screen overflow-y-auto z-50 transition-transform duration-300 border-r border-white/10
${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="md:hidden mb-3">
          <button onClick={() => setOpen(false)} className="text-xl">
            ✕
          </button>
        </div>
        <div className="mb-5 flex items-center gap-3">
         <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg shrink-0">
  <img
    src="/images/logo.jpg"
    alt="Logo"
    className="w-full h-full object-cover"
  />
</div>

          <div className="min-w-0">
            <h1 className="text-lg font-bold text-white whitespace-nowrap">
              AURUM & CO.
            </h1>

            <p className="text-[10px] text-purple-200 uppercase tracking-widest">
              Vendor Suite
            </p>
          </div>
        </div>


        <div className="mb-4">
          <p className="text-[11px] uppercase tracking-widest text-purple-300">
            Navigation
          </p>
        </div>
        <nav className="space-y-0">
          {menu.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 font-medium ${
                  active
                    ? "bg-purple-500/20 text-purple-300 border border-purple-400"
                    : "text-purple-300 hover:bg-white/10"
                }`}
              >
                <Icon size={20} className="shrink-0" />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="mt-4 border-t border-white/10 pt-4">
          <p className="text-[11px] uppercase tracking-widest text-purple-300 mb-3">
            Account
          </p>

          <Link
            to="/settings"
            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 ${
              location.pathname === "/settings"
                ? "bg-purple-500/20 text-purple-300 border border-purple-400"
                : "text-purple-300 hover:bg-white/10"
            }`}
          >
            <Settings size={20} />
            Settings
          </Link>
        </div>
        <div className="mt-2 pt-2 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-purple-100 hover:bg-white/10 transition-all duration-200"
          >
            <span className="text-lg">↩</span>
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <button
        className="md:hidden text-2xl mt-2 ml-2 self-start"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>
      <div className="flex-1 p-6 overflow-auto">
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Outlet context={{ searchTerm }} />
      </div>
    </div>
  );
}

export default DashboardLayout;
