import React from "react";
import { IArrayLinks } from "@/interfaces/IUIProps";
import { Tabs } from "@/components/ui/tabs";
import NavigationTabsContent from "@/components/presentationals/Content/BottomContent/NavigationTabsContent";

type Props = {};
/** Contain:
 * the menu with Items, Analytics, Activity
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
  return (
    <div>
      <NavigationTabsContent arrayLinks={mockArrayLinks} />
    </div>
  );
};

export default BottomContentContainer;
