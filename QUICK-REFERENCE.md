# 360° Mouse Tracking - Quick Reference

## 🎯 Quick Start

### 1. Apply to Any Element
```tsx
<div className="track-360">Content follows mouse in 3D</div>
```

### 2. Choose Intensity
- `track-360-subtle` → Gentle (sections)
- `track-360` → Normal (cards)
- `track-360-intense` → Strong (buttons)

### 3. Add Hover Effects
```tsx
<button className="track-360 hover-lift-3d">
  Lifts on hover
</button>
```

## 🎨 Common Patterns

### Hero Section
```tsx
<section className="perspective-container">
  <main className="track-360-subtle">
    <h1>Your content</h1>
  </main>
</section>
```

### Interactive Cards
```tsx
<div className="track-360 hover-rotate-3d glass p-6 rounded-xl">
  Card content
</div>
```

### Parallax Layers
```tsx
<div className="parallax-bg">Background</div>
<div className="parallax-mid">Middle</div>
<div className="parallax-fg">Foreground</div>
```

### Floating Elements
```tsx
<div className="float-track animate-float-3d">
  Floats in 3D space
</div>
```

## 📦 All Available Classes

| Class | Effect |
|-------|--------|
| `track-360-subtle` | Gentle 3D rotation |
| `track-360` | Normal 3D rotation |
| `track-360-intense` | Strong 3D rotation |
| `float-track` | Floating with depth |
| `hover-lift-3d` | Lift on hover |
| `hover-rotate-3d` | Rotate on hover |
| `parallax-bg` | Background parallax |
| `parallax-mid` | Middle parallax |
| `parallax-fg` | Foreground parallax |
| `animate-float-3d` | Floating animation |
| `animate-tilt-3d` | Tilting animation |
| `perspective-container` | 3D container wrapper |

## 🎮 React Hook

```tsx
import { use360Tracking } from '@/hooks/use360Tracking';

function Component() {
  const ref = use360Tracking({ 
    intensity: 'normal', // 'subtle' | 'normal' | 'intense'
    enableZ: true,
    customMultiplier: 1.5
  });
  
  return <div ref={ref}>Tracked</div>;
}
```

## 📊 Store Access

```tsx
import { useMouseStore } from '@/store/mouseStore';

function Component() {
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

## 🎨 CSS Variables

Use in your custom styles:
```css
.my-element {
  transform: rotateY(calc(var(--smooth-rotate-y) * 2));
}
```

Available variables:
- `--mouse-x`, `--mouse-y` (normalized -1 to 1)
- `--rotate-x`, `--rotate-y`, `--rotate-z` (instant)
- `--smooth-rotate-x`, `--smooth-rotate-y`, `--smooth-rotate-z` (smoothed)

## ⚡ Performance Tips

✅ DO:
- Use `track-360-subtle` for large sections
- Use `track-360-intense` for small elements
- Wrap in `.perspective-container` for proper 3D

❌ DON'T:
- Apply intense tracking to many elements
- Nest multiple tracking elements deeply
- Forget mobile automatically disables effects

## 🎯 Best Practices

```tsx
// Background elements
<div className="parallax-bg track-360-subtle" />

// Main content
<section className="track-360" />

// Interactive elements  
<button className="track-360-intense hover-lift-3d" />
```

## 📱 Responsive

- Auto-disabled on mobile/touch devices
- Respects `prefers-reduced-motion`
- No configuration needed

## 🐛 Troubleshooting

**Not working?**
- Desktop browser? (mobile disabled)
- `.perspective-container` on parent?
- No conflicting `transform` styles?

**Too intense?**
- Use `track-360-subtle`
- Set custom multiplier: `use360Tracking({ customMultiplier: 0.5 })`

**Performance issues?**
- Reduce number of tracked elements
- Use `track-360-subtle` instead of intense
- Check for other heavy animations

---

For full documentation, see [360-TRACKING-README.md](./360-TRACKING-README.md)
For code examples, see [src/examples/360-tracking-examples.tsx](./src/examples/360-tracking-examples.tsx)
