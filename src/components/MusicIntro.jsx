import { useEffect, useState } from 'react';
import { useMusic } from '../context/MusicContext';
import { SITE_CONFIG } from '../config/siteConfig';

export function MusicIntro() {
  const { choose } = useMusic();
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleChoice = (withMusic) => {
    setLeaving(true);
    setTimeout(() => choose(withMusic), 700);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        opacity: leaving ? 0 : 1,
        transition: leaving ? 'opacity 0.7s ease-in' : 'none',
        pointerEvents: leaving ? 'none' : 'all',
      }}
    >
      {/* Ambient blood red glow — top */}
      <div style={{
        position: 'absolute',
        width: '700px',
        height: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,0,0,0.2) 0%, transparent 65%)',
        top: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        pointerEvents: 'none',
        animation: 'ambientPulse 5s ease-in-out infinite',
      }} />

      {/* Ambient crimson glow — bottom */}
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(220,20,60,0.1) 0%, transparent 65%)',
        bottom: '-80px',
        left: '50%',
        transform: 'translateX(-50%)',
        pointerEvents: 'none',
        animation: 'ambientPulse 5s ease-in-out infinite reverse',
      }} />

      {/* Scanlines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.015) 3px, rgba(255,255,255,0.015) 4px)',
        pointerEvents: 'none',
      }} />

      {/* Dark Card */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          backgroundColor: '#111010',
          border: '1px solid rgba(139,0,0,0.5)',
          borderRadius: '20px',
          padding: '52px 40px 44px',
          width: '90%',
          maxWidth: '420px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          boxShadow: '0 0 0 1px rgba(139,0,0,0.15), 0 8px 60px rgba(0,0,0,0.8), 0 0 40px rgba(139,0,0,0.08)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(28px) scale(0.96)',
          transition: 'opacity 0.6s ease 0.15s, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.15s',
        }}
      >
        {/* Top decorative line */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #8b0000, #dc143c, #8b0000, transparent)',
        }} />

        {/* Eyebrow */}
        <p style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '10px',
          letterSpacing: '5px',
          color: '#8b0000',
          textTransform: 'uppercase',
          margin: 0,
        }}>
          ◆ &nbsp;Welcome&nbsp; ◆
        </p>

        {/* Title */}
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(36px, 10vw, 56px)',
          fontWeight: 900,
          color: '#f5f0e8',
          textAlign: 'center',
          margin: 0,
          lineHeight: 1,
          letterSpacing: '-1px',
          textShadow: '0 0 30px rgba(220,20,60,0.25)',
        }}>
          {SITE_CONFIG.eventName}
        </h1>

        {/* Red accent divider */}
        <div style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #8b0000, transparent)',
          margin: '0',
        }} />

        {/* Subtitle */}
        <p style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: '11px',
          letterSpacing: '2px',
          color: '#555',
          textTransform: 'uppercase',
          margin: 0,
        }}>
          Choose your experience
        </p>

        {/* Buttons */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          width: '100%',
          marginTop: '4px',
        }}>
          {/* ENTER WITH MUSIC — filled crimson */}
          <button
            onClick={() => handleChoice(true)}
            style={{
              width: '100%',
              padding: '16px 24px',
              background: '#8b0000',
              border: '1px solid #8b0000',
              borderRadius: '999px',
              color: '#f5f0e8',
              fontSize: '11px',
              fontFamily: "'Space Mono', monospace",
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#dc143c';
              e.currentTarget.style.borderColor = '#dc143c';
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(220,20,60,0.35)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#8b0000';
              e.currentTarget.style.borderColor = '#8b0000';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            ♪ &nbsp;Enter With Music
          </button>

          {/* ENTER WITHOUT MUSIC — outlined */}
          <button
            onClick={() => handleChoice(false)}
            style={{
              width: '100%',
              padding: '16px 24px',
              background: 'transparent',
              border: '1px solid #333',
              borderRadius: '999px',
              color: '#666',
              fontSize: '11px',
              fontFamily: "'Space Mono', monospace",
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#8b0000';
              e.currentTarget.style.color = '#f5f0e8';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#333';
              e.currentTarget.style.color = '#666';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ✕ &nbsp;Enter Without Music
          </button>
        </div>

        {/* Tagline */}
        <p style={{
          fontFamily: "'Crimson Text', serif",
          fontSize: '14px',
          color: '#444',
          margin: '4px 0 0',
          textAlign: 'center',
          fontStyle: 'italic',
          letterSpacing: '0.5px',
        }}>
          Music's fire!
        </p>

        {/* Bottom decorative line */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '40%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #8b0000, transparent)',
        }} />
      </div>

      <style>{`
        @keyframes ambientPulse {
          0%, 100% { opacity: 0.6; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.08); }
        }
      `}</style>
    </div>
  );
}