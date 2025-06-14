"use client";

import { createContext, useContext, useState } from "react";

interface SearchContextType {
  searchActive: boolean;
  setSearchActive: (active: boolean) => void;
}

export const SearchContext = createContext<SearchContextType>({
  searchActive: false,
  setSearchActive: () => {},
});

export const SearchContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <SearchContext.Provider value={{ searchActive, setSearchActive }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
