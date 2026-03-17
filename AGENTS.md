# AI Agent Instructions

This file provides context and guidelines for AI agents working on this project.

## Project Overview

This is a modern React application template built with:
- **Vite** - Fast build tool and dev server
- **React 19** - UI library with latest features
- **TypeScript** - Type-safe development
- **shadcn/ui** - High-quality, accessible component library
- **Tailwind CSS 4** - Utility-first styling
- **React Router 7** - Client-side routing
- **pnpm** - Fast, disk space efficient package manager

## Project Structure

```
vite-shadcn-ai-template/
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   └── theme-*.tsx   # Theme-related components
│   ├── pages/            # Route pages
│   ├── App.tsx           # Root component
│   └── main.tsx          # Application entry point
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## Development Guidelines

### Code Style & Patterns

1. **Component Structure**
   - Use functional components with TypeScript
   - Prefer composition over prop drilling
   - Follow shadcn/ui patterns for component APIs
   - Use `@/` path alias for imports (e.g., `@/components/ui/button`)

2. **TypeScript**
   - Always provide explicit types for props and return values
   - Use interfaces for component props
   - Avoid `any` types - use `unknown` and type guards instead
   - Run `pnpm typecheck` before committing

3. **Styling**
   - Use Tailwind CSS utility classes
   - Follow shadcn/ui's styling conventions
   - Use `cn()` utility from `@/lib/utils` for conditional classes
   - Leverage `class-variance-authority` for component variants

4. **Performance**
   - Minimize re-renders with proper React patterns
   - Use React 19 features (automatic batching, transitions)
   - Lazy load routes and heavy components
   - Optimize bundle size

### Available Scripts

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm preview    # Preview production build
pnpm lint       # Run ESLint
pnpm format     # Format code with Prettier
pnpm typecheck  # Type check without emitting
```

### Adding Components

**shadcn/ui components:**
```bash
npx shadcn@latest add [component-name]
```

Components are installed to `src/components/ui/` and can be customized as needed.

**Custom components:**
- Place in `src/components/`
- Follow shadcn/ui patterns for consistency
- Export from component file directly

### Routing

This project uses React Router 7 in declarative mode:
- Define routes in `App.tsx` using `<Routes>` and `<Route>`
- Use `<Link>` and `<NavLink>` for navigation
- Access params with `useParams()`, search params with `useSearchParams()`

### Theme Support

The project includes theme support:
- `theme-provider.tsx` - Context for theme management
- `theme-toggle.tsx` - Component for switching themes
- Supports light/dark/system modes

## Working with AI Agents

### When Adding Features

1. **Check existing patterns** - Review similar components before creating new ones
2. **Use shadcn/ui first** - Check if a shadcn component exists before building custom
3. **Maintain consistency** - Follow established patterns in the codebase
4. **Update types** - Ensure TypeScript types are accurate and complete

### When Fixing Bugs

1. **Reproduce first** - Understand the issue before making changes
2. **Check types** - Many bugs are caught by TypeScript
3. **Test thoroughly** - Verify the fix doesn't break other functionality
4. **Run checks** - Execute `pnpm typecheck` and `pnpm lint`

### When Refactoring

1. **Preserve behavior** - Don't change functionality during refactoring
2. **Update tests** - If tests exist, ensure they still pass
3. **Maintain types** - Keep TypeScript coverage strong
4. **Follow conventions** - Stay consistent with project patterns

## Common Tasks

### Adding a New Page

1. Create component in `src/pages/[name].tsx`
2. Add route in `App.tsx`
3. Update navigation if needed
4. Ensure proper TypeScript types

### Adding a UI Component

1. Check if shadcn/ui has it: `npx shadcn@latest add [component]`
2. If custom, create in `src/components/`
3. Use shadcn/ui patterns (variants, composition, accessibility)
4. Export and document usage

### Styling Changes

1. Use Tailwind utilities first
2. For complex patterns, use `@apply` in CSS modules
3. Maintain theme compatibility (light/dark modes)
4. Test responsive behavior

## Dependencies

### Core
- `react` / `react-dom` - UI library
- `react-router-dom` - Routing
- `typescript` - Type safety

### UI & Styling
- `shadcn` - Component library
- `tailwindcss` - Styling framework
- `@tailwindcss/vite` - Vite integration
- `lucide-react` - Icons
- `class-variance-authority` - Variant management
- `tailwind-merge` - Class merging utility

### Development
- `vite` - Build tool
- `eslint` - Linting
- `prettier` - Code formatting
- `typescript-eslint` - TypeScript ESLint rules

## Best Practices

1. **Always read before editing** - Use Read tool to understand existing code
2. **Prefer Edit over Write** - For existing files, use Edit to show clear diffs
3. **Run type checks** - Execute `pnpm typecheck` after significant changes
4. **Follow React 19 patterns** - Use modern React features appropriately
5. **Maintain accessibility** - shadcn/ui components are accessible by default
6. **Keep it simple** - Don't over-engineer solutions
7. **Document complex logic** - Add comments for non-obvious code
8. **Use pnpm** - This project uses pnpm for package management

## Notes

- This is a template project - adapt these guidelines as the project evolves
- The project uses React 19 - be aware of breaking changes from React 18
- Tailwind CSS 4 has different syntax than v3 in some areas
- shadcn/ui components are meant to be customized - don't treat them as immutable

## Questions?

When uncertain about:
- **Project structure** - Follow existing patterns in `src/`
- **Component APIs** - Check shadcn/ui documentation and existing usage
- **TypeScript** - Prefer strict types, avoid `any`
- **Styling** - Use Tailwind utilities, maintain theme support
