import React from "react";
import "../Styles/Header.css";
import logo3 from "../images/logo3.png";
import UploadSection from "./UploadSection";

const Header = () => {
  return (
    <div>
      <div
        className="header"
        style={{
          justifyContent: "space-between",
        }}>
        <div style={{ marginLeft: "-30px" }}>Automated meeting summerizer</div>
        <div>
          <img className="logo" src={logo3} alt=""></img>
        </div>
      </div>

      <div className="content">
        <UploadSection />
      </div>
    </div>
  );
};

export default Header;
