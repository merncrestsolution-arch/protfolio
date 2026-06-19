# Shakkir Premium 3D Portfolio

A cutting-edge, interactive 3D portfolio website featuring 360° mouse-tracked depth effects, orbital camera systems, and modern web technologies.

## Features

- **360° Orbital Camera System**: Full spherical camera control in the hero section driven entirely by mouse position
- **3D Tech Logo Sphere**: Interactive Fibonacci sphere with 30 technology logos that rotate based on mouse movement
- **Card Tilt Effects**: Every card tilts dynamically following mouse position within bounds
- **Page Parallax Layers**: Multi-depth parallax effects across all sections
- **AWS Cloud Visualization**: Interactive 3D diagram of cloud infrastructure
- **Smooth Animations**: Framer Motion and GSAP powered animations throughout
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop

## Tech Stack

- **Framework**: React 18 + Vite + TypeScript
- **3D Graphics**: Three.js + @react-three/fiber + @react-three/drei
- **Animations**: Framer Motion v11 + GSAP
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Smooth Scroll**: React Lenis
- **Contact**: EmailJS
- **State Management**: Zustand
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Configure EmailJS credentials in `.env`:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_SITE_URL=https://yourdomain.com
```

5. Add images to `/public/images/`:
   - `hero-avatar.png` - Your profile photo for hero section
   - `about-photo.png` - Professional photo for about section
   - `company-photo.png` - Company/team photo (circular crop)
   - `company-logo.png` - Company logo
   - `project-screenshots/project-1.png` through `project-8.png` - Project screenshots

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
portfolio/
├── public/
│   ├── images/           # All images
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── 3d/          # Three.js 3D components
│   │   ├── common/      # Navbar, Footer, SmoothScroll
│   │   ├── sections/    # Main page sections
│   │   └── ui/          # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── data/            # Static data (projects, skills, etc.)
│   ├── store/           # Zustand state management
│   ├── animations/      # Framer Motion variants
│   ├── styles/          # Global CSS
│   └── utils/           # Utility functions & constants
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## Key Features Explained

### Mouse Tracking System

The entire site uses a centralized mouse tracking system (`mouseStore.ts`) that:
- Tracks raw mouse position in pixels
- Converts to normalized coordinates (-1 to 1)
- Provides smoothed values for 3D camera control
- Updates CSS variables for parallax effects

### 360° Orbital Camera

The hero scene camera orbits around a central avatar using spherical coordinates:
- Mouse X controls horizontal orbit (full 360°)
- Mouse Y controls vertical tilt (with pole clamping)
- Smooth interpolation prevents jarring movements

### Tech Logo Sphere

Uses Fibonacci sphere algorithm for even distribution of 30 technology logos:
- Each logo is a billboard that always faces the camera
- Mouse movement controls rotation speed and direction
- Hover effects with scale and glow
- Category filtering rotates sphere to focus on specific tech

### Card Tilt Effect

Reusable `useCardTilt` hook provides:
- Perspective-based 3D tilt
- Follows mouse position within card bounds
- Smooth reset on mouse leave
- Applied to project cards, service cards, and contact cards

## Customization

### Update Projects

Edit `src/data/projects.ts` to add/modify projects.

### Update Skills

Edit `src/data/skills.ts` to change skill proficiency levels.

### Update Services

Edit `src/data/services.ts` to modify service offerings.

### Update Timeline

Edit `src/data/timeline.ts` to change career milestones.

### Change Colors

Edit the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary:    '#00E5FF',   // Cyan
  secondary:  '#7C4DFF',   // Purple
  accent:     '#00FF94',   // Neon Green
  // ... more colors
}
```

## Performance Optimization

- **Code Splitting**: Vite automatically splits Three.js, animations, and React into separate chunks
- **Lazy Loading**: Images use native lazy loading
- **Mobile Optimization**: Reduced particle counts and simplified 3D scenes on mobile
- **GPU Acceleration**: All transforms use `translate3d` for hardware acceleration

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Note: 3D features require WebGL support.

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
npm run deploy
```

The site will be automatically optimized and deployed to Vercel's global CDN.

## License

All rights reserved © 2025 Mohamed Shakkir - MernCrest Solutions (PVT) Ltd

## Contact

- **Email**: merncrestsolution@gmail.com
- **Website**: https://merncrest.lk
- **LinkedIn**: https://linkedin.com/in/mohamedshakkir
- **GitHub**: https://github.com/mohamedshakkir

---

Built with ❤️ in Sri Lanka 🇱🇰
