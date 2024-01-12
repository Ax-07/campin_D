import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { displayElementOnScroll } from "../src/utils/functions/scrollEvents.js";
import { useScrollToHashElement } from "./utils/hooks/useScrollToHashElement.js";
import { Home } from "./pages/Home.jsx";
import { Logement } from "./pages/Logement.jsx";
import { Error_404 } from "./pages/Error_404.jsx";
import { About } from "./pages/About.jsx";
import { Header } from "./layouts/Header.jsx";
import { Footer } from "./layouts/Footer.jsx";
import { LogementsProvider } from "./contexts/logementsContext.jsx";
import { Tarifs } from "./pages/Tarifs.jsx";
import { Modal } from "./layouts/Modal.jsx";
import { ModuleReservation } from "./components/ModuleReservation.jsx";
import { Composants } from "./pages/Composants.jsx";
import { MasonryGallery } from "./pages/MasonryGallery.jsx";
import { NavLeftProvider } from "./contexts/navbarContext.jsx";
import { Hebergements } from "./pages/Hebergements.jsx";

export function App() {
  const [isOpen, setIsOpen ] = useState(false);
  const { pathname } = useLocation();
  useScrollToHashElement();

  useEffect(() => {
    displayElementOnScroll({header: ".header", logo: ".header__logo"});
    window.scrollTo(0, 0);

    },[pathname]);

    // const { windowWidth } = useWindowSize();

  return (
    <LogementsProvider>
        <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hebergements" element={<Hebergements />} />
          <Route path="/Logement/:id" element={<Logement />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<MasonryGallery />} />
          <Route path="/composants" element={<Composants />} />
          <Route path="*" element={<Error_404 />} />
        </Routes>
      </main>
      <NavLeftProvider>
        <Footer />
      </NavLeftProvider>
      <button className="btn__reservation" onClick={() => setIsOpen(true)}>
        Réserver
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <ModuleReservation />
      </Modal>
    </LogementsProvider>
  );
}
