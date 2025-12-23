import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en.json";
import hiTranslations from "./locales/hi.json";
import odTranslations from "./locales/od.json";
import teTranslations from "./locales/te.json";

export interface Language {
  code: string;
  label: string;
  nativeLabel: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  {
    code: "en",
    label: "English",
    nativeLabel: "English",
  },
  {
    code: "hi",
    label: "Hindi",
    nativeLabel: "हिंदी",
  },
  {
    code: "te",
    label: "Telugu",
    nativeLabel: "తెలుగు",
  },
  {
    code: "od",
    label: "Odia",
    nativeLabel: "ଓଡ଼ିଆ",
  },
];

// Default language code
export const DEFAULT_LANGUAGE = "en";

const resources = {
  en: {
    translation: enTranslations,
  },
  hi: {
    translation: hiTranslations,
  },
  te: {
    translation: teTranslations,
  },
  od: {
    translation: odTranslations,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    defaultNS: "translation",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      // Don't use URL-based detection since we don't want URL redirection
      order: [
        "localStorage",
        "navigator",
      ],
      lookupLocalStorage: "i18nextLng",
      caches: [
        "localStorage",
      ],
    },
  });

export default i18n;
