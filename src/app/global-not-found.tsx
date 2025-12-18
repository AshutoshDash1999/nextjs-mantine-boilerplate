"use client";

import {
  Button,
  Container,
  Flex,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { AppProvider } from "@/providers/app-provider";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { IconAlertCircle, IconHome } from "@tabler/icons-react";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
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
    <html lang="en">
      <body className={nunito.className}>
        <AppProvider>
          <Flex justify="center" align="center" h="100vh">
            <Container size="sm">
              <Stack gap="xl" align="center" ta="center">
                <ThemeIcon size={120} radius={60} variant="light">
                  <IconAlertCircle size={60} stroke={1.5} />
                </ThemeIcon>

                <Stack gap="md" align="center">
                  <Title order={1} fw={800} size="4rem">
                    404
                  </Title>
                  <Title order={2} fw={600} size="h3">
                    Page Not Found
                  </Title>
                  <Text size="lg" c="dimmed" maw={500}>
                    Oops! The page you're looking for doesn't exist. It might
                    have been moved, deleted, or the URL might be incorrect.
                  </Text>
                </Stack>

                <Button
                  size="lg"
                  leftSection={<IconHome size={20} />}
                  mt="md"
                  onClick={() => {
                    window.location.href = "/";
                  }}
                >
                  Go Back Home
                </Button>
              </Stack>
            </Container>
          </Flex>
        </AppProvider>
      </body>
    </html>
  );
}
