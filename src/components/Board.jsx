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
  const [currentHints, setCurrentHints] = useState(
    Array.from({ length: 12 }, () => Array(4).fill("empty"))
  );

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

  useEffect(() => {
    console.log("Current hints: " + currentHints[currentRow]);
  }, [currentRow, currentHints]);

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
    // const pegColorsString = pegColors[currentRow].join("");
    // const currentSolutionString = currentSolution.join("");
    //  if (pegColorsString === currentSolutionString) {
    //    alert("correct");
    //    return;
    //  }

    const correctPegs = [];
    const almostPegs = [];
    const solutionCopy = [...currentSolution];
    const colorsChecked = [];

    for (let i = 0; i < 4; i++) {
      if (pegColors[currentRow][i] === solutionCopy[i]) {
        correctPegs.push("white");
      }
      if (
        !colorsChecked.includes(i) &&
        solutionCopy.includes(pegColors[currentRow][i])
      ) {
        almostPegs.push("grey");
        colorsChecked.push(pegColors[currentRow][i]);
      }
    }

    const hints = correctPegs.concat(almostPegs);

    currentHints[currentRow] = hints.concat(
      currentHints[currentRow].slice(hints.length)
    );

    console.log("na checkRow: " + currentHints[currentRow]);

    setCurrentHints((prevHints) => {
      const newHints = [...prevHints];
      newHints[currentRow] = hints;
      return newHints;
    });
  };

  const handleCheckRowClick = (rowId) => {
    if (currentRow !== rowId || !pegColors[currentRow] || !currentSolution)
      return;
    checkRow();
    setCurrentRow(currentRow + 1);
  };

  const getNewSolution = () => {
    const newSolution = [];
    for (let i = 0; i < 4; i++) {
      newSolution.push(colors[Math.floor(Math.random() * 5)]);
    }
    console.log("solution" + newSolution);
    return newSolution;
  };

  const handleNewGameClick = () => {
    console.log("New game started");
    setCurrentRow(0);
    setPegColors(Array.from({ length: 12 }, () => Array(4).fill("empty")));
    setCurrentSolution(getNewSolution());
    setCurrentHints(Array.from({ length: 12 }, () => Array(4).fill("empty")));
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
          currentHints
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
