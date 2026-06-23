import {
  CreditCard,
  Wallet,
  IndianRupee,
  TrendingUp,
} from "lucide-react";


function Payments() {
  const payments = [
    {
      id: "#PAY001",
      customer: "Priya Sharma",
      amount: "₹25,000",
      method: "UPI",
      status: "Completed",
    },
    {
      id: "#PAY002",
      customer: "Rahul Verma",
      amount: "₹18,500",
      method: "Card",
      status: "Pending",
    },
    {
      id: "#PAY003",
      customer: "Ananya Patel",
      amount: "₹42,000",
      method: "Net Banking",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F0FF] via-[#F8F5FF] to-white p-6">

      
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#2E1463]">
          Payments
        </h1>

        <p className="text-purple-500 mt-2">
          Track all payment transactions
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

        <div className="bg-white border border-purple-300 rounded-2xl p-5 text-center">
      <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-green-800 mx-auto">
  <IndianRupee />
</div>

          <h2 className="text-3xl font-bold mt-4 text-[#16d34e]">
            ₹8.5L
          </h2>

          <p className="text-gray-500 text-sm">
            Total Revenue
          </p>
        </div>

        <div className="bg-white border border-purple-300 rounded-2xl p-5 text-center">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 mx-auto">
            <Wallet />
          </div>

          <h2 className="text-3xl font-bold mt-4 text-[#36323d]">
            248
          </h2>

          <p className="text-gray-500 text-sm">
            Total Payments
          </p>
        </div>

        <div className="bg-white border border-purple-300 rounded-2xl p-5 text-center">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 mx-auto">
            <CreditCard />
          </div>

          <h2 className="text-3xl font-bold mt-4 text-[#e6653e]">
            18
          </h2>

          <p className="text-gray-500 text-sm">
            Pending Payments
          </p>
        </div>

        <div className="bg-white border border-purple-300 rounded-2xl p-5 text-center">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 mx-auto">
            <TrendingUp />
          </div>

          <h2 className="text-3xl font-bold mt-4 text-[#16d34e]">
            +24%
          </h2>

          <p className="text-gray-500 text-sm">
            Revenue Growth
          </p>
        </div>

      </div>

      

      <div className="bg-white border border-purple-100 rounded-3xl overflow-hidden">

        <div className="p-5 border-b border-purple-100">
          <h2 className="text-xl font-bold text-[#2E1463]">
            Recent Transactions
          </h2>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-purple-50">
              <tr className="text-left text-sm text-gray-500">
                <th className="p-4">Payment ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Method</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>

              {payments.map((payment, index) => (
                <tr
                  key={index}
                  className="border-t border-purple-100"
                >
                  <td className="p-4 font-semibold">
                    {payment.id}
                  </td>

                  <td className="p-4">
                    {payment.customer}
                  </td>

                  <td className="p-4 font-bold text-[#229b32]">
                    {payment.amount}
                  </td>

                  <td className="p-4">
                    {payment.method}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        payment.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </div>
    </div>
  );
}

export default Payments;