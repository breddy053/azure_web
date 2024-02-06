// import React from "react";
// import "../Styles/UploadSection.css";
// import FileUploader from "./FileUploader";
// import CommonButton from "./CommonButton";

// const UploadSection = () => {
//   const handleFileUpload = (file) => {
//     // Handle the uploaded file here
//     console.log("Uploaded file:", file);
//   };
//   return (
//     <div className="upload-section">
//       <div className="text-block">
//         <p1>Upload Files </p1>
//         <p2>Upload Audio/Video files of any format. Max Duration: 20 min </p2>
//       </div>

//       <div className="content-block">
//         <div className="glass-container">
//           <FileUploader onFileUpload={handleFileUpload} />
//         </div>
//         <div style={{ alignSelf:"end" }}>
//           <CommonButton/>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default UploadSection;

import React, { useState } from "react";
import "../Styles/UploadSection.css";
import FileUploader from "./FileUploader";
import CommonButton from "./CommonButton";
import ViewSection from "./ViewSection";

const UploadSection = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const handleFileUpload = (file) => {
    // Handle the uploaded file here
    console.log("Uploaded file:", file);
    setUploadedFiles([...uploadedFiles, file]);
  };

  const handleDeleteFile = (index) => {
    const updatedFiles = [...uploadedFiles];
    updatedFiles.splice(index, 1);
    setUploadedFiles(updatedFiles);
    
  };
  return (
    <div className="upload-section">
      <div className="text-block">
        <p1>Upload Files </p1>
        <p2>Upload Audio/Video files of any format. Max Duration: 20 min </p2>
      </div>

      <div className="content-block">
        <div className="glass-container">
          <FileUploader onFileUpload={handleFileUpload} onDeleteFile={handleDeleteFile} />
        </div>
        <ViewSection
          uploadedFiles={uploadedFiles}
          onDeleteFile={handleDeleteFile}
        />
        <div style={{ alignSelf: "end" }}>
          <CommonButton />
        </div>
      </div>
    </div>
  );
};
export default UploadSection;
