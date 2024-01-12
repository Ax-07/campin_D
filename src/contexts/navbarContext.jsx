import { useState, createContext } from "react";
import PropTypes from "prop-types";

export const navLeftContext = createContext();

export const NavLeftProvider = ({ children }) => {
  const [isNavLeftOpen, setIsNavLeftOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const value = {
    isNavLeftOpen,
    setIsNavLeftOpen,
    openDropdown,
    setOpenDropdown
  };
  return (
    <navLeftContext.Provider value={value}>
      {children}
    </navLeftContext.Provider>
  );
}

NavLeftProvider.propTypes = {
  children: PropTypes.node.isRequired,
};