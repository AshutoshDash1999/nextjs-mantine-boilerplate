"use client";

import {
  ActionIcon,
  Affix,
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
    <Affix
      position={{
        bottom: 20,
        right: 200,
      }}
      zIndex={1000}
    >
      <ActionIcon
        onClick={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
      >
        {computedColorScheme === "dark" ? (
          <IconSun stroke={1.5} />
        ) : (
          <IconMoon stroke={1.5} />
        )}
      </ActionIcon>
    </Affix>
  );
}
