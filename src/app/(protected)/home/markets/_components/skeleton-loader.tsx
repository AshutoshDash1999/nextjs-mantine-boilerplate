"use client";

import { Group, Skeleton, Stack, Table } from "@mantine/core";

export function MarketsSkeleton() {
  return (
    <Stack gap="md" p="md">
      <Group justify="space-between">
        <Skeleton height={32} width={250} />
        <Group>
          <Skeleton height={36} width={100} />
          <Skeleton height={36} width={150} />
        </Group>
      </Group>

      <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Coin</Table.Th>
              <Table.Th>Price</Table.Th>
              <Table.Th>24h Change</Table.Th>
              <Table.Th>Market Cap</Table.Th>
              <Table.Th>Volume</Table.Th>
              <Table.Th>Rank</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {Array.from({
              length: 10,
            }).map((_, index) => (
              <Table.Tr key={index}>
                <Table.Td>
                  <Group gap="sm">
                    <Skeleton height={32} width={32} circle />
                    <Stack gap={4}>
                      <Skeleton height={16} width={100} />
                      <Skeleton height={12} width={60} />
                    </Stack>
                  </Group>
                </Table.Td>
                <Table.Td>
                  <Skeleton height={16} width={80} />
                </Table.Td>
                <Table.Td>
                  <Skeleton height={24} width={70} radius="xl" />
                </Table.Td>
                <Table.Td>
                  <Skeleton height={14} width={100} />
                </Table.Td>
                <Table.Td>
                  <Skeleton height={14} width={100} />
                </Table.Td>
                <Table.Td>
                  <Skeleton height={14} width={40} />
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <Group justify="center" mt="md">
        <Skeleton height={36} width={300} />
      </Group>
    </Stack>
  );
}
