# CLAUDE.md

## Project Overview

A fullstack portfolio application for showcasing projects and professional experience. Currently in early development (Phase 1 complete - foundation only).

**Status**: Foundation scaffolded, no business logic implemented yet.

---

## Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Frontend | Next.js (App Router) | 16.1.0 |
| Frontend | React | 19.2.3 |
| Frontend | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Backend | Express.js | 5.2.1 |
| Backend | Node.js (ES Modules) | 18+ |
| Dev Tools | Nodemon, ESLint | - |

**Planned** (not yet integrated): PostgreSQL, Prisma ORM, JWT auth

---

## Project Structure

```
fullstack-portfolio-app/
├── frontend/              # Next.js application
│   ├── src/app/           # App Router pages & layouts
│   ├── public/            # Static assets
│   └── package.json
├── backend/               # Express.js API
│   ├── src/index.js       # Server entry point (21 lines)
│   ├── .env               # Environment config
│   └── package.json
└── README.md              # Full project documentation
```

### Key Files

| File | Purpose |
|------|---------|
| `frontend/src/app/layout.tsx` | Root layout, fonts, metadata |
| `frontend/src/app/page.tsx` | Home page (default template) |
| `frontend/src/app/globals.css` | Tailwind + CSS variables |
| `frontend/next.config.ts` | Next.js config (React Compiler enabled) |
| `backend/src/index.js` | Express server setup |
| `backend/.env` | PORT, NODE_ENV variables |

---

## Commands

### Frontend (`cd frontend`)

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
npm start        # Start production server
```

### Backend (`cd backend`)

```bash
npm run dev      # Start with nodemon (localhost:5000)
npm start        # Start production server
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check - returns `{"message": "Backend API running"}` |

All other endpoints in README.md are planned but not implemented.

---

## Environment Variables

**Backend** (`backend/.env`):
```
PORT=5000
NODE_ENV=development
```

**Frontend**: No environment variables configured yet.

---

## Development Notes

1. **Monorepo**: Frontend and backend are separate npm projects - run `npm install` in each directory
2. **No shared dependencies**: Each project manages its own node_modules
3. **CORS enabled**: Backend accepts requests from any origin (dev mode)
4. **Dark mode**: Automatic via `prefers-color-scheme` media query

---

## Current Limitations

- Frontend is default Next.js template (not customized)
- Backend has only health check endpoint
- No database connection
- No authentication
- No tests

---

## Additional Documentation

Check these files for detailed information:

| Topic | File |
|-------|------|
| Architectural patterns & conventions | `.claude/docs/architectural_patterns.md` |
| Coding standards & Git workflow | `.claude/prompts/coding-standards.md` |
| Full project roadmap | `README.md` (lines 186-217) |
| Planned API endpoints | `README.md` (lines 164-182) |

## Development Workflow (Claude Code)

### Working on New Features
1. Create feature branch: `git checkout -b feat/feature-name`
2. Run Claude Code: `npx @anthropic-ai/claude-code`
3. Describe the feature/bug to implement
4. Review changes before committing
5. Commit with descriptive message

### Important Rules
- Always work on a separate branch (never directly on `develop`)
- Test changes before merging
- Update CLAUDE.md if project structure changes
