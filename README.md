<<<<<<< HEAD
# Website

Ellisium Technologies Website

## Tech Stack

- React

## Getting Started

```bash
npm install
npm run dev
```

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

## CI/CD

- GitHub Actions runs CI on all PRs to `main` and `dev`
- Status checks must pass before merging
- Deploy to Vercel on merge to `main` (future)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> ad94dc89c6f2ded8936e6720148e2377e6b5341c
