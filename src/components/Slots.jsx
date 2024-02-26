import React from "react";

export default function Slots() {
  let slots = [];
  for (let i = 0; i < 4; i++) {
    slots.push("*");
  }

  return <span>{slots}</span>;
}
