import Image from "next/image";

export default function Hero() {
  return (
    <section
      dir="ltr"
      className="relative min-h-[80vh] lg:min-h-[90vh] overflow-hidden bg-[#1b120d]"
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
      <div className="absolute right-[-120px] top-20 w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] rounded-full bg-amber-500/20 blur-[120px]" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-5 sm:px-6 flex items-center">

        <div className="max-w-2xl space-y-6">

          {/* Badge */}
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs sm:text-sm border border-white/10">
            ☕ Specialty Coffee • Piano Experience
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white space-y-2">
            <span className="block">Piano Coffee</span>
            <span className="block text-amber-400">
              Every Morning
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg leading-7 text-gray-200 max-w-xl">
            در  پیانو کافه هر فنجان نتیجه‌ی انتخاب دقیق دانه‌ها و رست تخصصی است
            ما یک تجربه آرام و متمرکز برای شروع روزت می‌سازیم
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 sm:gap-12 pt-4">

            <div className="flex flex-col items-start">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                +1200
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                مشتری وفادار
              </p>
            </div>

            <div className="flex flex-col items-start">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                +85
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                ترکیب قهوه
              </p>
            </div>

            <div className="flex flex-col items-start">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                +10
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                سال تجربه
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}