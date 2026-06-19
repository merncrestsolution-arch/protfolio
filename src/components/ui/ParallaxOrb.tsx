interface ParallaxOrbProps {
  className?: string;
  /** Pixel depth the orb shifts with the cursor. */
  depth?: number;
  /** Tailwind gradient/color classes applied to the orb. */
  color?: string;
}

/**
 * A soft gradient orb that shifts with the global mouse parallax CSS vars.
 * Purely decorative; pointer-events disabled. On mobile the vars stay 0, so it
 * renders static.
 */
export function ParallaxOrb({
  className = '',
  depth = 30,
  color = 'bg-primary/20',
}: ParallaxOrbProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className={`absolute rounded-full blur-3xl ${color} ${className}`}
        style={{
          transform: `translate(calc(var(--mouse-x, 0) * ${depth}px), calc(var(--mouse-y, 0) * ${depth}px))`,
          transition: 'transform 0.15s ease-out',
        }}
      />
    </div>
  );
}
