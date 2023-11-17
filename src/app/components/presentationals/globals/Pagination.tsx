import React from "react";
import { Button } from "../../ui/button";
import { useSearchStore } from "@/stores/searchStore";

const Pagination = () => {
  const {
    DecreaseFirstItemToQuery,
    IncreaseFirstItemToQuery,
    firstItemToQuery,
  } = useSearchStore();
  const { UpdatefetchAPI, updateSearch } = useSearchStore();
  const handleNext = () => {
    IncreaseFirstItemToQuery();
    UpdatefetchAPI(true);
    updateSearch("");
  };
  const handlePrev = () => {
    UpdatefetchAPI(true);
    updateSearch("");
    DecreaseFirstItemToQuery();
  };

  const displayfirstItemQuery = firstItemToQuery;
  return (
    <div className="flex w-full items-center justify-between p-3 max-md:px-16 ">
      <Button
        className="text-dark align-center flex gap-1 bg-red-500 p-3 font-bold hover:bg-red-400 dark:bg-darkblue-500  dark:text-white dark:hover:bg-spaceblue-800 max-md:p-8"
        onClick={handlePrev}
      >
        Prev
      </Button>
      <h2 className="max-md:px-3">
        {firstItemToQuery} to {displayfirstItemQuery + 100}
      </h2>
      <Button
        className="text-dark align-center flex gap-1 bg-red-500 p-3 font-bold hover:bg-red-400 dark:bg-darkblue-500  dark:text-white dark:hover:bg-spaceblue-800 max-md:p-8"
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
