import { ModalProvider } from './context/ModalContext';
import { MusicProvider, useMusic } from './context/MusicContext';
import { MusicIntro } from './components/MusicIntro';
import { Navbar } from './components/Navbar';
import { SporeBackground } from './components/SporeBackground';
import { VineBackground } from './components/VineBackground';
import { Landing } from './sections/Landing';
import { Events } from './sections/Events';

// Small floating music toggle button (shown after user has chosen)
function MusicToggle() {
  const { musicEnabled, hasChosen, toggle } = useMusic();
  if (!hasChosen) return null;

  return (
    <button
      onClick={toggle}
      title={musicEnabled ? 'Mute music' : 'Play music'}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 1000,
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        background: '#0a0a0a',
        border: '1px solid #b00000',
        color: musicEnabled ? '#b00000' : '#444',
        fontSize: '18px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease',
        boxShadow: musicEnabled ? '0 0 12px rgba(176,0,0,0.4)' : 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#ff2222';
        e.currentTarget.style.color = '#ff2222';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#b00000';
        e.currentTarget.style.color = musicEnabled ? '#b00000' : '#444';
      }}
    >
      {musicEnabled ? '♪' : '♩'}
    </button>
  );
}

function AppContent() {
  const { hasChosen } = useMusic();

  return (
    <>
      {/* Music intro gate — disappears once user chooses */}
      {!hasChosen && <MusicIntro />}

      {/* Floating music toggle */}
      <MusicToggle />

      <div className="relative bg-upside-black">
        {/* Atmospheric background effects */}
        <VineBackground />
        <SporeBackground />

        {/* Fixed Navbar (appears on scroll) */}
        <Navbar />

        {/* Main Content - Scrollable Sections */}
        <main>
          <Landing />
          <Events />
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-8 border-t border-upside-red/30 bg-upside-black">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-500 font-mono text-sm">
              © 2026 ECSTASY. All rights reserved.
            </p>
            <p className="text-gray-600 font-mono text-xs mt-2">
              Built with React + Vite + Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

function App() {
  return (
    <ModalProvider>
      <MusicProvider>
        <AppContent />
      </MusicProvider>
    </ModalProvider>
  );
}

export default App;