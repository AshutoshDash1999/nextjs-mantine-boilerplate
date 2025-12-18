"use client";
import { Button, Group, Stack, Text, Title } from "@mantine/core";
import { IconDashboard, IconLogin } from "@tabler/icons-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <Stack align="center" gap="lg" mb={80}>
      <Title order={1}>Next.js Mantine Boilerplate</Title>
      <Text c="dimmed" size="xl" maw={600}>
        A fully featured, production-ready template to jumpstart your new
        project. Built with Next.js 16, React 19, Mantine v8, and modern tooling
        like Biome.
      </Text>

      <Group justify="center" mt="md">
        <Button
          component={Link}
          href="/login"
          size="lg"
          leftSection={<IconLogin size={20} />}
          variant="gradient"
          gradient={{
            from: "blue",
            to: "cyan",
          }}
        >
          Login
        </Button>
        <Button
          component={Link}
          href="/dashboard"
          size="lg"
          variant="default"
          leftSection={<IconDashboard size={20} />}
        >
          Dashboard
        </Button>
      </Group>
    </Stack>
  );
}
