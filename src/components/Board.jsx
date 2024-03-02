import React, { useState, useEffect, createContext } from "react";
import Row from "./Row";
import ColorPicker from "./ColorPicker";
import GameControls from "./GameControls";
import Solution from "./solution";

export const Context = createContext();

export default function Board() {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

  const [colorPicked, setColorPicked] = useState("empty");
  const [pegColors, setPegColors] = useState(
    Array.from({ length: 12 }, () => Array(4).fill("empty"))
  );
  const [currentRow, setCurrentRow] = useState(-1);
  const [currentSolution, setCurrentSolution] = useState([]);

  useEffect(() => {
    console.log("Current solution: " + currentSolution);
  }, [currentSolution]);

  useEffect(() => {
    console.log("Color picked updated:", colorPicked);
  }, [colorPicked]);

  useEffect(() => {
    console.log("Peg colors updated:", pegColors);
  }, [pegColors]);

  useEffect(() => {
    console.log("Active row: " + currentRow);
    console.log("colors in row: " + pegColors[currentRow]);
  }, [currentRow, pegColors]);

  const handleColorClick = (color) => {
    setColorPicked(color);
  };

  const handlePegClick = (rowId, pegId) => {
    if (colorPicked === "empty" || currentRow !== rowId) return;
    const newPegColors = [...pegColors];
    newPegColors[rowId][pegId] = colorPicked;
    setPegColors(newPegColors);
  };

  const checkRow = () => {
    const pegColorsString = pegColors[currentRow].join("");
    const currentSolutionString = currentSolution.join("");
    if (pegColorsString === currentSolutionString) {
      alert("correct");
    }
  };

  const handleCheckRowClick = (rowId) => {
    if (currentRow !== rowId || !pegColors[currentRow] || !currentSolution)
      return;
    checkRow();
    setCurrentRow(currentRow + 1);
  };

  const getRandomIndex = () => {
    return Math.floor(Math.random() * 5);
  };

  const getNewSolution = () => {
    const newSolution = [];
    for (let i = 0; i < 4; i++) {
      newSolution.push(colors[getRandomIndex()]);
    }
    console.log("solution" + newSolution);
    return newSolution;
  };

  const handleNewGameClick = () => {
    console.log("New game started");
    setCurrentRow(0);
    setPegColors(Array.from({ length: 12 }, () => Array(4).fill("empty")));
    setCurrentSolution(getNewSolution());
    console.log(getRandomIndex());
  };

  return (
    <div className="board">
      <Context.Provider
        value={[
          pegColors,
          colorPicked,
          handlePegClick,
          handleCheckRowClick,
          handleNewGameClick,
        ]}
      >
        <Solution solution={currentSolution} />
        <GameControls />
        <ColorPicker colors={colors} onColorClick={handleColorClick} />
        {[...Array(12)].map((_, i) => (
          <Row key={i} rowId={i} currentRow={currentRow} />
        ))}
      </Context.Provider>
    </div>
  );
}
