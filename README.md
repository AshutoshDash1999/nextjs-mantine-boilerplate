# CoinGecko Dashboard

A modern, feature-rich cryptocurrency dashboard built with Next.js 16, React 19, and Mantine UI. This application provides real-time cryptocurrency market data, trending coins, and a beautiful user interface for tracking your favorite cryptocurrencies.

## 🚀 Features

- **Real-time Market Data**: View current cryptocurrency prices, market cap, volume, and 24h changes
- **Trending Coins**: Discover the most trending cryptocurrencies on CoinGecko
- **Currency Preferences**: Switch between multiple currencies (USD, EUR, GBP, JPY, BTC, ETH) with persistent storage
- **Dark/Light Theme**: Toggle between light and dark themes with system preference support
- **Responsive Design**: Fully responsive layout that works on all devices
- **Skeleton Loaders**: Smooth loading states for better user experience
- **Error Handling**: Comprehensive error boundaries and user-friendly error pages

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [Mantine v8](https://mantine.dev/)
- **Language**: TypeScript
- **State Management**:
  - [Zustand](https://zustand-demo.pmnd.rs/) for global state
  - [TanStack Query](https://tanstack.com/query) for server state
- **API Client**: [react-query-ease](https://www.npmjs.com/package/react-query-ease)
- **Icons**: [Tabler Icons](https://tabler.io/icons)
- **Data Source**: [CoinGecko API](https://www.coingecko.com/en/api)
- **Linting/Formatting**: [Biome](https://biomejs.dev/)
- **Git Hooks**: Husky + lint-staged

## 📋 Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

## 🏃 Getting Started

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
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

3. Set up environment variables:

```bash
cp env.example .env.local
```

Edit `.env.local` and add your CoinGecko API credentials (optional for demo API):

```env
NEXT_PUBLIC_COINGECKO_API_KEY=your_api_key_here
NEXT_PUBLIC_COINGECKO_API_URL=https://api.coingecko.com/api/v3
```

**Note**: The app works with CoinGecko's free API without an API key, but rate limits apply. For production use, consider obtaining an API key.

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

## 🎨 Features in Detail

### Dashboard Pages

- **Markets**: Browse cryptocurrency markets with sorting, filtering, and pagination
- **Trending**: View trending coins with scores and market rankings
- **Favorites**: Save and manage your favorite cryptocurrencies (coming soon)
- **Portfolio**: Track your cryptocurrency portfolio (coming soon)

### Header Features

- Currency selector with persistent preferences
- Theme toggle (light/dark/system)
- User menu with profile, settings, and logout options

### Sidebar Navigation

- Quick navigation between dashboard sections
- Active route highlighting
- Responsive design with mobile breakpoint

## 🔧 Configuration

### Environment Variables

- `NEXT_PUBLIC_COINGECKO_API_KEY`: CoinGecko API key (optional)
- `NEXT_PUBLIC_COINGECKO_API_URL`: CoinGecko API base URL (defaults to public API)

### Theme Configuration

The app uses Mantine's theme system. You can customize the theme in `src/providers/app-provider.tsx`.

## 🌐 API Integration

The application uses the CoinGecko API for cryptocurrency data. Available endpoints:

- `/coins/markets` - Get market data
- `/trending` - Get trending coins
- `/coins/{id}` - Get coin details
- `/simple/price` - Get simple price data

All API calls are handled through custom React Query hooks in `src/api/hooks/useCoinGecko.ts`.

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

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For support, please open an issue in the repository.

---

Built with ❤️ using Next.js, React, and Mantine
