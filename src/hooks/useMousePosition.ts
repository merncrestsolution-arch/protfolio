import { useEffect, useRef, useState } from 'react';

export interface MousePosition {
  x: number;
  y: number;
}

/**
 * Tracks the mouse position normalized to the [-1, 1] range, throttled to
 * requestAnimationFrame for performance.
 */
export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);
  const target = useRef<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      target.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -((event.clientY / window.innerHeight) * 2 - 1),
      };
      if (frame.current === null) {
        frame.current = requestAnimationFrame(() => {
          setPosition(target.current);
          frame.current = null;
        });
      }
    };

    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  return position;
}
