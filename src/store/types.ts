export interface LocalStoreState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export interface SessionStoreState {
  text: string;
  setText: (text: string) => void;
  clear: () => void;
}
