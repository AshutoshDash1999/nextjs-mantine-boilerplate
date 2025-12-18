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

export function UsageInstructions() {
  return (
    <Card withBorder radius="md" p="xl" bg="var(--mantine-color-body)">
      <Stack gap="md">
        <Group>
          <ThemeIcon size={40} radius="md" variant="light" color="blue">
            <IconBrandGithub size={24} />
          </ThemeIcon>
          <Title order={2}>How to use this template</Title>
        </Group>

        <Text c="dimmed">
          Follow these simple steps to get your project up and running:
        </Text>

        <List
          spacing="md"
          size="md"
          center
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconCheck size={16} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <Text span fw={700}>
              Clone the repository
            </Text>{" "}
            and navigate to the project directory.
          </List.Item>
          <List.Item>
            <Text span fw={700}>
              Install dependencies
            </Text>{" "}
            using your preferred package manager:
            <Code block mt="xs">
              npm install
            </Code>
          </List.Item>
          <List.Item>
            <Text span fw={700}>
              Start the development server
            </Text>{" "}
            to see changes in real-time:
            <Code block mt="xs">
              npm run dev
            </Code>
          </List.Item>
          <List.Item>
            Start building your application by modifying{" "}
            <Code>src/app/page.tsx</Code>.
          </List.Item>
        </List>
      </Stack>
    </Card>
  );
}
