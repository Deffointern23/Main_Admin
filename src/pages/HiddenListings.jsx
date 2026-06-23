import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

function HiddenListings() {
  const [hiddenVendors, setHiddenVendors] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("hiddenVendors")) || [];

    setHiddenVendors(data);
  }, []);

  const handleUnhide = (vendorId) => {
    const updatedVendors = hiddenVendors.filter(
      (vendor) => vendor.id !== vendorId
    );

    localStorage.setItem(
      "hiddenVendors",
      JSON.stringify(updatedVendors)
    );

    setHiddenVendors(updatedVendors);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px]">
            <thead>
              <tr className="border-b bg-gray-50 text-xs text-gray-500 uppercase">
                <th className="text-left px-6 py-4">Business Name</th>
                <th className="text-left px-6 py-4">Owner</th>
                <th className="text-left px-6 py-4">Category</th>
                <th className="text-left px-6 py-4">City</th>
                <th className="text-left px-6 py-4">Joined On</th>
                <th className="text-left px-6 py-4">Status</th>
                <th className="text-left px-6 py-4">Rating</th>
                <th className="text-left px-6 py-4">Orders</th>
                <th className="text-left px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {hiddenVendors.length === 0 ? (
                <tr>
                  <td
                    colSpan="9"
                    className="text-center py-10 text-gray-500"
                  >
                    No Hidden Listings Found
                  </td>
                </tr>
              ) : (
                hiddenVendors.map((vendor) => (
                  <tr
                    key={vendor.id}
                    className="bg-white hover:bg-gray-50 transition border-b"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] flex items-center justify-center text-white font-bold">
                          {vendor.name
                            .split(" ")
                            .map((word) => word[0])
                            .slice(0, 2)
                            .join("")
                            .toUpperCase()}
                        </div>

                        <div>
                          <p className="font-semibold text-gray-800">
                            {vendor.name}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      {vendor.owner}
                    </td>

                    <td className="px-6 py-4">
                      {vendor.category}
                    </td>

                    <td className="px-6 py-4">
                      {vendor.city}
                    </td>

                    <td className="px-6 py-4">
                      {vendor.joined}
                    </td>

                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                        {vendor.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      ⭐ {vendor.rating}
                    </td>

                    <td className="px-6 py-4">
                      {vendor.orders}
                    </td>

                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleUnhide(vendor.id)}
                        className="w-9 h-9 bg-white rounded-md border border-gray-200 shadow-sm flex items-center justify-center hover:bg-green-50 hover:border-green-300 transition"
                        title="Unhide Vendor"
                      >
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HiddenListings;