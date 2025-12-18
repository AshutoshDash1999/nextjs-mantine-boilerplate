"use client";
import { Card, Text, ThemeIcon } from "@mantine/core";
import type { ReactNode } from "react";

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card radius="md" withBorder padding="lg" shadow="sm">
      <ThemeIcon
        variant="light"
        size={60}
        radius="md"
        gradient={{
          from: "blue",
          to: "cyan",
        }}
      >
        {icon}
      </ThemeIcon>
      <Text mt="md" fw={500} size="lg">
        {title}
      </Text>
      <Text mt="sm" c="dimmed" size="sm">
        {description}
      </Text>
    </Card>
  );
}
