"use client";

export default function DeleteConfirmModal({
  product,
  onConfirm,
  onClose,
  loading = false,
}) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">

      <div className="w-full max-w-sm rounded-3xl bg-[#2F2F35] border border-[#4A4A50] shadow-2xl overflow-hidden">

        {/* HEADER */}
        <div className="px-6 py-5 border-b border-[#4A4A50]">

          <h2 className="text-xl font-bold text-white">
            حذف محصول
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            این عملیات قابل بازگشت نیست
          </p>

        </div>

        {/* BODY */}
        <div className="p-6 space-y-4">

          <div className="flex items-start gap-3">

            {/* warning icon */}
            <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
              <span className="text-red-400 text-lg">⚠️</span>
            </div>

            <div>

              <p className="text-gray-300 leading-relaxed">
                آیا از حذف محصول
              </p>

              <p className="text-white font-semibold">
                {product?.name}
              </p>

              <p className="text-gray-300">
                مطمئن هستید؟
              </p>

            </div>

          </div>

        </div>

        {/* FOOTER */}
        <div className="border-t border-[#4A4A50] p-5 flex flex-col sm:flex-row gap-3">

          <button
            onClick={onClose}
            disabled={loading}
            className="w-full sm:w-1/2 h-11 rounded-xl border border-[#555] text-gray-300 hover:bg-[#3A3A42] transition"
          >
            انصراف
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="w-full sm:w-1/2 h-11 rounded-xl bg-red-500 hover:bg-red-600 text-white font-semibold transition disabled:opacity-50"
          >
            {loading ? "در حال حذف..." : "حذف محصول"}
          </button>

        </div>

      </div>

    </div>
  );
}