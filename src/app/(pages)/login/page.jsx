"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await res.json();

      setLoading(false);

      if (!res.ok) {
        setError(result.error || "Login failed");
        return;
      }

      console.log("LOGIN SUCCESS:", result.data);

      router.push("/dashboard");
    } catch (err) {
      setLoading(false);
      setError("Network error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-700 to-black text-white">
      <div className="w-full max-w-sm bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-center mb-6">Admin Login 🔐</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              className="w-full mt-1 p-3 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-green-500"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              className="w-full mt-1 p-3 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-green-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Error */}
          {error && <p className="text-red-400 text-sm">{error}</p>}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-500 transition font-semibold"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
