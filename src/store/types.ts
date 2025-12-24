export interface LocalStoreState {
  count: number;
  preferredCurrency: string;
  autoDetectedLanguage: string | null;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setPreferredCurrency: (currency: string) => void;
  setAutoDetectedLanguage: (language: string | null) => void;
}

export interface SessionStoreState {
  text: string;
  setText: (text: string) => void;
  clear: () => void;
}
