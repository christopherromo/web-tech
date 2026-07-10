/**
 * App.jsx
 *
 * returns the App component.
 *
 * author: christopher romo
 * created: 2026-07-09
 */

import Footer from "./components/Footer/Footer.jsx";
import MainContent from "./components/MainContent/MainContent.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
