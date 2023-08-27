import { create } from "zustand";
import {
  createHomeContentSlice,
  HomeContentSlice,
} from "./lib/home-page-content/createHomePageContentSlice";

type StoreState = HomeContentSlice;

export const useAppStore = create<StoreState>()((...a) => ({
  ...createHomeContentSlice(...a),
}));
