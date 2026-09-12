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
import MyGardenGrid from "../MyGardenGrid/MyGardenGrid.jsx";

function MyGarden() {
  return (
    <main className="my-garden">
      <Header title="My Garden" description="interact with your garden!" />
      <MyGardenGrid />
    </main>
  );
}

export default MyGarden;
