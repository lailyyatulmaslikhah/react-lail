import React from "react";

const Upload = ({ img, ...rest } ) => {
  return (
    <div className="upload">
      {img && <img className="preview" src={img} alt="preview" />}
      <input type="file" {...rest} />
    </div>
  );
};

export default Upload;
