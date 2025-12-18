import { Container } from "@mantine/core";
import {
  HeroSection,
  ModernTooling,
  ThemeToggle,
  UsageInstructions,
  WhyUseTemplate,
} from "./_components";

export default function Home() {
  return (
    <Container size="lg" py={50}>
      <ThemeToggle />
      <HeroSection />
      <WhyUseTemplate />
      <ModernTooling />
      <UsageInstructions />
    </Container>
  );
}
