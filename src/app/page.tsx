import { Container } from "@mantine/core";
import {
  HeroSection,
  ModernTooling,
  QuickLinks,
  SocialShare,
  UsageInstructions,
  WhyUseTemplate,
} from "./_components";

export default function Home() {
  return (
    <Container size="lg" py={50}>
      <HeroSection />
      <WhyUseTemplate />
      <ModernTooling />
      <QuickLinks />
      <UsageInstructions />
      <SocialShare />
    </Container>
  );
}
