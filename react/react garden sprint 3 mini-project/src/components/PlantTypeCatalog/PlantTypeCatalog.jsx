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
import PlantTypeCard from "../PlantTypeCard/PlantTypeCard.jsx";

import { plantTypes } from "../../data/plantTypes.js";

function PlantTypeCatalog() {
  const plantTypesJSX = plantTypes.map((plantType) => {
    return (
      <PlantTypeCard
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
      <div className="card-area">{plantTypesJSX}</div>
    </main>
  );
}

export default PlantTypeCatalog;
