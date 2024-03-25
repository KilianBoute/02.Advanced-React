import React, { useContext } from "react";
import { Context } from "./Board";

export default function Hints({ rowId }) {
  const [, , , , , currentHints] = useContext(Context);

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
