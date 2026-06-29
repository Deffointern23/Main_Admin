import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Save, Lock } from "lucide-react";

const inputCls = "w-full bg-[#0f0f0f] border border-[#333] text-white rounded-xl p-3 text-sm outline-none focus:border-[#C5A059] transition placeholder:text-gray-600";
const labelCls = "block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5";

function Settings() {
  const { admin } = useAuth();
  const [form, setForm] = useState({ name: admin?.name || "", email: admin?.email || "", phone: admin?.phone || "" });
  const [passwords, setPasswords] = useState({ current: "", newPass: "" });
  const [saved, setSaved] = useState(false);

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  return (
    <div className="min-h-screen bg-[#0f0f0f] p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white">Settings</h1>
        <p className="text-[#C5A059] text-sm mt-0.5">Admin profile & preferences</p>
      </div>

      {/* Profile */}
      <div className="bg-[#111] border border-[#C5A059]/10 rounded-2xl p-6">
        <h2 className="text-base font-black text-white mb-5 flex items-center gap-2">
          <Save size={16} className="text-[#C5A059]" /> Profile Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><label className={labelCls}>Name</label><input type="text" placeholder="Admin name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} /></div>
          <div><label className={labelCls}>Email</label><input type="email" placeholder="admin@curvesfitz.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputCls} /></div>
          <div><label className={labelCls}>Phone</label><input type="text" placeholder="+91 00000 00000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} /></div>
        </div>
        <div className="flex justify-end mt-5">
          <button onClick={handleSave} className="bg-[#C5A059] hover:bg-[#b08d47] text-black font-bold px-6 py-2.5 rounded-xl text-sm transition">
            {saved ? "Saved!" : "Save Changes"}
          </button>
        </div>
      </div>

      {/* Password */}
      <div className="bg-[#111] border border-[#C5A059]/10 rounded-2xl p-6">
        <h2 className="text-base font-black text-white mb-5 flex items-center gap-2">
          <Lock size={16} className="text-[#C5A059]" /> Change Password
        </h2>
        <p className="text-xs text-gray-500 mb-4">Password changes are managed through the backend API. Contact your system administrator.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><label className={labelCls}>Current Password</label><input type="password" placeholder="••••••••" value={passwords.current} onChange={(e) => setPasswords({ ...passwords, current: e.target.value })} className={inputCls} /></div>
          <div><label className={labelCls}>New Password</label><input type="password" placeholder="••••••••" value={passwords.newPass} onChange={(e) => setPasswords({ ...passwords, newPass: e.target.value })} className={inputCls} /></div>
        </div>
        <div className="flex justify-end mt-5">
          <button className="bg-[#C5A059]/10 border border-[#C5A059]/20 hover:bg-[#C5A059]/20 text-[#C5A059] font-bold px-6 py-2.5 rounded-xl text-sm transition">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
