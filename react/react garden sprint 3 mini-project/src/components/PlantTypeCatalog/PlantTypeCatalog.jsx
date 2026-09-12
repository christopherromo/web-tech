/**
 * PlantTypeCatalog.jsx
 *
 * returns the PlantTypeCatalog component.
 *
 * author: christopher romo
 * created: 2026-09-10
 */

import "./PlantTypeCatalog.css";

import Header from "../Header/Header.jsx";
import PlantTypeCatalogCard from "../PlantTypeCatalogCard/PlantTypeCatalogCard.jsx";

import { plantTypes } from "../../data/plantTypes.js";

function PlantTypeCatalog() {
  const plantTypeCatalogCardsJSX = plantTypes.map((plantType) => {
    return (
      <PlantTypeCatalogCard
        key={plantType.id}
        icon={plantType.icon}
        name={plantType.name}
        emoji={plantType.emoji}
        description={plantType.description}
        examples={plantType.examples}
      />
    );
  });

  return (
    <main className="plant-type-catalog">
      <Header
        title="welcome to React Garden"
        description="explore the plants available for your future garden"
      />
      <div className="card-area">{plantTypeCatalogCardsJSX}</div>
    </main>
  );
}

export default PlantTypeCatalog;
