import React, { createContext } from "react";
import { IArrayLinks } from "@/interfaces/IUIProps";
import { Tabs } from "@/components/ui/tabs";
import NavigationTabsContent from "@/components/presentationals/Content/BottomContent/NavigationTabsContent";
import BottomContent from "@/components/presentationals/Content/BottomContent/BottomContent";
import { fetchNFTsForCollection } from "@/api/getNFTSForCollections";
import { GetNFTCollection } from "@/interfaces/IGetNFTCollectionsAPI";
type Props = {};
/** Contain:
 * the menu with Items, Analytics, Activity : Done
 * The search Bar
 * The display of Nfts
 * The filters */

const BottomContentContainer = (props: Props) => {
  const mockArrayLinks: IArrayLinks[] = [
    {
      name: "Items",
      link: "/",
    },
    {
      name: "Analytics",
      link: "/",
    },
    {
      name: "Activity",
      link: "/",
    },
  ];
  const populateData = async () => {
    // const res = await fetchCollection();
    // return res;
  };

  const fetchCollection = async () => {
    const res: GetNFTCollection = await fetchNFTsForCollection(
      process.env.EVERAI_CONTRACT_ADDRESS,
      true,
    );
    return res;
  };

  return (
    <div>
      <BottomContent arrayLinks={mockArrayLinks} />
    </div>
  );
};

export default BottomContentContainer;
