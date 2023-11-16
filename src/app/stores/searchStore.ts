/**The goal is to store Data from API like:
 * Get All NFTS
 * Get Metadata from NFTS
 * isGridCard display or ListCard display
 */

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type {} from "@redux-devtools/extension"; // required for devtools typing
import { GetNFTCollection } from "@/interfaces/IGetNFTCollectionsAPI";

/** Storing data from API default value  */
export const useSearchStore = create<{
  search: string;
  updateSearch: (value: string) => void;
  firstItemToQuery: number;
  IncreaseFirstItemToQuery: () => void;
  DecreaseFirstItemToQuery: () => void;
  UpdatefetchAPI: (state: boolean) => void;
  isFetchAPINeeded: boolean;
}>()(
  devtools(
    persist(
      (set) => ({
        search: "",
        updateSearch: (by) => set(() => ({ search: by })),
        firstItemToQuery: 0,
        DecreaseFirstItemToQuery: () =>
          set((state) => ({ firstItemToQuery: state.firstItemToQuery - 100 })),
        IncreaseFirstItemToQuery: () =>
          set((state) => ({ firstItemToQuery: state.firstItemToQuery + 100 })),
        UpdatefetchAPI: (by) => {
          set((state) => ({
            isFetchAPINeeded: by,
          }));
        },
        isFetchAPINeeded: false,
      }),
      {
        name: "ui-storage",
      },
    ),
  ),
);
