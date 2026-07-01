"use client";

import { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";

export default function ProductsSection({ searchParams }) {
  const type = searchParams?.type || "all";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `/api/products${type !== "all" ? `?type=${type}` : ""}`,
          { cache: "no-store" }
        );

        const data = await res.json();
        setProducts(data.data || []);
      } catch (err) {
        console.error(err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [type]);

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

        <CategoryFilter />

        {loading ? (
          <p className="text-white text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}