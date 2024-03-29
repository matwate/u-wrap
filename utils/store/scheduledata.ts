import { create } from 'zustand'

export const useStore = create((set) => ({
  data: {} as Object,
  updateData: (newData: Object) => set({ data: newData }),
}))