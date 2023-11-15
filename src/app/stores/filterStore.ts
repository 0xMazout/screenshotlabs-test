import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing

type FilterValues = {
  status: string;
  priceMax: string;
  marketplaces: string;
};

interface FilterState {
  filters: FilterValues;
  updateFilters: (state: FilterValues) => void;
}
/** For Now it's unused because i'm in a rush but the idea was to share filters settings through the store */
export const useFilterStore = create<FilterState>()(
  devtools(
    persist(
      (set) => ({
        filters: {
          status: "All",
          priceMax: "All",
          marketplaces: "All",
        },
        updateFilters: (by) =>
          set((state) => ({
            filters: {
              status: state.filters.status,
              priceMax: state.filters.priceMax,
              marketplaces: state.filters.marketplaces,
            },
          })),
      }),
      {
        name: "filter-storage",
      },
    ),
  ),
);
