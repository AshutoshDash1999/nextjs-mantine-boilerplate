"use client";

import { Affix, SegmentedControl } from "@mantine/core";
import { useEffect, useState } from "react";
import { i18n, SUPPORTED_LANGUAGES } from "@/i18n";
import { useLocalStore } from "@/store";

interface GeolocationResponse {
  language: string;
  currency: string;
  countryCode: string | null;
  coordinates: {
    latitude: number | null;
    longitude: number | null;
  };
  timezone: string | null;
}

export function LanguageToggler() {
  const { preferredLanguage, setPreferredLanguage, setAutoDetectedLanguage } =
    useLocalStore();
  const [isLoading, setIsLoading] = useState(true);
  const [detectedLanguage, setDetectedLanguage] = useState<string | null>(null);

  // Fetch geolocation on mount (only once)
  useEffect(() => {
    const fetchGeolocation = async () => {
      try {
        const response = await fetch("/api/geolocation");
        if (response.ok) {
          const data: GeolocationResponse = await response.json();
          const lang = data.language || "en";

          // Check if the detected language is supported
          const isSupported = SUPPORTED_LANGUAGES.some((l) => l.code === lang);

          if (isSupported && lang !== "en") {
            setDetectedLanguage(lang);
            setAutoDetectedLanguage(lang);

            // If user hasn't manually selected a language, use auto-detected
            const languageSelected = localStorage.getItem("language-selected");
            if (!languageSelected) {
              i18n.changeLanguage(lang);
              setPreferredLanguage(lang);
            }
          } else {
            setDetectedLanguage(null);
            setAutoDetectedLanguage(null);
          }
        }
      } catch (error) {
        console.error("Failed to fetch geolocation:", error);
        setDetectedLanguage(null);
        setAutoDetectedLanguage(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGeolocation();
  }, [
    setAutoDetectedLanguage,
    setPreferredLanguage,
  ]);

  // Get the language label for display
  const getLanguageLabel = (langCode: string | null): string => {
    if (!langCode) {
      return "Auto";
    }
    const lang = SUPPORTED_LANGUAGES.find((l) => l.code === langCode);
    return lang ? lang.nativeLabel : "Auto";
  };

  // Determine current value for segmented control
  // If preferredLanguage matches detectedLanguage, show "auto", otherwise show "en"
  const currentValue =
    preferredLanguage === detectedLanguage && detectedLanguage ? "auto" : "en";

  // Handle language change
  const handleLanguageChange = (value: string) => {
    if (value === "en") {
      i18n.changeLanguage("en");
      setPreferredLanguage("en");
      localStorage.setItem("language-selected", "true");
    } else if (value === "auto" && detectedLanguage) {
      i18n.changeLanguage(detectedLanguage);
      setPreferredLanguage(detectedLanguage);
      localStorage.setItem("language-selected", "true");
    }
  };

  // Don't show if no language detected or still loading
  if (isLoading || !detectedLanguage) {
    return null;
  }

  return (
    <Affix
      position={{
        bottom: 20,
        right: 20,
      }}
      zIndex={1000}
    >
      <SegmentedControl
        value={currentValue}
        onChange={handleLanguageChange}
        data={[
          {
            label: getLanguageLabel(detectedLanguage),
            value: "auto",
          },
          {
            label: "English",
            value: "en",
          },
        ]}
        size="sm"
      />
    </Affix>
  );
}
