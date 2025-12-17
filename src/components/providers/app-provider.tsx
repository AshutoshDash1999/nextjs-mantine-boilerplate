"use client";
import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import React from "react";

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
    <MantineProvider theme={theme}>
      <Notifications autoClose={4000} position="top-right" />
      {children}
    </MantineProvider>
  );
};
