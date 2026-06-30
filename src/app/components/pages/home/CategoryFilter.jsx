"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  { label: "همه", value: "all" },
  { label: "گرم", value: "گرم" },
  { label: "سرد", value: "سرد" },
  { label: "کیک", value: "کیک" },
  { label: "ماچا", value: "ماچا" },
];

export default function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const active = searchParams.get("type") || "all";

  const handleClick = (value) => {
    const url =
      value === "all"
        ? "/"
        : `/?type=${value}`;

    router.push(url, { scroll: false });
  };

  return (
    <section className="bg-[#0F0F10] mb-10">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex justify-center flex-wrap gap-4">

          {categories.map((item) => (
            <button
              key={item.value}
              onClick={() => handleClick(item.value)}
              className={`px-6 py-3 rounded-full border transition-all duration-300
                ${
                  active === item.value
                    ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                    : "bg-[#18181B] text-white border-[#2B2B2B]"
                }`}
            >
              {item.label}
            </button>
          ))}

        </div>
      </div>
    </section>
  );
}