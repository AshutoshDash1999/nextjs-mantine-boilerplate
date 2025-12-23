import i18n, { DEFAULT_LANGUAGE } from "./config";

export { useTranslation } from "react-i18next";
export {
  DEFAULT_LANGUAGE,
  default as i18n,
  type Language,
  SUPPORTED_LANGUAGES,
} from "./config";

/**
 * Get the current language from i18n
 */
export function getCurrentLanguage(): string {
  return i18n.language || DEFAULT_LANGUAGE;
}

/**
 * Change the language using i18n (automatically persists to localStorage)
 */
export function changeLanguage(language: string): void {
  i18n.changeLanguage(language);
}
