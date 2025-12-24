"use client";

import { SegmentedControl } from "@mantine/core";
import { useEffect, useState } from "react";
import {
  changeLanguage,
  getCurrentLanguage,
  SUPPORTED_LANGUAGES,
  useTranslation,
} from "@/i18n";

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
  const [isLoading, setIsLoading] = useState(true);
  const [detectedLanguage, setDetectedLanguage] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState<string>("en");
  const { i18n } = useTranslation();

  const fetchGeolocation = async () => {
    try {
      const response = await fetch("/api/geolocation");
      if (response.ok) {
        const data: GeolocationResponse = await response.json();
        const language = data.language || "en";

        // Check if the detected language is supported
        const isSupported = SUPPORTED_LANGUAGES.some(
          (l) => l.code === language
        );

        if (isSupported && language !== "en") {
          setDetectedLanguage(language);

          i18n.changeLanguage(language);
        } else {
          setDetectedLanguage(null);
        }
      }
    } catch (error) {
      console.error("Failed to fetch geolocation:", error);
      setDetectedLanguage(null);
    } finally {
      setIsLoading(false);
    }
  };

  console.log("detectedLanguage :", detectedLanguage);

  // Initialize current language from i18n
  useEffect(() => {
    // Set initial language from i18n
    const initialLang = getCurrentLanguage();
    setCurrentLanguage(initialLang);

    // Fetch geolocation on mount (only once)

    fetchGeolocation();
  }, []);

  // Get the language label for display
  const getLanguageLabel = (langCode: string | null): string => {
    if (!langCode || langCode === "en") {
      return "English";
    }
    const lang = SUPPORTED_LANGUAGES.find((l) => l.code === langCode);
    return lang ? lang.nativeLabel : langCode.toUpperCase();
  };

  // Handle language change
  const handleLanguageChange = (value: string) => {
    changeLanguage(value);
    setCurrentLanguage(value);
  };

  // Build data array for segmented control
  const segmentData = [];

  // If we have a detected language and it's not English, show it as first option
  if (detectedLanguage && detectedLanguage !== "en") {
    segmentData.push({
      label: getLanguageLabel(detectedLanguage),
      value: detectedLanguage,
    });
  }

  // Always show English
  segmentData.push({
    label: "English",
    value: "en",
  });

  // Determine current value for segmented control
  // If current language is in segmentData, use it; otherwise default to "en"
  const currentValue = segmentData.some(
    (item) => item.value === currentLanguage
  )
    ? currentLanguage
    : "en";

  // Show loading state or always show the control
  if (isLoading) {
    return (
      <SegmentedControl
        value="en"
        disabled
        data={[
          {
            label: "English",
            value: "en",
          },
        ]}
      />
    );
  }

  return (
    <SegmentedControl
      value={currentValue}
      onChange={handleLanguageChange}
      data={segmentData}
    />
  );
}
