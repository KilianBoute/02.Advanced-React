import React from "react";

export default function ColorPicker({ colors }) {
  return (
    <div className="colorPicker">
      {colors.map((color, i) => {
        return <div className={`color ${color}`} key={i} />;
      })}
    </div>
  );
}
