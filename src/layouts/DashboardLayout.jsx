import { Link, Outlet, useLocation, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  LayoutDashboard, ShoppingCart, Package, Boxes,
  Users, Star, BarChart3, CreditCard, Settings, LogOut, Menu, X, Store,
} from "lucide-react";

const menu = [
  { name: "Dashboard",  path: "/",          icon: LayoutDashboard },
  { name: "Orders",     path: "/orders",     icon: ShoppingCart },
  { name: "Customers",  path: "/customers",  icon: Users },
  { name: "Payments",   path: "/payments",   icon: CreditCard },
  { name: "Vendors",    path: "/vendors",    icon: Store },
  { name: "Products",   path: "/products",   icon: Package },
  { name: "Inventory",  path: "/inventory",  icon: Boxes },
  { name: "Analytics",  path: "/analytics",  icon: BarChart3 },
  { name: "Reviews",    path: "/reviews",    icon: Star },
];

function DashboardLayout() {
  const { isAuthenticated, loading, admin, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#C5A059] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  const handleLogout = () => { logout(); navigate("/login"); };

  return (
    <div className="flex h-screen bg-[#0f0f0f] text-white overflow-hidden">
      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={() => setOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`w-60 bg-[#111] border-r border-[#C5A059]/10 fixed md:static h-screen z-50 flex flex-col transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Brand */}
        <div className="p-5 border-b border-[#C5A059]/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#C5A059] flex items-center justify-center font-black text-black text-sm shrink-0">
              C&F
            </div>
            <div>
              <p className="font-black text-white text-sm leading-tight">Curves & Fitz</p>
              <p className="text-[10px] text-[#C5A059] uppercase tracking-widest">Admin Suite</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
          <p className="text-[10px] uppercase tracking-widest text-gray-600 px-3 py-2">Navigation</p>
          {menu.map(({ name, path, icon: Icon }) => {
            const active = location.pathname === path;
            return (
              <Link
                key={name}
                to={path}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? "bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/25"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon size={18} className="shrink-0" />
                {name}
              </Link>
            );
          })}

          <div className="border-t border-[#C5A059]/10 mt-2 pt-2">
            <p className="text-[10px] uppercase tracking-widest text-gray-600 px-3 py-2">Account</p>
            <Link
              to="/settings"
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                location.pathname === "/settings"
                  ? "bg-[#C5A059]/15 text-[#C5A059] border border-[#C5A059]/25"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Settings size={18} />
              Settings
            </Link>
          </div>
        </nav>

        {/* Admin info + Logout */}
        <div className="p-3 border-t border-[#C5A059]/10">
          <div className="px-3 py-2 mb-1">
            <p className="text-xs font-semibold text-white truncate">{admin?.name}</p>
            <p className="text-[10px] text-gray-500 truncate">{admin?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-sm text-gray-400 hover:text-red-400 hover:bg-red-500/5 transition-all"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-[#111] border-b border-[#C5A059]/10 px-4 py-3 flex items-center gap-3 shrink-0">
          <button className="md:hidden text-gray-400" onClick={() => setOpen(true)}>
            <Menu size={20} />
          </button>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search orders, customers…"
            className="flex-1 bg-[#1a1a1a] border border-[#333] text-white text-sm px-4 py-2 rounded-xl focus:outline-none focus:border-[#C5A059] transition placeholder:text-gray-600 max-w-md"
          />
        </header>

        <main className="flex-1 overflow-auto bg-[#0f0f0f]">
          <Outlet context={{ searchTerm }} />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
