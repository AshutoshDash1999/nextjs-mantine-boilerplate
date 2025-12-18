import { Container } from "@mantine/core";
import {
  HeroSection,
  ModernTooling,
  UsageInstructions,
  WhyUseTemplate,
} from "./_components";

export default function Home() {
  return (
    <Container size="lg" py={50}>
      <HeroSection />
      <WhyUseTemplate />
      <ModernTooling />
      <UsageInstructions />
    </Container>
  );
}
