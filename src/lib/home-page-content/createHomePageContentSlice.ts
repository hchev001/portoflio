import { StateCreator } from "zustand";

export interface HomeContentSlice {
  content: "work" | "projects";
  setContent: (content: "work" | "projects") => void;
}

export const createHomeContentSlice: StateCreator<HomeContentSlice> = (
  set
) => ({
  content: "work",
  setContent: (content) => set({ content }),
});
