import React from "react";

export default function Peg({ pegId, rowId }) {
  return (
    <div
      className="peg empty"
      onClick={() => {
        console.log("peg " + pegId + " on row  " + rowId + " clicked");
      }}
    ></div>
  );
}
