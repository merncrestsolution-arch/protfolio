import { useRef, useCallback } from 'react';

export function useCardTilt(maxTilt = 15) {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;   // 0..1
    const y = (e.clientY - rect.top) / rect.height;    // 0..1
    const tiltX = (y - 0.5) * -maxTilt;  // negative: top of card tilts toward user
    const tiltY = (x - 0.5) * maxTilt;
    ref.current.style.transform =
      `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02,1.02,1.02)`;
  }, [maxTilt]);

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
