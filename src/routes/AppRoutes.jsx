import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Customers from "../pages/Customers";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
import Payments from "../pages/Payments";
import Applications from "../pages/Applications";
import ApprovedVendors from "../pages/ApprovedVendors";
import RejectedVendors from "../pages/RejectedVendors";
import Listings from "../pages/Listings";
import PendingListings from "../pages/PendingListings";
import HiddenListings from "../pages/HiddenListings";
import Commission from "../pages/Commission";
import Transactions from "../pages/Transactions";
import AdminUsers from "../pages/AdminUsers";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="payments" element={<Payments />} />
          <Route path="settings" element={<Settings />} />
          <Route
  path="admin-users"
  element={<AdminUsers />}
/>
          <Route path="applications" element={<Applications />} />
          <Route path="approved-vendors" element={<ApprovedVendors />} />
          <Route path="rejected-vendors" element={<RejectedVendors />} />

          <Route path="listings" element={<Listings />} />
          <Route path="pending-listings" element={<PendingListings />} />
          <Route path="hidden-listings" element={<HiddenListings />} />

          <Route path="commission" element={<Commission />} />
          <Route path="transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
