"use client";
import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import type React from "react";
import { FloatingContent } from "@/components/common/FloatingContent";
import { QueryProvider } from "./query-provider";

// Styles
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

interface AppProviderProps {
  children: React.ReactNode;
}

const theme = createTheme({
  fontFamily: "var(--font-nunito), sans-serif",
});

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryProvider>
      <MantineProvider theme={theme} defaultColorScheme="auto">
        <Notifications autoClose={4000} position="top-right" />
        {children}
        <FloatingContent />
      </MantineProvider>
    </QueryProvider>
  );
};
