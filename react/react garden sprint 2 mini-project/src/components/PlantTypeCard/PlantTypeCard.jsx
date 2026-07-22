/**
 * PlantTypeCard.jsx
 *
 * returns the PlantTypeCard component.
 *
 * author: christopher romo
 * created: 2026-07-20
 */

import "./PlantTypeCard.css";

function PlantTypeCard(props) {
  return (
    <div className="backdrop plant-type-card">
      <div className="image-test"></div>
      <p>
        {props.name} {props.icon}
      </p>
      <p>{props.description}</p>
      <p>examples: {props.examples.join(", ")}</p>
    </div>
  );
}

export default PlantTypeCard;
