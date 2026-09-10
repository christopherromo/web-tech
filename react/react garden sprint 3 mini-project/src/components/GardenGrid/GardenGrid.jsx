/**
 * GardenGrid.jsx
 *
 * returns the GardenGrid component.
 *
 * author: christopher romo
 * created: 2026-09-10
 */

import "./GardenGrid.css";

import { myGarden } from "../../data/myGarden.js";

function GardenGrid() {
  const myGardenJSX = myGarden.map((tile) => {
    return <div key={tile.id} className="tile"></div>;
  });

  return (
    <div className="backdrop outer-garden-grid">
      <div className="backdrop middle-garden-grid">
        <div className="inner-garden-grid">{myGardenJSX}</div>
      </div>
    </div>
  );
}

export default GardenGrid;
