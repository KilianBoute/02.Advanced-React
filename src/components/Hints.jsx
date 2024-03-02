import React, { useContext } from "react";
import { Context } from "./Board";

export default function Hints({ rowId }) {
  const [pegColors, , , , , currentHints] = useContext(Context);

  // Check if currentHints is defined and has a valid entry for the current row
  const hintColors =
    currentHints && currentHints[rowId] ? currentHints[rowId] : [];

  return (
    <div className="hints">
      {[...Array(4)].map((_, i) => (
        <div key={i} className={`hint ${hintColors[i] || "empty"}`}></div>
      ))}
    </div>
  );
}
