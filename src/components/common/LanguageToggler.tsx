"use client";

import { SegmentedControl } from "@mantine/core";
import { useEffect, useState } from "react";
import {
  changeLanguage,
  getCurrentLanguage,
  i18n,
  SUPPORTED_LANGUAGES,
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

            // If current language is still default (en) or matches detected, use auto-detected
            const currentLang = getCurrentLanguage();
            console.log("currentLang :", currentLang);
            if (currentLang === "en" || currentLang === lang) {
              changeLanguage(lang);
              setCurrentLanguage(lang);
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

    fetchGeolocation();

    // Listen to language changes from i18n
    const handleLanguageChanged = (lng: string) => {
      setCurrentLanguage(lng);
    };

    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  // Get the language label for display
  const getLanguageLabel = (langCode: string | null): string => {
    if (!langCode || langCode === "en") {
      return "English";
    }
    const lang = SUPPORTED_LANGUAGES.find((l) => l.code === langCode);
    return lang ? lang.nativeLabel : langCode.toUpperCase();
  };

  // Determine current value for segmented control
  // If currentLanguage matches detectedLanguage, show detected language code, otherwise show "en"
  const currentValue =
    currentLanguage === detectedLanguage && detectedLanguage
      ? detectedLanguage
      : "en";

  // Handle language change
  const handleLanguageChange = (value: string) => {
    if (value === "en") {
      changeLanguage("en");
    } else if (value === detectedLanguage && detectedLanguage) {
      changeLanguage(detectedLanguage);
    }
  };

  // Don't show if no language detected or still loading
  if (isLoading || !detectedLanguage) {
    return null;
  }

  return (
    <SegmentedControl
      value={currentValue}
      onChange={handleLanguageChange}
      data={[
        {
          label: getLanguageLabel(detectedLanguage),
          value: detectedLanguage,
        },
        {
          label: "English",
          value: "en",
        },
      ]}
    />
  );
}
