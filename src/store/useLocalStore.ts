import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { LocalStoreState } from "./types";

export const useLocalStore = create<LocalStoreState>()(
  persist(
    (set) => ({
      count: 0,
      preferredCurrency: "usd",
      increment: () =>
        set((state) => ({
          count: state.count + 1,
        })),
      decrement: () =>
        set((state) => ({
          count: state.count - 1,
        })),
      reset: () =>
        set({
          count: 0,
        }),
      setPreferredCurrency: (currency: string) =>
        set({
          preferredCurrency: currency,
        }),
    }),
    {
      name: "local-storage-store",
      // data stored in local storage
      storage: createJSONStorage(() => localStorage),
    }
  )
);
