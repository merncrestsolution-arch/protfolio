# Portfolio Images

Place your images in this directory structure:

## Required Images

### Hero Section
- `hero-avatar.png` - Your main profile photo (recommended: 800x800px, transparent background)

### About Section
- `about-photo.png` - Professional photo (recommended: 600x800px, 3:4 aspect ratio)

### Company Section
- `company-logo.png` - MernCrest Solutions logo (recommended: 400x100px, transparent background)
- `company-photo.png` - Company/team photo (recommended: 800x800px for circular crop)

### Projects Section
Create a subfolder: `project-screenshots/`

Place project screenshots named:
- `project-1.png` through `project-8.png`
- Recommended size: 1200x675px (16:9 aspect ratio)

## Image Guidelines

- Use PNG format for photos with transparency (logo, avatar)
- Use JPG for photos without transparency (projects, about)
- Optimize images before uploading (use tools like TinyPNG)
- Keep file sizes under 500KB for optimal loading

## Fallback Behavior

If images are missing, the ImagePlaceholder component will display:
- A dashed border box
- An image icon
- The expected filename
- Instructions to place the file

This ensures the site looks professional even during development.
