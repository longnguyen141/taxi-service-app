"use client";

import { createContext, useContext, useState } from "react";

interface menuContextType {
  menuActive: string;
  setMenuActive: (active: string) => void;
}

export const menuContext = createContext<menuContextType>({
  menuActive: "home",
  setMenuActive: () => {},
});

export const MenuContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [menuActive, setMenuActive] = useState("home");

  return (
    <menuContext.Provider value={{ menuActive, setMenuActive }}>
      {children}
    </menuContext.Provider>
  );
};

export const useMenuActiveContext = () => useContext(menuContext);
