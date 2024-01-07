import PropTypes from "prop-types";
import { useState, useEffect } from "react";

// Définition du composant BtnBurger
export const BtnBurger = ({ children }) => {
  // Définition des états du composant
  const [isOpen, setIsOpen] = useState(false); // État pour savoir si le bouton est ouvert
  const [isDisplayChild, setIsDisplayChild] = useState(false); // État pour savoir si les enfants doivent être affichés
  const [largeur, setLargeur] = useState(window.innerWidth); // État pour stocker la largeur de la fenêtre

  // Fonction pour basculer l'état d'ouverture du bouton et l'affichage des enfants
  const toggle = () => {
    setIsOpen(!isOpen);
    setIsDisplayChild(!isDisplayChild);
  };

  // Utilisation de useEffect pour gérer les changements de taille de la fenêtre
  useEffect(() => {
    // Fonction pour changer la largeur de la fenêtre dans l'état et fermer le bouton si la fenêtre est plus grande que 767px
    const changeWidth = () => {
      setLargeur(window.innerWidth);
      if (window.innerWidth > 767) {
        setIsOpen(false);
        setIsDisplayChild(false);
      }
    };

    // Ajout d'un écouteur d'événements pour exécuter changeWidth chaque fois que la taille de la fenêtre change
    window.addEventListener("resize", changeWidth);

    // Retour d'une fonction de nettoyage pour supprimer l'écouteur d'événements lorsque le composant est démonté
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []); // Le tableau vide comme deuxième argument signifie que useEffect ne s'exécute qu'une fois, au montage du composant

  // Rendu du composant
  return (
    <div
      className={`burgerBtn ${isOpen ? "burgerBtn--open" : ""}`} // Ajout de la classe "burgerBtn--open" si isOpen est vrai
      onClick={toggle} // Exécution de la fonction toggle lors du clic sur le div
    >
      {largeur < 1024 ? ( // Si la largeur de la fenêtre est inférieure à 1024px, affiche les lignes du bouton burger
        <div className="burgerBtn__lines">
          <span className="burgerBtn__line"></span>
          <span className="burgerBtn__line"></span>
          <span className="burgerBtn__line"></span>
        </div>
      ) : (
        "" // Sinon, n'affiche rien
      )}
      {/* Si isDisplayChild est vrai ou si la largeur de la fenêtre est supérieure à 1024px, affiche les enfants, sinon n'affiche rien */}
      {isDisplayChild || largeur > 1024 ? <>{children}</> : ""} 
    </div>
  );
};

// Définition des propTypes pour le composant BtnBurger
BtnBurger.propTypes = {
  children: PropTypes.node, // Les enfants peuvent être n'importe quel type de nœud React
};