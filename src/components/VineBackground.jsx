export const VineBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1920 1080"
        style={{ opacity: 0.35 }}
      >
        {/* NO feGaussianBlur filter — removed, it was the biggest perf killer */}

        {/* Only 4 paths instead of 8, using CSS animation instead of framer-motion */}

        {/* Top left */}
        <path
          d="M 0 100 Q 150 50, 300 100 T 600 100 T 900 100"
          stroke="#dc143c"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          style={{ animation: 'vineFade 5s ease-in-out infinite alternate' }}
        />

        {/* Top right */}
        <path
          d="M 1920 150 Q 1700 100, 1500 150 T 1200 150 T 900 150"
          stroke="#ff1744"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          style={{ animation: 'vineFade 6s ease-in-out infinite alternate-reverse' }}
        />

        {/* Bottom left */}
        <path
          d="M 0 900 Q 250 850, 500 900 T 1000 900 T 1500 900"
          stroke="#ff1744"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          style={{ animation: 'vineFade 5.5s ease-in-out infinite alternate' }}
        />

        {/* Bottom right */}
        <path
          d="M 1920 980 Q 1650 930, 1400 980 T 1000 980 T 600 980"
          stroke="#dc143c"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          style={{ animation: 'vineFade 7s ease-in-out infinite alternate-reverse' }}
        />
      </svg>

      <style>{`
        @keyframes vineFade {
          0%   { opacity: 0.2; }
          100% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
};