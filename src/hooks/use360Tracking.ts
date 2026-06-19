import { useEffect, useRef } from 'react';
import { useMouseStore } from '../store/mouseStore';

interface Use360TrackingOptions {
  intensity?: 'subtle' | 'normal' | 'intense';
  enableZ?: boolean;
  customMultiplier?: number;
}

export function use360Tracking(options: Use360TrackingOptions = {}) {
  const { intensity = 'normal', enableZ = true, customMultiplier } = options;
  const elementRef = useRef<HTMLDivElement>(null);
  
  const snx = useMouseStore(s => s.snx);
  const sny = useMouseStore(s => s.sny);
  const smoothRotateX = sny * 8;
  const smoothRotateY = snx * 8;
  const smoothRotateZ = (snx * sny) * 2;

  useEffect(() => {
    if (!elementRef.current || window.innerWidth < 768) return;

    const multipliers = {
      subtle: 0.15,
      normal: 0.5,
      intense: 0.8,
    };

    const mult = customMultiplier ?? multipliers[intensity];
    const element = elementRef.current;

    const updateTransform = () => {
      const rotateY = smoothRotateY * mult;
      const rotateX = smoothRotateX * mult;
      const rotateZ = enableZ ? smoothRotateZ * mult * 0.5 : 0;

      element.style.transform = `
        perspective(2000px)
        rotateY(${rotateY}deg)
        rotateX(${rotateX}deg)
        ${enableZ ? `rotateZ(${rotateZ}deg)` : ''}
      `;
    };

    let rafId: number;
    const loop = () => {
      updateTransform();
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(rafId);
  }, [smoothRotateX, smoothRotateY, smoothRotateZ, intensity, enableZ, customMultiplier]);

  return elementRef;
}

export function use360TrackingStyle(options: Use360TrackingOptions = {}) {
  const { intensity = 'normal', enableZ = true, customMultiplier } = options;
  
  const snx = useMouseStore(s => s.snx);
  const sny = useMouseStore(s => s.sny);
  const smoothRotateX = sny * 8;
  const smoothRotateY = snx * 8;
  const smoothRotateZ = (snx * sny) * 2;

  const multipliers = {
    subtle: 0.15,
    normal: 0.5,
    intense: 0.8,
  };

  const mult = customMultiplier ?? multipliers[intensity];

  return {
    transform: `
      perspective(2000px)
      rotateY(${smoothRotateY * mult}deg)
      rotateX(${smoothRotateX * mult}deg)
      ${enableZ ? `rotateZ(${smoothRotateZ * mult * 0.5}deg)` : ''}
    `,
    transformStyle: 'preserve-3d' as const,
    willChange: 'transform' as const,
  };
}
