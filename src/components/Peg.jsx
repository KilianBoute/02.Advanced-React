import React from "react";

export default function Peg({ pegId, rowId, onPegClick }) {
  return (
    <div
      className="peg empty"
      onClick={() => {
        onPegClick(rowId, pegId);
      }}
    ></div>
  );
}
