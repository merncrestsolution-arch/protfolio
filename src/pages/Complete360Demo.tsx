import { MouseTrackingControls } from '../components/common/MouseTrackingControls';

export function Complete360Demo() {
  return (
    <div className="min-h-screen bg-bg text-white overflow-hidden">
      {/* Debug Controls */}
      <MouseTrackingControls showDebug={false} position="bottom-right" />

      {/* Animated Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="parallax-bg absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-3d" />
        <div className="parallax-mid absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-tilt-3d" />
        <div className="parallax-fg absolute top-1/2 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center perspective-container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 track-360-subtle">
            <div className="inline-block glass px-4 py-2 rounded-full text-sm text-primary font-mono">
              360° Mouse Tracking Demo
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black">
              <span className="text-glow">Move Your Mouse</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto">
              Experience immersive 3D effects that respond to your every movement
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="track-360-intense hover-lift-3d glass px-8 py-4 rounded-xl font-bold text-lg neon-border">
                Get Started
              </button>
              <button className="track-360-intense hover-lift-3d glass px-8 py-4 rounded-xl font-bold text-lg">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Intensity Showcase */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-4 track-360-subtle">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Tracking Intensities
              </h2>
              <p className="text-muted text-lg">
                Three levels of responsiveness for different use cases
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Subtle */}
              <div className="track-360-subtle hover-lift-3d glass p-8 rounded-2xl space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-3xl">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-primary">Subtle</h3>
                <p className="text-muted">
                  Perfect for large sections and hero areas. Gentle movement that doesn't distract.
                </p>
                <div className="font-mono text-xs text-accent">
                  .track-360-subtle
                </div>
              </div>

              {/* Normal */}
              <div className="track-360 hover-lift-3d glass p-8 rounded-2xl space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center text-3xl">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold text-secondary">Normal</h3>
                <p className="text-muted">
                  Great for cards and content blocks. Balanced tracking that feels natural.
                </p>
                <div className="font-mono text-xs text-accent">
                  .track-360
                </div>
              </div>

              {/* Intense */}
              <div className="track-360-intense hover-lift-3d glass p-8 rounded-2xl space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-3xl">
                  🚀
                </div>
                <h3 className="text-2xl font-bold text-accent">Intense</h3>
                <p className="text-muted">
                  Ideal for buttons and CTAs. Strong movement that demands attention.
                </p>
                <div className="font-mono text-xs text-accent">
                  .track-360-intense
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parallax Layers */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-12 track-360-subtle">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary">
                Parallax Depth
              </h2>
              <p className="text-muted text-lg">
                Create depth with layered movement
              </p>
            </div>

            <div className="relative h-96 glass rounded-3xl overflow-hidden">
              <div className="parallax-bg absolute inset-0 flex items-center justify-center">
                <div className="text-7xl font-black text-white/10">BACKGROUND</div>
              </div>
              <div className="parallax-mid absolute inset-0 flex items-center justify-center">
                <div className="text-5xl font-black text-white/30">MIDDLE</div>
              </div>
              <div className="parallax-fg absolute inset-0 flex items-center justify-center">
                <div className="text-3xl font-black text-primary text-glow">FOREGROUND</div>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Elements */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-4 track-360-subtle">
              <h2 className="text-4xl md:text-5xl font-bold text-accent">
                Floating Effects
              </h2>
              <p className="text-muted text-lg">
                Elements that react and float in 3D space
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['🎨', '💎', '✨', '🌟', '🎭', '🎪', '🎯', '🎸'].map((emoji, i) => (
                <div
                  key={i}
                  className="float-track hover-rotate-3d glass p-8 rounded-2xl flex items-center justify-center aspect-square"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <span className="text-6xl">{emoji}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hover Effects */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-4 track-360-subtle">
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Hover Interactions
              </h2>
              <p className="text-muted text-lg">
                Enhanced hover states with 3D transforms
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Lift Effect */}
              <div className="track-360 hover-lift-3d glass p-12 rounded-2xl space-y-4 cursor-pointer">
                <div className="text-5xl mb-4">🎁</div>
                <h3 className="text-2xl font-bold text-primary">Hover Lift</h3>
                <p className="text-muted">
                  Lifts up with glowing shadow on hover
                </p>
                <div className="font-mono text-xs text-accent">
                  .hover-lift-3d
                </div>
              </div>

              {/* Rotate Effect */}
              <div className="track-360 hover-rotate-3d glass p-12 rounded-2xl space-y-4 cursor-pointer">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-secondary">Hover Rotate</h3>
                <p className="text-muted">
                  Rotates and scales on hover
                </p>
                <div className="font-mono text-xs text-accent">
                  .hover-rotate-3d
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animations */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-4 track-360-subtle">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary">
                3D Animations
              </h2>
              <p className="text-muted text-lg">
                Continuous animations in 3D space
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass p-12 rounded-2xl animate-float-3d">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🎈</div>
                  <h3 className="text-xl font-bold text-primary">Float 3D</h3>
                  <p className="text-sm text-muted">Gentle floating motion</p>
                </div>
              </div>

              <div className="glass p-12 rounded-2xl animate-tilt-3d">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🎪</div>
                  <h3 className="text-xl font-bold text-secondary">Tilt 3D</h3>
                  <p className="text-sm text-muted">Subtle tilting motion</p>
                </div>
              </div>

              <div className="glass p-12 rounded-2xl track-360-intense">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🌐</div>
                  <h3 className="text-xl font-bold text-accent">Track 360</h3>
                  <p className="text-sm text-muted">Follows your mouse</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8 track-360-subtle">
            <h2 className="text-5xl md:text-6xl font-black">
              Ready to Create?
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Add these effects to your portfolio with just a CSS class or React hook
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="track-360-intense hover-lift-3d glass px-10 py-5 rounded-xl font-bold text-lg neon-border">
                Get Started Now
              </button>
              <button className="track-360-intense hover-lift-3d glass px-10 py-5 rounded-xl font-bold text-lg">
                View Documentation
              </button>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <footer className="py-12 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <div className="text-sm text-muted">
              360° Mouse Tracking System
            </div>
            <div className="flex justify-center gap-8 text-xs font-mono">
              <span>✓ Performance Optimized</span>
              <span>✓ Mobile Responsive</span>
              <span>✓ Accessibility Friendly</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
