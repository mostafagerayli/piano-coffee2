import Image from "next/image";

export default function Hero() {
  return (
    <section
      dir="ltr"
      className="relative min-h-[80vh] lg:min-h-[90vh] overflow-hidden bg-[#1b120d] pt-10"
    >
      {/* Background */}
      <Image
        src="/images/pexels-cherubs-18517538.jpg"
        alt="Coffee"
        fill
        priority
        className="object-cover object-center opacity-90"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1b120d]/95 via-[#1b120d]/70 to-[#1b120d]/30" />

      {/* Glow */}
      <div className="absolute right-[-120px] top-20 w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] rounded-full bg-amber-500/20 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-5 sm:px-6 flex items-center">
        <div className="max-w-2xl space-y-5 sm:space-y-6">
          {/* Badge */}
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-[11px] sm:text-sm border border-white/10 tracking-wide">
            ☕ Specialty Coffee • Live Piano Atmosphere
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.2] text-white mt-4">
            <span className="block">Piano Coffee</span>
            <span className="block text-amber-400 mt-1 sm:mt-2">
              Every Morning Reimagined
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-gray-200 max-w-xl">
            Every cup at Piano Coffee is crafted with precision, from carefully
            selected beans to a perfectly balanced roast. We create a calm,
            minimal, and focused experience to help you start your day with
            clarity, warmth, and inspiration.
          </p>
        </div>
      </div>
    </section>
  );
}
