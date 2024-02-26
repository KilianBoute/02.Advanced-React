import React from "react";
import Peg from "./Peg";

export default function Slots(props) {
  const { rowId } = props;
  return (
    <div className="slots empty">
      {[...Array(4)].map((_, i) => (
        <Peg key={i} pegId={i} rowId={rowId} />
      ))}
    </div>
  );
}
