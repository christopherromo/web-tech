/**
 * App.jsx
 *
 * returns the App component.
 *
 * author: christopher romo
 * created: 2026-09-10
 */

import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import MyGarden from "./components/MyGarden/MyGarden.jsx";

function App() {
  return (
    <>
      <Navbar />
      <MyGarden />
      <Footer />
    </>
  );
}

export default App;
