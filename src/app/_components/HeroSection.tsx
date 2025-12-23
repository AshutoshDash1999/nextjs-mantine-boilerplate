"use client";
import { Button, Group, Stack, Text, Title } from "@mantine/core";
import { IconDashboard, IconLogin } from "@tabler/icons-react";
import Link from "next/link";
import { useTranslation } from "@/i18n";

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <Stack align="center" gap="lg" mb={80}>
      <Title order={1}>{t("hero.title")}</Title>
      <Text c="dimmed" size="xl" maw={600}>
        {t("hero.subtitle")}
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
          {t("hero.loginButton")}
        </Button>
        <Button
          component={Link}
          href="/home"
          size="lg"
          variant="default"
          leftSection={<IconDashboard size={20} />}
        >
          {t("hero.dashboardButton")}
        </Button>
      </Group>
    </Stack>
  );
}
