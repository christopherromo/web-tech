/**
 * App.jsx
 *
 * returns the App component.
 *
 * author: christopher romo
 * created: 2026-07-20
 */

import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import PlantTypeCatalog from "./components/PlantTypeCatalog/PlantTypeCatalog.jsx";

function App() {
  return (
    <>
      <Navbar />
      <PlantTypeCatalog />
      <Footer />
    </>
  );
}

export default App;
