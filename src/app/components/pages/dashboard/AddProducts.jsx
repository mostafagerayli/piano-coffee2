"use client";

import { useState } from "react";
import { FaImage, FaPlus } from "react-icons/fa";
import { useAddProduct } from "../../../hook/useAddProduct";
import { toast } from "react-toastify";
import { productService } from "@/app/service/product.service";
import { formatPrice } from "@/app/utils/formatPrice";

export default function AddProducts() {
  const { form, handleChange, reset } = useAddProduct();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await productService.create(form);
      toast.success("محصول با موفقیت اضافه شد"); 
      window.location.reload();
      reset();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
<div className="rounded-3xl bg-[#2F2F35] border border-[#4A4A50] shadow-[0_20px_60px_rgba(0,0,0,.35)] p-5 sm:p-6 lg:p-8 h-fit">

  {/* Header (compact mobile) */}
  <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">

    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#D4AF37] flex items-center justify-center shadow-lg shrink-0">
      <FaPlus className="text-black text-lg sm:text-xl" />
    </div>

    <div>
      <h2 className="text-xl sm:text-2xl font-bold text-white">
        افزودن محصول
      </h2>
      <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-5">
        اطلاعات محصول جدید را وارد کنید.
      </p>
    </div>

  </div>

  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

    {/* Name */}
    <div>
      <label className="block text-xs sm:text-sm text-gray-300 mb-2">
        نام محصول
      </label>

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="مثلاً لاته کلاسیک"
        className="w-full h-11 sm:h-12 rounded-xl bg-[#3A3A42] border border-[#555] px-3 sm:px-4 text-white placeholder:text-gray-400 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 outline-none transition text-sm sm:text-base"
      />
    </div>

    {/* Price */}
    <div>
      <label className="block text-xs sm:text-sm text-gray-300 mb-2">
        قیمت
      </label>

      <input
        type="text"
        name="price"
        value={formatPrice(form.price)}
        onChange={(e) => {
          const value = e.target.value.replace(/,/g, "").replace(/\D/g, "");

          handleChange({
            target: {
              name: "price",
              value,
            },
          });
        }}
        placeholder="150,000"
        className="w-full h-11 sm:h-12 rounded-xl bg-[#3A3A42] border border-[#555] px-3 sm:px-4 text-white placeholder:text-gray-400 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 outline-none transition text-sm sm:text-base"
      />
    </div>

    {/* Product Type */}
    <div>
      <label className="block text-xs sm:text-sm text-gray-300 mb-2">
        نوع محصول
      </label>

      <select
        name="product_type"
        value={form.product_type}
        onChange={handleChange}
        className="w-full h-11 sm:h-12 rounded-xl bg-[#3A3A42] border border-[#555] px-3 sm:px-4 text-white focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 outline-none transition text-sm sm:text-base"
      >
        <option value="">انتخاب نوع محصول</option>
        <option value="گرم">گرم</option>
        <option value="سرد">سرد</option>
        <option value="کیک">کیک</option>
        <option value="ماچا">ماچا</option>
      </select>
    </div>

    {/* Description */}
    <div>
      <label className="block text-xs sm:text-sm text-gray-300 mb-2">
        توضیحات
      </label>

      <textarea
        rows={4}
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="توضیحات محصول..."
        className="w-full rounded-xl bg-[#3A3A42] border border-[#555] p-3 sm:p-4 text-white placeholder:text-gray-400 resize-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 outline-none transition text-sm sm:text-base"
      />
    </div>

    {/* Image */}
    <div>
      <label className="block text-xs sm:text-sm text-gray-300 mb-2">
        تصویر محصول
      </label>

      <label className="cursor-pointer rounded-2xl border-2 border-dashed border-[#666] hover:border-[#D4AF37] transition h-36 sm:h-44 flex flex-col items-center justify-center">

        <FaImage className="text-[#D4AF37] text-3xl sm:text-4xl mb-2 sm:mb-3" />

        <p className="text-white text-xs sm:text-sm">
          انتخاب تصویر
        </p>

        <span className="text-[10px] sm:text-xs text-gray-400 mt-1">
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
        <div className="mt-3 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 p-2 sm:p-3 text-[#F4D56A] text-xs sm:text-sm truncate">
          {form.image.name}
        </div>
      )}
    </div>

    {/* Button */}
    <button
      disabled={loading}
      className="w-full h-11 sm:h-12 rounded-xl bg-[#D4AF37] hover:bg-[#e3bf49] text-black font-semibold transition-all duration-300 active:scale-[0.98] disabled:opacity-60 text-sm sm:text-base"
    >
      {loading ? "در حال بارگذاری..." : "افزودن محصول"}
    </button>

  </form>
</div>
  );
}
