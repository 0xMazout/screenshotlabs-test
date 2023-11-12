"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
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

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (debouncedSearchValue) {
      console.log(`Recherche effectuée pour: ${debouncedSearchValue}`);
    }
  }, [debouncedSearchValue]);

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchValue(event.target.value);
  };

  return (
    <form className="flex gap-1 rounded-lg border p-2 hover:border-s-4 dark:bg-blackblue-600">
      <MagnifyingGlassIcon className="h-6 w-6 dark:stroke-white" />
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search Nft, collections and account"
        className="w-80 bg-transparent text-black placeholder:text-black focus:outline-none dark:text-grayblue-300 dark:placeholder:text-grayblue-300"
      />
    </form>
  );
};

export default SearchBar;
