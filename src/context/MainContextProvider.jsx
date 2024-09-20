import React, { useState } from "react";
import { MainContext } from "./MainContext";

export const MainContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  return (
    <MainContext.Provider value={{ user, setUser }}>
      {children}
    </MainContext.Provider>
  );
};
