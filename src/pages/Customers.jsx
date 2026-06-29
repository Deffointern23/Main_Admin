import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { Users, RefreshCw } from "lucide-react";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetch = () => {
    setLoading(true);
    api.get("/api/admin/users")
      .then((d) => { if (d.success) setCustomers(d.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => { fetch(); }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white">Customers</h1>
          <p className="text-gray-500 text-sm mt-0.5">{customers.length} registered users</p>
        </div>
        <button onClick={fetch} className="flex items-center gap-2 bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] px-4 py-2 rounded-xl text-sm hover:bg-[#C5A059]/20 transition">
          <RefreshCw size={14} /> Refresh
        </button>
      </div>

      <div className="bg-[#111] border border-[#C5A059]/10 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading customers…</div>
        ) : customers.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No customers yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#C5A059]/10 text-[10px] uppercase tracking-wider text-gray-500">
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Phone</th>
                  <th className="px-4 py-3 text-left">Orders</th>
                  <th className="px-4 py-3 text-left">Role</th>
                  <th className="px-4 py-3 text-left">Joined</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((c) => (
                  <tr key={c.id} className="border-b border-[#C5A059]/5 hover:bg-[#C5A059]/5 transition">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059] text-xs font-bold shrink-0">
                          {c.name?.[0]?.toUpperCase() || "?"}
                        </div>
                        <span className="text-white font-medium">{c.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-400">{c.email}</td>
                    <td className="px-4 py-3 text-gray-400">{c.phone || "—"}</td>
                    <td className="px-4 py-3">
                      <span className="text-white font-bold">{c._count?.orders ?? 0}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold border ${
                        c.role === "SUPER_ADMIN"
                          ? "bg-[#C5A059]/10 text-[#C5A059] border-[#C5A059]/20"
                          : c.role === "VENDOR"
                          ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                          : "bg-gray-500/10 text-gray-400 border-gray-500/20"
                      }`}>
                        {c.role}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs">
                      {new Date(c.createdAt).toLocaleDateString("en-IN")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Customers;
