import { Star, MessageSquare, TrendingUp, Users } from "lucide-react";

const REVIEWS = [
  { customer: "Priya Sharma", rating: 5, review: "Beautiful tailoring work, excellent finishing and on-time delivery.", date: "2 days ago" },
  { customer: "Rahul Verma", rating: 4, review: "Fast service and premium packaging. The suit fits perfectly.", date: "5 days ago" },
  { customer: "Ananya Patel", rating: 5, review: "Loved the lehenga stitching. Every stitch is precise. Worth every rupee.", date: "1 week ago" },
];

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-[#111] border border-[#C5A059]/10 rounded-2xl p-5 text-center hover:border-[#C5A059]/30 transition">
      <div className="w-11 h-11 rounded-xl bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] mx-auto"><Icon size={20} /></div>
      <h2 className="text-3xl font-black text-white mt-3">{value}</h2>
      <p className="text-gray-500 text-xs mt-1">{label}</p>
    </div>
  );
}

function Reviews() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-black text-white">Customer Reviews</h1>
        <p className="text-[#C5A059] text-sm mt-0.5">Manage customer feedback and ratings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard icon={Star} label="Average Rating" value="4.8" />
        <StatCard icon={MessageSquare} label="Total Reviews" value="1,248" />
        <StatCard icon={TrendingUp} label="Positive Reviews" value="92%" />
        <StatCard icon={Users} label="Happy Customers" value="850" />
      </div>

      <div className="space-y-3">
        {REVIEWS.map((review, i) => (
          <div key={i} className="bg-[#111] border border-[#C5A059]/10 rounded-2xl p-5 hover:border-[#C5A059]/25 transition">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#C5A059]/10 flex items-center justify-center text-[#C5A059] font-black text-sm">
                  {review.customer[0]}
                </div>
                <h3 className="font-bold text-white text-sm">{review.customer}</h3>
              </div>
              <span className="text-xs text-gray-500">{review.date}</span>
            </div>
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} className={j < review.rating ? "fill-[#C5A059] text-[#C5A059]" : "text-gray-700"} />
              ))}
            </div>
            <p className="text-gray-400 text-sm">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
