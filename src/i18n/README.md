# Internationalization (i18n) Setup

This project uses `i18next` with `react-i18next` for internationalization **without URL redirection**. The locale preference is stored in the Zustand store and localStorage.

## Supported Languages

- **English (en)** - Default
- **Hindi (hi)**

## How to Use

### In Components

```tsx
import { useTranslation } from "@/i18n";

export function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("hero.title")}</h1>
      <p>{t("hero.subtitle")}</p>
    </div>
  );
}
```

### Changing Language

The language can be changed using the `LanguageSwitcher` component or programmatically:

```tsx
import { useLocalStore } from "@/store/useLocalStore";

const { setPreferredLanguage } = useLocalStore();
setPreferredLanguage("hi"); // Switch to Hindi
```

### Adding New Translations

1. Add translation keys to `src/i18n/locales/en.json`
2. Add corresponding translations to `src/i18n/locales/hi.json` (and any other language files)
3. Use the keys in your components with `t("your.key.path")`

### Adding New Languages

1. Create a new JSON file in `src/i18n/locales/` (e.g., `fr.json` for French)
2. Import it in `src/i18n/config.ts`:
   ```ts
   import frTranslations from "./locales/fr.json";
   ```
3. Add it to the resources object:
   ```ts
   const resources = {
     en: { translation: enTranslations },
     hi: { translation: hiTranslations },
     fr: { translation: frTranslations },
   };
   ```
4. Add the language option to `LanguageSwitcher` component

## Translation File Structure

Translation files are organized by feature/section:

```json
{
  "common": {
    "signIn": "Sign In",
    "startChatting": "Start Chatting Now"
  },
  "hero": {
    "title": "Verdict.ai",
    "subtitle": "Your intelligent legal assistant..."
  }
}
```

## Notes

- The locale preference is persisted in localStorage via Zustand
- No URL redirection is used - the app URL remains the same regardless of language
- The language is detected from localStorage first, then browser settings
- Default fallback language is English (en)
