import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import amTranslations from "./locales/am.json";
import arTranslations from "./locales/ar.json";
import bnTranslations from "./locales/bn.json";
import csTranslations from "./locales/cs.json";
import daTranslations from "./locales/da.json";
import deTranslations from "./locales/de.json";
import elTranslations from "./locales/el.json";
import enTranslations from "./locales/en.json";
import esTranslations from "./locales/es.json";
import faTranslations from "./locales/fa.json";
import fiTranslations from "./locales/fi.json";
import frTranslations from "./locales/fr.json";
import guTranslations from "./locales/gu.json";
import haTranslations from "./locales/ha.json";
import heTranslations from "./locales/he.json";
import hiTranslations from "./locales/hi.json";
import huTranslations from "./locales/hu.json";
import idTranslations from "./locales/id.json";
import itTranslations from "./locales/it.json";
import jaTranslations from "./locales/ja.json";
import knTranslations from "./locales/kn.json";
import koTranslations from "./locales/ko.json";
import mlTranslations from "./locales/ml.json";
import mrTranslations from "./locales/mr.json";
import msTranslations from "./locales/ms.json";
import nlTranslations from "./locales/nl.json";
import noTranslations from "./locales/no.json";
import odTranslations from "./locales/od.json";
import paTranslations from "./locales/pa.json";
import plTranslations from "./locales/pl.json";
import ptTranslations from "./locales/pt.json";
import roTranslations from "./locales/ro.json";
import ruTranslations from "./locales/ru.json";
import svTranslations from "./locales/sv.json";
import swTranslations from "./locales/sw.json";
import taTranslations from "./locales/ta.json";
import teTranslations from "./locales/te.json";
import thTranslations from "./locales/th.json";
import tlTranslations from "./locales/tl.json";
import trTranslations from "./locales/tr.json";
import ukTranslations from "./locales/uk.json";
import urTranslations from "./locales/ur.json";
import viTranslations from "./locales/vi.json";
import zhTranslations from "./locales/zh.json";

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
    code: "es",
    label: "Spanish",
    nativeLabel: "Español",
  },
  {
    code: "fr",
    label: "French",
    nativeLabel: "Français",
  },
  {
    code: "de",
    label: "German",
    nativeLabel: "Deutsch",
  },
  {
    code: "pt",
    label: "Portuguese",
    nativeLabel: "Português",
  },
  {
    code: "it",
    label: "Italian",
    nativeLabel: "Italiano",
  },
  {
    code: "ru",
    label: "Russian",
    nativeLabel: "Русский",
  },
  {
    code: "zh",
    label: "Chinese",
    nativeLabel: "中文",
  },
  {
    code: "ja",
    label: "Japanese",
    nativeLabel: "日本語",
  },
  {
    code: "ko",
    label: "Korean",
    nativeLabel: "한국어",
  },
  {
    code: "ar",
    label: "Arabic",
    nativeLabel: "العربية",
  },
  {
    code: "hi",
    label: "Hindi",
    nativeLabel: "हिंदी",
  },
  {
    code: "th",
    label: "Thai",
    nativeLabel: "ไทย",
  },
  {
    code: "vi",
    label: "Vietnamese",
    nativeLabel: "Tiếng Việt",
  },
  {
    code: "id",
    label: "Indonesian",
    nativeLabel: "Bahasa Indonesia",
  },
  {
    code: "ms",
    label: "Malay",
    nativeLabel: "Bahasa Melayu",
  },
  {
    code: "tl",
    label: "Tagalog",
    nativeLabel: "Tagalog",
  },
  {
    code: "tr",
    label: "Turkish",
    nativeLabel: "Türkçe",
  },
  {
    code: "pl",
    label: "Polish",
    nativeLabel: "Polski",
  },
  {
    code: "nl",
    label: "Dutch",
    nativeLabel: "Nederlands",
  },
  {
    code: "el",
    label: "Greek",
    nativeLabel: "Ελληνικά",
  },
  {
    code: "he",
    label: "Hebrew",
    nativeLabel: "עברית",
  },
  {
    code: "fa",
    label: "Persian",
    nativeLabel: "فارسی",
  },
  {
    code: "ur",
    label: "Urdu",
    nativeLabel: "اردو",
  },
  {
    code: "bn",
    label: "Bengali",
    nativeLabel: "বাংলা",
  },
  {
    code: "sw",
    label: "Swahili",
    nativeLabel: "Kiswahili",
  },
  {
    code: "ro",
    label: "Romanian",
    nativeLabel: "Română",
  },
  {
    code: "cs",
    label: "Czech",
    nativeLabel: "Čeština",
  },
  {
    code: "hu",
    label: "Hungarian",
    nativeLabel: "Magyar",
  },
  {
    code: "sv",
    label: "Swedish",
    nativeLabel: "Svenska",
  },
  {
    code: "no",
    label: "Norwegian",
    nativeLabel: "Norsk",
  },
  {
    code: "da",
    label: "Danish",
    nativeLabel: "Dansk",
  },
  {
    code: "fi",
    label: "Finnish",
    nativeLabel: "Suomi",
  },
  {
    code: "uk",
    label: "Ukrainian",
    nativeLabel: "Українська",
  },
  {
    code: "am",
    label: "Amharic",
    nativeLabel: "አማርኛ",
  },
  {
    code: "ha",
    label: "Hausa",
    nativeLabel: "Hausa",
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
  {
    code: "ta",
    label: "Tamil",
    nativeLabel: "தமிழ்",
  },
  {
    code: "kn",
    label: "Kannada",
    nativeLabel: "ಕನ್ನಡ",
  },
  {
    code: "ml",
    label: "Malayalam",
    nativeLabel: "മലയാളം",
  },
  {
    code: "gu",
    label: "Gujarati",
    nativeLabel: "ગુજરાતી",
  },
  {
    code: "mr",
    label: "Marathi",
    nativeLabel: "मराठी",
  },
  {
    code: "pa",
    label: "Punjabi",
    nativeLabel: "ਪੰਜਾਬੀ",
  },
];

