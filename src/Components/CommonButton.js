import React from "react";
import "../Styles/CommonButton.css";
import { useNavigate } from "react-router-dom";


const CommonButton = () => {
  const navigate = useNavigate();
  const handleSummarizeClick = () => {
    // Add your summarization logic here if needed
    // Then navigate to the Summerize component

    navigate("/summerize");
  };
  return (
    <button className="summarize-button" onClick={handleSummarizeClick}>
      Summarize
    </button>
  );
};
export default CommonButton;
