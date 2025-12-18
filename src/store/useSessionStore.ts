import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { SessionStoreState } from "./types";

export const useSessionStore = create<SessionStoreState>()(
  persist(
    (set) => ({
      text: "",
      setText: (text) =>
        set({
          text,
        }),
      clear: () =>
        set({
          text: "",
        }),
    }),
    {
      name: "session-storage-store",
      // data stored in session storage
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
