import { create } from 'zustand';

interface MouseState {
  // Raw pixel position
  x: number;
  y: number;
  // Normalized -1 to 1
  nx: number;
  ny: number;
  // Smoothed (lerped) normalized — use for 3D camera
  snx: number;
  sny: number;
  setMouse: (x: number, y: number) => void;
  tick: () => void; // called every rAF to lerp snx/sny toward nx/ny
}

export const useMouseStore = create<MouseState>((set, get) => ({
  x: 0, y: 0, nx: 0, ny: 0, snx: 0, sny: 0,
  setMouse: (x, y) => {
    const nx = (x / window.innerWidth) * 2 - 1;
    const ny = -((y / window.innerHeight) * 2 - 1);
    set({ x, y, nx, ny });
    // Also update CSS variables for parallax layers
    document.documentElement.style.setProperty('--mouse-x', String(nx));
    document.documentElement.style.setProperty('--mouse-y', String(ny));
  },
  tick: () => {
    const { snx, sny, nx, ny } = get();
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    set({
      snx: lerp(snx, nx, 0.05),
      sny: lerp(sny, ny, 0.05),
    });
  },
}));
