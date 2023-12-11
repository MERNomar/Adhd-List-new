import {create} from 'zustand'


import { persist, createJSONStorage } from 'zustand/middleware'

export const useUser = create(
  persist(
    (set, get) => ({
      user: null,
      setUser:(value) => set({user : value}),
      setLogout:() => set({user : null}),
    }),
    {
      name: 'user-auth', 
      storage: createJSONStorage(() => sessionStorage), 
    },
  ),
)
