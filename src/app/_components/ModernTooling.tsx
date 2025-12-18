"use client";
import { Card, Group, SimpleGrid, Text, ThemeIcon, Title } from "@mantine/core";
import {
  IconBolt,
  IconBrandGit,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandVscode,
  IconDatabase,
} from "@tabler/icons-react";

const TOOLS = [
  {
    icon: IconBrandNextjs,
    title: "Next.js 16",
    description:
      "The latest framework features including Server Actions and enhanced routing.",
    color: "black",
  },
  {
    icon: IconBrandReact,
    title: "React 19",
    description:
      "Future-ready with Actions, Optimistic UI updates, and the React Compiler.",
    color: "blue.6",
  },
  {
    icon: IconBolt,
    title: "Biome",
    description:
      "Unified formatter and linter. It's incredibly fast and reduces configuration fatigue.",
    color: "yellow.6",
  },
  {
    icon: IconBrandTypescript,
    title: "TypeScript 5",
    description:
      "Latest type safety features to catch errors early and improve maintainability.",
    color: "blue.6",
  },
  {
    icon: IconDatabase,
    title: "Zustand",
    description:
      "A small, fast, and scalable bearbones state-management solution.",
    color: "orange.6",
  },
  {
    icon: IconBrandGit,
    title: "Husky & Commitlint",
    description:
      "Ensures all commits meet standard conventions and code quality checks before pushing.",
    color: "red.6",
  },
];

export function ModernTooling() {
  return (
    <Card withBorder radius="md" p="xl" mb={80} bg="var(--mantine-color-body)">
      <Group mb="md">
        <ThemeIcon size={40} radius="md" variant="light" color="grape">
          <IconBrandVscode size={24} />
        </ThemeIcon>
        <Title order={2}>Modern Tooling Stack</Title>
      </Group>
      <Text c="dimmed" mb="lg">
        We've hand-picked the best modern tools to ensure a smooth developer
        experience and a high-quality codebase.
      </Text>

      <SimpleGrid
        cols={{
          base: 1,
          sm: 2,
        }}
        spacing="lg"
      >
        {TOOLS.map((tool) => (
          <Group key={tool.title} wrap="nowrap" align="flex-start">
            <ThemeIcon radius="md" variant="light" color={tool.color}>
              <tool.icon />
            </ThemeIcon>
            <div>
              <Text size="md" fw={600}>
                {tool.title}
              </Text>
              <Text size="sm" c="dimmed" lh="1.4">
                {tool.description}
              </Text>
            </div>
          </Group>
        ))}
      </SimpleGrid>
    </Card>
  );
}
