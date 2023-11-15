"use client";
import React, { useState, useEffect, FC } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import { IFormProps } from "@/interfaces/IProps";

const SearchBar = ({ itemID }: IFormProps) => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 300);

  useEffect(() => {
    if (debouncedSearchValue) {
      console.log(`Search done for: ${debouncedSearchValue}`);
    }
  }, [debouncedSearchValue]);

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchValue(event.target.value);
  };

  return (
    <form
      className={cn(
        `flex gap-1 rounded-lg border p-2 hover:border-s-4 dark:bg-darkblue-600 ${
          itemID == "searchHeader" && "max-[860px]:hidden"
        }`,
      )}
    >
      <MagnifyingGlassIcon className="h-6 w-6 dark:stroke-white" />
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search Nft, collections and more"
        className="w-max-fit w-64 bg-transparent text-black placeholder:text-black focus:outline-none dark:text-spaceblue-400 dark:placeholder:text-spaceblue-400"
      />
    </form>
  );
};

export default SearchBar;
