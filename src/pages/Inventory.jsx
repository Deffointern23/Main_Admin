import { useState } from "react";
import { Package, Grid3X3, Gift, Search, Plus, Filter, Eye, Pencil, Trash2, Heart, ChevronLeft, ChevronRight, X } from "lucide-react";

const PRODUCTS = [
  { id: 1, name: "Polki Diamond Necklace Set", category: "Necklaces", price: "24,900", stock: 12, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80", tag: "Sale" },
  { id: 2, name: "Solitaire Diamond Ring", category: "Rings", price: "78,500", stock: 5, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80", tag: "Sale" },
  { id: 3, name: "Kundan Bangles", category: "Bangles", price: "56,000", stock: 0, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80", tag: "Rental" },
  { id: 4, name: "Temple Pendant Necklace", category: "Temple Jewellery", price: "29,000", stock: 8, image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&q=80", tag: "Custom" },
  { id: 5, name: "Pearl Drop Earrings", category: "Earrings", price: "24,500", stock: 18, image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=400&q=80", tag: "Sale" },
  { id: 6, name: "Antique Gold Necklace", category: "Necklaces", price: "1,05,000", stock: 2, image: "https://images.unsplash.com/photo-1573408301185-9519f94815b5?w=400&q=80", tag: "Rental" },
  { id: 7, name: "Diamond Tennis Bracelet", category: "Bracelets", price: "62,000", stock: 0, image: "https://images.unsplash.com/photo-1574179795753-7e4c3d9d0e8c?w=400&q=80", tag: "Sale" },
  { id: 8, name: "Meenakari Jhumka Earrings", category: "Earrings", price: "18,900", stock: 7, image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&q=80", tag: "Custom" },
];

const CATEGORIES = ["All","Necklaces","Rings","Bangles","Temple Jewellery","Earrings","Chains","Pendants","Anklets"];

function StatCard({ icon, value, title }) {
  return (
    <div className="bg-[#111] border border-[#C5A059]/10 rounded-2xl p-5 text-center hover:border-[#C5A059]/30 transition">
      <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mx-auto">
        {icon}
      </div>
      <h2 className="text-3xl font-black text-white mt-4">{value}</h2>
      <p className="text-gray-500 text-sm mt-1">{title}</p>
    </div>
  );
}

const inputCls = "w-full bg-[#0f0f0f] border border-[#333] text-white rounded-xl p-3 text-sm focus:outline-none focus:border-[#C5A059] transition placeholder:text-gray-600";
const selectCls = "w-full bg-[#0f0f0f] border border-[#333] text-white rounded-xl p-3 text-sm focus:outline-none focus:border-[#C5A059] transition";
const labelCls = "block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5";
const sectionCls = "bg-[#111] border border-[#C5A059]/10 rounded-2xl p-5 mb-5";

function Inventory() {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [images, setImages] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [allProducts, setAllProducts] = useState(PRODUCTS);
  const [editingProduct, setEditingProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleSaveProduct = () => {
    if (editingProduct) {
      setAllProducts(allProducts.map((item) =>
        item.id === editingProduct.id ? { ...item, name: productName, image: images[0] || item.image } : item
      ));
    } else {
      setAllProducts([...allProducts, { id: allProducts.length + 1, name: productName, category: "Fashion", price: "0", stock: 0, image: images[0], tag: "New" }]);
    }
    setEditingProduct(null); setShowAddProduct(false); setProductName(""); setDescription(""); setImages([]);
  };

  const handleImageUpload = (e) => {
    const urls = Array.from(e.target.files).map((f) => URL.createObjectURL(f));
    setImages([...images, ...urls]);
  };

  const openAdd = () => { setEditingProduct(null); setProductName(""); setDescription(""); setImages([]); setShowAddProduct(true); };
  const openEdit = (p) => { setEditingProduct(p); setProductName(p.name); setImages([p.image]); setShowAddProduct(true); };

  if (showAddProduct) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] p-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <button onClick={() => setShowAddProduct(false)} className="text-gray-400 hover:text-white transition">
              <X size={20} />
            </button>
            <div>
              <h1 className="text-2xl font-black text-white">{editingProduct ? "Edit Product" : "Add Product"}</h1>
              <p className="text-gray-500 text-sm">Fashion item details</p>
            </div>
          </div>

          <div className={sectionCls}>
            <div className="mb-5">
              <label className={labelCls}>Product Name</label>
              <input type="text" placeholder="Enter product name" value={productName} onChange={(e) => setProductName(e.target.value)} className={inputCls} />
            </div>
            <div className="mb-5">
              <label className={labelCls}>Product Images</label>
              <div className="grid grid-cols-4 gap-3">
                <label className="border-2 border-dashed border-[#C5A059]/30 rounded-xl h-28 flex flex-col items-center justify-center cursor-pointer bg-[#C5A059]/5 hover:bg-[#C5A059]/10 transition">
                  <span className="text-2xl text-[#C5A059]">+</span>
                  <span className="text-xs text-gray-500 mt-1">Upload</span>
                  <input type="file" multiple onChange={handleImageUpload} className="hidden" />
                </label>
                {images.map((img, i) => (
                  <div key={i} className="relative">
                    <img src={img} alt="" className="h-28 w-full object-cover rounded-xl border border-[#C5A059]/20" />
                    <button onClick={() => setImages(images.filter((_, j) => j !== i))} className="absolute top-1 right-1 bg-black/70 rounded-full p-1">
                      <X size={12} className="text-white" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label className={labelCls}>Description</label>
              <textarea rows="4" placeholder="Describe the product…" value={description} onChange={(e) => setDescription(e.target.value)} className={inputCls} />
            </div>
          </div>

          <div className={sectionCls}>
            <h2 className="text-base font-black text-white mb-4">Pricing & Inventory</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div><label className={labelCls}>Category</label><select className={selectCls}><option>Tailoring</option><option>Laundry</option><option>Jewellery</option><option>Designer Wear</option></select></div>
              <div><label className={labelCls}>Price (₹)</label><input type="number" placeholder="25000" className={inputCls} /></div>
              <div><label className={labelCls}>Stock Quantity</label><input type="number" placeholder="50" className={inputCls} /></div>
              <div><label className={labelCls}>Discount %</label><input type="number" placeholder="10" className={inputCls} /></div>
            </div>
          </div>

          <div className={sectionCls}>
            <h2 className="text-base font-black text-white mb-4">Inventory & Shipping</h2>
            <div className="mb-4"><label className={labelCls}>Inventory Status</label><select className={selectCls}><option>In Stock</option><option>Out Of Stock</option><option>Pre Order</option></select></div>
            <div className="grid md:grid-cols-2 gap-4">
              <div><label className={labelCls}>Shipping Days</label><input type="number" placeholder="3" className={inputCls} /></div>
              <div><label className={labelCls}>Delivery Charge (₹)</label><input type="number" placeholder="150" className={inputCls} /></div>
            </div>
          </div>

          <div className={sectionCls}>
            <h2 className="text-base font-black text-white mb-4">Product Settings</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div><label className={labelCls}>Status</label><select className={selectCls}><option>Active</option><option>Draft</option><option>Hidden</option></select></div>
              <div><label className={labelCls}>Featured</label><select className={selectCls}><option>No</option><option>Yes</option></select></div>
            </div>
            <div><label className={labelCls}>Additional Notes</label><textarea rows="3" placeholder="Any special notes…" className={inputCls} /></div>
          </div>

          <div className="flex justify-end gap-3 mt-2">
            <button onClick={() => setShowAddProduct(false)} className="px-6 py-3 border border-[#333] text-gray-400 rounded-xl hover:border-[#C5A059]/40 transition text-sm">Cancel</button>
            <button onClick={handleSaveProduct} className="px-6 py-3 bg-[#C5A059] hover:bg-[#b08d47] text-black font-bold rounded-xl transition text-sm">
              {editingProduct ? "Update Product" : "Save Product"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-black text-white">Inventory</h1>
        <p className="text-[#C5A059] text-sm mt-0.5">Fashion Collection Management</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard icon={<Package size={20} />} value={allProducts.length} title="Total Products" />
        <StatCard icon={<Grid3X3 size={20} />} value="9" title="Active Categories" />
        <StatCard icon={<Gift size={20} />} value={allProducts.filter(p => p.stock === 0).length} title="Out of Stock" />
      </div>

      <div className="flex flex-col xl:flex-row justify-between gap-4 mb-6">
        <div className="relative w-full xl:w-96">
          <Search size={16} className="absolute left-4 top-3.5 text-gray-500" />
          <input type="text" placeholder="Search products…" className="w-full pl-11 pr-4 py-3 bg-[#111] border border-[#C5A059]/10 text-white rounded-xl text-sm outline-none focus:border-[#C5A059] transition placeholder:text-gray-600" />
        </div>
        <div className="flex gap-3">
          <button onClick={openAdd} className="bg-[#C5A059] hover:bg-[#b08d47] text-black font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm transition">
            <Plus size={16} /> Add Product
          </button>
          <button onClick={() => setShowCategories(true)} className="bg-[#111] border border-[#C5A059]/20 text-gray-300 px-5 py-2.5 rounded-xl text-sm hover:border-[#C5A059]/50 transition">
            Manage Categories
          </button>
          <button className="bg-[#111] border border-[#C5A059]/20 text-gray-300 px-4 py-2.5 rounded-xl flex items-center gap-2 text-sm hover:border-[#C5A059]/50 transition">
            <Filter size={16} /> Filter
          </button>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
        {CATEGORIES.map((cat) => (
          <button key={cat} onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition ${
              activeCategory === cat
                ? "bg-[#C5A059] text-black font-bold"
                : "bg-[#111] border border-[#C5A059]/10 text-gray-400 hover:border-[#C5A059]/30"
            }`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {allProducts.map((item) => (
          <div key={item.id} className="bg-[#111] border border-[#C5A059]/10 rounded-2xl overflow-hidden hover:border-[#C5A059]/30 transition group">
            <div className="relative">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <button className="absolute top-3 right-3 bg-black/50 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition">
                <Heart size={14} className="text-white" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-sm text-white">{item.name}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{item.category}</p>
              <p className="font-black text-lg mt-2 text-[#C5A059]">₹{item.price}</p>
              <div className="flex justify-between items-center mt-1.5">
                <span className={`text-xs font-semibold ${item.stock > 0 ? "text-green-400" : "text-red-400"}`}>
                  Stock: {item.stock}
                </span>
                <span className="bg-[#C5A059]/10 text-[#C5A059] text-[10px] px-2 py-0.5 rounded-md font-bold border border-[#C5A059]/20">{item.tag}</span>
              </div>
              <div className="border-t border-[#C5A059]/10 mt-3 pt-3 flex justify-center gap-5 text-gray-500">
                <Eye size={16} className="cursor-pointer hover:text-[#C5A059] transition" onClick={() => setSelectedProduct(item)} />
                <Pencil size={16} className="cursor-pointer hover:text-[#C5A059] transition" onClick={() => openEdit(item)} />
                <Trash2 size={16} className="cursor-pointer hover:text-red-400 transition" onClick={() => setAllProducts(allProducts.filter(p => p.id !== item.id))} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
        <p className="text-sm text-gray-500">Showing {allProducts.length} products</p>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 border border-[#333] rounded-full flex items-center justify-center text-gray-400 hover:border-[#C5A059]/40 transition"><ChevronLeft size={16} /></button>
          <button className="w-9 h-9 rounded-full bg-[#C5A059] text-black font-bold text-sm">1</button>
          <button className="w-9 h-9 border border-[#333] rounded-full text-gray-400 text-sm hover:border-[#C5A059]/40 transition">2</button>
          <button className="w-9 h-9 border border-[#333] rounded-full flex items-center justify-center text-gray-400 hover:border-[#C5A059]/40 transition"><ChevronRight size={16} /></button>
        </div>
        <select className="bg-[#111] border border-[#333] text-gray-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#C5A059]">
          <option>12 Rows</option><option>24 Rows</option><option>48 Rows</option>
        </select>
      </div>

      {/* Categories Modal */}
      {showCategories && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-start justify-center overflow-y-auto p-6" onClick={() => setShowCategories(false)}>
          <div className="bg-[#1a1a1a] border border-[#C5A059]/20 w-full max-w-3xl rounded-2xl p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-black text-white">Manage Categories</h1>
                <p className="text-gray-500 text-sm mt-0.5">Add, remove and reorder categories</p>
              </div>
              <button onClick={() => setShowCategories(false)} className="w-9 h-9 rounded-full bg-[#111] border border-[#333] flex items-center justify-center text-gray-400 hover:text-white transition"><X size={18} /></button>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-400">{CATEGORIES.length - 1} categories</p>
              <button className="bg-[#C5A059] hover:bg-[#b08d47] text-black font-bold px-4 py-2 rounded-xl text-sm transition">+ Add Category</button>
            </div>
            <div className="overflow-x-auto border border-[#C5A059]/10 rounded-xl">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-[#C5A059]/10 text-[10px] uppercase tracking-wider text-gray-500">
                  <th className="p-4 text-left">#</th><th className="p-4 text-left">Category</th><th className="p-4 text-left">Status</th><th className="p-4 text-left">Actions</th>
                </tr></thead>
                <tbody>
                  {CATEGORIES.filter(c => c !== "All").map((cat, i) => (
                    <tr key={cat} className="border-b border-[#C5A059]/5 hover:bg-[#C5A059]/5 transition">
                      <td className="p-4 text-gray-500">{i + 1}</td>
                      <td className="p-4 text-white font-medium">{cat}</td>
                      <td className="p-4"><span className="bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full text-[10px] font-bold">Active</span></td>
                      <td className="p-4"><div className="flex gap-3"><Pencil size={14} className="text-gray-500 cursor-pointer hover:text-[#C5A059]" /><Trash2 size={14} className="text-gray-500 cursor-pointer hover:text-red-400" /></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
          <div className="bg-[#1a1a1a] border border-[#C5A059]/20 rounded-2xl w-full max-w-sm p-5" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-end mb-3">
              <button onClick={() => setSelectedProduct(null)} className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center text-gray-400 hover:text-white"><X size={16} /></button>
            </div>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-52 object-cover rounded-xl mb-4 border border-[#C5A059]/10" />
            <h2 className="text-lg font-black text-white">{selectedProduct.name}</h2>
            <p className="text-gray-500 text-sm mt-1">{selectedProduct.category}</p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Price</span><span className="text-[#C5A059] font-bold">₹{selectedProduct.price}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Stock</span><span className="text-white">{selectedProduct.stock}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Tag</span><span className="text-white">{selectedProduct.tag}</span></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Inventory;
