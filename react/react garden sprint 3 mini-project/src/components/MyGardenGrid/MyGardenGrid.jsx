/**
 * MyGardenGrid.jsx
 *
 * returns the MyGardenGrid component.
 *
 * author: christopher romo
 * created: 2026-09-10
 */

import { useState } from "react";

import "./MyGardenGrid.css";

import MyGardenGridTile from "../MyGardenGridTile/MyGardenGridTile.jsx";
import MyGardenModal from "../MyGardenModal/MyGardenModal.jsx";

import { myGardenPlants } from "../../data/myGardenPlants.js";

function MyGardenGrid() {
  const [plants, setPlants] = useState(myGardenPlants);
  const [selectedTile, setSelectedTile] = useState(null);

  function handleTileClick(plantTile) {
    setSelectedTile(plantTile);
  }

  const myGardenGridTilesJSX = plants.map((plantTile) => {
    return (
      <MyGardenGridTile
        key={plantTile.id}
        plant={plantTile.plant}
        handleTileClick={() => handleTileClick(plantTile)}
      />
    );
  });

  return (
    <div className="backdrop garden-container">
      {selectedTile ? (
        <MyGardenModal
          plant={selectedTile.plant}
          handleCloseButtonClick={() => setSelectedTile(null)}
        />
      ) : null}
      <div className="backdrop garden-grass">
        <div className="garden-tile-grid">{myGardenGridTilesJSX}</div>
      </div>
    </div>
  );
}

export default MyGardenGrid;
