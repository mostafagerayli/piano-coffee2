import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";

export default async function ProductsSection({ searchParams }) {
  const type = searchParams?.type || "all";

  const res = await fetch(
    `http://localhost:3000/api/products${
      type !== "all" ? `?type=${type}` : ""
    }`,
    { cache: "no-store" }
  );

  const products = await res.json();
  

  return (
    <section className="bg-[#0F0F10]">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-14">
          <span className="text-[#D4AF37] uppercase tracking-[6px] text-sm">
            Premium Menu
          </span>

          <h2 className="text-white text-4xl font-black mt-4">
              منو کافه
          </h2>

          <div className="w-24 h-1 bg-[#D4AF37] rounded-full mx-auto mt-5"></div>
        </div>

        {/* 🔥 اینجا URL-based filter */}
        <CategoryFilter />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}