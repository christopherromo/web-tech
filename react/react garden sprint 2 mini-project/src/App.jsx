/**
 * App.jsx
 *
 * returns the App component.
 *
 * author: christopher romo
 * created: 2026-07-20
 */

import Catalog from "./components/Catalog/Catalog.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Catalog />
      <Footer />
    </>
  );
}

export default App;
