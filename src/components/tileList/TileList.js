import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ display }) => {
  return (
    <ul>
      {display.map((value, i) => {
        return (
          <li key={i + Date.now()}>
            <Tile display={value} />
          </li>
        )
      })}
    </ul>
  );
};
