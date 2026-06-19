import { useEffect, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export function AnimatedCounter({ end, suffix = '', duration = 2 }: AnimatedCounterProps) {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, end, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => {
        setDisplayValue(Math.floor(latest));
      },
    });

    return controls.stop;
  }, [isInView, count, end, duration]);

  return (
    <motion.span ref={ref} className="font-display text-5xl md:text-6xl font-black text-primary">
      {displayValue}{suffix}
    </motion.span>
  );
}
