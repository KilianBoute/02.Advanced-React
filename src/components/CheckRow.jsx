import React, { useContext } from "react";
import { Context } from "./Board";

export default function CheckRow({ rowId }) {
  const [, , , handleCheckRowClick] = useContext(Context);
  return (
    <button
      onClick={() => {
        handleCheckRowClick(rowId);
      }}
      className="checkButton"
    >
      check
    </button>
  );
}
