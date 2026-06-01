import { Star, MessageSquare, TrendingUp, Users } from "lucide-react";

function Reviews() {
  const reviews = [
    {
      customer: "Priya Sharma",
      rating: 5,
      review: "Beautiful jewellery and excellent quality.",
      date: "2 days ago",
    },
    {
      customer: "Rahul Verma",
      rating: 4,
      review: "Fast delivery and premium packaging.",
      date: "5 days ago",
    },
    {
      customer: "Ananya Patel",
      rating: 5,
      review: "Loved the necklace. Worth every rupee.",
      date: "1 week ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F0FF] via-[#F8F5FF] to-white p-6">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#2E1463]">
          Customer Reviews
        </h1>

        <p className="text-gray-500 mt-2">
          Manage customer feedback and ratings
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

        <div className="bg-white rounded-2xl p-5 border border-purple-300 shadow-sm text-center">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 mx-auto">
            <Star />
          </div>

          <h2 className="text-3xl font-bold mt-4 text-[#2E1463]">
            4.8
          </h2>

          <p className="text-gray-500 text-sm">
            Average Rating
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-purple-300 shadow-sm text-center">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 mx-auto">
            <MessageSquare />
          </div>

          <h2 className="text-3xl font-bold mt-4 text-[#2E1463]">
            1,248
          </h2>

          <p className="text-gray-500 text-sm">
            Total Reviews
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-purple-300 shadow-sm text-center">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 mx-auto">
            <TrendingUp />
          </div>

          <h2 className="text-3xl font-bold mt-4 text-[#2E1463]">
            92%
          </h2>

          <p className="text-gray-500 text-sm">
            Positive Reviews
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 border border-purple-300 shadow-sm text-center">
          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 mx-auto">
            <Users />
          </div>

          <h2 className="text-3xl font-bold mt-4 text-[#2E1463]">
            850
          </h2>

          <p className="text-gray-500 text-sm">
            Happy Customers
          </p>
        </div>

      </div>

      {/* Reviews List */}
      <div className="space-y-4">

        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white border border-purple-300 rounded-2xl p-5 shadow-sm"
          >
            <div className="flex justify-between items-center mb-3">

              <h3 className="font-semibold text-[#2E1463]">
                {review.customer}
              </h3>

              <span className="text-sm text-gray-500">
                {review.date}
              </span>

            </div>

            <div className="flex gap-1 mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <p className="text-gray-600">
              {review.review}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Reviews;