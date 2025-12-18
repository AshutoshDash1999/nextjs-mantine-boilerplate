"use client";
import { SimpleGrid, Stack, Title } from "@mantine/core";
import {
  IconBolt,
  IconPalette,
  IconRocket,
  IconTool,
} from "@tabler/icons-react";
import { FeatureCard } from "./FeatureCard";

export function WhyUseTemplate() {
  return (
    <Stack mb={80}>
      <Title order={2} ta="center" mb="xl">
        Why Use This Template?
      </Title>
      <SimpleGrid
        cols={{
          base: 1,
          sm: 2,
        }}
        spacing="xl"
      >
        <FeatureCard
          icon={<IconRocket size={30} />}
          title="Cutting Edge Performance"
          description="Leverage the power of Next.js 16 and React 19 (RC) with the new React Compiler enabled for optimal speed and SEO."
        />
        <FeatureCard
          icon={<IconBolt size={30} />}
          title="Blazing Fast Tooling"
          description="Replaced ESLint and Prettier with Biome - a fast, Rust-based toolchain for formatting and linting that saves you time."
        />
        <FeatureCard
          icon={<IconPalette size={30} />}
          title="Mantine UI v8"
          description="Built on the latest version of Mantine, offering a comprehensive suite of accessible and customizable components."
        />
        <FeatureCard
          icon={<IconTool size={30} />}
          title="Robust State Management"
          description="Includes Zustand for global client state and TanStack Query for efficient server state and data fetching."
        />
      </SimpleGrid>
    </Stack>
  );
}
