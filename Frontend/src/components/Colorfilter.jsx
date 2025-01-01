// ColorFilter.js
import React from "react";
import { useColorContext } from "./ColorContext";

const ColorFilter = ({ colors }) => {
  const { selectedColor, setSelectedColor } = useColorContext();

  const handleColorChange = (color) => {
    setSelectedColor(color === selectedColor ? null : color);
  };

  return (
    <div className="flex space-x-4 mt-4">
      <h2 className="text-xl font-semibold">Filter by Color</h2>
      <div className="flex space-x-2">
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => handleColorChange(color)}
            className={`w-8 h-8 rounded-full border-2 ${
              selectedColor === color ? "border-blue-500" : "border-gray-300"
            }`}
            style={{ backgroundColor: color }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorFilter;
