/**
 * Catalog.jsx
 *
 * returns the Catalog component.
 *
 * author: christopher romo
 * created: 2026-07-20
 */

import "./Catalog.css";
import "../CatalogCard/CatalogCard.jsx";
import CatalogCard from "../CatalogCard/CatalogCard.jsx";

function Catalog() {
  return (
    <main className="catalog-container">
      <h1>welcome to React Garden</h1>
      <p>please take a look at our catalog</p>
      <div className="catalog">
        <CatalogCard text="hello" />
      </div>
    </main>
  );
}

export default Catalog;
