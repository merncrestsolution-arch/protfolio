export const transitions = {
  smooth: {
    duration: 0.6,
    ease: [0.25, 0.1, 0.25, 1],
  },
  bounce: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 20,
  },
  slow: {
    duration: 1.2,
    ease: [0.25, 0.1, 0.25, 1],
  },
  fast: {
    duration: 0.3,
    ease: [0.25, 0.1, 0.25, 1],
  },
};
