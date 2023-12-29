import PropTypes from "prop-types";
import React, { useState } from "react";

export const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(null);
  
    const toggle = (tabIndex) => {
      if (activeTab !== tabIndex) setActiveTab(tabIndex);
    };
    
    return (
      <div className="tabs__container">
        <div className="tabs">
          {React.Children.map(children, (child, index) => (
            <button
              key={index}
              className={activeTab === index ? "active" : ""}
              onClick={() => toggle(index)}
              onMouseOver={() => toggle(index)}
            >
              {child.props.title}
              <img src={child.props.imgSrc} alt="arrow" />
            </button>
          ))}
        </div>
        <div className="tab-content">{children[activeTab]}</div>
      </div>
    );
  };

    Tabs.propTypes = {
        children: PropTypes.node.isRequired,
    };