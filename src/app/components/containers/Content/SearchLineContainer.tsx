import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../../ui/button";
import { ChevronLeft } from "lucide-react";
import circleGreen from "@public/logo/circleGreen.svg";
import leftTriangle from "@public/logo/leftTriangle.svg";
import SearchBar from "@/components/presentationals/globals/SearchBar";
import SelectInput from "../../presentationals/globals/SelectInput";
import SearchLine from "../../presentationals/Content/BottomContent/SearchLine";
import DisplayGrid from "@public/logo/displayGrid.svg";
import DisplayList from "@public/logo/displayList.svg";

type Props = {};
/**Will Contain the search bar and all the elements related to the search
 * button filter to display or not the filter card
 * number of results displayed
 * searchbar
 * ordering dropdown
 * fake switch view grid / Array Line */

const SearchLineContainer = (props: Props) => {
  const labelsFilters = [
    "Price: Low to High",
    "Price: High to Low",
    "Recently Added",
  ];
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchLine
      setSearchValue={setSearchValue}
      labelsFilters={labelsFilters}
      leftTriangle={leftTriangle}
      circleGreen={circleGreen}
      displayGrid={DisplayGrid}
      displayList={DisplayList}
    />
  );
};

export default SearchLineContainer;
