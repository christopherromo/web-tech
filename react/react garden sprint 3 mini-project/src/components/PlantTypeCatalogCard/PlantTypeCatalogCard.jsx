/**
 * PlantTypeCatalogCard.jsx
 *
 * returns the PlantTypeCatalogCard component.
 *
 * author: christopher romo
 * created: 2026-09-10
 */

import "./PlantTypeCatalogCard.css";

function PlantTypeCatalogCard(props) {
  const { description, emoji, examples, icon, name } = props;

  return (
    <div className="backdrop plant-type-catalog-card">
      <img alt={name} className="card-icon" src={icon} />
      <p className="card-name">
        <b>
          {name} {emoji}
        </b>
      </p>
      <p>{description}</p>
      <p>examples: {examples.join(", ")}</p>
    </div>
  );
}

export default PlantTypeCatalogCard;
