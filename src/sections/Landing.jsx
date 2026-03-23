import { motion } from 'framer-motion';
import { Countdown } from '../components/Countdown';
import { SITE_CONFIG } from '../config/siteConfig';

export const Landing = () => {
  return (
    <section
      id="landing"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden vignette film-grain"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-upside-black via-upside-darkRed to-upside-black" />

      {/* Animated vines SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d="M 0 50 Q 100 20, 200 50 T 400 50 T 600 50 T 800 50"
          stroke="#8b0000"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        />

        <motion.path
          d="M 100 100 Q 200 80, 300 120 T 500 120 T 700 120 T 900 120"
          stroke="#8b0000"
          strokeWidth="1.5"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 4, delay: 0.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        />

        <motion.path
          d="M 1920 300 Q 1700 280, 1500 320 T 1100 320 T 700 320 T 300 320"
          stroke="#8b0000"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.35 }}
          transition={{ duration: 3.5, delay: 1, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center w-full px-4 sm:px-6">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-10 sm:mb-16"
        >
          {/* text-[4rem] = 64px on mobile, well above the 5xl (48px) countdown numbers */}
          <h1
            className="glitch-text text-[4rem] sm:text-7xl md:text-9xl lg:text-[12rem] font-display font-black text-upside red-glow tracking-wider leading-none break-words"
            data-text={SITE_CONFIG.eventName}
          >
            {SITE_CONFIG.eventName}
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-4 text-sm sm:text-xl md:text-2xl font-mono tracking-[0.2em] sm:tracking-[0.3em] text-gray-400 uppercase"
          >
            {SITE_CONFIG.eventYear}
          </motion.div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <Countdown key={SITE_CONFIG.countdownTargetDate} targetDate={SITE_CONFIG.countdownTargetDate} />
        </motion.div>
      </div>
    </section>
  );
};