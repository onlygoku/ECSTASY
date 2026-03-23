import { motion } from 'framer-motion';
import { formatDateShort } from '../utils/formatDate';

export const EventCard = ({ event, onClick }) => {
  const imageUrl = event.poster;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="group relative rounded-lg overflow-hidden cursor-pointer border-2 border-upside-red/20 hover:border-upside-crimson transition-colors duration-300"
    >
      {/* Poster Image */}
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={event.title}
          className="w-full h-auto block transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      ) : (
        <div className="w-full aspect-square bg-gradient-to-br from-upside-darkRed to-upside-black flex items-center justify-center">
          <span className="text-4xl font-display font-bold text-upside-crimson opacity-30">
            {event.title.charAt(0)}
          </span>
        </div>
      )}

      {/* Overlay on Hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-all duration-300 flex flex-col justify-end p-6">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-2xl font-display font-bold text-white mb-2 red-glow">
            {event.title}
          </h3>
          {event.date && (
            <p className="text-sm font-mono text-upside-crimson mb-3">
              {formatDateShort(event.date)}
            </p>
          )}
          <div className="inline-block px-4 py-2 bg-upside-crimson/20 border border-upside-crimson rounded text-sm font-mono uppercase tracking-wider text-white">
            View Details
          </div>
        </div>
      </div>
    </motion.div>
  );
};