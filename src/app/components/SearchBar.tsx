"use client";
import React, {
  useState,
  useEffect,
  FC,
  InputHTMLAttributes,
  FormHTMLAttributes,
} from "react";
import Image from "next/image";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import { IFormProps } from "@/interfaces/IProps";
// Hook personnalisé pour débouncer une valeur
function useDebounce(value: unknown, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const SearchBar: FC<IFormProps> = ({ itemID }) => {
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
        `flex gap-1 rounded-lg border p-2 hover:border-s-4 dark:bg-blackblue-600 ${
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
        className="w-max-fit w-64 bg-transparent text-black placeholder:text-black focus:outline-none dark:text-grayblue-300 dark:placeholder:text-grayblue-300"
      />
    </form>
  );
};

export default SearchBar;
