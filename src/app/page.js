import AboutSection from "./components/pages/home/AboutSection";
import Hero from "./components/pages/home/Hero";
import ProductsSection from "./components/pages/home/ProductSection";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

export default async function Home({ searchParams }) {
  const params = await searchParams;

  return (
    <main className="bg-[#0F0F10] pt-20">
      <Navbar />

      <div className="space-y-24">
        <Hero />

        <ProductsSection searchParams={params} />

        <AboutSection />
        <Footer />
      </div>
    </main>
  );
}