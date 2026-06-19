import { useEffect, useRef, type ReactNode } from 'react';

interface MouseParallaxProviderProps {
  children: ReactNode;
}

/**
 * Sets the global `--mouse-x` and `--mouse-y` CSS custom properties (normalized
 * to [-1, 1]) on the document root. Child layers read these to shift in depth
 * via `transform: translate(calc(var(--mouse-x) * Npx), ...)`.
 *
 * Disabled on mobile (< 768px): the vars stay at 0 so no transforms apply.
 */
export function MouseParallaxProvider({ children }: MouseParallaxProviderProps) {
  const frame = useRef<number | null>(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const root = document.documentElement;

    const apply = () => {
      root.style.setProperty('--mouse-x', target.current.x.toFixed(4));
      root.style.setProperty('--mouse-y', target.current.y.toFixed(4));
      frame.current = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      target.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
      if (frame.current === null) {
        frame.current = requestAnimationFrame(apply);
      }
    };

    const resetIfMobile = () => {
      if (window.innerWidth < 768) {
        root.style.setProperty('--mouse-x', '0');
        root.style.setProperty('--mouse-y', '0');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resetIfMobile);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resetIfMobile);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  return <>{children}</>;
}
