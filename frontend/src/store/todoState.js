import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create((set) => ({
  allTasks: false,
  setAllTasks: (todo) => set({ allTasks: todo }),
  currentPage: "",
  setCurrentPage: (currentPage) => set({ currentPage: currentPage }),
}));

export const useDrawer = create(
  persist(
    (set, get) => ({
      isSideNavOpen: false,
      setIsSideNavOpen: (value) => set({ isSideNavOpen: value }),
      isSizeOk: false,
      setIsSizeOk: (value) => set({ isSizeOk: value }),
      sidePanelTab: false,
      SetSidePanelTab: (value) => set({ sidePanelTab: value }),
      sidePanelItem: {},
      setSidePanelItem: (todo) => set({ sidePanelItem: todo }),
    }),
    {
      name: "user-sidebar",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const useDarkMode = create((set) => ({
  darkMode: false,
  setDarkMode: () => set((item) => ({ darkMode: !item.darkMode })),
}));
