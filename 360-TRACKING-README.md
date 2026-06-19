# 360-Degree Mouse Tracking Animation System

A comprehensive, immersive mouse tracking system that adds 3D depth and rotation effects to your entire portfolio.

## 🎯 Features

- **Full 360-degree rotation** based on mouse position
- **Smooth interpolated animations** using requestAnimationFrame
- **Multiple intensity levels** (subtle, normal, intense)
- **Parallax depth layers** for added dimension
- **Automatic mobile optimization** (effects disabled on touch devices)
- **Performance optimized** with CSS transforms and GPU acceleration
- **Accessibility friendly** (respects prefers-reduced-motion)
- **Mouse glow effect** for visual feedback

## 🚀 Quick Start

### 1. CSS Classes (Easiest)

Simply add classes to your components:

```tsx
// Subtle 360-degree tracking (recommended for large sections)
<section className="track-360-subtle">
  <h1>Your Content</h1>
</section>

// Normal intensity tracking
<div className="track-360">
  <p>Interactive content</p>
</div>

// Intense tracking for small elements
<button className="track-360-intense hover-lift-3d">
  Click me
</button>
```

### 2. React Hook

For programmatic control:

```tsx
import { use360Tracking } from './hooks/use360Tracking';

function MyComponent() {
  const trackRef = use360Tracking({ 
    intensity: 'normal', // 'subtle' | 'normal' | 'intense'
    enableZ: true,
    customMultiplier: 1.2
  });
  
  return <div ref={trackRef}>Tracked content</div>;
}
```

### 3. Direct Store Access

Access rotation values directly:

```tsx
import { useMouseStore } from './store/mouseStore';

function CustomAnimation() {
  const { smoothRotateX, smoothRotateY, smoothRotateZ } = useMouseStore();
  
  return (
    <div style={{
      transform: `rotateY(${smoothRotateY}deg) rotateX(${smoothRotateX}deg)`
    }}>
      Custom animation
    </div>
  );
}
```

## 📦 Available CSS Classes

### Tracking Classes
- `.track-360` - Normal 360-degree tracking
- `.track-360-subtle` - Gentle tracking (best for sections)
- `.track-360-intense` - Strong tracking (use sparingly)
- `.float-track` - Floating effect with depth

### Parallax Layers
- `.parallax-bg` - Background layer (slow movement)
- `.parallax-mid` - Middle layer (medium speed)
- `.parallax-fg` - Foreground layer (fast movement)

### Hover Effects
- `.hover-lift-3d` - Lifts element on hover with shadow
- `.hover-rotate-3d` - Rotates and scales on hover

### Animations
- `.animate-float-3d` - Continuous floating animation
- `.animate-tilt-3d` - Gentle tilting animation
- `.animate-rotate-360` - Full 360-degree rotation

### Containers
- `.perspective-container` - Wrapper for 3D children

## 🎨 CSS Variables

These variables are automatically updated:

```css
--mouse-x, --mouse-y              /* -1 to 1 normalized position */
--rotate-x, --rotate-y, --rotate-z /* Instant rotation (deg) */
--smooth-rotate-x, --smooth-rotate-y, --smooth-rotate-z /* Smoothed rotation (deg) */
```

Custom usage:
```css
.my-element {
  transform: rotateY(calc(var(--smooth-rotate-y) * 2));
}
```

## 🎯 Best Practices

### Performance
- ✅ Use `track-360-subtle` for large sections
- ✅ Use `track-360-intense` only for small elements
- ✅ Effects auto-disable on mobile
- ✅ System uses hardware-accelerated transforms

### Visual Hierarchy
```tsx
// Background elements - subtle movement
<div className="parallax-bg track-360-subtle">
  Background content
</div>

// Main content - normal tracking
<div className="track-360">
  Main content
</div>

// Interactive elements - intense tracking
<button className="track-360-intense hover-lift-3d">
  Call to action
</button>
```

## 🔧 Advanced Customization

### Custom Intensity

```tsx
const trackRef = use360Tracking({ 
  customMultiplier: 2.5 // Higher = more intense
});
```

### Disable Z-axis Rotation

```tsx
const trackRef = use360Tracking({ 
  enableZ: false // Only X and Y rotation
});
```

### Custom CSS Animation

```css
.my-custom-track {
  transform: 
    perspective(1000px)
    rotateY(calc(var(--smooth-rotate-y) * 1.5))
    rotateX(calc(var(--smooth-rotate-x) * 1.5))
    translateZ(20px);
  transition: transform 0.1s ease-out;
}
```

## 🎨 Mouse Glow Effect

The system includes a visual mouse glow that follows your cursor:

```tsx
import { MouseGlow } from './components/common/MouseGlow';

function App() {
  return (
    <>
      <MouseGlow />
      {/* Your content */}
    </>
  );
}
```

## ♿ Accessibility

- Automatically respects `prefers-reduced-motion`
- Disabled on mobile/touch devices
- All effects are visual enhancements only
- No impact on functionality or navigation

## 🎮 Live Examples

Check `HeroSection.tsx` to see the system in action:
- Background blurs with floating animations
- Content with subtle tracking
- Interactive buttons with hover effects
- 3D scene with normal tracking

## 📊 Performance Metrics

- Uses `requestAnimationFrame` for smooth 60fps animations
- GPU-accelerated CSS transforms
- Minimal JavaScript overhead
- Smoothed values with lerp interpolation

## 🐛 Troubleshooting

**Effects not visible?**
- Check if you're on a desktop device (mobile disabled by default)
- Ensure `.perspective-container` wraps your 3D elements
- Verify no conflicting `transform` styles

**Performance issues?**
- Reduce intensity or use `track-360-subtle`
- Limit number of elements with tracking
- Check for conflicting animations

**Effects too strong?**
- Use `track-360-subtle` instead of `track-360`
- Adjust with `customMultiplier` prop
- Consider disabling Z-axis rotation

## 📝 License

Part of the portfolio project. Feel free to use and modify!
