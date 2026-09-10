/**
 * PlantTypeCard.jsx
 *
 * returns the PlantTypeCard component.
 *
 * author: christopher romo
 * created: 2026-09-10
 */

import "./PlantTypeCard.css";

function PlantTypeCard(props) {
  const { description, emoji, examples, icon, name } = props;

  return (
    <div className="backdrop plant-type-card">
      <img alt={name} className="plant-type-icon" src={icon} />
      <p className="plant-type-name">
        <b>
          {name} {emoji}
        </b>
      </p>
      <p>{description}</p>
      <p>examples: {examples.join(", ")}</p>
    </div>
  );
}

export default PlantTypeCard;
