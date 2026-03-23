import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { useModal } from '../context/ModalContext';
import { SITE_CONFIG } from '../config/siteConfig';

export const Navbar = () => {
  const { showNavbar } = useScrollPosition();
  const { isModalOpen } = useModal();

  // Hide navbar when modal is open
  const shouldShow = showNavbar && !isModalOpen;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-40 glass border-b border-upside-red"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <button
                onClick={() => scrollToSection('landing')}
                className="text-2xl font-display font-bold text-upside-crimson red-glow hover:scale-105 transition-transform"
              >
                {SITE_CONFIG.eventName}
              </button>

              {/* Navigation Links */}
              <div className="flex items-center gap-6 md:gap-8">
                <button
                  onClick={() => scrollToSection('landing')}
                  className="text-sm font-mono uppercase tracking-wider text-gray-300 hover:text-upside-crimson transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('events')}
                  className="text-sm font-mono uppercase tracking-wider text-gray-300 hover:text-upside-crimson transition-colors"
                >
                  Events
                </button>

                {/* Instagram Button */}
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono uppercase tracking-wider text-gray-300 transition-all duration-300 hover:scale-105"
                  style={{ textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#e1306c'}
                  onMouseLeave={e => e.currentTarget.style.color = ''}
                  title="Follow us on Instagram"
                >
                  {/* Instagram SVG icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};