# Agent Guidelines for Next.js Mantine Boilerplate

This document provides essential information for AI coding assistants working on this project.

## 📋 Project Overview

**Next.js Mantine Boilerplate** is a modern, production-ready boilerplate built with:

- **Next.js 16** (App Router) - React framework
- **React 19** with React Compiler enabled
- **Mantine UI v8** - Component library
- **TypeScript 5** - Type safety
- **Zustand** - Client state management
- **TanStack Query (React Query)** - Server state management
- **Biome** - Linting and formatting (replaces ESLint/Prettier)

## 🎯 Core Principles

1. **TypeScript First**: Always use TypeScript with proper typing
2. **Client Components**: Use `"use client"` directive for all interactive components
3. **Component Co-location**: Keep related components close together
4. **Biome Formatting**: Follow Biome's formatting rules (check `biome.jsonc`)
5. **Mantine v8 Patterns**: Use Mantine v8 API only (NOT v7 or older)

## 🔍 How to Look Up Mantine Documentation

### **CRITICAL: Always use Mantine v8 documentation**

1. **Official Documentation**: https://mantine.dev/

   - Navigate to the component you need
   - **Ensure you're viewing v8 docs** (check URL or version selector)
   - Example: https://mantine.dev/core/app-shell/ for AppShell

2. **Component-Specific Search**:

   - Go to https://mantine.dev/
   - Use the search bar or navigate Components section
   - **Always verify the version is v8** before using examples

3. **Breaking Changes from v7**:

   - No standalone `Header`, `Footer`, `Navbar` components - use `AppShell.Header`, etc.
   - Many components now use different prop names
   - Style props have changed (e.g., `sx` is deprecated, use `style` or component props)
   - Always check the v8 migration guide if unsure

4. **Example Pattern for Documentation Lookup**:
   ```
   When user asks about a Mantine component:
   1. Search: "mantine [component-name] v8"
   2. Always link to mantine.dev (official docs)
   3. Verify version is v8 before using code examples
   4. If component doesn't exist in v8, suggest alternatives
   ```

## 📁 File Structure Conventions

### Component Organization

```
src/app/(protected)/home/[page]/
  ├── page.tsx              # Main page component
  └── _components/          # Page-specific components (optional)
      └── skeleton-loader.tsx
```

### Shared Components

- `src/app/_components/` - Root-level shared components
- `src/app/(protected)/_components/` - Protected route shared components
- `src/components/` - Global reusable components (if needed)

### Naming Conventions

- **Components**: PascalCase (`DashboardHeader.tsx`)
- **Files**: Match component name exactly
- **Hooks**: `use` prefix (`useCoinGecko.ts`)
- **Utilities**: camelCase (`format.ts`)
- **Types**: PascalCase interfaces/types in same file or `types.ts`

## 💻 Coding Guidelines

### TypeScript

```typescript
// ✅ Good: Explicit types
interface ComponentProps {
  title: string;
  count: number;
}

// ✅ Good: Type inference for simple cases
const count = 0;
const name = "Dashboard";

// ❌ Bad: Using `any`
function process(data: any) {}

// ✅ Good: Use proper types
function process(data: unknown) {
  if (typeof data === "string") {
    // type-safe processing
  }
}
```

### React Patterns

```typescript
// ✅ Always use "use client" for interactive components
"use client";

import { useState } from "react";

export function MyComponent() {
  // ✅ Hooks at top level
  const [state, setState] = useState(0);

  // Component logic here
  return <div>Content</div>;
}
```

### Mantine Component Usage

```typescript
// ✅ Good: Using Mantine v8 patterns
import { Box, Group, Stack, Text } from "@mantine/core";

export function MyComponent() {
  return (
    <Stack gap="md">
      <Text>Content</Text>
      <Group gap="sm">{/* Content */}</Group>
    </Stack>
  );
}

// ❌ Bad: Using old patterns (v7 or earlier)
import { Container } from "@mantine/core";
// Don't use deprecated props or components
```

### State Management

#### Client State (Zustand)

```typescript
// Located in: src/store/
import { useLocalStore } from "@/store";

export function MyComponent() {
  const { preferredCurrency, setPreferredCurrency } = useLocalStore();

  // Use the state
}
```

#### Server State (TanStack Query)

```typescript
// Located in: src/api/hooks/
import { useMarkets } from "@/api/hooks";

export function MarketsPage() {
  const { coins, isLoading, error } = useMarkets({
    vs_currency: "usd",
    per_page: 20,
  });

  // Use the data
}
```

### API Hooks Pattern

All API hooks follow this pattern in `src/api/hooks/useCoinGecko.ts`:

```typescript
export const useCustomHook = (params?: Params) => {
  const query = coingeckoApi.useQuery<ReturnType>({
    url: "/endpoint",
    method: "GET",
    key: ["key", params],
    params: {
      /* query params */
    },
  });

  return {
    data: query.data ?? [],
    ...query, // Spread to include isLoading, error, etc.
  };
};
```

### Error Handling

```typescript
// ✅ Good: Error boundaries for components
// Error boundaries are in: src/app/error.tsx

// ✅ Good: Error handling in API hooks
const { data, error, isLoading } = useQuery();

if (error) {
  // Handle error
}

if (isLoading) {
  return <SkeletonLoader />;
}
```

### Loading States

```typescript
// ✅ Good: Use skeleton loaders, not spinners
import { MarketsSkeleton } from "./_components/skeleton-loader";

if (isLoading) {
  return <MarketsSkeleton />;
}
```

