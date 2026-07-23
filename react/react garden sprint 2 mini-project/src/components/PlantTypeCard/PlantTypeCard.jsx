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
  const { description, examples, icon, name } = props;

  return (
    <div className="backdrop plant-type-card">
      <div className="image-test"></div>
      <p className="plant-type-name">
        <b>
          {name} {icon}
        </b>
      </p>
      <p>{description}</p>
      <p>examples: {examples.join(", ")}</p>
    </div>
  );
}

export default PlantTypeCard;
