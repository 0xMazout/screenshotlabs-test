"use client";
import React, { useState } from "react";

/** Icons are white in production env, we would create two svg one dark and one light  */
import circleGreen from "@public/icons/circleGreen.svg";
import leftTriangle from "@public/icons/leftTriangle.svg";
import DisplayGrid from "@public/icons/displayGrid.svg";
import DisplayList from "@public/icons/displayList.svg";

import SearchLine from "@/components/presentationals/Content/BottomContent/SearchLine";

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
