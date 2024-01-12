import PropTypes from "prop-types";

export const Modal = ({children, isOpen, setIsOpen }) => {
  return (
    <>

      <div className={`modal ${isOpen ? "modal--open" : ""}`}>
        <div className="modal__overlay" onClick={()=> setIsOpen(false)}></div>
        <div className="modal__content">
            <span className="modal__btn-close" onClick={() => setIsOpen(false)}>❌</span>
            {children}
            </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
