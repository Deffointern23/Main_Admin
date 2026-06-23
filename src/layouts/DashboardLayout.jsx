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
  FileText,
  EyeOff,
  Wallet,
  Boxes,
  Users,
  Star,
  BarChart3,
  CreditCard,
  Settings,
  UserCog,
  ChevronDown,
  Menu,
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

  const menuSections = [
    {
      title: "Main",
      items: [{ name: "Dashboard", path: "/", icon: LayoutDashboard }],
    },

    {
      title: "Vendors Management",
      items: [
        { name: "Applications", path: "/applications", icon: FileText },
        { name: "Approved Vendors", path: "/approved-vendors", icon: Users },
        { name: "Rejected Vendors", path: "/rejected-vendors", icon: Users },
      ],
    },

    {
      title: "Listings",
      items: [
        { name: "All Listings", path: "/listings", icon: Package },
        { name: "Pending Listings", path: "/pending-listings", icon: FileText },
        { name: "Hidden Listings", path: "/hidden-listings", icon: EyeOff },
      ],
    },

    {
      title: "Orders & Customers",
      items: [
        { name: "Orders", path: "/orders", icon: ShoppingCart },
        { name: "Customers", path: "/customers", icon: Users },
      ],
    },

    {
      title: "Commission & Payments",
      items: [
        { name: "Commission", path: "/commission", icon: Wallet },
        { name: "Payments", path: "/payments", icon: CreditCard },
        { name: "Transactions", path: "/transactions", icon: CreditCard },
      ],
    },
  ];

  const pageInfo = {
    "/": {
      title: "Dashboard",
      breadcrumb: "Main > Dashboard",
    },

    "/applications": {
      title: "Applications",
      breadcrumb: "Vendors Management > Applications",
    },

    "/approved-vendors": {
      title: "Approved Vendors",
      breadcrumb: "Vendors Management > Approved Vendors",
    },

    "/rejected-vendors": {
      title: "Rejected Vendors",
      breadcrumb: "Vendors Management > Rejected Vendors",
    },

    "/listings": {
      title: "All Listings",
      breadcrumb: "Listings > All Listings",
    },

    "/pending-listings": {
      title: "Pending Listings",
      breadcrumb: "Listings > Pending Listings",
    },

    "/hidden-listings": {
      title: "Hidden Listings",
      breadcrumb: "Listings > Hidden Listings",
    },

    "/orders": {
      title: "Orders",
      breadcrumb: "Orders & Customers > Orders",
    },

    "/customers": {
      title: "Customers",
      breadcrumb: "Orders & Customers > Customers",
    },

    "/commission": {
      title: "Commission",
      breadcrumb: "Commission & Payments > Commission",
    },

    "/payments": {
      title: "Payments",
      breadcrumb: "Commission & Payments > Payments",
    },

    "/transactions": {
      title: "Transactions",
      breadcrumb: "Commission & Payments > Transactions",
    },

    "/settings": {
      title: "Settings",
      breadcrumb: "Account > Settings",
    },
    "/admin-users": {
      title: "Admin Users",
      breadcrumb: "Account > Admin Users",
    },
  };

  const currentPage = pageInfo[location.pathname] || {
    title: "Dashboard",
    breadcrumb: "Main > Dashboard",
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div
        className={`w-60 bg-gradient-to-b from-[#2E1463] to-[#1B0E3A] text-white px-3 py-3 fixed md:static h-screen overflow-hidden z-50 transition-transform duration-300 border-r border-white/10
${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="md:hidden mb-3">
          <button onClick={() => setOpen(false)} className="text-xl">
            ✕
          </button>
        </div>
        <div className="mb-3 flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg shrink-0">
            <img
              src="/images/logo.webp"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="min-w-0">
            <h1 className="text-lg font-bold text-white whitespace-nowrap">
              Lustre Admin
            </h1>

            <p className="text-[10px] text-purple-200 uppercase tracking-widest">
              Super Admin
            </p>
          </div>
        </div>

        {menuSections.map((section) => (
          <div key={section.title} className="mb-2">
            <p className="text-[10px] uppercase tracking-widest text-purple-300 mb-1">
              {section.title}
            </p>

            <nav className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                const active = location.pathname === item.path;

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all duration-200 font-medium ${
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
          </div>
        ))}
        <div className="mt-1 border-t border-white/10 pt-1">
          <p className="text-[10px] uppercase tracking-widest text-purple-300 mb-1">
            Account
          </p>

          <Link
            to="/settings"
            className={`flex items-center gap-3 px-3 py-2 text-sm rounded-xl transition-all duration-200 ${
              location.pathname === "/settings"
                ? "bg-purple-500/20 text-purple-300 border border-purple-400"
                : "text-purple-300 hover:bg-white/10"
            }`}
          >
            <Settings size={20} />
            Settings
          </Link>
          <Link
            to="/admin-users"
            className={`flex items-center gap-3 px-3 py-2 text-sm rounded-xl transition-all duration-200 ${
              location.pathname === "/admin-users"
                ? "bg-purple-500/20 text-purple-300 border border-purple-400"
                : "text-purple-300 hover:bg-white/10"
            }`}
          >
            <UserCog size={20} />
            Admin Users
          </Link>
        </div>
        <div className="mt-1 pt-1 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-1.5 text-sm w-full rounded-xl text-purple-100 hover:bg-white/10 transition-all duration-200"
          >
            <span className="text-lg">↩</span>
            Sign Out
          </button>
        </div>
      </div>

      <button
        className="md:hidden text-2xl mt-2 ml-2 self-start"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>
      <div className="flex-1 p-6 overflow-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 px-6 py-5 rounded-3xl bg-white border border-[#E9DDFD] shadow-lg gap-4">
          <div className="w-full">
            <div className="flex items-center gap-2 md:gap-3">
              <Menu size={24} className="text-[#2E1463]" />

              <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#2E1463] whitespace-nowrap">
                {currentPage.title}
              </h1>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 mt-1 md:ml-10">
              {currentPage.breadcrumb}
            </p>

            <div className="flex md:hidden items-center justify-start gap-4 mt-4">
              <Navbar />
            </div>
          </div>

          <div className="hidden md:flex">
            <Navbar />
          </div>
        </div>

        <Outlet context={{ searchTerm }} />
      </div>
    </div>
  );
}

export default DashboardLayout;
