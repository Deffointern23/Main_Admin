import { useState } from "react";
import {
  Settings as SettingsIcon,
  Building2,
  UserPlus,
  MessageSquare,
  CreditCard,
  Percent,
  Truck,
  RotateCcw,
  Shield,
  Plug,
  SlidersHorizontal,
  ClipboardList,
  ChevronRight,
  Upload,
} from "lucide-react";

function Settings() {
  const [settings, setSettings] = useState({
    siteName: "Lustre Marketplace",
    siteEmail: "admin@lustre.com",
    supportEmail: "support@lustre.com",
    phone: "+91 9876543210",
    currency: "INR",
    language: "English",
    maintenance: false,
  });
  const [activeMenu, setActiveMenu] = useState("General Settings");

  return (
    <div className="min-h-screen bg-[#f7f8fc]">
      <div className="grid grid-cols-12 gap-6">
      
       <div className="col-span-12 lg:col-span-3 flex flex-col ">
 <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-4 flex-1">
            <h2 className="font-bold text-xl text-[#2E1463] mb-4">Settings</h2>

  <div className="space-y-2">

  <button
    onClick={() => setActiveMenu("General Settings")}
    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
      activeMenu === "General Settings"
        ? "bg-purple-100 text-purple-700 shadow-sm"
        : "hover:bg-gray-100 hover:text-purple-700"
    }`}
  >
    <div className="flex items-center gap-3">
      <SettingsIcon size={18} />
      <span>General Settings</span>
    </div>
    <ChevronRight size={16} />
  </button>

  <button
    onClick={() => setActiveMenu("Company Profile")}
    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
      activeMenu === "Company Profile"
        ? "bg-purple-100 text-purple-700 shadow-sm"
        : "hover:bg-gray-100 hover:text-purple-700"
    }`}
  >
    <div className="flex items-center gap-3">
      <Building2 size={18} />
      <span>Company Profile</span>
    </div>
    <ChevronRight size={16} />
  </button>

  <button
    onClick={() => setActiveMenu("Enroll Notification")}
    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
      activeMenu === "Enroll Notification"
        ? "bg-purple-100 text-purple-700 shadow-sm"
        : "hover:bg-gray-100 hover:text-purple-700"
    }`}
  >
    <div className="flex items-center gap-3">
      <UserPlus size={18} />
      <span>Enroll Notification</span>
    </div>
    <ChevronRight size={16} />
  </button>

  <button
    onClick={() => setActiveMenu("SMS & WhatsApp")}
    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
      activeMenu === "SMS & WhatsApp"
        ? "bg-purple-100 text-purple-700 shadow-sm"
        : "hover:bg-gray-100 hover:text-purple-700"
    }`}
  >
    <div className="flex items-center gap-3">
      <MessageSquare size={18} />
      <span>SMS & WhatsApp</span>
    </div>
    <ChevronRight size={16} />
  </button>

  <button
    onClick={() => setActiveMenu("Payment Settings")}
    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
      activeMenu === "Payment Settings"
        ? "bg-purple-100 text-purple-700 shadow-sm"
        : "hover:bg-gray-100 hover:text-purple-700"
    }`}
  >
    <div className="flex items-center gap-3">
      <CreditCard size={18} />
      <span>Payment Settings</span>
    </div>
    <ChevronRight size={16} />
  </button>

  <button
    onClick={() => setActiveMenu("Commission Settings")}
    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
      activeMenu === "Commission Settings"
        ? "bg-purple-100 text-purple-700 shadow-sm"
        : "hover:bg-gray-100 hover:text-purple-700"
    }`}
  >
    <div className="flex items-center gap-3">
      <Percent size={18} />
      <span>Commission Settings</span>
    </div>
    <ChevronRight size={16} />
  </button>

  <button
    onClick={() => setActiveMenu("Package & Delivery")}
    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
      activeMenu === "Package & Delivery"
        ? "bg-purple-100 text-purple-700 shadow-sm"
        : "hover:bg-gray-100 hover:text-purple-700"
    }`}
  >
    <div className="flex items-center gap-3">
      <Truck size={18} />
      <span>Package & Delivery</span>
    </div>
    <ChevronRight size={16} />
  </button>

  <button
    onClick={() => setActiveMenu("Refund & Cancellation")}
    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
      activeMenu === "Refund & Cancellation"
        ? "bg-purple-100 text-purple-700 shadow-sm"
        : "hover:bg-gray-100 hover:text-purple-700"
    }`}
  >
    <div className="flex items-center gap-3">
      <RotateCcw size={18} />
      <span>Refund & Cancellation</span>
    </div>
    <ChevronRight size={16} />
  </button>

  <button
    onClick={() => setActiveMenu("Security Settings")}
    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
      activeMenu === "Security Settings"
        ? "bg-purple-100 text-purple-700 shadow-sm"
        : "hover:bg-gray-100 hover:text-purple-700"
    }`}
  >
    <div className="flex items-center gap-3">
      <Shield size={18} />
      <span>Security Settings</span>
    </div>
    <ChevronRight size={16} />
  </button>

  <button
    onClick={() => setActiveMenu("Integrations")}
    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
      activeMenu === "Integrations"
        ? "bg-purple-100 text-purple-700 shadow-sm"
        : "hover:bg-gray-100 hover:text-purple-700"
    }`}
  >
    <div className="flex items-center gap-3">
      <Plug size={18} />
      <span>Integrations</span>
    </div>
    <ChevronRight size={16} />
  </button>

  <button
    onClick={() => setActiveMenu("System Preference")}
    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
      activeMenu === "System Preference"
        ? "bg-purple-100 text-purple-700 shadow-sm"
        : "hover:bg-gray-100 hover:text-purple-700"
    }`}
  >
    <div className="flex items-center gap-3">
      <SlidersHorizontal size={18} />
      <span>System Preference</span>
    </div>
    <ChevronRight size={16} />
  </button>

  <button
    onClick={() => setActiveMenu("Audit Logs")}
    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
      activeMenu === "Audit Logs"
        ? "bg-purple-100 text-purple-700 shadow-sm"
        : "hover:bg-gray-100 hover:text-purple-700"
    }`}
  >
    <div className="flex items-center gap-3">
      <ClipboardList size={18} />
      <span>Audit Logs</span>
    </div>
    <ChevronRight size={16} />
  </button>

