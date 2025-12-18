"use client";

import {
  Avatar,
  Badge,
  Group,
  Pagination,
  Select,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { useMarkets } from "@/api/hooks";
import { useLocalStore } from "@/store";
import { formatCurrency, formatPercentage } from "@/utils/format";
import { MarketsSkeleton } from "./_components/skeleton-loader";

function MarketsPage() {
  const [page, setPage] = useState(1);
  const { preferredCurrency } = useLocalStore();
  const [order, setOrder] = useState<
    | "market_cap_desc"
    | "gecko_desc"
    | "gecko_asc"
    | "market_cap_asc"
    | "volume_asc"
    | "volume_desc"
    | "id_asc"
    | "id_desc"
  >("market_cap_desc");
  const { coins, isLoading } = useMarkets({
    vs_currency: preferredCurrency,
    order,
    per_page: 20,
    page,
  });

  if (isLoading) {
    return <MarketsSkeleton />;
  }

  const rows = coins.map((coin) => (
    <Table.Tr key={coin.id}>
      <Table.Td>
        <Group gap="sm">
          <Avatar src={coin.image} size={32} radius="md" />
          <Stack gap={0}>
            <Text fw={500}>{coin.name}</Text>
            <Text size="xs" c="dimmed">
              {coin.symbol.toUpperCase()}
            </Text>
          </Stack>
        </Group>
      </Table.Td>
      <Table.Td>
        <Text fw={500}>
          {formatCurrency(coin.current_price, preferredCurrency)}
        </Text>
      </Table.Td>
      <Table.Td>
        <Badge
          color={coin.price_change_percentage_24h >= 0 ? "green" : "red"}
          variant="light"
        >
          {formatPercentage(coin.price_change_percentage_24h)}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Text size="sm">
          {formatCurrency(coin.market_cap, preferredCurrency)}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text size="sm">
          {formatCurrency(coin.total_volume, preferredCurrency)}
        </Text>
      </Table.Td>
      <Table.Td>
        <Text size="sm">#{coin.market_cap_rank}</Text>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack gap="md" p="md">
      <Group justify="space-between">
        <Title order={2}>Cryptocurrency Markets</Title>
        <Group>
          <Select
            value={order}
            onChange={(value) =>
              setOrder((value as typeof order) || "market_cap_desc")
            }
            data={[
              {
                value: "market_cap_desc",
                label: "Market Cap",
              },
              {
                value: "price_change_percentage_24h_desc",
                label: "24h Change",
              },
            ]}
            w={150}
          />
        </Group>
      </Group>

      <Table.ScrollContainer minWidth={800}>
        <Table verticalSpacing="sm" highlightOnHover>
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
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      <Group justify="center" mt="md">
        <Pagination value={page} onChange={setPage} total={5} />
      </Group>
    </Stack>
  );
}

export default MarketsPage;
