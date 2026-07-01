"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Error({ error, reset }) {
  useEffect(() => {
    toast.error(error?.message || "خطایی رخ داده است");
  }, [error]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-4">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      {/* Glow */}
      <div className="absolute h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-yellow-500/20 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">

        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10">
          <span className="text-4xl">⚠️</span>
        </div>

        <h1 className="mt-6 text-center text-3xl font-bold text-white">
          مشکلی پیش آمده
        </h1>

        <p className="mt-3 text-center text-gray-300 leading-7">
          متأسفانه هنگام پردازش درخواست شما خطایی رخ داد.
          <br />
          لطفاً دوباره تلاش کنید.
        </p>

        {error?.message && (
          <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 p-3">
            <p className="text-sm text-red-300 break-words">
              {error.message}
            </p>
          </div>
        )}

        <button
          onClick={reset}
          className="mt-8 w-full rounded-xl bg-yellow-500 py-3 font-semibold text-black transition-all duration-300 hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/30"
        >
          تلاش مجدد
        </button>

        <p className="mt-5 text-center text-xs tracking-widest text-gray-500 uppercase">
          Coffee Admin Panel
        </p>
      </div>
    </div>
  );
}