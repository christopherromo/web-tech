/**
 * MyGardenModal.jsx
 *
 * returns the MyGardenModal component.
 *
 * author: christopher romo
 * created: 2026-09-11
 */

import "./MyGardenModal.css";

function MyGardenModal(props) {
  const { plantTile, handleCloseButtonClick } = props;

  return (
    <dialog className="backdrop my-garden-modal" open>
      <button onClick={handleCloseButtonClick}>close</button>
    </dialog>
  );
}

export default MyGardenModal;
