import { useEffect, useRef } from 'react';
import { useMouseStore } from '../../store/mouseStore';

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const x = useMouseStore(s => s.x);
  const y = useMouseStore(s => s.y);

  useEffect(() => {
    if (!glowRef.current || window.innerWidth < 768) return;

    const glow = glowRef.current;
    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;
  }, [x, y]);

  return (
    <>
      {/* Main glow cursor - REDUCED intensity */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 opacity-50"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, rgba(124, 77, 255, 0.05) 30%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      
      {/* Secondary glow layer - REDUCED */}
      <div
        className="pointer-events-none fixed z-40 -translate-x-1/2 -translate-y-1/2 opacity-40"
        style={{
          left: `${x}px`,
          top: `${y}px`,
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(0, 255, 148, 0.1) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
    </>
  );
}