## 🎨 Styling Guidelines

### Mantine Styling

- Use Mantine component props for styling (not inline styles when possible)
- Use `style` prop for dynamic styles
- Use Mantine's spacing system: `gap="md"`, `p="lg"`, `mt="xl"`
- Use Mantine's color system: `color="blue"`, `variant="light"`

```typescript
// ✅ Good
<Stack gap="md" p="lg">
  <Text c="dimmed" size="sm">Content</Text>
</Stack>

// ❌ Avoid when possible
<div style={{ gap: "16px", padding: "24px" }}>
  <span style={{ color: "gray", fontSize: "14px" }}>Content</span>
</div>
```

### Responsive Design

```typescript
// ✅ Use Mantine's responsive props
<Grid.Col
  span={{
    base: 12, // Mobile
    sm: 6, // Tablet
    md: 4, // Desktop
    lg: 3, // Large desktop
  }}
>
  {/* Content */}
</Grid.Col>
```

## 🔧 Common Patterns

### Currency Formatting

```typescript
import { formatCurrency, formatPercentage } from "@/utils/format";

// Format currency with localization
const price = formatCurrency(1234.56, "usd"); // "$1,234.56" (en-US)
const price = formatCurrency(1234.56, "eur", "de-DE"); // "1.234,56 €"

// Format percentage
const change = formatPercentage(5.23); // "+5.23%"
```

### Navigation

```typescript
import Link from "next/link";
import { NavLink } from "@mantine/core";
import { usePathname } from "next/navigation";

// ✅ Good: Using Next.js Link with Mantine NavLink
<NavLink
  component={Link}
  href="/home/markets"
  label="Markets"
  active={pathname === "/home/markets"}
/>;
```

### AppShell Layout

```typescript
// ✅ Protected routes use AppShell
<AppShell header={{ height: 60 }} navbar={{ width: 250, breakpoint: "sm" }}>
  <AppShell.Header>
    <DashboardHeader />
  </AppShell.Header>
  <AppShell.Navbar>
    <DashboardSidebar />
  </AppShell.Navbar>
  <AppShell.Main>{children}</AppShell.Main>
</AppShell>
```

## 📦 Key Dependencies

### UI Components

- `@mantine/core@^8.3.10` - Core components
- `@mantine/hooks@^8.3.10` - React hooks
- `@mantine/form@^8.3.10` - Form handling
- `@mantine/notifications@^8.3.10` - Toast notifications
- `@tabler/icons-react@^3.36.0` - Icons

### State & Data

- `@tanstack/react-query@^5.90.12` - Server state
- `zustand@^5.0.9` - Client state
- `react-query-ease@^0.0.6` - Query wrapper

### Utilities

- `dayjs@^1.11.19` - Date manipulation (use utils in `src/utils/dayjs.utils.ts`)
- `axios@^1.13.2` - HTTP client (used by react-query-ease)

## ⚠️ Important Notes

1. **Biome Linting**: Always run `npm run lint` before committing. Biome has strict rules:

   - No unused imports/variables
   - No `any` types
   - Proper hook dependencies
   - Consistent array types

2. **Import Organization**: Biome auto-organizes imports, but keep them logical:

   - React imports first
   - Third-party imports
   - Local imports (use `@/` alias)
   - Type-only imports use `import type`

3. **Component Exports**: Use named exports for components, default exports for pages

4. **Environment Variables**: All public env vars must start with `NEXT_PUBLIC_`

5. **API Routes**: Located in `src/app/api/`, use Next.js route handlers

6. **Type Definitions**: Keep types close to usage, use `types.ts` only for shared types

## 🐛 Common Issues to Avoid

1. **❌ Don't use Mantine v7 patterns** - Always check v8 docs
2. **❌ Don't use `any` types** - Biome will error
3. **❌ Don't forget `"use client"`** - Required for all interactive components
4. **❌ Don't ignore Biome errors** - Fix them before committing
5. **❌ Don't mix state management** - Use Zustand for client state, React Query for server state
6. **❌ Don't use old Next.js patterns** - Use App Router conventions only

## 🔗 Quick Reference Links

- **Mantine v8 Docs**: https://mantine.dev/
- **Next.js 16 Docs**: https://nextjs.org/docs
- **React Query Docs**: https://tanstack.com/query/latest
- **Zustand Docs**: https://zustand-demo.pmnd.rs/
- **Biome Docs**: https://biomejs.dev/
- **TypeScript Docs**: https://www.typescriptlang.org/docs/

## 📝 Example: Adding a New Feature

When adding a new feature:

1. **Create the component** in appropriate location
2. **Add types** (inline or in types file)
3. **Add API hook** if needed (in `src/api/hooks/`)
4. **Add to store** if client state needed (in `src/store/`)
5. **Use skeleton loader** for loading states
6. **Handle errors** appropriately
7. **Run linter** (`npm run lint`)
8. **Format code** (`npm run format`)
9. **Test** the feature

Example workflow:

```typescript
// 1. Create component
"use client";
import { useMarkets } from "@/api/hooks";

export function NewFeature() {
  const { coins, isLoading } = useMarkets();

  if (isLoading) return <SkeletonLoader />;

  return <div>{/* Feature UI */}</div>;
}

// 2. Add to page
import { NewFeature } from "./_components/NewFeature";

export default function Page() {
  return <NewFeature />;
}
```

---

**Remember**: Always prioritize type safety, follow Mantine v8 patterns, and maintain consistency with existing codebase patterns.
