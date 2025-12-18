"use client";

import { Card, Center, Stack, Text, Title } from "@mantine/core";
import { IconChartLine } from "@tabler/icons-react";

export function PortfolioPage() {
  return (
    <Stack gap="md" p="md">
      <Title order={2}>Portfolio</Title>
      <Card shadow="sm" padding="xl" radius="md" withBorder>
        <Center>
          <Stack align="center" gap="md">
            <IconChartLine
              size={48}
              style={{
                opacity: 0.5,
              }}
            />
            <Text c="dimmed" ta="center">
              Portfolio tracking coming soon
            </Text>
            <Text size="sm" c="dimmed" ta="center">
              Track your cryptocurrency holdings and performance
            </Text>
          </Stack>
        </Center>
      </Card>
    </Stack>
  );
}
