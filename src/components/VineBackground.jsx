import { motion } from 'framer-motion';

export const VineBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1920 1080"
      >
        <defs>
          <filter id="vineGlow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Vine paths - organic curves across the screen */}
        
        {/* Top left vine */}
        <motion.path
          d="M 0 100 Q 150 50, 300 100 T 600 100 T 900 100"
          stroke="#dc143c"
          strokeWidth="4"
          fill="none"
          filter="url(#vineGlow)"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ 
            duration: 4, 
            ease: 'easeInOut', 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
        />

        {/* Top right vine */}
        <motion.path
          d="M 1920 150 Q 1700 100, 1500 150 T 1200 150 T 900 150"
          stroke="#ff1744"
          strokeWidth="3.5"
          fill="none"
          filter="url(#vineGlow)"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ 
            duration: 5, 
            delay: 0.5,
            ease: 'easeInOut', 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
        />

        {/* Middle left vine */}
        <motion.path
          d="M 0 400 Q 200 350, 400 420 T 800 420 T 1200 420"
          stroke="#ff6b6b"
          strokeWidth="3"
          fill="none"
          filter="url(#vineGlow)"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ 
            duration: 6, 
            delay: 1,
            ease: 'easeInOut', 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
        />

        {/* Middle right vine */}
        <motion.path
          d="M 1920 500 Q 1600 450, 1400 500 T 1000 500 T 600 500"
          stroke="#dc143c"
          strokeWidth="3.5"
          fill="none"
          filter="url(#vineGlow)"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ 
            duration: 5.5, 
            delay: 1.5,
            ease: 'easeInOut', 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
        />

        {/* Bottom left vine */}
        <motion.path
          d="M 0 800 Q 250 750, 500 800 T 1000 800 T 1500 800"
          stroke="#ff1744"
          strokeWidth="4"
          fill="none"
          filter="url(#vineGlow)"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ 
            duration: 4.5, 
            delay: 2,
            ease: 'easeInOut', 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
        />

        {/* Bottom right vine */}
        <motion.path
          d="M 1920 900 Q 1650 850, 1400 900 T 1000 900 T 600 900 T 200 900"
          stroke="#ff6b6b"
          strokeWidth="3"
          fill="none"
          filter="url(#vineGlow)"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.65 }}
          transition={{ 
            duration: 6, 
            delay: 2.5,
            ease: 'easeInOut', 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
        />

        {/* Vertical vines - left side */}
        <motion.path
          d="M 100 0 Q 80 200, 120 400 T 100 800 T 120 1080"
          stroke="#dc143c"
          strokeWidth="3"
          fill="none"
          filter="url(#vineGlow)"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ 
            duration: 7, 
            ease: 'easeInOut', 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
        />

        {/* Vertical vines - right side */}
        <motion.path
          d="M 1820 0 Q 1800 250, 1840 500 T 1820 900 T 1840 1080"
          stroke="#ff1744"
          strokeWidth="3.5"
          fill="none"
          filter="url(#vineGlow)"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ 
            duration: 6.5, 
            delay: 0.8,
            ease: 'easeInOut', 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
        />
      </svg>
    </div>
  );
};
