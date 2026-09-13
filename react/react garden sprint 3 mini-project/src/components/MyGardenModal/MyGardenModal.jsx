/**
 * MyGardenModal.jsx
 *
 * returns the MyGardenModal component.
 *
 * author: christopher romo
 * created: 2026-09-11
 */

import "./MyGardenModal.css";

import { plantTypes } from "../../data/plantTypes.js";

function MyGardenModal(props) {
  const { plant, handleCloseButtonClick } = props;

  const plantType = plantTypes.find(
    (plantType) => plant?.typeId === plantType.id,
  );

  return (
    <dialog className="backdrop my-garden-modal" open>
      {plant === null ? (
        <div>
          <button onClick={handleCloseButtonClick}>add close</button>
        </div>
      ) : (
        <div className="info-modal">
          <div className="info-header">
            <h2>{plant.name}</h2>
            <p>
              <b>type:</b> {plantType.name} {plantType.emoji}
            </p>
          </div>
          <div className="info-icon-backdrop">
            <img
              alt={plantType.name}
              className="info-icon"
              src={plantType.icon}
            ></img>
          </div>
          <div>
            <p>
              <b>notes:</b> {plant.notes}
            </p>
          </div>
          <div className="info-buttons">
            <button className="info-button">edit</button>
            <button className="info-button">delete</button>
            <button className="info-button" onClick={handleCloseButtonClick}>close</button>
          </div>
        </div>
      )}
    </dialog>
  );
}

export default MyGardenModal;
