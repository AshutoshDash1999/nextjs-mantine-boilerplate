import { Container, SimpleGrid, Skeleton, Stack } from "@mantine/core";

function Loading() {
  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        {/* Header Skeleton */}
        <Stack gap="md">
          <Skeleton height={48} width={250} radius="md" />
          <Skeleton height={24} width={500} radius="md" />
          <Skeleton height={20} width={400} radius="md" />
        </Stack>

        {/* Content Cards Skeleton */}
        <Stack gap="md">
          {[
            1,
            2,
            3,
          ].map((item) => (
            <Skeleton key={item} height={180} radius="md" />
          ))}
        </Stack>

        {/* Grid Skeleton for Cards */}
        <SimpleGrid
          cols={{
            base: 1,
            sm: 2,
            md: 3,
          }}
          spacing={{
            base: "md",
            md: "xl",
          }}
        >
          {[
            1,
            2,
            3,
            4,
            5,
            6,
          ].map((item) => (
            <Stack key={item} gap="sm">
              <Skeleton height={160} radius="md" />
              <Skeleton height={24} width="85%" radius="md" />
              <Skeleton height={20} width="70%" radius="md" />
              <Skeleton height={16} width="60%" radius="md" />
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  );
}

export default Loading;
