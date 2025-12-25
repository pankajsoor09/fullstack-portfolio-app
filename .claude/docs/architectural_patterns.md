# Architectural Patterns

This document describes the architectural patterns, design decisions, and conventions used in this fullstack portfolio application.

## Monorepo Structure

The project uses a simple monorepo pattern with clear separation:
- `frontend/` - Next.js application (client-side)
- `backend/` - Express.js API (server-side)

Each directory is independently deployable with its own `package.json`.

---

## Frontend Patterns

### App Router Architecture
- Uses Next.js App Router (not Pages Router)
- File-based routing in `frontend/src/app/`
- Reference: `frontend/src/app/layout.tsx:20-34`

### Layout Composition
- Root layout wraps all pages with shared providers/styles
- Metadata exported from layout for SEO: `frontend/src/app/layout.tsx:15-18`
- Font variables injected via CSS custom properties: `frontend/src/app/layout.tsx:5-13`

### Styling Approach
- **Tailwind CSS 4** with utility-first classes
- **CSS Variables** for theming (light/dark mode): `frontend/src/app/globals.css:3-6`
- **System dark mode** via `prefers-color-scheme`: `frontend/src/app/globals.css:15-20`
- Theme tokens defined in `@theme inline` block: `frontend/src/app/globals.css:8-13`

### Image Optimization
- Uses Next.js `Image` component for automatic optimization
- Reference: `frontend/src/app/page.tsx:7-14`

### React Compiler
- Enabled for automatic memoization optimizations
- Configuration: `frontend/next.config.ts:5`

---

## Backend Patterns

### ES Modules
- Uses ES module syntax (`import/export`)
- Configured via `"type": "module"` in `backend/package.json:6`

### Environment Configuration
- dotenv loads `.env` at startup: `backend/src/index.js:3,5`
- Environment variables accessed via `process.env`
- Fallback defaults provided: `backend/src/index.js:8`

### Middleware Stack
Standard Express middleware order:
1. CORS (cross-origin requests): `backend/src/index.js:12`
2. JSON body parser: `backend/src/index.js:13`
3. Route handlers: `backend/src/index.js:15-17`

### API Response Format
- JSON responses with message/data structure
- Reference: `backend/src/index.js:16`

---

## Conventions

### Naming
| Type | Convention | Example |
|------|------------|---------|
| React Components | PascalCase | `RootLayout`, `Home` |
| CSS Variables | kebab-case with prefix | `--font-geist-sans` |
| Environment Variables | SCREAMING_SNAKE_CASE | `NODE_ENV`, `PORT` |

### File Organization
| Directory | Purpose |
|-----------|---------|
| `src/app/` | Pages and layouts (App Router) |
| `src/components/` | Reusable React components (planned) |
| `src/lib/` | Utilities and helpers (planned) |
| `public/` | Static assets (images, fonts) |

### TypeScript Usage
- Frontend: Full TypeScript with strict mode
- Backend: JavaScript (TypeScript migration planned)
- Type imports use `type` keyword: `frontend/src/app/layout.tsx:1`

---

## Planned Patterns (Not Yet Implemented)

Based on README.md roadmap:
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT-based auth system
- **API Structure**: RESTful endpoints under `/api/` prefix
- **Testing**: Jest (unit), Playwright (E2E), Supertest (API)