</div>
          </div>
        </div>

        
       <div className="col-span-12 lg:col-span-9">
 <div className="grid grid-cols-12 gap-5">
          
      
<div className="col-span-12 xl:col-span-6 bg-white rounded-3xl border border-gray-200 shadow-sm p-5">
  <h2 className="font-bold text-lg text-[#2E1463]">
    General Settings
  </h2>

  <p className="text-xs text-gray-400 mt-1 mb-5">
    Manage core settings for your platform.
  </p>

  <div className="space-y-4">

    
    <div>
      <label className="block text-sm font-medium mb-2">
        Platform Name
      </label>

      <input
        type="text"
        defaultValue="Curves & Fitz"
        className="w-full bg-white rounded-md border border-gray-200 shadow-sm p-2"
      />
    </div>

    
    <div>
      <label className="block text-sm font-medium mb-2">
        Tagline
      </label>

      <input
        type="text"
        defaultValue="Where Artificial Intelligence meets Artisan Precision"
        className="w-full bg-white rounded-md border border-gray-200 shadow-sm p-2"
      />
    </div>

    
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium mb-2">
          Support Email
        </label>

        <input
          type="email"
          defaultValue="support@curvesandfitz.com"
          className="w-full bg-white rounded-md border border-gray-200 shadow-sm p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Support Phone
        </label>

        <input
          type="text"
          defaultValue="+91 44 1234 5678"
          className="w-full bg-white rounded-md border border-gray-200 shadow-sm p-2"
        />
      </div>
    </div>

    
    <div>
      <label className="block text-sm font-medium mb-2">
        Default Timezone
      </label>

      <select className="w-full bg-white rounded-md border border-gray-200 shadow-sm p-2">
        <option>(GMT+05:30) Asia/Kolkata</option>
      </select>
    </div>

    
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium mb-2">
          Date Format
        </label>

        <select className="w-full bg-white rounded-md border border-gray-200 shadow-sm p-2">
          <option>DD MM YYYY (24 May 2025)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Time Format
        </label>

        <select className="w-full bg-white rounded-md border border-gray-200 shadow-sm p-2">
          <option>12-hour (05:30 PM)</option>
        </select>
      </div>
    </div>

    
    <div className="flex justify-end pt-2">
      <button className="bg-[#7C3AED] text-white px-5 py-2 rounded-md">
        Save Changes
      </button>
    </div>

  </div>
</div>

       
<div className="col-span-12 xl:col-span-6 bg-white rounded-3xl border border-gray-200 shadow-sm p-5">
  <h2 className="font-bold text-lg text-[#2E1463]">
    Logo & Favicon
  </h2>

  <p className="text-xs text-gray-400 mt-1 mb-5">
    Update your platform logo and favicon.
  </p>

  
  <div className="bg-white rounded-md border border-gray-200 shadow-sm p-4 mb-4">
    <p className="text-sm font-medium mb-3">
      Logo
    </p>

    <div className="flex items-center gap-4">
      <Upload size={42} className="text-[#7C3AED]" />

      <div>
        <h3 className="font-bold text-2xl text-[#2E1463]">
          Curves & Fitz
        </h3>

        <p className="text-sm text-gray-500">
          Where Artificial Intelligence
          <br />
          meets Artisan Precision
        </p>
      </div>
    </div>

    <div className="flex items-center gap-2 mt-4">
      <button className="border border-[#7C3AED] text-[#7C3AED] px-4 py-2 rounded-md hover:bg-[#7C3AED] hover:text-white transition">
        Change Logo
      </button>

      <button className="p-2 bg-white rounded-md border border-gray-200 shadow-sm">
        🗑️
      </button>
    </div>
  </div>

  
  <div className="bg-white rounded-md border border-gray-200 shadow-sm p-4">
    <p className="text-sm font-medium mb-3">
      Favicon
    </p>

    <div className="flex items-center gap-2">
      <Upload size={28} className="text-[#7C3AED]" />

      <button className="border border-[#7C3AED] text-[#7C3AED] px-4 py-2 rounded-md hover:bg-[#7C3AED] hover:text-white transition">
        Change Favicon
      </button>

      <button className="p-2 bg-white rounded-md border border-gray-200 shadow-sm">
        🗑️
      </button>
    </div>
  </div>
