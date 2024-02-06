import React from "react";
import "../Styles/ViewSection.css";
// import FileUploader from "./FileUploader";


const ViewSection = ({ uploadedFiles,onDeleteFile }) => {

  const handleDeleteClick = (index) => {
    onDeleteFile(index);
     
  };
  return (
    <div className="view-section">
      {uploadedFiles.map((file, index) => (
        <div key={index} className="content-box">
                  <h2>File {index + 1}</h2>
         
                  {file.type.startsWith('image') ? (
            // Display images
            <img style={{width:'600px',height:'300px'}} src={URL.createObjectURL(file)} alt={`${index + 1}`} />
          ) : file.type.startsWith('video') ? (
            // Display videos
            <video controls>
              <source src={URL.createObjectURL(file)} type={file.type} />
            </video>
          ) : (
            // Display a placeholder or handle unsupported file types
            <p>Unsupported file type</p>
          )}
          <button onClick={() => handleDeleteClick(index)
          } >Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ViewSection;
