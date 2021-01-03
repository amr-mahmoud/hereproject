import React, { useState } from "react";
import { getLocationData } from "../../API/locationApi";
import { Sections } from "../../constants/constants";
import "./DropBox.css";

const DropBox = ({ setList, setSection }) => {
  const [loading, SetLoading] = useState(false);
  const processResult = async (data) => {
    let result = await getLocationData(data);
    SetLoading(false);
    setList(result);
    setSection(Sections.List);
  };

  const fileDrop = (e) => {
    try {
      e.preventDefault();

      const files = e.dataTransfer.files;
      var fr = new FileReader();

      fr.onload = function (e) {
        var data = JSON.parse(e.target.result);
        processResult(data);
      };

      fr.readAsText(files[0]);
      SetLoading(true);
    } catch (error) {
      SetLoading(false);
    }
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
        onDrop={(e) => fileDrop(e)}
        onDragOver={(e) => dragOver(e)}
        onDragEnter={(e) => dragEnter(e)}
        onDragLeave={(e) => dragLeave(e)}
      >
        <div className="drop-box__body">
          {loading ? (
            <label className="drop-box__message">
              Uploading Please wait ...
            </label>
          ) : (
            <>
              <div className="drop-box__upload-icon" />
              <label className="drop-box__message">
                Drop files here to upload
              </label>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DropBox;
