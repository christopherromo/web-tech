/**
 * MainContent.jsx
 *
 * returns the MainContent component.
 *
 * author: christopher romo
 * created: 2026-07-09
 */

import "./MainContent.css";

function MainContent() {
  return (
    <main className="backdrop main-content-container">
      <h1>react garden coming soon!</h1>
      <div className="features-list">
        <p>planned features include:</p>
        <ul>
          <li>creating your own garden</li>
          <li>adding plants to your garden</li>
          <li>editing plant information</li>
          <li>and more!</li>
        </ul>
      </div>
    </main>
  );
}

export default MainContent;
