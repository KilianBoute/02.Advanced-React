import React from "react";
import Peg from "./Peg";

export default function Slots({ rowId }) {
  return (
    <div className="slots">
      {[...Array(4)].map((_, i) => {
        return <Peg key={`${rowId} ${i}`} pegId={i} rowId={rowId} />;
      })}
    </div>
  );
}
