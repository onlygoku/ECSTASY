import { motion } from 'framer-motion';
import { CATEGORIES } from '../constants/categories';

export const FilterBar = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
      <div className="flex gap-3 min-w-max md:min-w-0 md:flex-wrap md:justify-center px-4">
        {CATEGORIES.map((category, index) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryChange(category.id)}
            className={`
              px-6 py-2.5 rounded-full font-mono text-sm uppercase tracking-wider
              border-2 transition-all duration-300 whitespace-nowrap
              ${
                activeCategory === category.id
                  ? 'bg-upside-crimson border-upside-crimson text-white shadow-lg shadow-upside-crimson/30'
                  : 'bg-transparent border-upside-red/40 text-gray-300 hover:border-upside-crimson hover:text-upside-crimson'
              }
            `}
            style={{
              boxShadow:
                activeCategory === category.id
                  ? `0 0 20px ${category.color}40`
                  : 'none',
            }}
          >
            {category.label}
          </motion.button>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
