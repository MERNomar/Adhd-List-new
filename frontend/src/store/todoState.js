import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStore = create((set) => ({
  allTasks: false,
  setAllTasks: (todo) => set({ allTasks: todo }),
  allSideRoots: "notItem",
  setAllSideRoots: (data) => set({ allSideRoots: data }),
  currentPage: "",
  setCurrentPage: (currentPage) => set({ currentPage: currentPage }),
  currentRoot: "",
  setCurrentRoot: (currentRoot) => set({ currentRoot: currentRoot }),
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
      sidePanelItem: null,
      setSidePanelItem: (todo) => set({ sidePanelItem: todo }),
    }),
    {
      name: "user-sidebar",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useDarkMode = create(
  persist(
    (set, get) => ({
      darkMode: true,
      setDarkMode: () => set((item) => ({ darkMode: !item.darkMode })),
    }),
    {
      name: "dark-mode",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useUserPanel = create(
  persist(
    (set, get) => ({
      isUserPanelOpen: true,
      setIsUserPanelOpen: () =>
        set((item) => ({ isUserPanelOpen: !item.isUserPanelOpen })),
    }),
    {
      name: "user-panel",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
