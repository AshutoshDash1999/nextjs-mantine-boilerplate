"use client";

import {
  Avatar,
  Badge,
  Box,
  Card,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useTrending } from "@/api/hooks";
import { TrendingSkeleton } from "./_components/skeleton-loader";

export function TrendingPage() {
  const { trendingCoins, isLoading } = useTrending();

  if (isLoading) {
    return <TrendingSkeleton />;
  }

  return (
    <Stack gap="md" p="md">
      <Title order={2}>Trending Coins</Title>
      <Text c="dimmed">
        Top trending coins on CoinGecko in the last 24 hours
      </Text>

      <Grid>
        {trendingCoins.slice(0, 20).map((trending) => {
          const coin = trending.item;
          return (
            <Grid.Col
              key={coin.id}
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
                      <Avatar src={coin.large} size={40} radius="md" />
                      <Stack gap={0}>
                        <Text fw={500} size="sm">
                          {coin.name}
                        </Text>
                        <Text size="xs" c="dimmed">
                          {coin.symbol.toUpperCase()}
                        </Text>
                      </Stack>
                    </Group>
                    {coin.market_cap_rank && (
                      <Badge color="blue" variant="light">
                        #{coin.market_cap_rank}
                      </Badge>
                    )}
                  </Group>

                  <Box>
                    <Text size="xs" c="dimmed">
                      Price (BTC)
                    </Text>
                    <Text fw={500}>{coin.price_btc.toFixed(8)} BTC</Text>
                  </Box>

                  <Box>
                    <Text size="xs" c="dimmed">
                      Score
                    </Text>
                    <Text fw={500} size="sm">
                      {coin.score.toFixed(2)}
                    </Text>
                  </Box>
                </Stack>
              </Card>
            </Grid.Col>
          );
        })}
      </Grid>
    </Stack>
  );
}
