import { useEffect } from 'react';
import { useMouseStore } from '../store/mouseStore';

export function useGlobalMouse() {
  const setMouse = useMouseStore(s => s.setMouse);
  const tick = useMouseStore(s => s.tick);

  useEffect(() => {
    // Skip on mobile
    if (window.innerWidth < 768) return;

    const onMove = (e: MouseEvent) => setMouse(e.clientX, e.clientY);
    window.addEventListener('mousemove', onMove, { passive: true });

    let rafId: number;
    const loop = () => { tick(); rafId = requestAnimationFrame(loop); };
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, [setMouse, tick]);
}
