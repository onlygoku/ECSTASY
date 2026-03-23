export const VineBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1920 1080"
        style={{ opacity: 0.4 }}
      >
        {/* Top left — slithers right then resets */}
        <path
          d="M -200 100 Q 150 40, 350 110 T 700 90 T 1050 105 T 1350 85"
          stroke="#dc143c"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            dur="8s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            keyTimes="0;0.85;1"
            values="0,0; 280,0; 0,0"
          />
          <animate
            attributeName="opacity"
            dur="8s"
            repeatCount="indefinite"
            keyTimes="0;0.7;0.85;1"
            values="0.3;0.7;0;0.3"
          />
        </path>

        {/* Top right — slithers left */}
        <path
          d="M 2100 160 Q 1720 90, 1510 160 T 1180 145 T 860 160 T 560 140"
          stroke="#ff1744"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            dur="10s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            keyTimes="0;0.85;1"
            values="0,0; -300,0; 0,0"
          />
          <animate
            attributeName="opacity"
            dur="10s"
            repeatCount="indefinite"
            keyTimes="0;0.7;0.85;1"
            values="0.7;0.3;0;0.7"
          />
        </path>

        {/* Bottom left — slithers right with slight vertical wobble */}
        <path
          d="M -300 920 Q 250 860, 520 915 T 1020 905 T 1520 920 T 1900 900"
          stroke="#ff1744"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            dur="9s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            keyTimes="0;0.85;1"
            values="0,0; 320,15; 0,0"
          />
          <animate
            attributeName="opacity"
            dur="9s"
            repeatCount="indefinite"
            keyTimes="0;0.7;0.85;1"
            values="0.3;0.6;0;0.3"
          />
        </path>

        {/* Bottom right — slithers left */}
        <path
          d="M 2200 990 Q 1660 940, 1410 985 T 1010 975 T 620 990 T 200 970"
          stroke="#dc143c"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            dur="11s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            keyTimes="0;0.85;1"
            values="0,0; -350,-10; 0,0"
          />
          <animate
            attributeName="opacity"
            dur="11s"
            repeatCount="indefinite"
            keyTimes="0;0.7;0.85;1"
            values="0.6;0.3;0;0.6"
          />
        </path>

        {/* Extra mid-left diagonal slitherer for depth */}
        <path
          d="M -100 500 Q 200 450, 450 510 T 850 490 T 1150 505"
          stroke="#8b0000"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            dur="13s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            keyTimes="0;0.85;1"
            values="0,0; 400,20; 0,0"
          />
          <animate
            attributeName="opacity"
            dur="13s"
            repeatCount="indefinite"
            keyTimes="0;0.6;0.85;1"
            values="0.2;0.5;0;0.2"
          />
        </path>
      </svg>
    </div>
  );
};