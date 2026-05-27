function Settings() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff1e6] via-[#fff7ed] to-[#fdf2f8] p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        ⚙️ Profile Details
      </h1>

      {/* Profile Section */}
      <div
        className="bg-gradient-to-br from-[#ffffff] via-[#fffaf3] to-[#fff1e6]
                  border border-[#f3e2c7]
                  p-6 rounded-2xl shadow-md mb-8
                  hover:shadow-lg transition"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-5 border-b border-[#f3e2c7] pb-2">
          Profile Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Vendor Name"
            className="bg-white/80 border border-[#f1d6a8]
                   focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20
                   p-3 rounded-xl outline-none transition"
          />

          <input
            type="email"
            placeholder="Email"
            className="bg-white/80 border border-[#f1d6a8]
                   focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20
                   p-3 rounded-xl outline-none transition"
          />

          <input
            type="text"
            placeholder="Phone"
            className="bg-white/80 border border-[#f1d6a8]
                   focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20
                   p-3 rounded-xl outline-none transition"
          />

          <input
            type="text"
            placeholder="Store Name"
            className="bg-white/80 border border-[#f1d6a8]
                   focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20
                   p-3 rounded-xl outline-none transition"
          />
        </div>

        <button
          className="mt-6 bg-gradient-to-r from-[#c9a227] to-[#e6c46a]
                       text-white px-6 py-2 rounded-xl font-semibold
                       shadow-md hover:scale-105 transition"
        >
          Save Changes
        </button>
      </div>

      {/* Password Section */}
      <div
        className="bg-gradient-to-br from-[#ffffff] via-[#fffaf3] to-[#fff1e6]
                  border border-[#f3e2c7]
                  p-6 rounded-2xl shadow-md hover:shadow-lg transition"
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-5 border-b border-[#f3e2c7] pb-2">
          Change Password
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="password"
            placeholder="Current Password"
            className="bg-white/80 border border-[#f1d6a8]
                   focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20
                   p-3 rounded-xl outline-none transition"
          />

          <input
            type="password"
            placeholder="New Password"
            className="bg-white/80 border border-[#f1d6a8]
                   focus:border-[#c9a227] focus:ring-2 focus:ring-[#c9a227]/20
                   p-3 rounded-xl outline-none transition"
          />
        </div>

        <button
          className="mt-6 bg-gradient-to-r from-red-500 to-red-600
                       text-white px-6 py-2 rounded-xl font-semibold
                       shadow-md hover:scale-105 transition"
        >
          Update Password
        </button>
      </div>
    </div>
  );
}

export default Settings;
