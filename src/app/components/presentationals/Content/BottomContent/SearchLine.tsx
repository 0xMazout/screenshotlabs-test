import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/presentationals/globals/SearchBar";
import SelectInput from "@/components/presentationals/globals/SelectInput";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
type Props = {
  labelsFilters: string[];
  leftTriangle: StaticImageData;
  circleGreen: StaticImageData;
  displayList: StaticImageData;
  displayGrid: StaticImageData;
  setFilterCardDisplayed: () => void;
};

const SearchLine = ({
  circleGreen,
  labelsFilters,
  leftTriangle,
  displayGrid,
  displayList,
  setFilterCardDisplayed,
}: Props) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        className="text-dark align-center flex gap-1 bg-red-500 p-3 font-bold hover:bg-red-400 dark:bg-darkblue-500  dark:text-white dark:hover:bg-spaceblue-800"
        onClick={() => setFilterCardDisplayed()}
      >
        <Image
          width={20}
          src={leftTriangle}
          alt={"left triangle"}
          className="text-black "
        />
        Filter
      </Button>
      <div className="flex items-center">
        <Image src={circleGreen} width={30} alt={""} />
        <p>7777 results</p>
      </div>
      <div>
        <SearchBar
          isContent
          itemID="Content"
          placeholder="Search for NFT"
          key={"BottomContent"}
        />
      </div>
      <div>
        <SelectInput name={labelsFilters} />
      </div>
      <div className="flex rounded-md bg-red-500 dark:bg-darkblue-500 ">
        <Tabs defaultValue="DisplayList" className="text-white">
          <TabsList className="gap-1 bg-transparent">
            <TabsTrigger
              className="text-dark hover:bg-red-300 data-[state=active]:bg-red-400 dark:text-white dark:hover:bg-darkblue-400 dark:data-[state=active]:bg-spaceblue-800"
              value={"DisplayList"}
            >
              <Image src={displayList} alt={"display list icon"} width={20} />
            </TabsTrigger>
            <TabsTrigger
              className="text-dark hover:bg-red-300 data-[state=active]:bg-red-400 dark:text-white dark:hover:bg-darkblue-400 dark:data-[state=active]:bg-spaceblue-800"
              value={"DisplayGrid"}
            >
              <Image src={displayGrid} alt={"display grid icon"} width={20} />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default SearchLine;
