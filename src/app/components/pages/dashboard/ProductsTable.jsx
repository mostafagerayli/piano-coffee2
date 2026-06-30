"use client";

import { useProducts } from "../../../hook/useProducts";
import ProductRow from "./ProductRow";
import ProductModal from "./ProductModal";
import DeleteConfirmModal from "./DeleteConfirmModal";

export default function ProductsTable() {
  const {
    products,
    loading,

    editingProduct,
    setEditingProduct,
    editForm,
    setEditForm,

    handleDeleteClick,
    handleEditClick,
    handleUpdate,
    deletingProduct,
    setDeletingProduct,
    handleConfirmDelete,
    deleteLoading,
  } = useProducts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2A2A2E] via-[#1E1E22] to-[#161618] flex items-center justify-center p-4 md:p-8">

      <div className="w-full max-w-7xl rounded-3xl bg-[#2F2F35] border border-[#4A4A50] overflow-hidden">

        {/* HEADER */}
        <div className="flex justify-between items-center px-6 md:px-8 py-6 border-b border-[#4A4A50]">

          <h2 className="text-2xl md:text-3xl font-bold text-white">
            جدول محصولات
          </h2>

          <div className="bg-[#D4AF37] text-black font-bold rounded-xl px-4 md:px-5 py-2 md:py-3 text-sm md:text-base">
            تعداد ({products.length})
          </div>

        </div>

        {/* LOADING */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">

              <thead>
                <tr className="bg-[#3A3A42] text-gray-200">
                  <th className="px-6 py-5 text-right">نام</th>
                  <th className="px-6 py-5 text-right">قیمت</th>
                  <th className="px-6 py-5 text-right">توضیحات</th>
                  <th className="px-6 py-5 text-right">تصویر</th>
                  <th className="px-6 py-5 text-center">عملیات</th>
                </tr>
              </thead>

              <tbody>
                {products.map((p) => (
                  <ProductRow
                    key={p.id}
                    p={p}
                    onEdit={handleEditClick}
                    onDelete={handleDeleteClick}
                  />
                ))}
              </tbody>

            </table>
          </div>
        )}

      </div>

      {/* EDIT MODAL */}
      <ProductModal
        editingProduct={editingProduct}
        editForm={editForm}
        setEditForm={setEditForm}
        setEditingProduct={setEditingProduct}
        handleUpdate={handleUpdate}
      />

      {/* DELETE MODAL */}
      <DeleteConfirmModal
        product={deletingProduct}
        onClose={() => setDeletingProduct(null)}
        onConfirm={handleConfirmDelete}
        loading={deleteLoading}
      />

    </div>
  );
}