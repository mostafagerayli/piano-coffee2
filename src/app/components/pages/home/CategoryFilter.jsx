const categories = [
  "همه",
  "قهوه دمی",
  "اسپرسو",
  "لاته",
  "کاپوچینو",
  "موکا",
];

export default function CategoryFilter() {
  return (
    <section className="bg-[#0F0F10]">
      <div className="max-w-7xl mx-auto px-5">

        <div className="flex justify-center flex-wrap gap-4">

          {categories.map((item, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full transition-all duration-300 border
              
              ${
                index === 0
                  ? "bg-[#D4AF37] text-black border-[#D4AF37]"
                  : "bg-[#18181B] border-[#2B2B2B] text-white hover:border-[#D4AF37] hover:text-[#D4AF37]"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}