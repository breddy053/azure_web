import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "../Styles/UploadSection.css";
import { MdCloudUpload } from "react-icons/md"; //2.5k (gzipped: 1.2k)
// import ViewSection from "./ViewSection";

const FileUploader = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        setSelectedFile(acceptedFiles[0]);
        onFileUpload(acceptedFiles[0]);
      }
    },
    [onFileUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "audio/*,video/*", // Specify allowed file types (audio and video)
  });
  // const handleDeleteFile = () => {
  //   setSelectedFile(null);
   // You can also add additional logic to delete the file from your application if needed.
  // };
  return (
    <div {...getRootProps()} className="file-uploader">
      <input {...getInputProps()} />
      
      {selectedFile ? (
        <>
          <div className="file-info">
            <p>Selected File: {selectedFile.name}</p>
            {/* <button onClick={handleDeleteFile} className="delete-button">
              Delete
            </button> */}
          </div>
        </>
      ) : (
        <div>
          <MdCloudUpload color="#1475cf" size={60} />
          <p>
            Drag &amp; drop an audio or video file here, or click to select a
            file
          </p>
        </div>
      )}


    </div>
  );
};

export default FileUploader;
