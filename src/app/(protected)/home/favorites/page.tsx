"use client";

import { Card, Center, Stack, Text, Title } from "@mantine/core";
import { IconStar } from "@tabler/icons-react";

function FavoritesPage() {
  return (
    <Stack gap="md" p="md">
      <Title order={2}>Favorites</Title>
      <Card shadow="sm" padding="xl" radius="md" withBorder>
        <Center>
          <Stack align="center" gap="md">
            <IconStar size={48} color="gray" />
            <Text c="dimmed" ta="center">
              Your favorite coins will appear here
            </Text>
            <Text size="sm" c="dimmed" ta="center">
              Click the star icon on any coin to add it to your favorites
            </Text>
          </Stack>
        </Center>
      </Card>
    </Stack>
  );
}

export default FavoritesPage;
