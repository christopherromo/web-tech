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
  const { description, title } = props;

  return (
    <div className="header">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Header;
