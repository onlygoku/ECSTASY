import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEvents } from '../hooks/useEvents';
import { EventCard } from '../components/EventCard';
import { EventModal } from '../components/EventModal';
import { FilterBar } from '../components/FilterBar';

export const Events = () => {
  const { events, loading, error } = useEvents();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents =
    activeCategory === 'all'
      ? events
      : events.filter((event) => event.category === activeCategory);

  if (loading) {
    return (
      <section
        id="events"
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-upside-black to-upside-darkRed"
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="w-16 h-16 border-4 border-upside-crimson border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-gray-400 font-mono uppercase tracking-wider">
            Loading Events...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="events"
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-upside-black to-upside-darkRed"
      >
        <div className="text-center px-4">
          <p className="text-upside-crimson font-mono mb-4">Error loading events</p>
          <p className="text-gray-500 text-sm">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="events"
      className="min-h-screen py-20 px-4 bg-gradient-to-b from-upside-darkRed via-upside-black to-upside-black film-grain"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold text-upside-crimson red-glow mb-4">
            EVENTS
          </h2>
          <p className="text-gray-400 font-mono tracking-wider">
            Discover what awaits in the depths
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <FilterBar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </motion.div>

        {/* Events Grid */}
        <AnimatePresence mode="wait">
          {filteredEvents.length === 0 ? (
            <motion.div
              key="no-events"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <p className="text-gray-500 font-mono">
                No events found in this category
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="events-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <EventCard
                    event={event}
                    onClick={() => setSelectedEvent(event)}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Event Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
};
