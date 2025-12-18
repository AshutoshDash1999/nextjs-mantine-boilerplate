"use client";

import { Card, Grid, Group, Skeleton, Stack } from "@mantine/core";

export function TrendingSkeleton() {
  return (
    <Stack gap="md" p="md">
      <Skeleton height={32} width={200} />
      <Skeleton height={20} width={400} />

      <Grid>
        {Array.from({
          length: 12,
        }).map((_, index) => (
          <Grid.Col
            key={index}
            span={{
              base: 12,
              sm: 6,
              md: 4,
              lg: 3,
            }}
          >
            <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
              <Stack gap="sm">
                <Group justify="space-between">
                  <Group gap="sm">
                    <Skeleton height={40} width={40} circle />
                    <Stack gap={4}>
                      <Skeleton height={16} width={80} />
                      <Skeleton height={12} width={50} />
                    </Stack>
                  </Group>
                  <Skeleton height={24} width={50} radius="xl" />
                </Group>

                <Stack gap={4}>
                  <Skeleton height={12} width={70} />
                  <Skeleton height={16} width={120} />
                </Stack>

                <Stack gap={4}>
                  <Skeleton height={12} width={50} />
                  <Skeleton height={16} width={80} />
                </Stack>
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
}
