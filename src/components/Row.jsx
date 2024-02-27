import React from "react";
import Slots from "./Slots";
import Hints from "./Hints";

export default function Row(props) {
  return (
    <div className="row">
      <Slots rowId={props.rowId}/>
      <Hints />
    </div>
  );
}
