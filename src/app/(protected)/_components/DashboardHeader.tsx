"use client";

import {
  ActionIcon,
  Avatar,
  Box,
  Group,
  Menu,
  Select,
  Text,
  UnstyledButton,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import {
  IconLogout,
  IconMoon,
  IconSettings,
  IconSun,
  IconUser,
} from "@tabler/icons-react";
import { useLocalStore } from "@/store";

const currencies = [
  {
    value: "usd",
    label: "USD",
  },
  {
    value: "eur",
    label: "EUR",
  },
  {
    value: "gbp",
    label: "GBP",
  },
  {
    value: "jpy",
    label: "JPY",
  },
  {
    value: "btc",
    label: "BTC",
  },
  {
    value: "eth",
    label: "ETH",
  },
];

export function DashboardHeader() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const { preferredCurrency, setPreferredCurrency } = useLocalStore();

  return (
    <Box h="100%" px="md">
      <Group h="100%" justify="space-between">
        <Group gap="md">
          <Text fw={600} size="lg">
            CoinGecko Dashboard
          </Text>
        </Group>

        <Group gap="sm">
          <Select
            value={preferredCurrency}
            onChange={(value) => setPreferredCurrency(value || "usd")}
            data={currencies}
            w={100}
            size="sm"
          />

          <ActionIcon
            onClick={() =>
              setColorScheme(computedColorScheme === "light" ? "dark" : "light")
            }
            variant="default"
            size="lg"
            aria-label="Toggle color scheme"
          >
            {computedColorScheme === "dark" ? (
              <IconSun stroke={1.5} size={18} />
            ) : (
              <IconMoon stroke={1.5} size={18} />
            )}
          </ActionIcon>

          <Menu shadow="md" width={200} position="bottom-end">
            <Menu.Target>
              <UnstyledButton>
                <Avatar color="blue" radius="xl">
                  U
                </Avatar>
              </UnstyledButton>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>Account</Menu.Label>
              <Menu.Item leftSection={<IconUser size={16} />}>
                Profile
              </Menu.Item>
              <Menu.Item leftSection={<IconSettings size={16} />}>
                Settings
              </Menu.Item>
              <Menu.Divider />
              <Menu.Item color="red" leftSection={<IconLogout size={16} />}>
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Group>
    </Box>
  );
}
