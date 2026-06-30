"use client";

import { useState } from "react";
import { FaImage, FaPlus } from "react-icons/fa";

import { useAddProductForm } from "../../../hook/useAddProductForm";
import { createProduct } from "../../../service/productApi";
import { useRouter } from "next/navigation";

export default function AddProducts() {
  const { form, handleChange, reset } = useAddProductForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await createProduct(form);
      alert("Product added ✅");
      Window.refresh()
      reset();
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl bg-[#2F2F35] border border-[#4A4A50] shadow-[0_20px_60px_rgba(0,0,0,.35)] p-6 lg:p-8 h-fit">

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-[#D4AF37] flex items-center justify-center shadow-lg shrink-0">
          <FaPlus className="text-black text-xl" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">افزودن محصول</h2>
          <p className="text-sm text-gray-300 mt-1">
            اطلاعات محصول جدید را وارد کنید.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            نام محصول
          </label>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="مثلاً لاته کلاسیک"
            className="w-full h-12 rounded-xl bg-[#3A3A42] border border-[#555] px-4 text-white placeholder:text-gray-400 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 outline-none transition"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            قیمت
          </label>

          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="150000"
            className="w-full h-12 rounded-xl bg-[#3A3A42] border border-[#555] px-4 text-white placeholder:text-gray-400 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 outline-none transition"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            توضیحات
          </label>

          <textarea
            rows={4}
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="توضیحات محصول..."
            className="w-full rounded-xl bg-[#3A3A42] border border-[#555] p-4 text-white placeholder:text-gray-400 resize-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 outline-none transition"
          />
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm text-gray-300 mb-2">
            تصویر محصول
          </label>

          <label className="cursor-pointer rounded-2xl border-2 border-dashed border-[#666] hover:border-[#D4AF37] transition h-44 flex flex-col items-center justify-center">

            <FaImage className="text-[#D4AF37] text-4xl mb-3" />

            <p className="text-white text-sm">انتخاب تصویر</p>

            <span className="text-xs text-gray-400 mt-1">
              PNG • JPG • WEBP
            </span>

            <input
              type="file"
              name="image"
              onChange={handleChange}
              className="hidden"
            />
          </label>

          {form.image && (
            <div className="mt-3 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 p-3 text-[#F4D56A] text-sm truncate">
              {form.image.name}
            </div>
          )}
        </div>

        {/* Button */}
        <button
          disabled={loading}
          className="w-full h-12 rounded-xl bg-[#D4AF37] hover:bg-[#e3bf49] text-black font-semibold transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
        >
          {loading ? "در حال بارگذاری..." : "افزودن محصول"}
        </button>

      </form>
    </div>
  );
}