import React, { useContext } from "react";
import { Context } from "./Board";

export default function GameControls() {
  const [, , , , handleNewGameClick] = useContext(Context);
  return (
    <button
      onClick={() => {
        handleNewGameClick();
      }}
      className="checkButton"
    >
      New Game
    </button>
  );
}
