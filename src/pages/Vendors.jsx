import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { CheckCircle, XCircle, Eye, RefreshCw, Settings, ChevronDown, ChevronUp, Package, Copy, Check } from "lucide-react";

const STATUS_COLORS = {
  PENDING:  "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  APPROVED: "bg-green-500/10 text-green-400 border-green-500/20",
  REJECTED: "bg-red-500/10 text-red-400 border-red-500/20",
  ACTIVE:   "bg-green-500/10 text-green-400 border-green-500/20",
  INACTIVE: "bg-gray-500/10 text-gray-400 border-gray-500/20",
};

const CATEGORY_LABELS = {
  LAUNDRY: "Laundry", CUSTOM_TAILORING: "Custom Tailoring",
  DESIGNER_WEAR: "Designer Wear", RENTAL_CLOTHING: "Rental Clothing",
  JEWELLERY_RENTAL: "Jewellery Rental",
};

const inputCls = "w-full bg-[#0f0f0f] border border-[#333] text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#C5A059] transition placeholder:text-gray-600";
const labelCls = "text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 block";

function Vendors() {
  const [tab, setTab] = useState("applications");
  const [applications, setApplications] = useState([]);
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [approveModal, setApproveModal] = useState(null);
  const [settingsModal, setSettingsModal] = useState(null);
  const [listingsModal, setListingsModal] = useState(null);
  const [listings, setListings] = useState([]);
  const [credentials, setCredentials] = useState(null);


  const [approveForm, setApproveForm] = useState({ commission: "10", logistics: "SELF", maxOrdersPerDay: "10", adminNotes: "" });
  const [settingsForm, setSettingsForm] = useState({ commission: "", logistics: "SELF", maxOrdersPerDay: "", status: "ACTIVE", gstNumber: "" });
  const [rejectNote, setRejectNote] = useState("");
  const [rejectModal, setRejectModal] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [actionError, setActionError] = useState("");
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const loadData = async () => {
    setLoading(true);
    try {
      const [appsRes, vendorsRes] = await Promise.all([
        api.get("/api/admin/vendor-applications"),
        api.get("/api/admin/vendors"),
      ]);
      if (appsRes.success) setApplications(appsRes.data);
      if (vendorsRes.success) setVendors(vendorsRes.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadData(); }, []);

  const handleApprove = async () => {
    setProcessing(true); setActionError("");
    try {
      const res = await api.post(`/api/admin/vendor-applications/${approveModal.id}/approve`, approveForm);
      setCredentials(res.data.credentials);
      setApproveModal(null);
      loadData();
    } catch (e) {
      setActionError(e.message);
    } finally { setProcessing(false); }
  };

  const handleReject = async () => {
    setProcessing(true);
    try {
      const res = await api.post(`/api/admin/vendor-applications/${rejectModal.id}/reject`, { adminNotes: rejectNote });
      if (res.success) { setRejectModal(null); setRejectNote(""); loadData(); }
    } finally { setProcessing(false); }
  };

  const handleSettings = async () => {
    setProcessing(true);
    try {
      const res = await api.patch(`/api/admin/vendors/${settingsModal.id}/settings`, settingsForm);
      if (res.success) { setSettingsModal(null); loadData(); }
    } finally { setProcessing(false); }
  };

  const loadListings = async (vendorId) => {
    const res = await api.get(`/api/admin/vendors/${vendorId}/listings`);
    if (res.success) setListings(res.data);
    setListingsModal(vendorId);
  };

  const pendingCount = applications.filter(a => a.status === "PENDING").length;

  return (
    <div className="min-h-screen bg-[#0f0f0f] p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-white">Vendors</h1>
          <p className="text-[#C5A059] text-sm mt-0.5">Applications & onboarded vendor management</p>
        </div>
        <button onClick={loadData} className="flex items-center gap-2 bg-[#C5A059]/10 border border-[#C5A059]/20 text-[#C5A059] px-4 py-2 rounded-xl text-sm hover:bg-[#C5A059]/20 transition">
          <RefreshCw size={14} /> Refresh
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {[
          { key: "applications", label: `Applications${pendingCount > 0 ? ` (${pendingCount} pending)` : ""}` },
          { key: "vendors", label: `Onboarded (${vendors.length})` },
        ].map(t => (
          <button key={t.key} onClick={() => setTab(t.key)}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition ${tab === t.key ? "bg-[#C5A059] text-black" : "bg-[#111] border border-[#C5A059]/10 text-gray-400 hover:border-[#C5A059]/30"}`}>
            {t.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-16 text-gray-500">Loading…</div>
      ) : tab === "applications" ? (
        /* ── Applications Table ── */
        <div className="bg-[#111] border border-[#C5A059]/10 rounded-2xl overflow-hidden">
          {applications.length === 0 ? (
            <div className="p-12 text-center text-gray-500">No applications yet.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-[#C5A059]/10 text-[10px] uppercase tracking-wider text-gray-500">
                  <th className="px-4 py-3 text-left">Business</th>
                  <th className="px-4 py-3 text-left">Owner</th>
                  <th className="px-4 py-3 text-left">Category</th>
                  <th className="px-4 py-3 text-left">City</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Applied</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr></thead>
                <tbody>
                  {applications.map(app => (
                    <tr key={app.id} className="border-b border-[#C5A059]/5 hover:bg-[#C5A059]/5 transition">
                      <td className="px-4 py-3">
                        <p className="text-white font-semibold">{app.businessName}</p>
                        <p className="text-gray-500 text-xs">{app.email}</p>
                      </td>
                      <td className="px-4 py-3 text-gray-300">{app.ownerName}</td>
                      <td className="px-4 py-3"><span className="text-[#C5A059] text-xs font-semibold">{CATEGORY_LABELS[app.category] || app.category}</span></td>
                      <td className="px-4 py-3 text-gray-400 text-xs">{app.city}</td>
                      <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-[10px] font-bold border ${STATUS_COLORS[app.status]}`}>{app.status}</span></td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{new Date(app.createdAt).toLocaleDateString("en-IN")}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button onClick={() => setSelected(app)} className="text-gray-400 hover:text-[#C5A059] transition"><Eye size={15} /></button>
                          {app.status === "PENDING" && (<>
                            <button onClick={() => { setApproveModal(app); setApproveForm({ commission: "10", logistics: "SELF", maxOrdersPerDay: "10", adminNotes: "" }); }}
                              className="text-green-400 hover:text-green-300 transition"><CheckCircle size={15} /></button>
                            <button onClick={() => { setRejectModal(app); setRejectNote(""); }}
                              className="text-red-400 hover:text-red-300 transition"><XCircle size={15} /></button>
                          </>)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : (
        /* ── Onboarded Vendors Table ── */
        <div className="bg-[#111] border border-[#C5A059]/10 rounded-2xl overflow-hidden">
          {vendors.length === 0 ? (
            <div className="p-12 text-center text-gray-500">No vendors onboarded yet.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-[#C5A059]/10 text-[10px] uppercase tracking-wider text-gray-500">
                  <th className="px-4 py-3 text-left">Business</th>
                  <th className="px-4 py-3 text-left">Category</th>
                  <th className="px-4 py-3 text-left">City</th>
                  <th className="px-4 py-3 text-left">Commission</th>
                  <th className="px-4 py-3 text-left">Logistics</th>
                  <th className="px-4 py-3 text-left">Listings</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr></thead>
                <tbody>
                  {vendors.map(v => (
                    <tr key={v.id} className="border-b border-[#C5A059]/5 hover:bg-[#C5A059]/5 transition">
                      <td className="px-4 py-3">
                        <p className="text-white font-semibold">{v.businessName}</p>
                        <p className="text-gray-500 text-xs">{v.email}</p>
                      </td>
                      <td className="px-4 py-3 text-xs text-[#C5A059] font-semibold">{CATEGORY_LABELS[v.category] || v.category}</td>
                      <td className="px-4 py-3 text-gray-400 text-xs">{v.city}</td>
                      <td className="px-4 py-3 text-white font-bold">{v.commission}%</td>
                      <td className="px-4 py-3"><span className="text-xs text-gray-400">{v.logistics}</span></td>
                      <td className="px-4 py-3">
                        <button onClick={() => loadListings(v.id)} className="flex items-center gap-1 text-[#C5A059] hover:underline text-xs font-semibold">
                          <Package size={12} /> {v._count?.listings ?? 0}
                        </button>
                      </td>
                      <td className="px-4 py-3"><span className={`px-2 py-1 rounded-full text-[10px] font-bold border ${STATUS_COLORS[v.status] || STATUS_COLORS.INACTIVE}`}>{v.status}</span></td>
                      <td className="px-4 py-3">
                        <button onClick={() => { setSettingsModal(v); setSettingsForm({ commission: String(v.commission), logistics: v.logistics, maxOrdersPerDay: String(v.maxOrdersPerDay), status: v.status, gstNumber: v.gstNumber || "" }); }}
                          className="text-gray-400 hover:text-[#C5A059] transition"><Settings size={15} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ── Application Detail Modal ── */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-[#1a1a1a] border border-[#C5A059]/20 rounded-2xl p-6 w-full max-w-lg max-h-[85vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-black text-white">Application Details</h2>
              <button onClick={() => setSelected(null)} className="text-gray-500 hover:text-white">✕</button>
            </div>
            <div className="space-y-2.5 text-sm">
              {[
                ["Business", selected.businessName], ["Owner", selected.ownerName],
                ["Email", selected.email], ["Phone", selected.phone],
                ["City", selected.city], ["Address", selected.address || "—"],
                ["Category", CATEGORY_LABELS[selected.category] || selected.category],
                ["Experience", selected.experience ? `${selected.experience} years` : "—"],
                ["GST", selected.gstNumber || "—"],
                ["Bank Account", selected.bankAccount || "—"],
                ["IFSC", selected.ifsc || "—"],
                ["Status", selected.status],
                ["Applied", new Date(selected.createdAt).toLocaleString("en-IN")],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-[#C5A059]/5 pb-2">
                  <span className="text-gray-500">{k}</span><span className="text-white font-medium text-right max-w-[60%]">{v}</span>
                </div>
              ))}
              {selected.description && (
                <div className="mt-3 bg-[#0f0f0f] rounded-xl p-4 text-gray-400 text-xs leading-relaxed">{selected.description}</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── Approve Modal ── */}
      {approveModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setApproveModal(null)}>
          <div className="bg-[#1a1a1a] border border-[#C5A059]/20 rounded-2xl p-6 w-full max-w-md" onClick={e => e.stopPropagation()}>
            <h2 className="text-lg font-black text-white mb-1">Approve Vendor</h2>
            <p className="text-gray-500 text-xs mb-4">{approveModal.businessName} — credentials will be generated automatically</p>
            {actionError && <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded-xl px-4 py-3 mb-4">{actionError}</div>}
            <div className="space-y-4">
              <div><label className={labelCls}>Commission % (C&F takes this)</label><input type="number" min="0" max="50" className={inputCls} value={approveForm.commission} onChange={e => setApproveForm({...approveForm, commission: e.target.value})} /></div>
              <div>
                <label className={labelCls}>Logistics</label>
                <select className={inputCls} value={approveForm.logistics} onChange={e => setApproveForm({...approveForm, logistics: e.target.value})}>
                  <option value="SELF">Self — vendor handles delivery</option>
                  <option value="PLATFORM">Platform — C&F handles delivery</option>
                </select>
              </div>
              <div><label className={labelCls}>Max Orders / Day</label><input type="number" min="1" className={inputCls} value={approveForm.maxOrdersPerDay} onChange={e => setApproveForm({...approveForm, maxOrdersPerDay: e.target.value})} /></div>
              <div><label className={labelCls}>Admin Notes (optional)</label><textarea rows={2} className={inputCls} placeholder="Internal notes…" value={approveForm.adminNotes} onChange={e => setApproveForm({...approveForm, adminNotes: e.target.value})} /></div>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={() => setApproveModal(null)} className="flex-1 border border-[#333] text-gray-400 py-2.5 rounded-xl text-sm hover:border-[#C5A059]/40 transition">Cancel</button>
              <button onClick={handleApprove} disabled={processing} className="flex-1 bg-green-500 hover:bg-green-400 text-black font-black py-2.5 rounded-xl text-sm transition disabled:opacity-50">
                {processing ? "Approving…" : "Approve & Create Account"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Reject Modal ── */}
      {rejectModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setRejectModal(null)}>
          <div className="bg-[#1a1a1a] border border-[#C5A059]/20 rounded-2xl p-6 w-full max-w-md" onClick={e => e.stopPropagation()}>
            <h2 className="text-lg font-black text-white mb-1">Reject Application</h2>
            <p className="text-gray-500 text-xs mb-4">{rejectModal.businessName}</p>
            <textarea rows={3} className={inputCls} placeholder="Reason for rejection (optional)…" value={rejectNote} onChange={e => setRejectNote(e.target.value)} />
            <div className="flex gap-3 mt-4">
              <button onClick={() => setRejectModal(null)} className="flex-1 border border-[#333] text-gray-400 py-2.5 rounded-xl text-sm">Cancel</button>
              <button onClick={handleReject} disabled={processing} className="flex-1 bg-red-500 hover:bg-red-400 text-white font-black py-2.5 rounded-xl text-sm disabled:opacity-50">
                {processing ? "Rejecting…" : "Reject"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Credentials Modal ── */}
      {credentials && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-[#1a1a1a] border border-green-500/30 rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center gap-3 mb-1">
              <CheckCircle size={22} className="text-green-400" />
              <h2 className="text-lg font-black text-white">Vendor Account Created</h2>
            </div>
            <p className="text-gray-400 text-xs mb-4">Share these credentials with the vendor. The temporary password <strong className="text-white">must be changed on first login</strong>.</p>
            <div className="bg-[#0f0f0f] rounded-xl border border-green-500/20 divide-y divide-green-500/10 text-sm font-mono">
              {[
                { key: "email", label: "Email", value: credentials.email },
                { key: "password", label: "Temp Password", value: credentials.tempPassword },
                { key: "url", label: "Login URL", value: credentials.loginUrl },
              ].map(({ key, label, value }) => (
                <div key={key} className="flex items-center justify-between px-4 py-3 gap-4">
                  <span className="text-gray-500 shrink-0">{label}</span>
                  <span className="text-green-400 text-xs truncate">{value}</span>
                  <button onClick={() => copyToClipboard(value, key)}
                    className="text-gray-500 hover:text-[#C5A059] transition shrink-0">
                    {copied === key ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => copyToClipboard(`Email: ${credentials.email}\nPassword: ${credentials.tempPassword}\nLogin: ${credentials.loginUrl}`, "all")}
              className="w-full mt-3 border border-[#C5A059]/30 text-[#C5A059] py-2.5 rounded-xl text-sm font-semibold hover:bg-[#C5A059]/10 transition flex items-center justify-center gap-2">
              {copied === "all" ? <Check size={14} /> : <Copy size={14} />}
              {copied === "all" ? "Copied!" : "Copy All Credentials"}
            </button>
            <button onClick={() => { setCredentials(null); setCopied(null); }} className="w-full mt-2 bg-[#C5A059] text-black font-black py-2.5 rounded-xl text-sm">Done</button>
          </div>
        </div>
      )}

      {/* ── Settings Modal ── */}
      {settingsModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setSettingsModal(null)}>
          <div className="bg-[#1a1a1a] border border-[#C5A059]/20 rounded-2xl p-6 w-full max-w-md" onClick={e => e.stopPropagation()}>
            <h2 className="text-lg font-black text-white mb-1">Vendor Settings</h2>
            <p className="text-gray-500 text-xs mb-5">{settingsModal.businessName}</p>
            <div className="space-y-4">
              <div><label className={labelCls}>Commission %</label><input type="number" className={inputCls} value={settingsForm.commission} onChange={e => setSettingsForm({...settingsForm, commission: e.target.value})} /></div>
              <div><label className={labelCls}>Logistics</label>
                <select className={inputCls} value={settingsForm.logistics} onChange={e => setSettingsForm({...settingsForm, logistics: e.target.value})}>
                  <option value="SELF">Self</option><option value="PLATFORM">Platform</option>
                </select>
              </div>
              <div><label className={labelCls}>Max Orders / Day</label><input type="number" className={inputCls} value={settingsForm.maxOrdersPerDay} onChange={e => setSettingsForm({...settingsForm, maxOrdersPerDay: e.target.value})} /></div>
              <div><label className={labelCls}>GST Number</label><input type="text" className={inputCls} placeholder="Not provided" value={settingsForm.gstNumber} onChange={e => setSettingsForm({...settingsForm, gstNumber: e.target.value})} /></div>
              <div><label className={labelCls}>Status</label>
                <select className={inputCls} value={settingsForm.status} onChange={e => setSettingsForm({...settingsForm, status: e.target.value})}>
                  <option value="ACTIVE">Active</option><option value="INACTIVE">Inactive</option><option value="SUSPENDED">Suspended</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={() => setSettingsModal(null)} className="flex-1 border border-[#333] text-gray-400 py-2.5 rounded-xl text-sm">Cancel</button>
              <button onClick={handleSettings} disabled={processing} className="flex-1 bg-[#C5A059] hover:bg-[#b08d47] text-black font-black py-2.5 rounded-xl text-sm disabled:opacity-50">
                {processing ? "Saving…" : "Save Settings"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Listings Modal ── */}
      {listingsModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setListingsModal(null)}>
          <div className="bg-[#1a1a1a] border border-[#C5A059]/20 rounded-2xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-black text-white">Vendor Listings</h2>
              <button onClick={() => setListingsModal(null)} className="text-gray-500 hover:text-white">✕</button>
            </div>
            {listings.length === 0 ? (
              <div className="text-center py-8 text-gray-500 text-sm">No listings yet.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {listings.map(l => (
                  <div key={l.id} className="bg-[#0f0f0f] border border-[#C5A059]/10 rounded-xl p-4">
                    <p className="text-white font-semibold text-sm">{l.title}</p>
                    <p className="text-[#C5A059] font-black mt-1">₹{l.price?.toLocaleString("en-IN")}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[10px] text-gray-500">{l.category}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${l.inStock ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"}`}>{l.inStock ? "In Stock" : "Out of Stock"}</span>
                    </div>
                    {l.turnaround && <p className="text-xs text-gray-500 mt-1">Turnaround: {l.turnaround}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Vendors;
