"use client";
import React, { useState } from "react";
import NavigationTabsContent from "@/components/presentationals/Content/BottomContent/NavigationTabsContent";
import { IArrayLinks } from "@/interfaces/IUIProps";
import GridCards from "@/components/containers/Content/GridCards";
import { Search } from "lucide-react";
import SearchLineContainer from "@/components/containers/Content/SearchLineContainer";
import FilterCard from "@/components/containers/Content/FilterCard";

type Props = {
  arrayLinks: IArrayLinks[];
  nftsCards: JSX.Element[];
};
/**Presentational component to display data from Container */

const BottomContent = ({ arrayLinks, nftsCards }: Props) => {
  const [isFilterCardDisplayed, setIsFilterCardDisplayed] = useState(true);
  return (
    <>
      <div className="my-6 p-3">
        <NavigationTabsContent arrayLinks={arrayLinks} />
      </div>
      <div className="my-6 p-3">
        <SearchLineContainer
          setFilterCardDisplayed={() =>
            setIsFilterCardDisplayed((prev) => !prev)
          }
        />
      </div>
      <div className="my-6 flex gap-3 p-3 max-md:hidden">
        {isFilterCardDisplayed && <FilterCard />}
        <GridCards arrayCards={nftsCards} />
      </div>
      <div className="md:hidden">
        {isFilterCardDisplayed && (
          <div className="^p-3 my-6">
            <FilterCard />
          </div>
        )}

        <div className="^p-3 my-6">
          <GridCards arrayCards={nftsCards} />
        </div>
      </div>
    </>
  );
};

export default BottomContent;
