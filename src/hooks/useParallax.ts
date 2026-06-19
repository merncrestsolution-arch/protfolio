import { useEffect, useRef } from 'react';
import { useMouseStore } from '../store/mouseStore';

export function useParallax(speed: number = 20) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const unsubscribe = useMouseStore.subscribe((state) => {
      if (!ref.current) return;
      const { nx, ny } = state;
      ref.current.style.transform = `translate(${nx * -speed}px, ${ny * -speed}px)`;
    });

    return () => unsubscribe();
  }, [speed]);

  return ref;
}
