/**
 * A single global mouse tracker shared across the app. Components (including
 * those inside a Three.js canvas) can read `mouse.x` / `mouse.y` every frame to
 * react to the cursor anywhere on the page — not just over their own element.
 *
 * Values are normalized to [-1, 1]. On touch / mobile they stay at 0.
 */
export const mouse = { x: 0, y: 0 };

let started = false;

export function startMouseTracking(): void {
  if (started || typeof window === 'undefined') return;
  started = true;

  window.addEventListener(
    'mousemove',
    (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    },
    { passive: true }
  );
}
