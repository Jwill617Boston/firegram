import React, { useState } from "react";
import ImageGrid from "./comps/imageGrid";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import Modal from "./comps/Modal";

function App() {
   const [selectedImg, setSelectedImg] = useState(null);

   return (
      <div className="App">
         <Title />
         <UploadForm />
         <ImageGrid setSelectedImg={setSelectedImg} />
         {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
         )}
      </div>
   );
}

export default App;
