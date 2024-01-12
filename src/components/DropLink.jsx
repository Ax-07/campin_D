import PropTypes from "prop-types";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { navLeftContext } from "../contexts/navbarContext";
import arrow from "../assets/icons/btn-rightbtn-arrow (1).svg";
import React from "react";

export const DropLink = ({
  children,
  title,
  to,
  isOpen,
  closeDropdown,
  setOpenDropdown,
}) => {
  const { setIsNavLeftOpen } = useContext(navLeftContext);

  const toggleDropdown = () => {
    if (isOpen) {
      closeDropdown();
    } else {
      setOpenDropdown(null);
    }
  };

  const resetNavLeft = () => {
    setIsNavLeftOpen(false);
    closeDropdown(null);
  };

  return (
    <div className={`dropLink ${isOpen ? "dropLink--open" : ""}`}>
      <div className="dropLink__topBar">
        <NavLink to={to} className="dropLink__title" onClick={resetNavLeft}>
          {title}
        </NavLink>
        <span className="dropLink__btn" onClick={toggleDropdown}>
          <img src={arrow} alt="arrow" />
        </span>
      </div>
      <ul className="dropLink__list">
        {children &&
          children.map((child, index) => {
            return (
              <li key={index} className="dropLink__item" onClick={toggleDropdown}>
                {React.cloneElement(child, {
                  onClick: resetNavLeft,
                })}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

DropLink.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setOpenDropdown: PropTypes.func.isOptional,
  closeDropdown: PropTypes.func.isRequired,
};
