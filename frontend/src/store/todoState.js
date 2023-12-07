import {create} from 'zustand'
import { devtools } from 'zustand/middleware';

export const useStore = create(devtools((set) => ({
    allTasks : false,
    setAllTasks:(todo) => set({allTasks : todo}),
    sidePanelItem : {
        _id : "654e63a5d06c77e618d85815",
        title: "Take a cold bath ??",
        category: "day",
        completed: true,
        important: false,
        worked_time: 55,
        created_date: null,
        steps: [
          {
            id: "e71e530d-bec9-4d79-886f-7782fcefcaa3",
            step: "Step 1",
          },
          {
            id: "a61c2b8c-08ba-44c2-84e4-ad9efb524f7f",
            step: "Step 2"
          },
          {
            id: "d88323dd-a28c-49b6-8564-c6381c39da8f",
            step: "Step 3"
          }
        ]
      },
    setSidePanelItem : (todo) => set({sidePanelItem : todo})
})))

export const useDrawer = create((set) => ({
    isSideNavOpen : false,
    setIsSideNavOpen:(value) => set({isSideNavOpen : value}),
    isSizeOk : false,
    setIsSizeOk:(value) => set({isSizeOk : value}),
}))

