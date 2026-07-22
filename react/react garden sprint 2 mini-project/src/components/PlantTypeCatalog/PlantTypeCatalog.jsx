/**
 * PlantTypeCatalog.jsx
 *
 * returns the PlantTypeCatalog component.
 *
 * author: christopher romo
 * created: 2026-07-20
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
        name={plantType.name}
        icon={plantType.icon}
        description={plantType.description}
        examples={plantType.examples}
      />
    );
  });

  return (
    <main className="catalog-container">
      <Header
        title="welcome to React Garden"
        description="explore the plants available for your future garden"
      />
      <div className="catalog">{plantTypesJSX}</div>
    </main>
  );
}

export default PlantTypeCatalog;
