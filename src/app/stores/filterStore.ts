import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing

type FilterValues = {
  status: string;
  priceMax: number;
  marketplaces: string;
};

interface FilterState {
  filters: FilterValues;
  updateFilters: (state: FilterValues) => void;
}

export const useFilterStore = create<FilterState>()(
  devtools(
    persist(
      (set) => ({
        filters: {
          status: "all",
          priceMax: 0.1,
          marketplaces: "all",
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
