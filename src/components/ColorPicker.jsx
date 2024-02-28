import React from "react";

export default function ColorPicker({ colors, onColorClick }) {
  return (
    <div className="colorPicker">
      {colors.map((color, i) => {
        return (
          <div
            onClick={() => onColorClick(color)}
            className={`color ${color}`}
            key={i}
          />
        );
      })}
    </div>
  );
}
