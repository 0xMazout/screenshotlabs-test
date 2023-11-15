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
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchLine = ({
  circleGreen,
  labelsFilters,
  leftTriangle,
  displayGrid,
  displayList,
}: Props) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button className="text-dark align-center flex gap-1 bg-slate-300 p-3 dark:bg-darkblue-500 dark:text-white">
        <Image
          width={20}
          height={20}
          src={leftTriangle}
          alt={"left triangle"}
          className="text-black"
        />
        Filter
      </Button>
      <div className="flex items-center">
        <Image src={circleGreen} width={30} height={30} alt={""} />
        <p>7777 results</p>
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <SelectInput name={labelsFilters} />
      </div>
      <div className="flex rounded-md bg-darkblue-500 ">
        <Tabs defaultValue="DisplayList" className="text-white">
          <TabsList className="bg-transparent">
            <TabsTrigger
              className="text-white dark:data-[state=active]:bg-spaceblue-800"
              value={"DisplayList"}
            >
              <Image
                src={displayList}
                alt={"display list icon"}
                width={20}
                height={20}
              />
            </TabsTrigger>
            <TabsTrigger
              className="text-white dark:data-[state=active]:bg-spaceblue-800"
              value={"DisplayGrid"}
            >
              <Image
                src={displayGrid}
                alt={"display grid icon"}
                width={20}
                height={20}
              />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default SearchLine;
