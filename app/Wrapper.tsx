"use client";

import React, { createContext, useState } from "react";

type SidebarContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const sidebarToggleContext = createContext<
  SidebarContextType | undefined
>(undefined);

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <sidebarToggleContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="flex w-full">{children}</div>
    </sidebarToggleContext.Provider>
  );
};

export default Wrapper;
