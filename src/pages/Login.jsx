import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleLogin = () => {
  localStorage.setItem("isLoggedIn", "true");
  navigate("/");
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-3 rounded mb-4"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 text-white p-3 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;