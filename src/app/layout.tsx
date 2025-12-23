import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { AppProvider } from "@/providers/app-provider";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: [
    "latin",
  ],
});

export const metadata: Metadata = {
  title: {
    default: "Next.js Mantine Boilerplate | Dashboard Template",
    template: "%s | Next.js Mantine Boilerplate",
  },
  description:
    "Production-ready Next.js 16 + React 19 + Mantine v8 dashboard boilerplate with TypeScript, Zustand, TanStack Query, and react-query-ease. Build dashboards, admin panels, and SaaS apps faster.",
  keywords: [
    "Next.js",
    "React",
    "Mantine",
    "TypeScript",
    "Dashboard",
    "Boilerplate",
    "Template",
    "Admin Panel",
    "SaaS",
    "Zustand",
    "TanStack Query",
    "react-query-ease",
    "App Router",
    "Production Ready",
  ],
  authors: [
    {
      name: "Next.js Mantine Boilerplate",
    },
  ],
  creator: "Next.js Mantine Boilerplate",
  publisher: "Next.js Mantine Boilerplate",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ||
      "https://nextjs-mantine-boilerplate.vercel.app"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Next.js Mantine Boilerplate",
    title: "Next.js Mantine Boilerplate | Dashboard Template",
    description:
      "Production-ready Next.js 16 + React 19 + Mantine v8 dashboard boilerplate with TypeScript, Zustand, TanStack Query, and react-query-ease. Build dashboards, admin panels, and SaaS apps faster.",
    images: [
      {
        url: "/website-cover.webp",
        width: 1200,
        height: 630,
        alt: "Next.js Mantine Boilerplate - Production-Ready Dashboard Template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Mantine Boilerplate | Dashboard Template",
    description:
      "Production-ready Next.js 16 + React 19 + Mantine v8 dashboard boilerplate with TypeScript, Zustand, TanStack Query, and react-query-ease. Build dashboards, admin panels, and SaaS apps faster.",
    images: [
      "/website-cover.webp",
    ],
    creator: "Ashutosh Dash",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${nunito.variable}`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
