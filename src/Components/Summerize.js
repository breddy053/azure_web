// import React from "react";
// import "../Styles/Summerize.css";
// import logo3 from "../images/logo3.png";
// import UploadSection from "./UploadSection";


// const Summerize = () => {



//   return (
//     <div>
//       <div
//         className="header"
//         style={{
//           justifyContent: "space-between",
//         }}
//       >
//         <div style={{ marginLeft: "-30px" }}>Automated meeting summerizer</div>
//         <div>
//           <img className="logo" src={logo3} alt=""></img>
//         </div>
//       </div>

//       <div className="content"> <UploadSection /> </div>

//     </div>
//   );
// };

// export default Summerize;



import React, { useState } from "react";
import "../Styles/Summerize.css";
import logo3 from "../images/logo3.png";
import UploadSection from "./UploadSection";
import ViewSection from "./ViewSection";

const Summerize = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Define a function to handle file uploads and update the uploadedFiles state
  const handleFileUpload = (file) => {
    // Handle the uploaded file here
    setUploadedFiles([...uploadedFiles, file]);
  };

  return (
    <div>
      <div
        className="header"
        style={{
          justifyContent: "space-between",
        }}
      >
        <div style={{ marginLeft: "-30px" }}>Automated meeting summerizer</div>
        <div>
          <img className="logo" src={logo3} alt=""></img>
        </div>
      </div>

      <div className="content">
        {/* Render the UploadSection component to upload files */}
        <UploadSection onFileUpload={handleFileUpload} />
        
        {/* Render the ViewSection component to display uploaded files */}
        <ViewSection uploadedFiles={uploadedFiles} />
      </div>
    </div>
  );
};

export default Summerize;
