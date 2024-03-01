import React, { useContext } from "react";
import { Context } from "./Board";

export default function Peg({ pegId, rowId }) {
  const [pegColors, colorPicked, handlePegClick] = useContext(Context);
  const pegColor = pegColors[rowId][pegId] || "";

  return (
    <div
      className={`peg ${pegColor}`}
      onClick={() => {
        handlePegClick(rowId, pegId);
      }}
    ></div>
  );
}
