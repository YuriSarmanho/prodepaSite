import React from "react";
import LogoProdepa from "../../../img/logoProdepa2022_0_0.png";
import LogoSic from "../../../img/sicpa.png";
import SearchInput from "../../../components/Search";
import "./index.css";

function MiddleHeader() {
  return (
    <div className="middleHeaderContainer">
      <div className="leftArea-middleHeader">
        <img className="logoProdepa" src={LogoProdepa} alt="Logo da Prodepa" />
      </div>
      <div className="middleArea-middleHeader">
        <SearchInput />
      </div>
      <div className="rightArea-middleHeader">
        <img className="logoSic" src={LogoSic} alt="Logo SIC" />
      </div>
    </div>
  );
}

export default MiddleHeader;
