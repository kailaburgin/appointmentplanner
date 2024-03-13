import React from "react";

// props passed from TileList.js name={name} key={index} description={description}

export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <p className="tile-title tile">{name}</p>
      {Object.values(description).map((value, index) => {
        <p key={index} className="tile">
          {name}
        </p>;
      })}
    </div>
  );
};
