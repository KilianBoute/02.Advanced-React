import React from "react";
import Row from "./Row";
import ColorPicker from "./ColorPicker";

export default function Board() {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

  return (
    <div className="board">
      <ColorPicker colors={colors} />
      <div>
        {[...Array(12)].map((_, i) => (
          <Row key={i} rowId={i} />
        ))}
      </div>
    </div>
  );
}
