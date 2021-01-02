import React from "react";
import { Sections } from "../../constants/constants";
import "./Header.css";

const Header = ({ setSection }) => {
  const listOnClickHandler = (section) => {
    setSection(section);
  };

  return (
    <header>
      <div className="nav-bar">
        {Object.values(Sections).map((section, index) => (
          <div
            key={index}
            className="nav-bar__item"
            onClick={() => listOnClickHandler(section)}
          >
            <label>{section}</label>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
