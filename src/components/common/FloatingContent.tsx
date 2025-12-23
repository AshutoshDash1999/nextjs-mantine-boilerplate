"use client";

import { Affix, Group } from "@mantine/core";
import { ThemeToggle } from "@/app/_components/ThemeToggle";
import { LanguageToggler } from "./LanguageToggler";

export function FloatingContent() {
  return (
    <Affix
      position={{
        bottom: 20,
        right: 20,
      }}
      zIndex={1000}
    >
      <Group gap="sm">
        <ThemeToggle />
        <LanguageToggler />
      </Group>
    </Affix>
  );
}
