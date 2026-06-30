export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">

      <div className="flex flex-col items-center gap-6">

        {/* Golden Coffee Pulse */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-yellow-500/80 animate-pulse shadow-lg shadow-yellow-500/40" />
          <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-yellow-400 animate-ping" />
        </div>

        {/* Text */}
        <p className="text-lg font-semibold text-yellow-400 tracking-wide">
          Loading Coffee Panel...
        </p>

        {/* Progress Bar */}
        <div className="w-56 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-gradient-to-r from-yellow-400 to-yellow-600 animate-bounce" />
        </div>

        {/* Small subtitle */}
        <p className="text-xs text-gray-400">
          Preparing your dashboard ☕
        </p>

      </div>
    </div>
  );
}