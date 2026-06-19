// 360-Degree Mouse Tracking Animation System
// ===========================================
// 
// This system provides immersive 3D mouse tracking for your entire portfolio.
// The page responds to mouse movement with smooth 360-degree rotations and depth effects.
//
// USAGE GUIDE:
// ------------
//
// 1. CSS Classes (Easiest Method):
//    --------------------------------
//    Apply these classes directly to your HTML elements:
//
//    • .track-360           - Normal intensity tracking
//    • .track-360-subtle    - Gentle tracking (recommended for large sections)
//    • .track-360-intense   - Strong tracking (for small interactive elements)
//    • .float-track         - Floating effect with depth
//    • .hover-lift-3d       - Lifts on hover with 3D effect
//    • .hover-rotate-3d     - Rotates on hover with scale
//
//    Example:
//    <div className="track-360 p-6 glass">
//      <h2>This card tracks mouse in 360 degrees!</h2>
//    </div>
//
// 2. React Hooks (Advanced Method):
//    --------------------------------
//    Use the use360Tracking hook for programmatic control:
//
//    import { use360Tracking } from '@/hooks/use360Tracking';
//
//    function MyComponent() {
//      const trackRef = use360Tracking({ 
//        intensity: 'normal', // 'subtle' | 'normal' | 'intense'
//        enableZ: true,       // Enable Z-axis rotation
//        customMultiplier: 1.2 // Custom intensity value
//      });
//      
//      return <div ref={trackRef}>Content</div>;
//    }
//
// 3. Zustand Store (Direct Access):
//    --------------------------------
//    Access mouse position and rotation values directly:
//
//    import { useMouseStore } from '@/store/mouseStore';
//
//    function MyComponent() {
//      const { smoothRotateX, smoothRotateY, smoothRotateZ } = useMouseStore();
//      // Use these values for custom animations
//    }
//
// PARALLAX LAYERS:
// ----------------
// Create depth with different parallax layers:
//
//    • .parallax-bg  - Background layer (slow, subtle)
//    • .parallax-mid - Middle layer (medium speed)
//    • .parallax-fg  - Foreground layer (fast, prominent)
//
// ANIMATIONS:
// -----------
// Combine with these animation classes:
//
//    • .animate-float-3d   - Floating animation in 3D space
//    • .animate-tilt-3d    - Gentle tilting animation
//    • .animate-rotate-360 - Full 360-degree rotation
//
// CONTAINERS:
// -----------
// Wrap sections in a perspective container for proper 3D rendering:
//
//    <div className="perspective-container">
//      <div className="track-360">Child elements inherit 3D space</div>
//    </div>
//
// CSS VARIABLES:
// --------------
// These variables are automatically updated and can be used in custom styles:
//
//    --mouse-x, --mouse-y           : Normalized mouse position (-1 to 1)
//    --rotate-x, --rotate-y, --rotate-z : Instant rotation values
//    --smooth-rotate-x, --smooth-rotate-y, --smooth-rotate-z : Smoothed rotations
//
// Example custom usage:
//    .my-element {
//      transform: rotateY(calc(var(--smooth-rotate-y) * 2));
//    }
//
// PERFORMANCE TIPS:
// -----------------
// • Effects automatically disable on mobile devices
// • Use 'will-change: transform' for frequently animated elements
// • Prefer 'track-360-subtle' for large sections
// • Use 'track-360-intense' sparingly for small, interactive elements
// • The system uses requestAnimationFrame for optimal performance
//
// ACCESSIBILITY:
// --------------
// • Respects 'prefers-reduced-motion' setting
// • Automatically disabled on mobile/touch devices
// • All effects are purely visual enhancements

export {};
