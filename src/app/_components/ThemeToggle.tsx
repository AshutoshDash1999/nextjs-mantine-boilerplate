"use client";

import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

export function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="default"
      aria-label="Toggle color scheme"
      size="lg"
    >
      {computedColorScheme === "dark" ? (
        <IconSun stroke={1.5} />
      ) : (
        <IconMoon stroke={1.5} />
      )}
    </ActionIcon>
  );
}
