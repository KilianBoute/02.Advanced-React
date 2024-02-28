import React, { useState, useEffect } from "react";
import Row from "./Row";
import ColorPicker from "./ColorPicker";

export default function Board() {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

  const [colorPicked, setColorPicked] = useState([]);
  const [pegPicked, setPegPicked] = useState([]);

  useEffect(() => {
    console.log("Color picked updated:", colorPicked);
  }, [colorPicked]);

  useEffect(() => {
    console.log("peg selected: ", pegPicked);
  }, [pegPicked]);

  const handleColorClick = (color) => {
    setColorPicked((prevColorPicked) => [...prevColorPicked, { color }]);
  };

  const handlePegClick = (rowId, pegId) => {
    if (colorPicked === null) return;

    setPegPicked((prevPegPicked) => [...prevPegPicked, { rowId, pegId }]);
  };

  return (
    <div className="board">
      <ColorPicker colors={colors} onColorClick={handleColorClick} />
      <div>
        {[...Array(12)].map((_, i) => (
          <Row key={i} rowId={i} onPegClick={handlePegClick} />
        ))}
      </div>
    </div>
  );
}
