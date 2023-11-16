"use client";
import React, { useState } from "react";

import circleGreen from "@public/logo/circleGreen.svg";
import leftTriangle from "@public/logo/leftTriangle.svg";

import SearchLine from "@/components/presentationals/Content/BottomContent/SearchLine";
import DisplayGrid from "@public/logo/displayGrid.svg";
import DisplayList from "@public/logo/displayList.svg";

type Props = {
  setFilterCardDisplayed: () => void;
};
/**Will Contain the search bar and all the elements related to the search
 * button filter to display or not the filter card
 * number of results displayed
 * searchbar
 * ordering dropdown
 * fake switch view grid / Array Line */

const SearchLineContainer = ({ setFilterCardDisplayed }: Props) => {
  const labelsFilters = [
    "Price: Low to High",
    "Price: High to Low",
    "Recently Added",
  ];
  return (
    <SearchLine
      labelsFilters={labelsFilters}
      leftTriangle={leftTriangle}
      circleGreen={circleGreen}
      displayGrid={DisplayGrid}
      displayList={DisplayList}
      setFilterCardDisplayed={() => setFilterCardDisplayed()}
    />
  );
};

export default SearchLineContainer;
