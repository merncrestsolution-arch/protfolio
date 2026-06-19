import { useMouseStore } from '../../store/mouseStore';

export function MouseTrackingDemo() {
  const { snx, sny } = useMouseStore();
  const smoothRotateX = sny * 8;
  const smoothRotateY = snx * 8;
  const smoothRotateZ = (snx * sny) * 2;

  return (
    <div className="fixed bottom-8 right-8 z-50 space-y-4 pointer-events-none">
      {/* Debug info panel */}
      <div className="glass p-4 rounded-lg text-xs font-mono space-y-1 pointer-events-auto">
        <div className="text-primary font-bold mb-2">360° Tracking Active</div>
        <div>X: {smoothRotateX.toFixed(2)}°</div>
        <div>Y: {smoothRotateY.toFixed(2)}°</div>
        <div>Z: {smoothRotateZ.toFixed(2)}°</div>
      </div>

      {/* Demo cards showcasing different intensities */}
      <div className="space-y-2 pointer-events-auto">
        <div className="glass p-3 rounded track-360-subtle text-xs">
          <div className="text-accent">Subtle</div>
        </div>
        <div className="glass p-3 rounded track-360 text-xs">
          <div className="text-accent">Normal</div>
        </div>
        <div className="glass p-3 rounded track-360-intense text-xs">
          <div className="text-accent">Intense</div>
        </div>
      </div>
    </div>
  );
}

export function MouseTrackingShowcase() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-primary track-360">
          360° Mouse Tracking Demo
        </h2>
        <p className="text-muted">Move your mouse to see the 3D effects</p>
      </div>

      {/* Grid of example cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Subtle tracking card */}
        <div className="glass p-6 rounded-2xl track-360-subtle hover-lift-3d space-y-4">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="text-xl font-bold text-primary">Subtle</h3>
          <p className="text-sm text-muted">
            Gentle 3D rotation perfect for large sections and containers.
          </p>
        </div>

        {/* Normal tracking card */}
        <div className="glass p-6 rounded-2xl track-360 hover-lift-3d space-y-4">
          <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
            <span className="text-2xl">⚡</span>
          </div>
          <h3 className="text-xl font-bold text-secondary">Normal</h3>
          <p className="text-sm text-muted">
            Balanced tracking for cards and interactive elements.
          </p>
        </div>

        {/* Intense tracking card */}
        <div className="glass p-6 rounded-2xl track-360-intense hover-lift-3d space-y-4">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
            <span className="text-2xl">🚀</span>
          </div>
          <h3 className="text-xl font-bold text-accent">Intense</h3>
          <p className="text-sm text-muted">
            Strong tracking for buttons and small focal elements.
          </p>
        </div>
      </div>

      {/* Parallax layers demo */}
      <div className="relative h-96 overflow-hidden rounded-2xl glass">
        <div className="parallax-bg absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-30">Background</div>
        </div>
        <div className="parallax-mid absolute inset-0 flex items-center justify-center">
          <div className="text-4xl opacity-60">Middle</div>
        </div>
        <div className="parallax-fg absolute inset-0 flex items-center justify-center">
          <div className="text-2xl text-primary font-bold">Foreground</div>
        </div>
      </div>

      {/* Floating elements demo */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {['🎨', '💎', '✨', '🌟'].map((emoji, i) => (
          <div
            key={i}
            className="glass p-8 rounded-2xl float-track hover-rotate-3d flex items-center justify-center"
          >
            <span className="text-5xl">{emoji}</span>
          </div>
        ))}
      </div>

      {/* Animated elements */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass p-6 rounded-2xl animate-float-3d">
          <div className="text-center space-y-2">
            <div className="text-3xl">🎭</div>
            <div className="text-sm text-accent">Float 3D</div>
          </div>
        </div>
        <div className="glass p-6 rounded-2xl animate-tilt-3d">
          <div className="text-center space-y-2">
            <div className="text-3xl">🎪</div>
            <div className="text-sm text-secondary">Tilt 3D</div>
          </div>
        </div>
        <div className="glass p-6 rounded-2xl track-360 hover-lift-3d">
          <div className="text-center space-y-2">
            <div className="text-3xl">🎯</div>
            <div className="text-sm text-primary">Hover Lift</div>
          </div>
        </div>
      </div>
    </div>
  );
}
