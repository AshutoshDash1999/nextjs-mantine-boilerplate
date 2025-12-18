"use client";

import { Button } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";

export function NotFoundButton() {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      leftSection={<IconHome size={20} />}
      mt="md"
    >
      Go Back Home
    </Button>
  );
}
