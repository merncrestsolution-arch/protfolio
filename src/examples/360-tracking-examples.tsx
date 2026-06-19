/**
 * 360-Degree Mouse Tracking - Implementation Examples
 * 
 * This file contains practical examples of how to implement
 * the 360-degree tracking system in your components.
 */

import { use360Tracking } from '../hooks/use360Tracking';
import { useMouseStore } from '../store/mouseStore';

// ===================================
// EXAMPLE 1: Basic Card with Tracking
// ===================================

export function TrackingCard() {
  return (
    <div className="track-360 glass p-6 rounded-2xl">
      <h3 className="text-xl font-bold">Tracked Card</h3>
      <p className="text-muted">This card follows your mouse in 3D</p>
    </div>
  );
}

// ===================================
// EXAMPLE 2: Using the Hook
// ===================================

export function CustomTrackedElement() {
  const trackRef = use360Tracking({ 
    intensity: 'normal',
    enableZ: true 
  });

  return (
    <div ref={trackRef} className="glass p-8 rounded-xl">
      <h2>Custom Tracking</h2>
      <p>Controlled via React hook</p>
    </div>
  );
}

// ===================================
// EXAMPLE 3: Accessing Store Values
// ===================================

export function CustomAnimation() {
  const { snx, sny, nx, ny } = useMouseStore();
  const smoothRotateX = sny * 8;
  const smoothRotateY = snx * 8;

  return (
    <div 
      className="glass p-6 rounded-xl"
      style={{
        transform: `
          perspective(1000px)
          rotateY(${smoothRotateY * 0.5}deg)
          rotateX(${smoothRotateX * 0.5}deg)
          translateX(${nx * 10}px)
          translateY(${ny * 10}px)
        `,
        transition: 'transform 0.1s ease-out'
      }}
    >
      <div>Custom Transform Animation</div>
      <div className="text-xs text-muted mt-2">
        X: {smoothRotateX.toFixed(1)}° | Y: {smoothRotateY.toFixed(1)}°
      </div>
    </div>
  );
}

// ===================================
// EXAMPLE 4: Parallax Layers
// ===================================

export function ParallaxSection() {
  return (
    <div className="relative h-screen perspective-container">
      {/* Background layer - moves slowest */}
      <div className="parallax-bg absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Middle layer */}
      <div className="parallax-mid absolute inset-0 flex items-center justify-center">
        <h2 className="text-6xl font-bold opacity-20">Middle Layer</h2>
      </div>

      {/* Foreground layer - moves fastest */}
      <div className="parallax-fg absolute inset-0 flex items-center justify-center">
        <div className="glass p-12 rounded-2xl">
          <h3 className="text-2xl font-bold text-primary">Foreground Content</h3>
        </div>
      </div>
    </div>
  );
}

// ===================================
// EXAMPLE 5: Interactive Button Grid
// ===================================

export function InteractiveGrid() {
  const items = [
    { icon: '🚀', label: 'Launch', color: 'primary' },
    { icon: '⚡', label: 'Speed', color: 'secondary' },
    { icon: '🎯', label: 'Focus', color: 'accent' },
    { icon: '💎', label: 'Quality', color: 'primary' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <button
          key={index}
          className="track-360-intense hover-lift-3d glass p-8 rounded-2xl transition-all"
        >
          <div className="text-5xl mb-2">{item.icon}</div>
          <div className={`text-${item.color} font-bold`}>{item.label}</div>
        </button>
      ))}
    </div>
  );
}

// ===================================
// EXAMPLE 6: Hero Section with Tracking
// ===================================

export function TrackedHeroSection() {
  return (
    <section className="min-h-screen flex items-center perspective-container">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left content - subtle tracking */}
          <div className="track-360-subtle space-y-6">
            <h1 className="text-6xl font-bold">
              Welcome to 360° Experience
            </h1>
            <p className="text-xl text-muted">
              Move your mouse to interact with the page in 3D
            </p>
            <div className="flex gap-4">
              <button className="track-360-intense hover-lift-3d glass px-8 py-3 rounded-xl">
                Get Started
              </button>
            </div>
          </div>

          {/* Right visual - normal tracking */}
          <div className="track-360 relative h-96">
            <div className="absolute inset-0 glass rounded-2xl flex items-center justify-center">
              <div className="text-9xl">🌐</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===================================
// EXAMPLE 7: Stats Cards with Float Effect
// ===================================

export function StatsCards() {
  const stats = [
    { value: '25+', label: 'Projects', delay: 0 },
    { value: '5+', label: 'Years', delay: 100 },
    { value: '50+', label: 'Clients', delay: 200 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="float-track hover-lift-3d glass p-8 rounded-2xl text-center"
          style={{ animationDelay: `${stat.delay}ms` }}
        >
          <div className="text-5xl font-bold text-primary mb-2">
            {stat.value}
          </div>
          <div className="text-muted text-lg">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

// ===================================
// EXAMPLE 8: Background Orbs
// ===================================

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="parallax-bg absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-3d" />
      <div className="parallax-mid absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-tilt-3d" />
      <div className="parallax-fg absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
    </div>
  );
}

// ===================================
// EXAMPLE 9: Product Card
// ===================================

export function ProductCard({ 
  title, 
  description, 
  price 
}: { 
  title: string; 
  description: string; 
  price: string; 
}) {
  return (
    <div className="track-360 hover-rotate-3d glass p-6 rounded-2xl space-y-4 cursor-pointer">
      <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl float-track" />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-muted">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-primary text-2xl font-bold">{price}</span>
        <button className="track-360-intense hover-lift-3d px-6 py-2 bg-primary text-bg rounded-lg font-bold">
          Buy Now
        </button>
      </div>
    </div>
  );
}

// ===================================
// EXAMPLE 10: Navigation with Tracking
// ===================================

export function TrackedNavigation() {
  const links = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <nav className="glass fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="track-360-subtle text-2xl font-bold text-primary">
            Logo
          </div>
          <div className="flex gap-6">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="track-360-intense hover-lift-3d px-4 py-2 rounded-lg transition-all"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
