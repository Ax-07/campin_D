import PropTypes from "prop-types";
import { useState } from "react";
export const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className="modal__btn" onClick={() => setIsOpen(true)}>
        Réserver
      </button>
      <div className={`modal ${isOpen ? "modal--open" : ""}`}>
        <div className="modal__overlay"></div>
        <div className="modal__content">
            <button className="modal__btn-close" onClick={() => setIsOpen(false)}>❌</button>
            {children}
            </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
