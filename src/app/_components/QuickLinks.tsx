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
import { useTranslation } from "@/i18n";
import styles from "../page.module.css";

export function QuickLinks() {
  const { t } = useTranslation();

  const LINKS = [
    {
      icon: IconBrandNextjs,
      label: t("quickLinks.links.nextjs.label"),
      description: t("quickLinks.links.nextjs.description"),
      href: "https://nextjs.org",
      color: "black",
    },
    {
      icon: IconBrandReact,
      label: t("quickLinks.links.react.label"),
      description: t("quickLinks.links.react.description"),
      href: "https://react.dev",
      color: "blue.6",
    },
    {
      icon: IconBrandMantine,
      label: t("quickLinks.links.mantine.label"),
      description: t("quickLinks.links.mantine.description"),
      href: "https://mantine.dev",
      color: "blue.5",
    },
    {
      icon: IconBolt,
      label: t("quickLinks.links.biome.label"),
      description: t("quickLinks.links.biome.description"),
      href: "https://biomejs.dev",
      color: "yellow.6",
    },
    {
      icon: IconDatabase,
      label: t("quickLinks.links.zustand.label"),
      description: t("quickLinks.links.zustand.description"),
      href: "https://zustand.docs.pmnd.rs/",
      color: "orange.6",
    },
    {
      icon: IconBrandGithub,
      label: t("quickLinks.links.repository.label"),
      description: t("quickLinks.links.repository.description"),
      href: "https://github.com/AshutoshDash1999/nextjs-mantine-boilerplate",
      color: "gray.9",
    },
  ];

  return (
    <Card withBorder p="xl" mb={80} bg="var(--mantine-color-body)">
      <Group mb="md">
        <ThemeIcon size={40} variant="light" color="cyan">
          <IconExternalLink size={24} />
        </ThemeIcon>
        <Title order={2}>{t("quickLinks.title")}</Title>
      </Group>
      <Text c="dimmed" mb="lg">
        {t("quickLinks.subtitle")}
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
            <Paper withBorder h="100%" className={styles.card}>
              <Group wrap="nowrap" p="md">
                <ThemeIcon size={34} variant="light" color={link.color}>
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
