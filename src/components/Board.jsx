import React from "react";
import Row from "./Row";

export default function Board() {
  return (
    <div>
      board
      {[...Array(12)].map((_, i) => (
        <Row key={i} />
      ))}
    </div>
  );
}
