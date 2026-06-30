import AboutSection from "./components/pages/home/AboutSection";
import CategoryFilter from "./components/pages/home/CategoryFilter";
import Hero from "./components/pages/home/Hero";
import ProductsSection from "./components/pages/home/ProductSection";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

export default function Home() {
  return (
 <main className="bg-[#0F0F10] pt-20">
      <Navbar />

      <div className="space-y-24">
        <Hero />
        <CategoryFilter />
        <ProductsSection />
        <AboutSection />
        <Footer />
      </div>
    </main>
  );
}
