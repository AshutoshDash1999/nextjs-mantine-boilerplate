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
import { useTranslation } from "@/i18n";

export function ModernTooling() {
  const { t } = useTranslation();

  const TOOLS = [
    {
      icon: IconBrandNextjs,
      title: t("modernTooling.tools.nextjs.title"),
      description: t("modernTooling.tools.nextjs.description"),
      color: "black",
    },
    {
      icon: IconBrandReact,
      title: t("modernTooling.tools.react.title"),
      description: t("modernTooling.tools.react.description"),
      color: "blue.6",
    },
    {
      icon: IconBolt,
      title: t("modernTooling.tools.biome.title"),
      description: t("modernTooling.tools.biome.description"),
      color: "yellow.6",
    },
    {
      icon: IconBrandTypescript,
      title: t("modernTooling.tools.typescript.title"),
      description: t("modernTooling.tools.typescript.description"),
      color: "blue.6",
    },
    {
      icon: IconDatabase,
      title: t("modernTooling.tools.zustand.title"),
      description: t("modernTooling.tools.zustand.description"),
      color: "orange.6",
    },
    {
      icon: IconBrandGit,
      title: t("modernTooling.tools.husky.title"),
      description: t("modernTooling.tools.husky.description"),
      color: "red.6",
    },
  ];

  return (
    <Card withBorder p="xl" mb={80} bg="var(--mantine-color-body)">
      <Group mb="md">
        <ThemeIcon size={40} variant="light" color="grape">
          <IconBrandVscode size={24} />
        </ThemeIcon>
        <Title order={2}>{t("modernTooling.title")}</Title>
      </Group>
      <Text c="dimmed" mb="lg">
        {t("modernTooling.subtitle")}
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
            <ThemeIcon variant="light" color={tool.color}>
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
