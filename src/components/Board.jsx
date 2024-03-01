import React, { useState, useEffect, createContext } from "react";
import Row from "./Row";
import ColorPicker from "./ColorPicker";

export const Context = createContext();

export default function Board() {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

  const [colorPicked, setColorPicked] = useState("empty");
  const [pegColors, setPegColors] = useState(
    Array.from({ length: 12 }, () => Array(4).fill("empty"))
  );
  const [currentRow, setCurrentRow] = useState(0);

  useEffect(() => {
    console.log("Color picked updated:", colorPicked);
  }, [colorPicked]);

  useEffect(() => {
    console.log("Peg colors updated:", pegColors);
  }, [pegColors]);

  useEffect(() => {
    console.log("Active row: " + currentRow);
  }, [currentRow]);

  const handleColorClick = (color) => {
    setColorPicked(color);
  };

  const handlePegClick = (rowId, pegId) => {
    if (colorPicked === "empty") return;
    if (currentRow !== rowId) return;
    const newPegColors = [...pegColors];
    newPegColors[rowId][pegId] = colorPicked;
    setPegColors(newPegColors);
  };

  const handleCheckRowClick = (rowId) => {
    console.log(currentRow + "===" + rowId);
    if (currentRow !== rowId) return;
    setCurrentRow(currentRow + 1);
    console.log(currentRow + "===" + rowId);
  };

  return (
    <div className="board">
      <Context.Provider
        value={[pegColors, colorPicked, handlePegClick, handleCheckRowClick]}
      >
        <ColorPicker colors={colors} onColorClick={handleColorClick} />
        {[...Array(12)].map((_, i) => (
          <Row key={i} rowId={i} />
        ))}
      </Context.Provider>
    </div>
  );
}
