"use client";

import {
  Card,
  Code,
  Group,
  List,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconBrandGithub, IconCheck } from "@tabler/icons-react";
import { useTranslation } from "@/i18n";

export function UsageInstructions() {
  const { t } = useTranslation();

  return (
    <Card withBorder p="xl" bg="var(--mantine-color-body)">
      <Stack gap="md">
        <Group>
          <ThemeIcon size={40} variant="light" color="blue">
            <IconBrandGithub size={24} />
          </ThemeIcon>
          <Title order={2}>{t("usageInstructions.title")}</Title>
        </Group>

        <Text c="dimmed">{t("usageInstructions.subtitle")}</Text>

        <List
          spacing="md"
          size="md"
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <Text span fw={700}>
              {t("usageInstructions.steps.clone.bold")}
            </Text>{" "}
            {t("usageInstructions.steps.clone.text")}
          </List.Item>
          <List.Item>
            <Text span fw={700}>
              {t("usageInstructions.steps.install.bold")}
            </Text>{" "}
            {t("usageInstructions.steps.install.text")}
            <Code block mt="xs">
              npm install
            </Code>
          </List.Item>
          <List.Item>
            <Text span fw={700}>
              {t("usageInstructions.steps.start.bold")}
            </Text>{" "}
            {t("usageInstructions.steps.start.text")}
            <Code block mt="xs">
              npm run dev
            </Code>
          </List.Item>
          <List.Item>
            {t("usageInstructions.steps.build.text")}
            <Code>{t("usageInstructions.steps.build.code")}</Code>.
          </List.Item>
        </List>
      </Stack>
    </Card>
  );
}