</div>

          
 <div className="col-span-12 xl:col-span-4 bg-white rounded-3xl border border-gray-200 shadow-sm p-5">
  
  <h3 className="font-bold text-lg text-[#2E1463]">
    Platform Status
  </h3>

  <p className="text-xs text-gray-400 mb-5">
    Control the availability of your platform.
  </p>

  
  <div className="mb-5">
    <p className="text-sm font-medium text-gray-700 mb-2">
      Platform Status
    </p>

    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-sm font-medium">
          Online
        </span>
      </div>

      <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
        Active
      </span>
    </div>

    <p className="text-xs text-gray-500">
      Your platform is live and accessible to all users.
    </p>
  </div>

  
  <div className="mb-6">
    <p className="text-sm font-medium text-gray-700 mb-2">
      Maintenance Mode
    </p>

    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-gray-400"></div>
        <span className="text-sm font-medium">
          Offline
        </span>
      </div>

      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
        Inactive
      </span>
    </div>

    <p className="text-xs text-gray-500">
      When enabled, only admins can access the platform.
    </p>
  </div>

  <button className="w-full border border-[#7C3AED] text-[#7C3AED] py-2 rounded-lg font-medium hover:bg-[#7C3AED] hover:text-white transition">
    Customize Maintenance Page
  </button>

</div>






<div className="col-span-12 xl:col-span-4 bg-white rounded-3xl border border-gray-200 shadow-sm p-5">
  <h3 className="font-bold text-lg text-[#2E1463]">
    Default Currency
  </h3>

  <p className="text-xs text-gray-400 mt-1 mb-5">
    Set the default currency for all transactions.
  </p>

  
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2">
      Currency
    </label>

    <select className="w-full bg-white rounded-md border border-gray-200 shadow-sm p-2">
      <option>INR - Indian Rupee (₹)</option>
    </select>
  </div>

  
  <div className="mb-5">
    <label className="block text-sm font-medium mb-2">
      Currency Position
    </label>

    <div className="grid grid-cols-2 gap-3">
      <input
        type="text"
        defaultValue="₹ 1,000.00 Left"
        className="bg-white rounded-md border border-gray-200 shadow-sm p-2"
      />

      <input
        type="text"
        defaultValue="1,000.00 ₹ Right"
        className="bg-white rounded-md border border-gray-200 shadow-sm p-2"
      />
    </div>
  </div>

  <button className="bg-[#7C3AED] text-white px-5 py-2 rounded-md">
    Save Changes
  </button>
</div>






<div className="col-span-12 xl:col-span-4 bg-white rounded-3xl border border-gray-200 shadow-sm p-5">
  <h3 className="font-bold text-lg text-[#2E1463]">
    Language Settings
  </h3>

  <p className="text-xs text-gray-400 mt-1 mb-5">
    Choose the default language for the platform.
  </p>

  
  <div className="mb-4">
    <label className="block text-sm font-medium mb-2">
      Default Language
    </label>

    <select className="w-full bg-white rounded-md border border-gray-200 shadow-sm p-2">
      <option>English</option>
    </select>
  </div>

  
  <div className="mb-5">
    <label className="block text-sm font-medium mb-2">
      Available Languages
    </label>

    <div className="space-y-2 text-sm">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked
          readOnly
          className="accent-[#7C3AED]"
        />
        English
      </label>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked
          readOnly
          className="accent-[#7C3AED]"
        />
        Hindi
      </label>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          className="accent-[#7C3AED]"
        />
        Tamil
      </label>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          className="accent-[#7C3AED]"
        />
        Telugu
      </label>
    </div>
  </div>

  <div className="flex justify-end">
    <button className="bg-[#7C3AED] text-white px-5 py-2 rounded-md">
      Save Changes
    </button>
  </div>
</div>
</div>
          
        </div>
        
          
      </div>

<div className="mt-6 bg-white rounded-3xl border border-gray-200 shadow-sm px-6 py-4 flex items-center justify-between">
  <p className="text-sm text-gray-500">
    © 2025 Curves & Fitz. All Rights Reserved.
  </p>

  <div className="flex items-center gap-6 text-sm text-gray-500">
    <span>Privacy Policy</span>
    <span>Terms & Conditions</span>
    <span>Support</span>
  </div>
</div>
    </div>
  );
}

export default Settings;
