import React from "react";

export default function Solution({ solution }) {
  return (
    <div className="solution">
      {solution.map((color, i) => {
        return (
          <div
            key={i}
            className={`peg ${color}`}
            style={{ width: "50px !important", height: "50px !important" }}
          ></div>
        );
      })}
    </div>
  );
}
