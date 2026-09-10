/**
 * MyGarden.jsx
 *
 * returns the MyGarden component.
 *
 * author: christopher romo
 * created: 2026-09-10
 */

import "./MyGarden.css";

import Header from "../Header/Header.jsx";
import GardenGrid from "../GardenGrid/GardenGrid.jsx";

function MyGarden() {
  return (
    <main className="my-garden">
      <Header title="My Garden" description="interact with your garden!" />
      <GardenGrid />
    </main>
  );
}

export default MyGarden;
