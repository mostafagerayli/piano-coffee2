import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="bg-[#18181B] rounded-3xl overflow-hidden border border-[#232323] hover:border-[#D4AF37] transition duration-300 group">
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={400}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 space-y-4">
        {/* STARS */}
        <div className="flex gap-1 text-[#D4AF37]">
          <FaStar size={14} />
          <FaStar size={14} />
          <FaStar size={14} />
          <FaStar size={14} />
          <FaStar size={14} />
        </div>

        {/* TITLE */}
        <h3 className="text-white text-xl font-bold">{product.title}</h3>

        {/* DESC */}
        <p className="text-gray-400 leading-7 text-sm">{product.desc}</p>

        {/* PRICE */}
        <div className="pt-4 space-y-2">
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-[#D4AF37] tracking-wide">
              {product.price}
            </span>

            <span className="text-sm text-gray-400 mb-1">هزار تومان</span>
          </div>

          {/* line + hint under price */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        </div>
      </div>
    </div>
  );
}
