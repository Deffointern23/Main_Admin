import { useState } from "react";
import { useOutletContext } from "react-router-dom";

const initialProducts = [
  {
    id: 1,
    name: "Royal Gold Ring",
    price: "₹5,000",
    stock: 12,
    category: "Rings",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=800",
  },
  {
    id: 2,
    name: "Diamond Necklace",
    price: "₹25,000",
    stock: 5,
    category: "Necklace",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800",
  },
  {
    id: 3,
    name: "Silver Bracelet",
    price: "₹2,000",
    stock: 20,
    category: "Bracelet",
    image:
      "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=800",
  },
  {
    id: 4,
    name: "Luxury Earrings",
    price: "₹7,500",
    stock: 10,
    category: "Earrings",
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=800",
  },
  {
    id: 5,
    name: "Rose Gold Pendant",
    price: "₹4,500",
    stock: 15,
    category: "Pendant",
    image:
      "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&w=800",
  },
  {
    id: 6,
    name: "Pearl Jewellery Set",
    price: "₹18,000",
    stock: 7,
    category: "Jewellery Set",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=800",
  },
  {
    id: 7,
    name: "Diamond Necklace",
    price: "₹25,000",
    stock: 5,
    category: "Necklace",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800",
  },
  {
    id: 8,
    name: "Silver Bracelet",
    price: "₹2,000",
    stock: 20,
    category: "Bracelet",
    image:
      "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=800",
  },
  {
    id: 9,
    name: "Luxury Earrings",
    price: "₹7,500",
    stock: 10,
    category: "Earrings",
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=800",
  },
  {
    id: 10,
    name: "Rose Gold Pendant",
    price: "₹4,500",
    stock: 15,
    category: "Pendant",
    image:
      "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&w=800",
  },
  {
    id: 11,
    name: "Pearl Jewellery Set",
    price: "₹18,000",
    stock: 7,
    category: "Jewellery Set",
    image:
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=800",
  },
];

function Products() {
  const { searchTerm } = useOutletContext();
  const [products, setProducts] = useState(initialProducts);

  const [showForm, setShowForm] = useState(false);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    image: "",
  });

  const [editProduct, setEditProduct] = useState(null);

  const [showEditForm, setShowEditForm] = useState(false);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F3FF] via-[#F3EEFF] to-[#EDE5FF] p-4 sm:p-6 lg:p-10">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex flex-col">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2E1463]">
            Products
          </h1>

          <p className="text-[#7C3AED] uppercase tracking-[3px] sm:tracking-[4px] text-xs sm:text-sm font-semibold mt-1">
            Jewellery Collection
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="w-full sm:w-auto bg-gradient-to-r from-[#6D28D9] to-[#8B5CF6] text-white font-bold px-5 py-3 rounded-xl shadow hover:scale-105 transition"
        >
          + Add Product
        </button>
      </div>

      {showForm && (
        <div className="bg-white/80 backdrop-blur-md border border-[#f2d7b6] p-5 rounded-2xl shadow-md mb-6">
          <h2 className="text-xl font-bold text-[#2E1463] mb-4">
            Add New Product
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Product Name"
              className="p-3 rounded-xl border outline-none"
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Price"
              className="p-3 rounded-xl border outline-none"
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Stock"
              className="p-3 rounded-xl border outline-none"
              onChange={(e) =>
                setNewProduct({ ...newProduct, stock: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Category"
              className="p-3 rounded-xl border outline-none"
              onChange={(e) =>
                setNewProduct({ ...newProduct, category: e.target.value })
              }
            />

            <input
              type="file"
              accept="image/*"
              className="p-3 rounded-xl border outline-none md:col-span-2"
              onChange={(e) => {
                const file = e.target.files[0];

                if (file) {
                  const imageUrl = URL.createObjectURL(file);

                  setNewProduct({
                    ...newProduct,
                    image: imageUrl,
                  });
                }
              }}
            />
          </div>

          <button
            onClick={() => {
              setProducts([
                ...products,
                {
                  ...newProduct,
                  id: products.length + 1,
                },
              ]);

              setShowForm(false);
            }}
            className="mt-4 bg-[#6D28D9] text-white px-5 py-2 rounded-xl"
          >
            Save Product
          </button>
        </div>
      )}

      {showEditForm && editProduct && (
        <div className="bg-white border border-purple-200 p-5 rounded-2xl shadow-md mb-6">
          <h2 className="text-xl font-bold text-[#4b2e1e] mb-4">
            Edit Product
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value={editProduct.name}
              className="p-3 rounded-xl border outline-none"
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  name: e.target.value,
                })
              }
            />

            <input
              type="text"
              value={editProduct.price}
              className="p-3 rounded-xl border outline-none"
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  price: e.target.value,
                })
              }
            />

            <input
              type="text"
              value={editProduct.stock}
              className="p-3 rounded-xl border outline-none"
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  stock: e.target.value,
                })
              }
            />

            <input
              type="text"
              value={editProduct.category}
              className="p-3 rounded-xl border outline-none"
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  category: e.target.value,
                })
              }
            />
            <input
              type="file"
              accept="image/*"
              className="p-3 rounded-xl border outline-none md:col-span-2"
              onChange={(e) => {
                const file = e.target.files[0];

                if (file) {
                  const imageUrl = URL.createObjectURL(file);

                  setEditProduct({
                    ...editProduct,
                    image: imageUrl,
                  });
                }
              }}
            />
          </div>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => {
                setProducts(
                  products.map((item) =>
                    item.id === editProduct.id ? editProduct : item,
                  ),
                );

                setShowEditForm(false);
              }}
              className="bg-[#6D28D9] text-white px-5 py-2 rounded-xl"
            >
              Save Changes
            </button>

            <button
              onClick={() => setShowEditForm(false)}
              className="bg-gray-300 px-5 py-2 rounded-xl"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-purple-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition"
          >
            {/* IMAGE */}
            <div className="relative h-36">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-2 left-2 bg-purple-100 px-2 py-1 rounded-full text-[10px] font-semibold text-[#6D28D9]">
                {product.category}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-3">
              <h2 className="text-sm font-bold text-[#2E1463] leading-tight">
                {product.name}
              </h2>

              <p className="text-[10px] text-gray-500 mt-1">
                Luxury jewellery item
              </p>

              {/* PRICE + STOCK */}
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="text-[9px] text-gray-400">Price</p>
                  <p className="text-sm font-bold text-[#0cf33e]">
                    {product.price}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-[9px] text-gray-400">Stock</p>
                  <p className="text-sm font-bold text-[#444d5a]">
                    {product.stock}
                  </p>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => {
                    setEditProduct(product);
                    setShowEditForm(true);
                  }}
                  className="flex-1 bg-[#2ee45b] text-white text-xs font-semibold py-1.5 rounded-lg hover:opacity-90"
                >
                  Edit
                </button>

                <button
                  onClick={() => {
                    setProducts(
                      products.filter((item) => item.id !== product.id),
                    );
                  }}
                  className="flex-1 bg-red-500 text-white text-xs font-semibold py-1.5 rounded-lg hover:opacity-90"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
