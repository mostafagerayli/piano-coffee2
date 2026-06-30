export default function ProductModal({
  editingProduct,
  editForm,
  setEditForm,
  setEditingProduct,
  handleUpdate,
  updateLoading,
}) {
  if (!editingProduct?.id) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#000000cc] backdrop-blur-md">
      {/* WRAPPER */}
      <div className="min-h-full flex items-end sm:items-center justify-center p-0 sm:p-4">
        {/* MODAL */}
        <div className="w-full sm:max-w-lg bg-[#2F2F35] border border-[#4A4A50] rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-fadeIn">
          {/* HEADER */}
          <div className="px-5 sm:px-6 py-4 sm:py-5 border-b border-[#4A4A50]">
            <h2 className="text-lg sm:text-2xl font-bold text-white">
              ویرایش محصول
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              اطلاعات محصول را ویرایش کنید.
            </p>
          </div>

          {/* BODY */}
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 max-h-[75vh] overflow-y-auto overscroll-contain">
            {/* NAME */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm">
                نام محصول
              </label>
              <input
                value={editForm?.name || ""}
                onChange={(e) =>
                  setEditForm({ ...editForm, name: e.target.value })
                }
                className="w-full h-10 sm:h-12 text-sm sm:text-base rounded-xl bg-[#3A3A42] border border-[#555] px-3 sm:px-4 text-white outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition"
              />
            </div>

            {/* PRICE */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm">قیمت</label>
              <input
                type="number"
                value={editForm?.price || ""}
                onChange={(e) =>
                  setEditForm({ ...editForm, price: e.target.value })
                }
                className="w-full h-10 sm:h-12 text-sm sm:text-base rounded-xl bg-[#3A3A42] border border-[#555] px-3 sm:px-4 text-white outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition"
              />
            </div>
            {/* PRODUCT TYPE */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm">
                نوع محصول
              </label>

              <select
                value={editForm?.product_type || ""}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    product_type: e.target.value,
                  })
                }
                className="w-full h-10 sm:h-12 text-sm sm:text-base rounded-xl bg-[#3A3A42] border border-[#555] px-3 sm:px-4 text-white outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition"
              >
                <option value="">انتخاب نوع</option>
                <option value="گرم">گرم</option>
                <option value="سرد">سرد</option>
                <option value="کیک">کیک</option>
                <option value="ماچا">ماچا</option>
              </select>
            </div>
            {/* DESCRIPTION */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm">
                توضیحات
              </label>
              <textarea
                rows={3}
                value={editForm?.description || ""}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    description: e.target.value,
                  })
                }
                className="w-full text-sm sm:text-base rounded-xl bg-[#3A3A42] border border-[#555] p-3 sm:p-4 text-white resize-none outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 transition"
              />
            </div>

            {/* IMAGE */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm">
                تصویر محصول (اختیاری)
              </label>

              <label className="block cursor-pointer group">
                <div className="h-24 sm:h-28 rounded-xl border-2 border-dashed border-[#555] bg-[#3A3A42] flex flex-col items-center justify-center gap-1 transition group-hover:border-[#D4AF37]">
                  <svg
                    className="w-5 sm:w-6 h-5 sm:h-6 text-gray-400 group-hover:text-[#D4AF37] transition"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16v-8m0 0l-3 3m3-3l3 3M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                    />
                  </svg>

                  <p className="text-xs text-gray-300 text-center">
                    کلیک کن یا عکس جدید انتخاب کن
                  </p>

                  <p className="text-[10px] text-gray-500">PNG / JPG / WEBP</p>
                </div>

                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      image: e.target.files?.[0] || null,
                    })
                  }
                />
              </label>

              {/* PREVIEW */}
              {editForm?.image && (
                <div className="mt-3 flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#2F2F35] border border-[#555] flex items-center justify-center">
                    📷
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#D4AF37] truncate">
                      {editForm.image.name}
                    </p>
                    <p className="text-xs text-gray-500">آماده برای آپلود</p>
                  </div>

                  <button
                    onClick={() => setEditForm({ ...editForm, image: null })}
                    className="text-red-400 text-xs hover:text-red-300"
                  >
                    حذف
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* FOOTER */}
          <div className="border-t border-[#4A4A50] p-4 sm:p-5 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setEditingProduct(null)}
              className="w-full sm:w-1/2 h-11 sm:h-12 rounded-xl border border-[#555] text-gray-300 hover:bg-[#3A3A42] transition"
            >
              انصراف
            </button>

            <button
              onClick={handleUpdate}
              disabled={updateLoading}
              className="w-full sm:w-1/2 h-11 sm:h-12 rounded-xl bg-[#D4AF37] hover:bg-[#e6c14c] text-black font-bold transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {updateLoading ? (
                <>
                  <svg
                    className="w-4 h-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
                    />
                  </svg>
                  در حال ذخیره...
                </>
              ) : (
                "ذخیره تغییرات"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
