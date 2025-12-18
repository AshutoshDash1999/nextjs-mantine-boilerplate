"use client";

import { Container, Flex, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";
import { NotFoundButton } from "./NotFoundButton";

export function NotFoundContent() {
  return (
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
              Oops! The page you're looking for doesn't exist. It might have
              been moved, deleted, or the URL might be incorrect.
            </Text>
          </Stack>

          <NotFoundButton />
        </Stack>
      </Container>
    </Flex>
  );
}
