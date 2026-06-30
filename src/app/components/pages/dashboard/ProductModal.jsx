export default function ProductModal({
  editingProduct,
  editForm,
  setEditForm,
  setEditingProduct,
  handleUpdate,
}) {
  if (!editingProduct?.id) return null;

return (
  <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm">

    {/* CENTER WRAPPER */}
    <div className="min-h-full flex items-start sm:items-center justify-center p-4 py-10">

      {/* MODAL */}
      <div className="w-full max-w-md bg-[#2F2F35] border border-[#4A4A50] rounded-3xl shadow-2xl overflow-hidden flex flex-col">

        {/* HEADER */}
        <div className="px-6 py-5 border-b border-[#4A4A50]">
          <h2 className="text-2xl font-bold text-white">
            ویرایش محصول
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            اطلاعات محصول را ویرایش کنید.
          </p>
        </div>

        {/* BODY (scroll if needed) */}
        <div className="p-6 space-y-5 max-h-[65vh] overflow-y-auto">

          {/* NAME */}
          <div>
            <label className="block text-gray-300 mb-2">
              نام محصول
            </label>

            <input
              value={editForm.name}
              onChange={(e) =>
                setEditForm({
                  ...editForm,
                  name: e.target.value,
                })
              }
              className="w-full h-12 rounded-xl bg-[#3A3A42] border border-[#555] px-4 text-white outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition"
            />
          </div>

          {/* PRICE */}
          <div>
            <label className="block text-gray-300 mb-2">
              قیمت
            </label>

            <input
              type="number"
              value={editForm.price}
              onChange={(e) =>
                setEditForm({
                  ...editForm,
                  price: e.target.value,
                })
              }
              className="w-full h-12 rounded-xl bg-[#3A3A42] border border-[#555] px-4 text-white outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-gray-300 mb-2">
              توضیحات
            </label>

            <textarea
              rows={2}
              value={editForm.description}
              onChange={(e) =>
                setEditForm({
                  ...editForm,
                  description: e.target.value,
                })
              }
              className="w-full rounded-xl bg-[#3A3A42] border border-[#555] p-4 text-white resize-none outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition"
            />
          </div>

        </div>

        {/* FOOTER (sticky feel on mobile) */}
        <div className="border-t border-[#4A4A50] p-5 flex flex-col sm:flex-row gap-3">

          <button
            onClick={() => setEditingProduct(null)}
            className="w-full sm:w-1/2 h-12 rounded-xl border border-[#555] text-gray-300 hover:bg-[#3A3A42] transition"
          >
            انصراف
          </button>

          <button
            onClick={handleUpdate}
            className="w-full sm:w-1/2 h-12 rounded-xl bg-[#D4AF37] hover:bg-[#e6c14c] text-black font-bold transition hover:scale-[1.02]"
          >
            ذخیره تغییرات
          </button>

        </div>

      </div>
    </div>
  </div>
);
}