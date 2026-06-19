import { useEffect, useRef, type MutableRefObject } from 'react';

export interface MouseParallax {
  mouseX: MutableRefObject<number>;
  mouseY: MutableRefObject<number>;
}

/**
 * Tracks the cursor position normalized to [-1, 1] in refs (no re-renders).
 * Disabled on mobile viewports (< 768px) where the refs stay at 0.
 */
export function useMouseParallax(): MouseParallax {
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY.current = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return { mouseX, mouseY };
}
