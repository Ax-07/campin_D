import { NavLink } from "react-router-dom";
import { DropLink } from "./DropLink";
import { useContext } from "react";
import { navLeftContext } from "../contexts/navbarContext";
import { SeparateLine } from "./SeparateLine";

export const NavBar = () => {
  const { openDropdown, setOpenDropdown } = useContext(navLeftContext)

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
  };
  return (
    <nav className="navBar">
      <ul className="navBar__list">
        <li className="navBar__item">
        <DropLink
            title="Camping"
            to="/"
            isOpen={openDropdown === "Camping"}
            closeDropdown={closeAllDropdowns}
            setOpenDropdown={() => setOpenDropdown("Camping")}
          >
            <NavLink className="navBar__link" to="/">Présentation</NavLink>
            <NavLink className="navBar__link" to="/">Groupe</NavLink>
            <NavLink className="navBar__link" to="/tarifs">Tarifs</NavLink>
            <NavLink className="navBar__link" to="/gallery">Photos</NavLink>
          </DropLink>
        </li>
        {/* <SeparateLine /> */}
        <li className="navBar__item">
        <DropLink
            title="Hébergements"
            to="/Hebergements"
            isOpen={openDropdown === "Hébergements"}
            closeDropdown={closeAllDropdowns}
            setOpenDropdown={() => setOpenDropdown("Hébergements")}
          >
            <NavLink className="navBar__link" to="/Hebergements#emplacements">Emplacements</NavLink>
            <NavLink className="navBar__link" to="/Hebergements#chalets">Chalets</NavLink>
            <NavLink className="navBar__link" to="/Hebergements#mobileHome">Mobile-home</NavLink>
            <NavLink className="navBar__link" to="/Hebergements#gites">Gîtes</NavLink>
          </DropLink>
        </li>
        {/* <SeparateLine /> */}
        <li className="navBar__item">
        <DropLink
            title="Activités"
            to="/"
            isOpen={openDropdown === "Activités"}
            closeDropdown={closeAllDropdowns}
            setOpenDropdown={() => setOpenDropdown("Activités")}
          >
            <NavLink className="navBar__link" to="/">Camping</NavLink>
            <NavLink className="navBar__link" to="/">Base nautique</NavLink>
            <NavLink className="navBar__link" to="/">A découvrir</NavLink>
            <NavLink className="navBar__link" to="/">Nos partenaires</NavLink>
          </DropLink>
        </li>
        {/* <SeparateLine /> */}
        <li className="navBar__item">
        <DropLink
            title="Contact & accès"
            to="/About"
            isOpen={openDropdown === "Contact & accès"}
            closeDropdown={closeAllDropdowns}
            setOpenDropdown={() => setOpenDropdown("Contact & accès")}
          >
            <NavLink className="navBar__link" to="/">Contact</NavLink>
            <NavLink className="navBar__link" to="/">Accés</NavLink>
          </DropLink>
        </li>
      </ul>
    </nav>
  );
};
