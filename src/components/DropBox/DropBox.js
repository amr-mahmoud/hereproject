import React from "react";
import { getLocationData } from "../../actions/locationApi";
import { Sections } from "../../constants/constants";
import "./DropBox.css";

const DropBox = ({ setList, setSection }) => {
  const fileDrop = (e) => {
    e.preventDefault();

    const files = e.dataTransfer.files;
    var fr = new FileReader();

    fr.onload = function (e) {
      var result = JSON.parse(e.target.result);
      getLocationData(result).then((res) => {
        setList(res);
        setSection(Sections.List);
      });
    };
    fr.readAsText(files.item(0));
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        className="drop-box"
        onDragOver={(e) => dragOver(e)}
        onDragEnter={(e) => dragEnter(e)}
        onDragLeave={(e) => dragLeave(e)}
        onDrop={(e) => fileDrop(e)}
      >
        <div className="drop-box__body">
          <div className="drop-box__upload-icon" />
          <label className="drop-box__message">Drop files here to upload</label>
        </div>
      </div>
    </>
  );
};

export default DropBox;
