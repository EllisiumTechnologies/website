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