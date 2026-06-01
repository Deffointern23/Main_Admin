import { useState } from "react";
import {
  Package,
  Grid3X3,
  Gift,
  FileText,
  Search,
  Plus,
  Filter,
  Eye,
  Pencil,
  Trash2,
  Heart,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Polki Diamond Necklace Set",
    category: "Necklaces",
    price: "24,900",
    stock: 12,
    image: "/images/product1.webp",
    tag: "Sale",
  },
  {
    id: 2,
    name: "Solitaire Diamond Ring",
    category: "Rings",
    price: "78,500",
    stock: 5,
    image: "/images/product2.webp",
    tag: "Sale",
  },
  {
    id: 3,
    name: "Kundan Bangles",
    category: "Bangles",
    price: "56,000",
    stock: 0,
    image: "/images/product3.webp",
    tag: "Rental",
  },
  {
    id: 4,
    name: "Temple Pendant Necklace",
    category: "Temple Jewellery",
    price: "29,000",
    stock: 8,
    image: "/images/product4.webp",
    tag: "Custom",
  },
  {
    id: 5,
    name: "Pearl Drop Earrings",
    category: "Earrings",
    price: "24,500",
    stock: 18,
    image: "/images/product5.webp",
    tag: "Sale",
  },
  {
    id: 6,
    name: "Antique Gold Necklace",
    category: "Necklaces",
    price: "1,05,000",
    stock: 2,
    image: "/images/product6.webp",
    tag: "Rental",
  },
  {
    id: 7,
    name: "Diamond Tennis Bracelet",
    category: "Bracelets",
    price: "62,000",
    stock: 0,
    image: "/images/product7.webp",
    tag: "Sale",
  },
  {
    id: 8,
    name: "Meenakari Jhumka Earrings",
    category: "Earrings",
    price: "18,900",
    stock: 7,
    image: "/images/product8.webp",
    tag: "Custom",
  },
];

