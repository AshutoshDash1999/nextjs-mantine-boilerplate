import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { AppProvider } from "@/providers/app-provider";
import { NotFoundContent } from "./_components/NotFoundContent";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: [
    "latin",
  ],
});

export const metadata: Metadata = {
  title: "404 - Page Not Found | PAL",
  description: "The page you are looking for does not exist.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body className={nunito.variable}>
        <AppProvider>
          <NotFoundContent />
        </AppProvider>
      </body>
    </html>
  );
}
