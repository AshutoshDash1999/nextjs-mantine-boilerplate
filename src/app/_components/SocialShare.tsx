"use client";
import {
  ActionIcon,
  Anchor,
  Divider,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
  IconShare,
} from "@tabler/icons-react";
import { useTranslation } from "@/i18n";

// Contact information
const CONTACT_INFO = {
  name: "Ashutosh Dash",
  email: "dashashutosh1999@gmail.com",
  github: "https://github.com/AshutoshDash1999",
  twitter: "https://x.com/ashutoshdash99",
  linkedin: "https://www.linkedin.com/in/ashutoshdash1999/",
  website: "https://ashutoshdash.netlify.app",
};

export function SocialShare() {
  const { t } = useTranslation();
  const url = typeof window !== "undefined" ? window.location.href : "";
  const title = "Next.js Mantine Boilerplate | Dashboard Template";
  const description =
    "Production-ready Next.js 16 + React 19 + Mantine v8 dashboard boilerplate with TypeScript, Zustand, TanStack Query, and react-query-ease.";

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=Inquiry about Next.js Mantine Boilerplate`;
  };

  const handleShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
      } catch {
        // User cancelled or error occurred
      }
    }
  };

  return (
    <Stack align="center" gap="xl" my={80}>
      {/* Share Section */}
      <Stack align="center" gap="md" w="100%">
        <Title order={2} ta="center">
          {t("socialShare.share.title")}
        </Title>
        <Text c="dimmed" size="sm" ta="center">
          {t("socialShare.share.subtitle")}
        </Text>
        <Group gap="sm" justify="center">
          <ActionIcon
            component="a"
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="light"
            color="blue"
            title="Share on Twitter/X"
            aria-label="Share on Twitter/X"
          >
            <IconBrandX size={20} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="light"
            color="blue"
            title="Share on Facebook"
            aria-label="Share on Facebook"
          >
            <IconBrandFacebook size={20} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="light"
            color="blue"
            title="Share on LinkedIn"
            aria-label="Share on LinkedIn"
          >
            <IconBrandLinkedin size={20} />
          </ActionIcon>
          {typeof navigator !== "undefined" &&
            typeof navigator.share === "function" && (
              <ActionIcon
                onClick={handleShare}
                size="lg"
                variant="light"
                color="grape"
                title="Share via native share"
                aria-label="Share via native share"
              >
                <IconShare size={20} />
              </ActionIcon>
            )}
        </Group>
      </Stack>

      <Divider
        w="100%"
        label={t("socialShare.contact.title")}
        labelPosition="center"
      />

      {/* Contact Section */}
      <Stack align="center" gap="md" w="100%">
        <Title order={3} ta="center" size="h4">
          {t("socialShare.contact.title")}
        </Title>
        <Text c="dimmed" size="sm" ta="center">
          {t("socialShare.contact.subtitle")}
        </Text>
        <Group gap="md" justify="center" wrap="wrap">
          {CONTACT_INFO.email && (
            <ActionIcon
              onClick={handleEmailClick}
              size="lg"
              variant="light"
              color="red"
              title={`Email: ${CONTACT_INFO.email}`}
              aria-label={`Email ${CONTACT_INFO.name}`}
            >
              <IconMail size={20} />
            </ActionIcon>
          )}
          {CONTACT_INFO.github && (
            <ActionIcon
              component="a"
              href={CONTACT_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="light"
              color="dark"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <IconBrandGithub size={20} />
            </ActionIcon>
          )}
          {CONTACT_INFO.twitter && (
            <ActionIcon
              component="a"
              href={CONTACT_INFO.twitter}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="light"
              color="blue"
              title="Twitter/X Profile"
              aria-label="Twitter/X Profile"
            >
              <IconBrandX size={20} />
            </ActionIcon>
          )}
          {CONTACT_INFO.linkedin && (
            <ActionIcon
              component="a"
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="light"
              color="blue"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <IconBrandLinkedin size={20} />
            </ActionIcon>
          )}
        </Group>
        {CONTACT_INFO.email && (
          <Group gap="xs" justify="center">
            <Text size="sm" c="dimmed">
              {t("socialShare.contact.emailLabel")}
            </Text>
            <Anchor
              href={`mailto:${CONTACT_INFO.email}`}
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                handleEmailClick();
              }}
            >
              {CONTACT_INFO.email}
            </Anchor>
          </Group>
        )}
        {CONTACT_INFO.website && (
          <Text size="sm" c="dimmed">
            {t("socialShare.contact.websiteLabel")}{" "}
            <Anchor
              href={CONTACT_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
            >
              {CONTACT_INFO.website.replace(/^https?:\/\//, "")}
            </Anchor>
          </Text>
        )}
      </Stack>
    </Stack>
  );
}
