import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0f0f]">
      <div className="bg-[#1a1a1a] border border-[#C5A059]/20 p-8 rounded-2xl shadow-2xl w-96">
        {/* Brand */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-black text-white tracking-tight">
            Curves<span className="text-[#C5A059]">&</span>Fitz
          </h1>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Admin Suite</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-900/30 border border-red-500/30 rounded-xl text-sm text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@curvesfitz.com"
              required
              className="w-full mt-1 bg-[#111] border border-[#333] text-white p-3 rounded-xl text-sm focus:outline-none focus:border-[#C5A059] transition"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full mt-1 bg-[#111] border border-[#333] text-white p-3 rounded-xl text-sm focus:outline-none focus:border-[#C5A059] transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#C5A059] hover:bg-[#b08d47] text-black font-bold p-3 rounded-xl transition disabled:opacity-60 disabled:cursor-not-allowed mt-2"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <p className="text-center text-xs text-gray-600 mt-6">
          Only SUPER_ADMIN accounts can access this panel.
        </p>
      </div>
    </div>
  );
}

export default Login;
