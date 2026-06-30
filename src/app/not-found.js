import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center px-4 bg-black">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('/images/a_lush_sun_drenched_pistachio_orchard_in_kerman_iran._rows_of_mature_pistachio.png')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Glass Card */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">

        {/* Icon */}
        <div className="text-5xl mb-4">☕</div>

        {/* Title */}
        <h1 className="text-6xl font-extrabold text-white tracking-tight">
          404
        </h1>

        <h2 className="mt-2 text-xl font-semibold text-white">
          صفحه پیدا نشد
        </h2>

        <p className="mt-3 text-sm text-gray-300 leading-relaxed">
          انگار این مسیر از منوی کافه حذف شده ☕<br />
          شاید اشتباه تایپ شده یا منتقل شده
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block mt-6 w-full py-3 rounded-xl bg-green-600 hover:bg-green-500 transition font-semibold text-white"
        >
          بازگشت به خانه
        </Link>

        {/* Secondary hint */}
        <p className="mt-4 text-xs text-gray-400">
          Coffee Panel • Admin System
        </p>
      </div>
    </div>
  );
}