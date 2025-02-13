import ProgressBar from "./ProgressBar";
import React, { useState } from "react";

// Upload photo

const UploadForm = () => {
   const [file, setFile] = useState(null);
   const [error, setError] = useState(null);

   const types = ["image/png", "image/jpeg"];

   const changeHandler = (e) => {
      let selected = e.target.files[0];
      if (selected && types.includes(selected.type)) {
         setFile(selected);
         setError(null);
      } else {
         setFile(null);
         setError("Please select an image file (png or jpeg)");
      }
   };

   return (
      <form>
         <label>
            <input type="file" onChange={changeHandler} />
            <span>+</span>
         </label>
         <div className="output">
            {/* check value &&then output */}
            {error && <div className="error">{error}</div>}
            {file && <div> {file.name} </div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
         </div>
      </form>
   );
};

export default UploadForm;
