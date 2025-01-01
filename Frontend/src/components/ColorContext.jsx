// ColorContext.js
import React, { createContext, useContext, useState } from "react";

const ColorContext = createContext();

export const useColorContext = () => {
  return useContext(ColorContext);
};

export const ColorProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <ColorContext.Provider value={{ selectedColor, setSelectedColor }}>
      {children}
    </ColorContext.Provider>
  );
};
