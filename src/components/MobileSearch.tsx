"use client";

import { useState } from "react";
import SearchInput from "./SearchInput";
import { CiSearch } from "react-icons/ci";
import { Button } from "./ui/button";

export const MobileSearch = () => {
  const [isSearching, setIsSearching] = useState(false);
  const handleClick = () => {
    setIsSearching(!isSearching);
  };
  return (
    <div className="hidden max-sm:block">
      <Button variant="secondary" onClick={handleClick} className="block">
        <CiSearch />
      </Button>

      {isSearching && (
        <div className="max-sm:w-30">
          <SearchInput />
        </div>
      )}
    </div>
  );
};
