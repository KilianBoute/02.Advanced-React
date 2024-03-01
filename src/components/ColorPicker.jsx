import React, { useState } from "react";

export default function ColorPicker({ colors, onColorClick }) {
  const [activeColor, setActiveColor] = useState(null);

  const handleColorClick = (color) => {
    setActiveColor(color);
    onColorClick(color);
  };

  return (
    <div className="colorPicker">
      {colors.map((color, i) => {
        return (
          <div
            onClick={() => handleColorClick(color)}
            className={`color ${color} ${
              activeColor === color ? "active" : ""
            }`}
            key={i}
          />
        );
      })}
    </div>
  );
}
