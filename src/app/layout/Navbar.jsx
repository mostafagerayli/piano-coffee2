import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <header dir="ltr" className="fixed top-0 left-0 w-full z-50 bg-[#2b1d17]/80 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto h-16 sm:h-20 px-4 sm:px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3">

          {/* Logo Icon */}
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden flex items-center justify-center bg-[#1b120d] border border-white/10 shadow-md">

            <Image
              src="/images/pexels-nascimento-jr-1451812733-27275992.jpg"
              alt="Piano Coffee Logo"
              width={40}
              height={40}
              className="object-cover"
            />

          </div>

          {/* Brand Text */}
          <div className="leading-tight">
            <h1 className="text-white font-bold text-sm sm:text-lg">
              Piano Coffee
            </h1>

            <p className="hidden sm:block text-gray-400 text-xs">
              Fresh Coffee • Piano Vibes
            </p>
          </div>

        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Search */}
          <button className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-white">
            <IoSearchOutline size={18} />
          </button>

          {/* User */}
          <Link
            href="/login"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-amber-500 hover:bg-amber-600 transition flex items-center justify-center text-white"
          >
            <FaUser size={16} />
          </Link>

          {/* Mobile Menu */}
          <button className="lg:hidden w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 transition flex items-center justify-center text-white">
            <FiMenu size={18} />
          </button>

        </div>

      </div>
    </header>
  );
}