/**
 * Header.jsx
 *
 * returns the Header component.
 *
 * author: christopher romo
 * created: 2026-07-21
 */

import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}

export default Header;
