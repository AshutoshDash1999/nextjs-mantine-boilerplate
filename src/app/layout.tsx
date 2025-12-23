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
    default:
      "Next.js Mantine Boilerplate - Production-Ready Dashboard Template",
    template: "%s | Next.js Mantine Boilerplate",
  },
  description:
    "Production-ready Next.js 16 + React 19 + Mantine v8 dashboard boilerplate with TypeScript, Zustand, TanStack Query, and react-query-ease. Perfect for building dashboards, admin panels, and SaaS applications.",
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
    title: "Next.js Mantine Boilerplate - Production-Ready Dashboard Template",
    description:
      "Production-ready Next.js 16 + React 19 + Mantine v8 dashboard boilerplate with TypeScript, Zustand, TanStack Query, and react-query-ease.",
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
    title: "Next.js Mantine Boilerplate - Production-Ready Dashboard Template",
    description:
      "Production-ready Next.js 16 + React 19 + Mantine v8 dashboard boilerplate with TypeScript, Zustand, TanStack Query, and react-query-ease.",
    images: [
      "/website-cover.webp",
    ],
    creator: "@nextjsmantine",
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
      </head>
      <body className={`${nunito.variable}`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
