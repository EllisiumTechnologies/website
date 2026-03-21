# Ellisium Technologies Website

A stunning 3D portfolio website built with Next.js, React Three Fiber, and TailwindCSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **3D Graphics**: React Three Fiber + Three.js
- **3D Helpers**: @react-three/drei
- **Post-processing**: @react-three/postprocessing
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Language**: TypeScript

## Features

- 🎨 Dark theme with neon accents
- ✨ Interactive 3D scene with cursor tracking
- 🌟 Particle effects and abstract shapes
- 📱 Fully responsive design
- 🚀 Optimized for performance

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
website/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   ├── globals.css      # Global styles
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts # Contact API endpoint
│   └── components/
│       ├── 3d/
│       │   ├── Scene.tsx        # Main 3D canvas
│       │   ├── AbstractShapes.tsx
│       │   └── ParticleField.tsx
│       └── sections/
│           ├── Hero.tsx
│           ├── About.tsx
│           ├── Services.tsx
│           ├── Projects.tsx
│           └── Contact.tsx
├── public/
│   └── models/  # GLTF 3D models
└── ...config files
```

## Sections

- **Hero**: 3D animated landing with gradient text
- **About**: Company stats and values
- **Services**: Technology offerings
- **Projects**: Portfolio showcase
- **Contact**: Contact form with API endpoint

## Branch Structure

| Branch | Purpose | Push |
|--------|---------|------|
| `main` | Production | ❌ Blocked |
| `dev` | Development | ❌ Blocked (PR only) |
| `feature/*` | Feature development | ✅ Allowed |

## Workflow

1. Create branch from `dev`: `git checkout -b feature/your-feature`
2. Make changes and push
3. Create PR to `dev`
4. After merge to `dev`, create PR to `main`
5. After PR approval, merge to `main`

## Deployment

Deployed on Vercel with automatic deployments from `main` branch.

## License

© 2024 Ellisium Technologies. All rights reserved.
