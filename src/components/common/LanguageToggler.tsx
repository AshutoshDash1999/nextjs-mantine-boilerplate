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
  const [isMounted, setIsMounted] = useState(false);
  const { i18n } = useTranslation();

  // Handle mount to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
    // Set initial language from i18n (only on client)
    const initialLang = getCurrentLanguage();
    setCurrentLanguage(initialLang);
  }, []);

  // Listen to language changes from i18n
  useEffect(() => {
    if (!isMounted) {
      return;
    }

    const handleLanguageChanged = (lng: string) => {
      setCurrentLanguage(lng);
    };

    i18n.on("languageChanged", handleLanguageChanged);

    // Fetch geolocation after mount
    const fetchGeolocationData = async () => {
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

            // Only auto-switch if no language preference is stored
            const storedLang =
              typeof window !== "undefined"
                ? localStorage.getItem("i18nextLng")
                : null;

            if (!storedLang) {
              i18n.changeLanguage(language);
              setCurrentLanguage(language);
            }
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

    fetchGeolocationData();

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [
    isMounted,
    i18n,
  ]);

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
  // Use detected language as default if available, otherwise use current language or "en"
  const currentValue = (() => {
    // If we have a detected language and no stored preference, use detected language
    if (detectedLanguage && detectedLanguage !== "en") {
      const storedLang =
        typeof window !== "undefined"
          ? localStorage.getItem("i18nextLng")
          : null;
      if (!storedLang) {
        return detectedLanguage;
      }
    }
    // Otherwise, use current language if it's in segmentData, or default to "en"
    return segmentData.some((item) => item.value === currentLanguage)
      ? currentLanguage
      : "en";
  })();

  // Prevent hydration mismatch - don't render until mounted on client
  if (!isMounted) {
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

  // Show loading state
  if (isLoading) {
    return (
      <SegmentedControl value={currentValue} disabled data={segmentData} />
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
