"use client";

import { NavLink, Stack } from "@mantine/core";
import {
  IconChartLine,
  IconCoins,
  IconStar,
  IconTrendingUp,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DashboardSidebar() {
  const pathname = usePathname();

  const navItems = [
    {
      id: "markets",
      label: "Markets",
      icon: <IconCoins size={20} />,
      href: "/home/markets",
    },
    {
      id: "trending",
      label: "Trending",
      icon: <IconTrendingUp size={20} />,
      href: "/home/trending",
    },
    {
      id: "favorites",
      label: "Favorites",
      icon: <IconStar size={20} />,
      href: "/home/favorites",
    },
    {
      id: "portfolio",
      label: "Portfolio",
      icon: <IconChartLine size={20} />,
      href: "/home/portfolio",
    },
  ];

  return (
    <Stack gap={0} w={250} h="100%">
      <Stack gap={4} p="md">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            component={Link}
            href={item.href}
            label={item.label}
            leftSection={item.icon}
            active={
              pathname === item.href ||
              (pathname === "/home" && item.id === "markets")
            }
          />
        ))}
      </Stack>
    </Stack>
  );
}
