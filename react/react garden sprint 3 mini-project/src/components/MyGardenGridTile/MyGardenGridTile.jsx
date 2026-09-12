/**
 * MyGardenGridTile.jsx
 *
 * returns the MyGardenGridTile component.
 *
 * author: christopher romo
 * created: 2026-09-11
 */

import "./MyGardenGridTile.css";

import { plantTypes } from "../../data/plantTypes.js";

function MyGardenGridTile(props) {
  const { plant, handleTileClick } = props;

  const plantType = plantTypes.find(
    (plantType) => plant?.typeId === plantType.id,
  );

  return (
    <div className="my-garden-grid-tile" onClick={handleTileClick}>
      {plantType ? (
        <img alt={plant.name} className="tile-icon" src={plantType.icon}></img>
      ) : null}
    </div>
  );
}

export default MyGardenGridTile;
