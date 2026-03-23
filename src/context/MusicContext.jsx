import { createContext, useContext, useRef, useState } from 'react';

const MusicContext = createContext(null);

export function MusicProvider({ children }) {
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [hasChosen, setHasChosen] = useState(false);
  const audioRef = useRef(null);

  const choose = (withMusic) => {
    setMusicEnabled(withMusic);
    setHasChosen(true);
    if (withMusic && audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.loop = true;
      audioRef.current.play().catch(() => {});
    }
  };

  const toggle = () => {
    if (!audioRef.current) return;
    if (musicEnabled) {
      audioRef.current.pause();
      setMusicEnabled(false);
    } else {
      audioRef.current.play().catch(() => {});
      setMusicEnabled(true);
    }
  };

  return (
    <MusicContext.Provider value={{ musicEnabled, hasChosen, choose, toggle }}>
      <audio ref={audioRef} src="/src/assets/music/stranger_things.mp3" preload="auto" />
      {children}
    </MusicContext.Provider>
  );
}

export const useMusic = () => useContext(MusicContext);