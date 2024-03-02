import React from "react";
import Slots from "./Slots";
import Hints from "./Hints";
import CheckRow from "./CheckRow";

export default function Row({ rowId, currentRow }) {
  const isActiveRow = currentRow === rowId;
  return (
    <div className={`row ${isActiveRow ? "activeRow" : ""}`}>
      <Slots rowId={rowId} />
      <CheckRow rowId={rowId} />
      <Hints />
    </div>
  );
}
