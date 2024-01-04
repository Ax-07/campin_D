import { useState } from "react";
import PropType from "prop-types";

export const ToggleBtn = ({name, className}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={className} onClick={()=> setIsOpen(!isOpen)}>
            {name}
        </div>
    );
};

ToggleBtn.propTypes = {
    name: PropType.string.isRequired,
    className: PropType.string.isRequired,
};

// exemple <ToggleBtn name="menu" className="navBar__toggleBtn" />