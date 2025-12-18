"use client";

import {
  ActionIcon,
  Avatar,
  Box,
  Burger,
  Group,
  Menu,
  Select,
  Text,
  UnstyledButton,
  useComputedColorScheme,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
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

interface DashboardHeaderProps {
  onBurgerClick: () => void;
  drawerOpened: boolean;
}

export function DashboardHeader({
  onBurgerClick,
  drawerOpened,
}: DashboardHeaderProps) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const theme = useMantineTheme();

  const { preferredCurrency, setPreferredCurrency } = useLocalStore();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Box h="100%" px="md">
      <Group h="100%" justify="space-between">
        <Group gap="md">
          {isMobile && (
            <Burger
              opened={drawerOpened}
              onClick={onBurgerClick}
              size="sm"
              aria-label="Toggle navigation"
            />
          )}
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

          {!isMobile && (
            <ActionIcon
              onClick={() =>
                setColorScheme(
                  computedColorScheme === "light" ? "dark" : "light"
                )
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
          )}

          <Menu shadow="md" width={200} position="bottom-end">
            <Menu.Target>
              <UnstyledButton>
                <Avatar color="blue" radius="xl">
                  U
                </Avatar>
              </UnstyledButton>
            </Menu.Target>

            <Menu.Dropdown>
              {isMobile && (
                <>
                  <Menu.Label>Theme</Menu.Label>
                  <Menu.Item
                    onClick={() =>
                      setColorScheme(
                        computedColorScheme === "light" ? "dark" : "light"
                      )
                    }
                    leftSection={
                      computedColorScheme === "dark" ? (
                        <IconSun size={16} />
                      ) : (
                        <IconMoon size={16} />
                      )
                    }
                  >
                    {computedColorScheme === "dark"
                      ? "Light Mode"
                      : "Dark Mode"}
                  </Menu.Item>
                  <Menu.Divider />
                </>
              )}
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
