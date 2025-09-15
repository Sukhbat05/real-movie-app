"use client";

import { useState } from "react";
import SearchInput from "./SearchInput";
import { CiSearch } from "react-icons/ci";
import { Button } from "./ui/button";
import { tr } from "zod/v4/locales";

export const MobileSearch = () => {
  const [isSearching, setIsSearching] = useState(false);

  const handleClick = () => {
    setIsSearching((prev) => !prev);
  };

  return (
    <div className="hidden max-sm:block">
      {!isSearching ? (
        <Button
          variant="secondary"
          onClick={handleClick}
          className="block"
          aria-label="Open search"
        >
          <CiSearch size={20} />
        </Button>
      ) : (
        <div className="flex items-center w-35">
           <SearchInput />
         
          <Button
            variant="secondary"
            onClick={handleClick}
            aria-label="Close search"
          >
            ✕
          </Button>
        </div>
      )}
    </div>
  );
};