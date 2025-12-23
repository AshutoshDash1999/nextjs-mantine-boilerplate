"use client";

import {
  Anchor,
  Card,
  Group,
  Paper,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconBolt,
  IconBrandGithub,
  IconBrandMantine,
  IconBrandNextjs,
  IconBrandReact,
  IconDatabase,
  IconExternalLink,
} from "@tabler/icons-react";
import styles from "../page.module.css";

const LINKS = [
  {
    icon: IconBrandNextjs,
    label: "Next.js",
    description: "The React Framework for the Web",
    href: "https://nextjs.org",
    color: "black",
  },
  {
    icon: IconBrandReact,
    label: "React",
    description: "The library for web and native user interfaces",
    href: "https://react.dev",
    color: "blue.6",
  },
  {
    icon: IconBrandMantine,
    label: "Mantine",
    description: "A fully featured React component library",
    href: "https://mantine.dev",
    color: "blue.5",
  },
  {
    icon: IconBolt,
    label: "Biome",
    description: "Toolchain of the web",
    href: "https://biomejs.dev",
    color: "yellow.6",
  },
  {
    icon: IconDatabase,
    label: "Zustand",
    description: "Global state manager in react/next",
    href: "https://zustand.docs.pmnd.rs/",
    color: "orange.6",
  },
  {
    icon: IconBrandGithub,
    label: "Repository",
    description: "View the source code for this template",
    href: "https://github.com/AshutoshDash1999/nextjs-mantine-boilerplate",
    color: "gray.9",
  },
];

export function QuickLinks() {
  return (
    <Card withBorder radius="md" p="xl" mb={80} bg="var(--mantine-color-body)">
      <Group mb="md">
        <ThemeIcon size={40} radius="md" variant="light" color="cyan">
          <IconExternalLink size={24} />
        </ThemeIcon>
        <Title order={2}>Quick Links</Title>
      </Group>
      <Text c="dimmed" mb="lg">
        Essential resources and documentation for the technologies used in this
        boilerplate.
      </Text>

      <SimpleGrid
        cols={{
          base: 1,
          sm: 2,
          md: 3,
        }}
        spacing="lg"
      >
        {LINKS.map((link) => (
          <Anchor
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            underline="never"
            c="unset"
          >
            <Paper withBorder radius="md" h="100%" className={styles.card}>
              <Group wrap="nowrap" p="md">
                <ThemeIcon
                  size={34}
                  radius="md"
                  variant="light"
                  color={link.color}
                >
                  <link.icon size={20} />
                </ThemeIcon>
                <div>
                  <Text size="sm" fw={600}>
                    {link.label}
                  </Text>
                  <Text size="xs" c="dimmed" lh="1.2">
                    {link.description}
                  </Text>
                </div>
              </Group>
            </Paper>
          </Anchor>
        ))}
      </SimpleGrid>
    </Card>
  );
}
