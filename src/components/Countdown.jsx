import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Countdown = ({ targetDate = '2026-05-15T00:00:00' }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        <div className="text-5xl md:text-7xl font-display font-bold text-upside-crimson red-glow mb-2">
          {String(value).padStart(2, '0')}
        </div>
        <div className="absolute inset-0 text-5xl md:text-7xl font-display font-bold text-upside-crimson opacity-20 blur-sm">
          {String(value).padStart(2, '0')}
        </div>
      </div>
      <div className="text-xs md:text-sm font-mono uppercase tracking-widest text-gray-400">
        {label}
      </div>
    </motion.div>
  );

  return (
    <div className="flex gap-4 md:gap-8 justify-center items-center">
      <TimeUnit value={timeLeft.days} label="Days" />
      <div className="text-3xl md:text-5xl text-upside-crimson opacity-50 font-display">:</div>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <div className="text-3xl md:text-5xl text-upside-crimson opacity-50 font-display">:</div>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <div className="text-3xl md:text-5xl text-upside-crimson opacity-50 font-display">:</div>
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};
