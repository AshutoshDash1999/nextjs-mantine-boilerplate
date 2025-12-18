export interface LocalStoreState {
  count: number;
  preferredCurrency: string;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setPreferredCurrency: (currency: string) => void;
}

export interface SessionStoreState {
  text: string;
  setText: (text: string) => void;
  clear: () => void;
}
