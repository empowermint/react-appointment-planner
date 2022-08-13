import React from "react";

export const Tile = ({display}) => {
  const entries = Object.entries(display);
  const firstValue = entries.shift()[1];

  return (
    <div className="tile-container">
      <p className="tile-title">{firstValue}</p>
      {entries.map((entry) => {
        return <p className="tile" key={entry[0] + Date.now()}><em>{entry[0]}: </em>{entry[1]}</p>
      })}
    </div>
  );
};
