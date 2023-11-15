"use client";
import React from "react";
import NavigationTabsContent from "@/components/presentationals/Content/BottomContent/NavigationTabsContent";
import { IArrayLinks } from "@/interfaces/IUIProps";
import GridCards from "../../../containers/Content/GridCards";
import { Search } from "lucide-react";
import SearchLineContainer from "../../../containers/Content/SearchLineContainer";
import FilterCard from "../../../containers/Content/FilterCard";

type Props = {
  arrayLinks: IArrayLinks[];
};
/**Presentational component to display data from Container */

const BottomContent = ({ arrayLinks }: Props) => {
  return (
    <>
      <div className="my-6 p-3">
        <NavigationTabsContent arrayLinks={arrayLinks} />
      </div>
      <div className="my-6 p-3">
        <SearchLineContainer />
      </div>
      <div className="my-6 flex gap-3 p-3 max-md:hidden">
        <FilterCard />
        <GridCards />
      </div>
      <div className="md:hidden">
        <div className="^p-3 my-6">
          <FilterCard />
        </div>
        <div className="^p-3 my-6">
          <GridCards />
        </div>
      </div>
    </>
  );
};

export default BottomContent;
