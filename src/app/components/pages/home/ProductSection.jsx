import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "لاته کلاسیک",
    desc: "تهیه شده از دانه عربیکا با شیر تازه",
    price: "160",
    image: "/images/pexels-kunal-lakhotia-781256899-34452166.jpg",
  },
  {
    id: 2,
    title: "کاپوچینو",
    desc: "فوم شیر غلیظ با اسپرسوی دوبل",
    price: "190",
    image: "/images/pexels-lunajoie-34519663.jpg",
  },
  {
    id: 3,
    title: "موکا",
    desc: "ترکیب شکلات تلخ و اسپرسو",
    price: "160",
    image: "/images/pexels-jpgata-10673546.jpg",
  },
  {
    id: 4,
    title: "اسپرسو",
    desc: "عطر فوق‌العاده و کرمای غلیظ",
    price: "120 ",
    image: "/images/pexels-nada-bastawi-2088980-3946097.jpg",
  },
  {
    id: 5,
    title: "آمریکانو",
    desc: "انتخاب حرفه‌ای برای طرفداران قهوه",
    price: "150",
    image: "/images/pexels-shameel-mukkath-3421394-5112652.jpg",
  },
  {
    id: 6,
    title: "کارامل ماکیاتو",
    desc: "شیر، اسپرسو و کارامل",
    price: "200 ",
    image: "/images/pexels-fox-58267-35595042.jpg",
  },
    {
    id: 7,
    title: "کارامل ماکیاتو",
    desc: "شیر، اسپرسو و کارامل",
    price: "100",
    image: "/images/pexels-fox-58267-35595042.jpg",
  },
   {
    id: 8,
    title: "آمریکانو",
    desc: "انتخاب حرفه‌ای برای طرفداران قهوه",
    price: "155 ",
    image: "/images/pexels-shameel-mukkath-3421394-5112652.jpg",
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-[#0F0F10]">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-14">

          <span className="text-[#D4AF37] uppercase tracking-[6px] text-sm">
            Premium Menu
          </span>

          <h2 className="text-white text-4xl font-black mt-4">
            محصولات ویژه
          </h2>

          <div className="w-24 h-1 bg-[#D4AF37] rounded-full mx-auto mt-5"></div>

        </div>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-8
          "
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>

    </section>
  );
}