"use client";
import { SimpleGrid, Stack, Title } from "@mantine/core";
import {
  IconBolt,
  IconPalette,
  IconRocket,
  IconTool,
} from "@tabler/icons-react";
import { useTranslation } from "@/i18n";
import { FeatureCard } from "./FeatureCard";

export function WhyUseTemplate() {
  const { t } = useTranslation();

  return (
    <Stack mb={80}>
      <Title order={2} ta="center" mb="xl">
        {t("whyUseTemplate.title")}
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
          title={t("whyUseTemplate.features.cuttingEdgePerformance.title")}
          description={t(
            "whyUseTemplate.features.cuttingEdgePerformance.description"
          )}
        />
        <FeatureCard
          icon={<IconBolt size={30} />}
          title={t("whyUseTemplate.features.blazingFastTooling.title")}
          description={t(
            "whyUseTemplate.features.blazingFastTooling.description"
          )}
        />
        <FeatureCard
          icon={<IconPalette size={30} />}
          title={t("whyUseTemplate.features.mantineUI.title")}
          description={t("whyUseTemplate.features.mantineUI.description")}
        />
        <FeatureCard
          icon={<IconTool size={30} />}
          title={t("whyUseTemplate.features.robustStateManagement.title")}
          description={t(
            "whyUseTemplate.features.robustStateManagement.description"
          )}
        />
      </SimpleGrid>
    </Stack>
  );
}
