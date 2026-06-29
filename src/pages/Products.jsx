import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Plus, Pencil, Trash2, X } from "lucide-react";

const INITIAL = [
  { id: 1, name: "Bridal Lehenga Stitching", price: "₹5,000", stock: 12, category: "Tailoring", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=800" },
  { id: 2, name: "Designer Kurti Set", price: "₹2,500", stock: 5, category: "Fashion Wear", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800" },
  { id: 3, name: "Premium Dry Clean", price: "₹800", stock: 20, category: "Laundry", image: "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=800" },
  { id: 4, name: "Polki Necklace Set", price: "₹24,500", stock: 10, category: "Jewellery", image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=800" },
  { id: 5, name: "Saree Blouse Stitching", price: "₹1,200", stock: 15, category: "Tailoring", image: "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&w=800" },
  { id: 6, name: "Wedding Sherwani Rental", price: "₹8,000", stock: 7, category: "Rental", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=800" },
];

const inputCls = "p-3 rounded-xl border border-[#333] bg-[#0f0f0f] text-white text-sm outline-none focus:border-[#C5A059] transition placeholder:text-gray-600 w-full";
const labelCls = "text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 block";

function Products() {
  const { searchTerm } = useOutletContext();
  const [products, setProducts] = useState(INITIAL);
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", stock: "", category: "", image: "" });
  const [editProduct, setEditProduct] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);

  const filtered = products.filter((p) => p.name.toLowerCase().includes((searchTerm || "").toLowerCase()));

  const handleAdd = () => {
    setProducts([...products, { ...newProduct, id: Date.now() }]);
    setNewProduct({ name: "", price: "", stock: "", category: "", image: "" });
    setShowForm(false);
  };

  const handleEdit = () => {
    setProducts(products.map((p) => p.id === editProduct.id ? editProduct : p));
    setShowEditForm(false);
  };

  const handleDelete = (id) => setProducts(products.filter((p) => p.id !== id));

  return (
    <div className="min-h-screen bg-[#0f0f0f] p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-black text-white">Products</h1>
          <p className="text-[#C5A059] text-sm mt-0.5 uppercase tracking-widest">Fashion Collection</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} className="bg-[#C5A059] hover:bg-[#b08d47] text-black font-bold px-5 py-3 rounded-xl flex items-center gap-2 text-sm transition">
          <Plus size={16} /> Add Product
        </button>
      </div>

      {/* Add form */}
      {showForm && (
        <div className="bg-[#111] border border-[#C5A059]/20 p-5 rounded-2xl mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-black text-white">Add New Product</h2>
            <button onClick={() => setShowForm(false)} className="text-gray-500 hover:text-white"><X size={18} /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label className={labelCls}>Product Name</label><input type="text" placeholder="e.g. Bridal Lehenga" className={inputCls} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} /></div>
            <div><label className={labelCls}>Price</label><input type="text" placeholder="₹5,000" className={inputCls} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} /></div>
            <div><label className={labelCls}>Stock</label><input type="text" placeholder="10" className={inputCls} onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })} /></div>
            <div><label className={labelCls}>Category</label><input type="text" placeholder="Tailoring" className={inputCls} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} /></div>
            <div className="md:col-span-2"><label className={labelCls}>Product Image</label><input type="file" accept="image/*" className={inputCls + " cursor-pointer"} onChange={(e) => { const f = e.target.files[0]; if (f) setNewProduct({ ...newProduct, image: URL.createObjectURL(f) }); }} /></div>
          </div>
          <div className="flex justify-end gap-3 mt-4">
            <button onClick={() => setShowForm(false)} className="px-5 py-2 border border-[#333] text-gray-400 rounded-xl text-sm hover:border-[#C5A059]/40 transition">Cancel</button>
            <button onClick={handleAdd} className="bg-[#C5A059] hover:bg-[#b08d47] text-black font-bold px-5 py-2 rounded-xl text-sm transition">Save Product</button>
          </div>
        </div>
      )}

      {/* Edit form */}
      {showEditForm && editProduct && (
        <div className="bg-[#111] border border-[#C5A059]/20 p-5 rounded-2xl mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-black text-white">Edit Product</h2>
            <button onClick={() => setShowEditForm(false)} className="text-gray-500 hover:text-white"><X size={18} /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><label className={labelCls}>Product Name</label><input type="text" value={editProduct.name} className={inputCls} onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })} /></div>
            <div><label className={labelCls}>Price</label><input type="text" value={editProduct.price} className={inputCls} onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })} /></div>
            <div><label className={labelCls}>Stock</label><input type="text" value={editProduct.stock} className={inputCls} onChange={(e) => setEditProduct({ ...editProduct, stock: e.target.value })} /></div>
            <div><label className={labelCls}>Category</label><input type="text" value={editProduct.category} className={inputCls} onChange={(e) => setEditProduct({ ...editProduct, category: e.target.value })} /></div>
            <div className="md:col-span-2"><label className={labelCls}>Product Image</label><input type="file" accept="image/*" className={inputCls + " cursor-pointer"} onChange={(e) => { const f = e.target.files[0]; if (f) setEditProduct({ ...editProduct, image: URL.createObjectURL(f) }); }} /></div>
          </div>
          <div className="flex justify-end gap-3 mt-4">
            <button onClick={() => setShowEditForm(false)} className="px-5 py-2 border border-[#333] text-gray-400 rounded-xl text-sm hover:border-[#C5A059]/40 transition">Cancel</button>
            <button onClick={handleEdit} className="bg-[#C5A059] hover:bg-[#b08d47] text-black font-bold px-5 py-2 rounded-xl text-sm transition">Save Changes</button>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filtered.map((product) => (
          <div key={product.id} className="bg-[#111] border border-[#C5A059]/10 rounded-2xl overflow-hidden hover:border-[#C5A059]/30 transition group">
            <div className="relative h-36">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2 bg-[#C5A059]/90 px-2 py-0.5 rounded-full text-[10px] font-bold text-black">{product.category}</div>
            </div>
            <div className="p-3">
              <h2 className="text-sm font-bold text-white leading-tight">{product.name}</h2>
              <p className="text-[10px] text-gray-500 mt-0.5">Fashion service item</p>
              <div className="flex justify-between items-center mt-2">
                <div><p className="text-[9px] text-gray-500">Price</p><p className="text-sm font-black text-[#C5A059]">{product.price}</p></div>
                <div className="text-right"><p className="text-[9px] text-gray-500">Stock</p><p className="text-sm font-bold text-white">{product.stock}</p></div>
              </div>
              <div className="flex gap-2 mt-3">
                <button onClick={() => { setEditProduct(product); setShowEditForm(true); }} className="flex-1 bg-[#C5A059]/10 border border-[#C5A059]/20 hover:bg-[#C5A059]/20 text-[#C5A059] text-xs font-semibold py-1.5 rounded-lg transition flex items-center justify-center gap-1">
                  <Pencil size={11} /> Edit
                </button>
                <button onClick={() => handleDelete(product.id)} className="flex-1 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-red-400 text-xs font-semibold py-1.5 rounded-lg transition flex items-center justify-center gap-1">
                  <Trash2 size={11} /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center text-gray-500 py-16">No products found.</div>
      )}
    </div>
  );
}

export default Products;
