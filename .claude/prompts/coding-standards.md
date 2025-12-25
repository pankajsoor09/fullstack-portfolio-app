# Coding Standards

## General Principles
- Write clean, readable code with clear variable names
- Keep functions small and focused (single responsibility)
- Add comments for complex logic only
- Use TypeScript types strictly (no `any` unless necessary)

## Frontend (Next.js + React)
- Use functional components with hooks (no class components)
- Prefer `const` over `let`, avoid `var`
- Use TypeScript interfaces for props and state
- Keep components under 200 lines (extract sub-components)
- Use Tailwind utility classes (avoid inline styles)
- File naming: `PascalCase.tsx` for components, `kebab-case.ts` for utils

## Backend (Express + Node.js)
- Use async/await (avoid callbacks)
- Handle errors with try-catch blocks
- Validate input data before processing
- Use environment variables for config (never hardcode)
- File naming: `kebab-case.js` for all files

## Database (Prisma - when implemented)
- Use Prisma migrations for schema changes
- Never modify database directly in production
- Use transactions for multi-step operations
- Add indexes for frequently queried fields

## Git Commit Messages
Format: `type(scope): message`

Types:
- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code improvement without new features
- `docs`: Documentation changes
- `test`: Adding/updating tests
- `chore`: Build/config changes

Examples:
- `feat(auth): add JWT authentication`
- `fix(api): resolve CORS error on login endpoint`
- `refactor(db): optimize user query performance`

## Testing
- Write tests for all business logic
- Test edge cases and error scenarios
- Keep test files next to source files (`*.test.ts`)
- Use descriptive test names

## Code Review Checklist
- [ ] No console.logs in production code
- [ ] No hardcoded secrets/API keys
- [ ] Error handling implemented
- [ ] TypeScript types defined
- [ ] Comments added for complex logic
- [ ] Tests pass
- [ ] No linting errors