function Inventory() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [images, setImages] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [allProducts, setAllProducts] = useState(products);

  const handleSaveProduct = () => {
    const newProduct = {
      id: allProducts.length + 1,
      name: productName,
      category: "New Jewellery",
      price: "25,000",
      stock: 10,
      image: images[0],
      tag: "Sale",
    };

    setAllProducts([...allProducts, newProduct]);

    setShowAddProduct(false);

    setProductName("");
    setDescription("");
    setImages([]);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    const imageUrls = files.map((file) => URL.createObjectURL(file));

    setImages([...images, ...imageUrls]);
  };
  if (showAddProduct) {
    return (
      <div className="min-h-screen bg-[#F5F0FF] p-6">
        <div className="max-w-6xl mx-auto bg-white border border-[#DDD6FE] rounded-2xl p-6">
          <h1 className="text-3xl font-bold text-[#2E1463]">Product Details</h1>

          <p className="text-gray-500 mt-2 mb-6">Add a new jewellery product</p>

          <div className="flex flex-col gap-6 mb-6">
            <div className="bg-white border border-[#DDD6FE] rounded-2xl p-5">
              {/* Product Name */}

              <div className="mb-6">
                <label className="block mb-2 font-medium">Product Name</label>

                <input
                  type="text"
                  placeholder="Enter product name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full border rounded-lg p-3"
                />
              </div>

              {/* Product Images */}

              <div className="mb-6">
                <label className="block mb-3 font-medium">Product Images</label>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {/* Upload Box */}

                  <label className="border-2 border-dashed border-[#C4B5FD] rounded-xl h-32 flex flex-col items-center justify-center cursor-pointer bg-[#F5F3FF]">
                    <span className="text-3xl text-[#7C3AED]">+</span>

                    <span className="text-sm mt-2">Upload</span>

                    <input
                      type="file"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>

                  {/* Uploaded Images */}

                  {images.map((img, index) => (
                    <div key={index} className="relative">
                      <img
                        src={img}
                        alt=""
                        className="h-32 w-full object-cover rounded-xl border-[#DDD6FE]"
                      />

                      <button
                        onClick={() =>
                          setImages(images.filter((_, i) => i !== index))
                        }
                        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}

              <div>
                <label className="block mb-2 font-medium">Description</label>

                <textarea
                  rows="6"
                  placeholder="Describe your product..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border rounded-lg p-3"
                />
              </div>
            </div>
          </div>

          {/* Pricing & Inventory */}

          <div className="bg-white border border-[#C4B5FD] rounded-2xl p-5 mb-6">
            <h2 className="text-xl font-semibold text-[#2E1463] mb-5">
              Pricing & Inventory
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block mb-2 font-medium">Category</label>

                <select className="w-full border rounded-lg p-3">
                  <option>Necklaces</option>
                  <option>Rings</option>
                  <option>Earrings</option>
                  <option>Bangles</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">Price</label>

                <input
                  type="number"
                  placeholder="25000"
                  className="w-full border rounded-lg p-3"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Stock Quantity</label>

                <input
                  type="number"
                  placeholder="50"
                  className="w-full border rounded-lg p-3"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Discount %</label>

                <input
                  type="number"
                  placeholder="10"
                  className="w-full border rounded-lg p-3"
                />
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#C4B5FD] rounded-2xl p-5 mb-6">
            <h2 className="text-xl font-semibold text-[#2E1463] mb-5">
              Inventory & Shipping
            </h2>

            {/* Inventory Status */}

            <div className="mb-6">
              <label className="block mb-2 font-medium">Inventory Status</label>

              <select className="w-full border rounded-lg p-3">
                <option>In Stock</option>
                <option>Out Of Stock</option>
                <option>Pre Order</option>
              </select>
            </div>

            {/* Shipping Information */}

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block mb-2 font-medium">Shipping Days</label>

                <input
                  type="number"
                  placeholder="3"
                  className="w-full border rounded-lg p-3"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Delivery Charge
                </label>

                <input
                  type="number"
                  placeholder="150"
                  className="w-full border rounded-lg p-3"
                />
              </div>
            </div>
          </div>
          <div className="bg-white border border-[#C4B5FD] rounded-2xl p-5 mb-6">
            <h2 className="text-xl font-semibold text-[#2E1463] mb-5">
              Jewellery Specifications
            </h2>
            {/* Jewellery Details */}
            <div className="border border-[#C4B5FD] rounded-xl p-5 mb-6">
              <h2 className="text-lg font-semibold text-[#2E1463] mb-4">
                Jewellery Details
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 font-medium">
                    Jewellery Type
                  </label>

                  <select className="w-full border rounded-lg p-3">
                    <option>Gold</option>
                    <option>Diamond</option>
                    <option>Silver</option>
                    <option>Platinum</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">Purity</label>

                  <select className="w-full border rounded-lg p-3">
                    <option>18K</option>
                    <option>22K</option>
                    <option>24K</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">Hallmark</label>

                  <select className="w-full border rounded-lg p-3">
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">Brand Name</label>

                  <input
                    type="text"
                    placeholder="Enter Brand Name"
                    className="w-full border rounded-lg p-3"
                  />
                </div>
              </div>
            </div>
            {/* Size & Stock */}{" "}
            <div className="border border-[#C4B5FD] rounded-xl p-5 mb-6">
              {" "}
              <h2 className="text-lg font-semibold text-[#2E1463] mb-4">
                {" "}
                Size & Stock{" "}
              </h2>{" "}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {" "}
                <input
                  type="text"
                  placeholder="Size"
                  className="w-full border rounded-lg p-3"
                />{" "}
                <input
                  type="number"
                  placeholder="Stock"
                  className="w-full border rounded-lg p-3"
                />{" "}
              </div>{" "}
            </div>
          </div>
          <div className="bg-white border border-[#C4B5FD] rounded-2xl p-5 mb-6">
            <h2 className="text-xl font-semibold text-[#2E1463] mb-5">
              Product Settings
            </h2>

            {/* Product Status */}

            <div className="border border-[#C4B5FD] rounded-xl p-5 mb-6">
              <h2 className="text-lg font-semibold text-[#2E1463] mb-4">
                Product Status
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 font-medium">Status</label>

                  <select className="w-full border rounded-lg p-3">
                    <option>Active</option>
                    <option>Draft</option>
                    <option>Hidden</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium">
                    Featured Product
                  </label>

                  <select className="w-full border rounded-lg p-3">
                    <option>No</option>
                    <option>Yes</option>
                  </select>
                </div>
              </div>
            </div>

            {/* SEO Details */}

            <div className="border border-[#C4B5FD] rounded-xl p-5 mb-6">
              <h2 className="text-lg font-semibold text-[#2E1463] mb-4">
                SEO Details
              </h2>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Meta Title"
                  className="w-full border rounded-lg p-3"
                />

                <textarea
                  rows="3"
                  placeholder="Meta Description"
                  className="w-full border rounded-lg p-3"
                />
              </div>
            </div>

            {/* Notes */}

            <div className="border border-[#C4B5FD] rounded-xl p-5 mb-6">
              <h2 className="text-lg font-semibold text-[#2E1463] mb-4">
                Additional Notes
              </h2>

              <textarea
                rows="4"
                placeholder="Enter any special notes about this jewellery item..."
                className="w-full border rounded-lg p-3"
              />
            </div>
            <div className="flex justify-end gap-3 mt-8 border-t pt-6">
              <button
                onClick={() => setShowAddProduct(false)}
                className="px-6 py-3 border border-[#C4B5FD] rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={handleSaveProduct}
                className="px-6 py-3 bg-[#8B5CF6] text-white rounded-lg"
              >
                Save Product
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#F5F0FF] p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#2E1463]">
          Inventory Management
        </h1>
        <p className="text-[#8B5CF6] mt-2">
          Premium Jewellery Collection Management
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <StatCard
          icon={<Package size={22} />}
          value="1,248"
          title="Total Products"
        />

        <StatCard
          icon={<Grid3X3 size={22} />}
          value="48"
          title="Active Categories"
        />

        <StatCard icon={<Gift size={22} />} value="36" title="Out of Stock" />

        <StatCard
          icon={<FileText size={22} />}
          value="22"
          title="Draft Listings"
        />
      </div>

      {/* Search & Buttons */}
      <div className="flex flex-col xl:flex-row justify-between gap-4 mt-8">
        <div className="relative w-full xl:w-96">
          <Search size={18} className="absolute left-4 top-3.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search products, SKU, categories..."
            className="w-full pl-11 pr-4 py-3 bg-white border border-[#C4B5FD] rounded-xl outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setShowAddProduct(true)}
            className="bg-[#8B5CF6] text-white px-5 py-3 rounded-xl flex items-center gap-2"
          >
            <Plus size={18} />
            Add Product
          </button>

          <button
            onClick={() => setShowCategories(true)}
            className="bg-[#F5F0FF] border border-[#C4B5FD] px-5 py-3 rounded-xl"
          >
            Manage Categories
          </button>
          <button className="bg-[#F5F0FF] border border-[#C4B5FD] px-4 py-3 rounded-xl flex items-center gap-2">
            <Filter size={18} />
            Filters
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto mt-8 pb-2">
        {[
          "All",
          "Necklaces",
          "Rings",
          "Bangles",
          "Temple Jewellery",
          "Earrings",
          "Chains",
          "Pendants",
          "Anklets",
        ].map((item, index) => (
          <button
            key={index}
            className={`px-5 py-2 rounded-full whitespace-nowrap ${
              index === 0
                ? "bg-[#8B5CF6] text-white"
                : "bg-white border border-[#C4B5FD]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
        {allProducts.map((item) => (
          <div
            key={item.id}
            className="bg-[#FFFDF9] rounded-2xl border border-[#C4B5FD] overflow-hidden shadow-sm"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-cover"
              />

              <button className="absolute top-3 right-3 bg-[#FFF8EC] p-2 rounded-full shadow">
                <Heart size={16} />
              </button>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-sm">{item.name}</h3>

              <p className="text-xs text-gray-500 mt-1">{item.category}</p>

              <p className="font-bold text-lg mt-2 text-[#8B5CF6]">
                ₹{item.price}
              </p>

              <div className="flex justify-between items-center mt-2">
                <span
                  className={`text-sm ${
                    item.stock > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  Stock: {item.stock}
                </span>

                <span className="bg-[#FFF0C7] text-[#2E1463] text-xs px-2 py-1 rounded-md">
                  {item.tag}
                </span>
              </div>

              <div className="border-t mt-4 pt-4 flex justify-center gap-6 text-gray-500">
                <Eye size={18} className="cursor-pointer" />
                <Pencil size={18} className="cursor-pointer" />
                <Trash2 size={18} className="cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {showCategories && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-start overflow-y-auto p-6">
          <div className="bg-white w-full max-w-7xl rounded-3xl p-6 shadow-2xl">
            {/* Header */}

            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-4xl font-bold text-[#4F2D82]">
                  Manage Categories
                </h1>

                <p className="text-gray-500 mt-1">
                  Add, remove and reorder your product categories
                </p>
              </div>

              <button
                onClick={() => setShowCategories(false)}
                className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center"
              >
                <X size={20} />
              </button>
            </div>

            {/* Top Buttons */}

            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="font-bold text-lg">Category List</h2>

                <p className="text-sm text-gray-900">11 Categories</p>
              </div>

              <button className="bg-[#7158e2] text-white px-5 py-3 rounded-xl">
                + Add Category
              </button>
            </div>

            {/* Table */}

            <div className="overflow-x-auto border rounded-2xl">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr className="text-left text-sm text-gray-500">
                    <th className="p-4">Order</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Products</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {[
                    "Necklaces",
                    "Rings",
                    "Earrings",
                    "Bridal Sets",
                    "Temple Jewellery",
                    "Antique Jewellery",
                    "Bangles",
                    "Chains",
                    "Anklets",
                    "Pendants",
                    "Luxury Watches",
                  ].map((item, index) => (
                    <tr key={index} className="border-t hover:bg-gray-50">
                      <td className="p-4">{index + 1}</td>

                      <td className="p-4 font-medium">{item}</td>

                      <td className="p-4">
                        {Math.floor(Math.random() * 300) + 50}
                      </td>

                      <td className="p-4">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                          Active
                        </span>
                      </td>

                      <td className="p-4">
                        <div className="flex gap-3">
                          <button>
                            <Pencil size={16} className="text-gray-500" />
                          </button>

                          <button>
                            <Trash2 size={16} className="text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-4">
        <p className="text-sm text-gray-500">
          Showing 1 to 12 of 1,248 products
        </p>

        <div className="flex items-center gap-2">
          <button className="w-9 h-9 border rounded-full flex items-center justify-center">
            <ChevronLeft size={16} />
          </button>

          <button className="w-9 h-9 rounded-full bg-[#8B5CF6] text-white">
            1
          </button>

          <button className="w-9 h-9 border rounded-full">2</button>

          <button className="w-9 h-9 border rounded-full">3</button>

          <button className="w-9 h-9 border rounded-full">4</button>

          <button className="w-9 h-9 border rounded-full flex items-center justify-center">
            <ChevronRight size={16} />
          </button>
        </div>

        <div>
          <select className="border rounded-lg px-3 py-2">
            <option>12 Rows</option>
            <option>24 Rows</option>
            <option>48 Rows</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, value, title }) {
  return (
    <div className="bg-[#FFFDF9] border border-[#C4B5FD] rounded-2xl p-5 text-center">
      <div className="w-12 h-12 rounded-full bg-[#FFF0C7] text-[#8B5CF6] flex items-center justify-center mx-auto">
        {icon}
      </div>

      <h2 className="text-3xl font-bold mt-4">{value}</h2>

      <p className="text-gray-500 text-sm mt-1">{title}</p>
    </div>
  );
}

export default Inventory;
