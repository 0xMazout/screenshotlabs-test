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
  updateFilterSortContent: () => void;
  filterPrice: string;
}
/** For Now it's unused because i'm in a rush but the idea was to share filters settings through the store */
/**  */
/** The idea behind this was to implement FilterSort with this
 * a.sort((b, c) => (c > b ? 1 : -1)); for Low to High
 * and
 * a.sort((b, c) => (b > c ? 1 : -1)); for High to Low
 *
 * using callback function on the select of Filter
 *
 */
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
        updateFilterSortContent: () => set(() => ({})),
        filterPrice: "Low to High",
      }),
      {
        name: "filter-storage",
      },
    ),
  ),
);
