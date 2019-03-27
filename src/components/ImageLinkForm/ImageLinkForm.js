import React from "react";

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3">{"Detect faces in pictures"}</p>
      <div>
        <input type="tex" className="f4 pa2 w-70 center" />
        <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
