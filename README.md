# Nextjs Mantine Boilerplate

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0.10-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Mantine](https://img.shields.io/badge/Mantine-8.3.10-339AF0?style=for-the-badge&logo=mantine&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Biome](https://img.shields.io/badge/Biome-2.2.0-60C5BA?style=for-the-badge&logo=biome&logoColor=white)
![License](https://img.shields.io/badge/License-Private-red?style=for-the-badge)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world&env=NEXT_PUBLIC_COINGECKO_API_URL,NEXT_PUBLIC_COINGECKO_API_KEY&envDescription=API%20keys%20need%20for%20the%20dashboard%2C%20not%20compulsory%20if%20you%20want%20to%20remove%20the%20predefined%20page.&envLink=https%3A%2F%2Fdocs.coingecko.com%2F)

</div>

A modern, production-ready boilerplate for building web applications with Next.js 16, React 19, and Mantine UI v8. This template includes everything you need to kickstart your project with best practices, TypeScript, state management, and a beautiful UI component library.

**Key Highlight:** Powered by **react-query-ease** - a simplified API client that makes data fetching as easy as calling a function, eliminating boilerplate while maintaining full TypeScript support and TanStack Query's powerful caching.

**Perfect for:** Building dashboards, admin panels, SaaS applications, and modern web apps.

## 💡 Why Use This Boilerplate?

### 🎯 Dashboard-First Architecture

Unlike generic Next.js templates, this boilerplate is **specifically designed for dashboard applications**. It includes:

- **Complete AppShell Layout**: Pre-configured dashboard layout with responsive header, sidebar, and mobile drawer navigation
- **Protected Route Structure**: Organized route groups `(auth)` and `(protected)` with proper layout nesting
- **Ready-to-Use Components**: `DashboardHeader` and `DashboardSidebar` components with theme toggle, user menu, and navigation
- **Real-World Examples**: Four complete dashboard pages (Markets, Trending, Favorites, Portfolio) demonstrating production patterns
- **State Management for Dashboards**: Zustand stores with persistence for user preferences (currency, theme, etc.)

### 🚀 Simplified API Integration with react-query-ease

One of the standout features is **react-query-ease**, which dramatically simplifies API calls compared to traditional TanStack Query setups:

**Traditional Approach (Verbose):**

```typescript
const { data, isLoading, error } = useQuery({
  queryKey: ["markets", params],
  queryFn: async () => {
    const response = await axios.get("/api/markets", { params });
    return response.data;
  },
});
```

**With react-query-ease (Simple):**

```typescript
const { coins, isLoading } = useMarkets({
  vs_currency: "usd",
  per_page: 20,
});
```

**Key Benefits:**

- ✅ **Zero Boilerplate**: Create API clients with a single configuration
- ✅ **Type-Safe Hooks**: Automatic TypeScript inference with minimal setup
- ✅ **Built-in Caching**: Leverages TanStack Query's powerful caching without manual configuration
- ✅ **Easy to Extend**: Add new endpoints by simply creating new hooks
- ✅ **Perfect for Dashboards**: Ideal for applications that need multiple data sources, pagination, filtering, and real-time updates

### 🛠️ Modern & Production-Ready

- **Latest Tech Stack**: Next.js 16, React 19 with React Compiler, Mantine v8, TypeScript 5
- **Developer Experience**: Biome (faster than ESLint/Prettier), Husky, lint-staged, commitlint
- **Best Practices**: Error boundaries, skeleton loaders, theme system, responsive design
- **Type Safety**: Full TypeScript coverage with proper type definitions

### 📊 Ideal Use Cases

- **Admin Dashboards**: Analytics, user management, content management
- **SaaS Applications**: Multi-tenant dashboards with data visualization
- **E-commerce Admin Panels**: Product management, order tracking, analytics
- **Financial Dashboards**: Portfolio tracking, market data, reporting
- **Internal Tools**: Company dashboards, reporting tools, data management interfaces

**Bottom Line**: This template saves weeks of setup time by providing a complete, production-ready foundation specifically optimized for dashboard applications, with simplified API integration that makes data fetching as easy as calling a function.

## 🚀 Features

- **⚡ Next.js 16 App Router**: Latest Next.js features with App Router architecture
- **⚛️ React 19**: Cutting-edge React with React Compiler enabled
- **🎨 Mantine UI v8**: Beautiful, accessible components out of the box
- **📘 TypeScript**: Full type safety throughout the codebase
- **🗄️ State Management**:
  - Zustand for client-side global state
  - TanStack Query for server state and API calls
- **🔌 Simplified API Client**: react-query-ease for zero-boilerplate API integration with automatic TypeScript inference
- **🌓 Theme Support**: Dark/light mode with system preference detection
- **📱 Responsive Design**: Mobile-first, fully responsive layouts
- **⚙️ Developer Experience**:
  - Biome for fast linting and formatting
  - Husky + lint-staged for Git hooks
  - Conventional commits with commitlint
  - TypeScript strict mode
- **🎯 Best Practices**: Error boundaries, skeleton loaders, and optimized performance

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [Mantine v8](https://mantine.dev/)
- **Language**: TypeScript
- **State Management**:
  - [Zustand](https://zustand-demo.pmnd.rs/) for global state
  - [TanStack Query](https://tanstack.com/query) for server state
- **API Client**: [react-query-ease](https://www.npmjs.com/package/react-query-ease)
- **Icons**: [Tabler Icons](https://tabler.io/icons)
- **Linting/Formatting**: [Biome](https://biomejs.dev/)
- **Git Hooks**: Husky + lint-staged

## 📋 Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

## 🏃 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/AshutoshDash1999/nextjs-mantine-boilerplate.git
cd nextjs-mantine-boilerplate
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables (if needed):

```bash
cp env.example .env.local
```

Edit `.env.local` and add any required environment variables for your project.

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── api/                    # API configuration and hooks
│   ├── config.ts          # API client setup
│   └── hooks/             # Custom React Query hooks
│       └── useCoinGecko.ts
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   │   └── login/
│   ├── (protected)/       # Protected routes
│   │   ├── _components/   # Shared protected components
│   │   │   ├── DashboardHeader.tsx
│   │   │   └── DashboardSidebar.tsx
│   │   ├── home/          # Dashboard pages
│   │   │   ├── markets/   # Markets page
│   │   │   ├── trending/  # Trending coins page
│   │   │   ├── favorites/ # Favorites page
│   │   │   └── portfolio/ # Portfolio page
│   │   └── layout.tsx     # Protected layout with AppShell
│   ├── api/               # API routes
│   ├── _components/       # Shared components
│   ├── error.tsx          # Error boundary
│   ├── loading.tsx        # Loading component
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
├── providers/             # Context providers
│   ├── app-provider.tsx   # Mantine and Query providers
│   └── query-provider.tsx # TanStack Query setup
├── store/                 # Zustand stores
│   ├── useLocalStore.ts   # Local storage state
│   └── types.ts           # Store type definitions
└── utils/                 # Utility functions
    ├── format.ts          # Currency and number formatting
    └── dayjs.utils.ts     # Date utilities
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run Biome linter
- `npm run format` - Format code with Biome
- `npm run analyze` - Analyze bundle size

## 🎨 What's Included

### Project Structure

- **App Router Setup**: Next.js 16 App Router with route groups
- **Protected Routes**: Example protected route layout with AppShell
- **API Routes**: Next.js API route handlers
- **Component Organization**: Well-structured component hierarchy
- **State Management**: Zustand stores and TanStack Query hooks
- **Utilities**: Formatting, date manipulation, and API helpers

### Example Features

- **Dashboard Layout**: AppShell with header and sidebar
- **Theme Toggle**: Switch between light/dark/system themes
- **Error Handling**: Global error boundary and not-found pages
- **Loading States**: Skeleton loaders for better UX
- **Type Safety**: Full TypeScript coverage
- **Utility Functions**: Pre-built formatters for currency, percentages, numbers, dates, and time with localization support

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file based on `env.example` and add your environment variables. All public variables must be prefixed with `NEXT_PUBLIC_`.

### Theme Configuration

The app uses Mantine's theme system. You can customize the theme in `src/providers/app-provider.tsx`:

```typescript
const theme = createTheme({
  fontFamily: "var(--font-nunito), sans-serif",
  // Add your customizations here
});
```

### API Integration with react-query-ease

The boilerplate uses **react-query-ease** to simplify API integration. This powerful wrapper around TanStack Query eliminates boilerplate while maintaining all the benefits of React Query.

#### Setting Up Your API Client

Create an API client in `src/api/config.ts`:

```typescript
import { createApiClient } from "react-query-ease";

export const myApi = createApiClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

#### Creating Custom Hooks

Create hooks in `src/api/hooks/` following this pattern:

```typescript
import { myApi } from "../config";

export const useMyData = (params?: MyParams) => {
  const query = myApi.useQuery<MyDataType>({
    url: "/endpoint",
    method: "GET",
    key: ["myData", params],
    params: {
      // Your query parameters
    },
  });

  return {
    data: query.data ?? [],
    isLoading: query.isLoading,
    ...query, // Includes error, refetch, etc.
  };
};
```

#### Why react-query-ease?

- **90% Less Code**: No need to write query functions, manual error handling, or cache key management
- **Type-Safe**: Full TypeScript inference from your API responses
- **Automatic Caching**: Leverages TanStack Query's caching without configuration
- **Easy to Extend**: Add new endpoints by creating simple hook functions
- **Perfect for Dashboards**: Ideal for applications with multiple data sources, pagination, and real-time updates

See `src/api/hooks/useCoinGecko.ts` for complete examples of how to use react-query-ease in your project.

## 🎯 Best Practices

- TypeScript for type safety
- React Query for efficient data fetching and caching
- Zustand for lightweight state management
- Biome for fast linting and formatting
- Error boundaries for graceful error handling
- Skeleton loaders for better UX during data fetching

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

We welcome contributions to the Next.js Mantine Boilerplate! This document provides guidelines and instructions for contributing to the project.

### Getting Started

1. **Fork the repository** and clone your fork:

   ```bash
   git clone https://github.com/AshutoshDash1999/nextjs-mantine-boilerplate.git
   cd nextjs-mantine-boilerplate
   ```

   Or if you've already forked it, clone your fork:

   ```bash
   git clone https://github.com/<YOUR-USERNAME>/nextjs-mantine-boilerplate.git
   cd nextjs-mantine-boilerplate
   ```

2. **Create a branch** for your changes:

   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Make your changes** following our coding standards (see below)

5. **Test your changes**:

   ```bash
   npm run lint
   npm run build
   ```

6. **Commit your changes** using conventional commits:

   ```bash
   git commit -m "feat: add new feature"
   # or
   git commit -m "fix: resolve bug in component"
   ```

7. **Push to your fork** and open a Pull Request

### Coding Standards

#### TypeScript

- Always use TypeScript with proper typing
- Avoid using `any` type - use `unknown` or proper types instead
- Use type inference when appropriate, but be explicit for function parameters and return types

#### React Patterns

- Use `"use client"` directive for all interactive components
- Keep components focused and single-purpose
- Use custom hooks for reusable logic
- Prefer named exports for components

#### Mantine v8

- **Always use Mantine v8 patterns** - check [Mantine v8 docs](https://mantine.dev/)
- Use component props for styling when possible
- Follow Mantine's spacing and color systems
- Use responsive props for mobile-first design

#### File Organization

- Co-locate related components in the same directory
- Use `_components/` folders for page-specific components
- Keep shared components in `src/app/_components/` or `src/components/`
- Export components through `index.ts` files

#### State Management

- Use **Zustand** for client-side global state
- Use **TanStack Query** for server state and API calls
- Keep state as local as possible

#### Code Quality

- Run `npm run lint` before committing
- Run `npm run format` to auto-format code
- Ensure all TypeScript errors are resolved
- Write self-documenting code with clear variable names

### Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:

```
feat: add currency selector to dashboard header
fix: resolve navigation issue in not-found page
docs: update contribution guidelines
refactor: extract API hooks into separate file
```

### Pull Request Process

1. **Update documentation** if you've changed functionality
2. **Add tests** if applicable (we're working on adding a test suite)
3. **Ensure the build passes**: `npm run build`
4. **Ensure linting passes**: `npm run lint`
5. **Update the CHANGELOG** if applicable
6. **Link related issues** in your PR description
7. **Request review** from maintainers

### PR Template

When opening a PR, please fill out the template with:

- Description of changes
- Type of change (feature, bug fix, etc.)
- Testing instructions
- Screenshots (if UI changes)
- Checklist of completed items

### Development Workflow

1. **Before starting work**, check existing issues and PRs to avoid duplicate work
2. **Create an issue** first for significant changes to discuss the approach
3. **Keep PRs focused** - one feature or fix per PR
4. **Keep PRs small** - break large changes into smaller, reviewable PRs
5. **Respond to feedback** promptly and be open to suggestions

### Reporting Bugs

When reporting bugs, please use the bug report template and include:

- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, browser, Node version)
- Screenshots if applicable

### Suggesting Features

When suggesting features, please use the feature request template and include:

- Clear description of the feature
- Use case and motivation
- Proposed implementation (if you have ideas)
- Alternatives considered

### Code Review

- All PRs require at least one approval before merging
- Be respectful and constructive in reviews
- Address feedback promptly
- Ask questions if something is unclear

### Questions?

If you have questions about contributing:

- Open a discussion in GitHub Discussions
- Ask in an issue with the `question` label
- Check existing documentation in `AGENTS.md`

Thank you for contributing! 🎉

## 📧 Support

For support, please open an issue in the repository using the appropriate template.

---

Built with ❤️ using Next.js, React, and Mantine
