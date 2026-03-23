import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getImageUrl } from '../utils/getImageUrl';
import { formatDate } from '../utils/formatDate';
import { useModal } from '../context/ModalContext';

export const EventModal = ({ event, onClose }) => {
  const { setIsModalOpen } = useModal();
  const imageUrl = getImageUrl(event?.poster);

  useEffect(() => {
    if (event) {
      setIsModalOpen(true);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      setIsModalOpen(false);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      setIsModalOpen(false);
    };
  }, [event, setIsModalOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!event) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

        {/* Modal Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass border-2 border-upside-red rounded-lg film-grain"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-upside-black/80 border border-upside-red hover:bg-upside-crimson/20 rounded-full transition-colors group"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6 text-upside-crimson group-hover:text-white transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Image */}
            <div className="relative aspect-[3/4] md:aspect-auto">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-upside-darkRed to-upside-black flex items-center justify-center">
                  <span className="text-8xl font-display font-bold text-upside-crimson opacity-30">
                    {event.title.charAt(0)}
                  </span>
                </div>
              )}
            </div>

            {/* Right: Details */}
            <div className="p-8 md:p-10 flex flex-col justify-between">
              <div>
                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 red-glow leading-tight">
                  {event.title}
                </h2>

                {/* Date & Category */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {event.date && (
                    <span className="px-3 py-1 bg-upside-crimson/20 border border-upside-crimson rounded text-sm font-mono text-upside-crimson">
                      {formatDate(event.date)}
                    </span>
                  )}
                  {event.category && (
                    <span className="px-3 py-1 bg-upside-red/20 border border-upside-red rounded text-sm font-mono text-gray-300 uppercase">
                      {event.category}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  {event.description}
                </p>
              </div>

              {/* Register Button */}
              {event.registrationLink && (
                <motion.a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block w-full text-center px-8 py-4 bg-upside-crimson hover:bg-upside-bloodRed text-white font-mono uppercase tracking-wider rounded transition-colors border-2 border-upside-crimson hover:border-white"
                >
                  Register Now
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
