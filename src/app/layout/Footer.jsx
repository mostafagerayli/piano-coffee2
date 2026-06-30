import Link from "next/link";
import {
  FaClock,
  FaInstagram,
  FaLinkedin,
  FaMapPin,
  FaPhone,
  FaStar,
  FaCoffee,
  FaTelegram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F10] border-t border-[#222] mt-24">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-black text-[#D4AF37]">
              Piano Coffee
            </h2>

            <p className="text-gray-400 leading-8 mt-8">
              تجربه‌ای متفاوت از قهوه‌های تخصصی،
              فضایی لوکس و آرامش‌بخش برای لحظه‌های خاص شما.
            </p>

            <div className="flex gap-4 mt-10">

              <a className="bg-amber-400 w-11 h-11 rounded-full border border-[#333] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition">
                <FaInstagram />
              </a>

              <a className="bg-amber-400 w-11 h-11 rounded-full border border-[#333] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition">
                <FaTelegram />
              </a>

              <a className="bg-amber-400 w-11 h-11 rounded-full border border-[#333] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition">
                <FaLinkedin />
              </a>

            </div>
          </div>

          {/* Best Sellers (NEW) */}
          <div>
            <h3 className="text-white text-xl font-bold mb-8">
              محبوب‌ترین‌ها
            </h3>

            <ul className="space-y-6 text-gray-400">

              <li className="flex items-center gap-3 hover:text-[#D4AF37] transition">
                <FaCoffee className="text-[#D4AF37]" />
                Espresso Classic
              </li>

              <li className="flex items-center gap-3 hover:text-[#D4AF37] transition">
                <FaCoffee className="text-[#D4AF37]" />
                Cappuccino Special
              </li>

              <li className="flex items-center gap-3 hover:text-[#D4AF37] transition">
                <FaCoffee className="text-[#D4AF37]" />
                Latte Vanilla
              </li>

              <li className="flex items-center gap-3 hover:text-[#D4AF37] transition">
                <FaCoffee className="text-[#D4AF37]" />
                Cold Brew
              </li>

            </ul>
          </div>

          {/* Highlights (NEW) */}
          <div>
            <h3 className="text-white text-xl font-bold mb-8">
              چرا Piano Coffee؟
            </h3>

            <ul className="space-y-6 text-gray-400">

              <li className="flex items-start gap-3">
                <FaStar className="text-[#D4AF37] mt-1" />
                دانه‌های تازه رست شده روزانه
              </li>

              <li className="flex items-start gap-3">
                <FaStar className="text-[#D4AF37] mt-1" />
                باریستاهای حرفه‌ای و آموزش‌دیده
              </li>

              <li className="flex items-start gap-3">
                <FaStar className="text-[#D4AF37] mt-1" />
                فضای آرام و لوکس برای کار و قرار
              </li>

              <li className="flex items-start gap-3">
                <FaStar className="text-[#D4AF37] mt-1" />
                کیفیت ثابت در تمام سفارش‌ها
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-bold mb-8">
              تماس با ما
            </h3>

            <div className="space-y-6">

              <div className="flex gap-3">
                <FaMapPin className="text-[#D4AF37]" size={18} />
                <span className="text-gray-400">
             بجنورد، نبش قیام 29
                </span>
              </div>

              <div className="flex gap-3">
                <FaPhone className="text-[#D4AF37]" size={18} />
                <span className="text-gray-400">
                  09358853137
                </span>
              </div>

              <div className="flex gap-3">
                <FaClock className="text-[#D4AF37]" size={18} />
                <span className="text-gray-400">
                  8 صبح تا 10 شب
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-[#222] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <div className="flex gap-8 text-gray-500 text-sm">
            <Link href="/">قوانین و مقررات</Link>
            <Link href="/">حریم خصوصی</Link>
          </div>

          <p className="text-gray-500 text-sm">
            © 2025 Piano Coffee — All rights reserved
          </p>

        </div>

      </div>

    </footer>
  );
}