import React from "react";
import "./Tile.css";

interface TileProps {
  index: number;
  inputValue: string;
  tileClass: string;
}

export const Tile: React.FC<TileProps> = ({ index, inputValue, tileClass }) => {
  return (
    <div className={`square ${tileClass}`} key={index}>
      <input
        type="text"
        value={inputValue}
        className="square_input"
        readOnly
        disabled
      />
    </div>
  );
};