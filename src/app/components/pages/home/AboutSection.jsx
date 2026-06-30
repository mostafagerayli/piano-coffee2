import Image from "next/image";
import { FaCoffee, FaLeaf, FaSeedling } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="bg-[#0F0F10] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div className="order-2 lg:order-1">

            <span className="text-[#D4AF37] font-medium text-sm tracking-widest">
              OUR STORY
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-snug mt-4">
              جایی که هنر با
              <br />
              <span className="text-[#D4AF37]">
                رایحه قهوه
              </span>{" "}
              ملاقات می‌کند
            </h2>

            <p className="text-gray-400 leading-7 mt-6 text-base lg:text-lg max-w-xl">
              لور نور فراتر از یک کافه است؛ مقصدی برای تجربه آرامش،
              کیفیت و طعم واقعی قهوه. ما با انتخاب بهترین دانه‌ها
              از مزارع معتبر جهان، لحظاتی خاص برای شما خلق می‌کنیم.
            </p>

            {/* FEATURES */}
            <div className="mt-12 grid sm:grid-cols-2 gap-10">

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <FaCoffee className="text-[#D4AF37]" size={18} />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg">
                    فضای آرام
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 leading-6">
                    طراحی شده برای تمرکز، گفتگو و تجربه‌ای آرام.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <FaSeedling className="text-[#D4AF37]" size={18} />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg">
                    دانه‌های تازه
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 leading-6">
                    انتخاب شده از بهترین مزارع و رُست روزانه.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* IMAGE */}
          <div className="order-1 lg:order-2 relative">

            <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              <Image
                src="/images/pexels-dipinder-rainu-247864103-16372982.jpg"
                alt="coffee"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />
            </div>

            {/* floating glow */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#D4AF37]/20 blur-[120px] rounded-full" />

          </div>

        </div>

      </div>
    </section>
  );
}