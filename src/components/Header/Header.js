import React from "react";
import { Sections } from "../../constants/constants";
import "./Header.css";

const Header = ({ setSection }) => {
  const listOnClickHandler = () => {
    setSection(Sections.membersList);
  };

  const UploadOnClickHandler = () => {
    setSection(Sections.upload);
  };

  return (
    <header>
      <div className="nav-bar">
        <div className="nav-bar__item" onClick={() => listOnClickHandler()}>
          <label>List</label>
        </div>

        <div className="nav-bar__item" onClick={() => UploadOnClickHandler()}>
          <label>Upload</label>
        </div>
      </div>
    </header>
  );
};

export default Header;
