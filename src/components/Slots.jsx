import React from "react";
import Peg from "./Peg";

export default function Slots({ rowId, onPegClick }) {
  return (
    <div className="slots">
      {[...Array(4)].map((_, i) => (
        <Peg
          key={i}
          pegId={i}
          rowId={rowId}
          onClick={() => onPegClick(rowId, i)}
        />
      ))}
    </div>
  );
}
