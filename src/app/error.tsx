"use client";

import {
  Button,
  Code,
  Container,
  Flex,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconAlertCircle, IconHome, IconRefresh } from "@tabler/icons-react";

interface ErrorComponentProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorComponentProps) {
  return (
    <Flex justify="center" align="center" h="100vh" p="md">
      <Container size="sm" w="100%">
        <Stack gap="xl" align="center" ta="center">
          <ThemeIcon size={120} radius={60} variant="light" color="red">
            <IconAlertCircle size={60} stroke={1.5} />
          </ThemeIcon>

          <Stack gap="md" align="center">
            <Title order={1} fw={800} size="4rem">
              Oops!
            </Title>
            <Title order={2} fw={600} size="h3">
              Something went wrong
            </Title>
            <Text size="lg" c="dimmed" maw={600}>
              We encountered an unexpected error. Please try again or contact
              support if the problem persists.
            </Text>
          </Stack>

          {error.message && (
            <Stack gap="xs" align="center" w="100%" maw={600}>
              <Text size="sm" fw={500} c="dimmed">
                Error details:
              </Text>
              <Code
                block
                w="100%"
                p="md"
                style={{
                  textAlign: "left",
                }}
              >
                {error.message}
              </Code>
            </Stack>
          )}

          <Stack gap="sm" mt="md">
            <Button
              size="lg"
              leftSection={<IconRefresh size={20} />}
              onClick={reset}
            >
              Try again
            </Button>
            <Button
              size="lg"
              variant="light"
              leftSection={<IconHome size={20} />}
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Go back home
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Flex>
  );
}
