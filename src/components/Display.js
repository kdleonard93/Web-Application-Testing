import React from "react";
import { ballCount, strikeCount } from "./Dashboard";

function Display(props) {
  return (
    <div>
      <h1>Player</h1>
      <h2>Balls</h2>
      <h4>{ballCount}</h4>
      <span />
      <h1>Player</h1>
      <h2>Strikes</h2>
      <h4>{strikeCount}</h4>
    </div>
  );
}

export default Display;
