import { useEffect, useRef } from 'react';

export const SporeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;
    let particles = [];
    let lastTime = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight; // only viewport, NOT scrollHeight
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedY = Math.random() * 0.4 + 0.1;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.pulsePhase += this.pulseSpeed;
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
        if (this.x < 0 || this.x > canvas.width) {
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.2 + 0.8;
        // Single arc only — no double draw glow
        ctx.fillStyle = `rgba(255, 27, 68, ${this.opacity * pulse})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * pulse, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Reduced particle count — max 50
    const particleCount = Math.min(
      Math.floor((window.innerWidth * window.innerHeight) / 20000),
      50
    );
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Throttle to ~30fps instead of 60fps
    const animate = (timestamp) => {
      animationFrameId = requestAnimationFrame(animate);
      if (timestamp - lastTime < 33) return; // ~30fps
      lastTime = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
};