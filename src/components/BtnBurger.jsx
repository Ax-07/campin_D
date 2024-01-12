import PropType from "prop-types";
import { useContext } from "react";
import { navLeftContext } from "../contexts/navbarContext";
// Définition du composant BtnBurger
export const BtnBurger = ({windowWidth}) => {
  const { isNavLeftOpen,setIsNavLeftOpen } = useContext(navLeftContext);

  // Rendu du composant
  return (
    <div
      className={`burgerBtn ${isNavLeftOpen ? "burgerBtn--open" : ""}`} // Ajout de la classe "burgerBtn--open" si isOpen est vrai
      onClick={() => setIsNavLeftOpen(!isNavLeftOpen)} // Exécution de la fonction toggle lors du clic sur le div
    >
      {windowWidth < 1024 ? ( // Si la largeur de la fenêtre est inférieure à 1024px, affiche les lignes du bouton burger
        <div className="burgerBtn__lines">
          <span className="burgerBtn__line"></span>
          <span className="burgerBtn__line"></span>
          <span className="burgerBtn__line"></span>
        </div>
      ) : (
        "" // Sinon, n'affiche rien
      )}
    </div>
  );
};

// Définition des props du composant BtnBurger
BtnBurger.propTypes = {
  windowWidth: PropType.number.isRequired,
};


