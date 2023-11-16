"use client";
import React, { useState, useEffect, FC } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import { IFormProps } from "@/interfaces/IProps";
import { useSearchStore } from "@/stores/searchStore";
const SearchBar = ({ itemID, isContent, placeholder }: IFormProps) => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 600);
  const { updateSearch, search } = useSearchStore();

  useEffect(() => {
    if (searchValue == "") {
      updateSearch("");
    }
    if (debouncedSearchValue) {
      if (isContent) {
        updateSearch(searchValue);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchValue]);

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchValue(event.target.value);
    console.log("searchValue :", searchValue);
    // To only search on the content Bar, the other SearchBar is not for the NFTS , more for other collections
    // if (isContent) {
    //   updateSearch(event.target.value.toString());
    // }
    console.log("event target :", event.target.value.toString());
  };

  return (
    <form
      className={cn(
        `flex gap-1 rounded-lg border p-2 hover:border-s-4 dark:bg-darkblue-500 ${
          itemID == "searchHeader" && "max-[860px]:hidden"
        }`,
      )}
    >
      <MagnifyingGlassIcon className="h-6 w-6 dark:stroke-white" />
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-max-fit w-64 bg-transparent text-black placeholder:text-black focus:outline-none dark:text-spaceblue-400 dark:placeholder:text-spaceblue-400"
      />
    </form>
  );
};

export default SearchBar;