// Default language code
export const DEFAULT_LANGUAGE = "en";

const resources = {
  en: {
    translation: enTranslations,
  },
  es: {
    translation: esTranslations,
  },
  fr: {
    translation: frTranslations,
  },
  de: {
    translation: deTranslations,
  },
  pt: {
    translation: ptTranslations,
  },
  it: {
    translation: itTranslations,
  },
  ru: {
    translation: ruTranslations,
  },
  zh: {
    translation: zhTranslations,
  },
  ja: {
    translation: jaTranslations,
  },
  ko: {
    translation: koTranslations,
  },
  ar: {
    translation: arTranslations,
  },
  hi: {
    translation: hiTranslations,
  },
  th: {
    translation: thTranslations,
  },
  vi: {
    translation: viTranslations,
  },
  id: {
    translation: idTranslations,
  },
  ms: {
    translation: msTranslations,
  },
  tl: {
    translation: tlTranslations,
  },
  tr: {
    translation: trTranslations,
  },
  pl: {
    translation: plTranslations,
  },
  nl: {
    translation: nlTranslations,
  },
  el: {
    translation: elTranslations,
  },
  he: {
    translation: heTranslations,
  },
  fa: {
    translation: faTranslations,
  },
  ur: {
    translation: urTranslations,
  },
  bn: {
    translation: bnTranslations,
  },
  sw: {
    translation: swTranslations,
  },
  ro: {
    translation: roTranslations,
  },
  cs: {
    translation: csTranslations,
  },
  hu: {
    translation: huTranslations,
  },
  sv: {
    translation: svTranslations,
  },
  no: {
    translation: noTranslations,
  },
  da: {
    translation: daTranslations,
  },
  fi: {
    translation: fiTranslations,
  },
  uk: {
    translation: ukTranslations,
  },
  am: {
    translation: amTranslations,
  },
  ha: {
    translation: haTranslations,
  },
  te: {
    translation: teTranslations,
  },
  od: {
    translation: odTranslations,
  },
  ta: {
    translation: taTranslations,
  },
  kn: {
    translation: knTranslations,
  },
  ml: {
    translation: mlTranslations,
  },
  gu: {
    translation: guTranslations,
  },
  mr: {
    translation: mrTranslations,
  },
  pa: {
    translation: paTranslations,
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
