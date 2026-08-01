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
  const { description, examples, icon, image, name } = props;

  return (
    <div className="backdrop plant-type-card">
      <img alt={name} className="plant-type-image" src={image} />
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
