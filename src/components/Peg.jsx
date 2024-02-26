import React from "react";

export default function Peg(props) {
  return (
    <div
      className="peg"
      onClick={() => {
        console.log(
          "peg " + props.pegId + " on row  " + props.rowId + " clicked"
        );
      }}
    ></div>
  );
}
