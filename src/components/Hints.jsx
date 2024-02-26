import React from "react";

export default function Hints() {
  return <span>{[...Array(4)].map((_, i) => "o ")}</span>;
}
