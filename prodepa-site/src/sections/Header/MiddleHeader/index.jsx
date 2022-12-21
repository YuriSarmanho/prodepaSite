import React from "react";
import LogoProdepa from "../../../img/logoProdepa2022_0_0.png";
import SearchInput from '../../../components/Search'
import "./index.css";

function MiddleHeader() {
  return (
    <div className="middleHeaderContainer">
      <div className="leftArea-middleHeader">
        <img src={LogoProdepa} alt="Logo da Prodepa" />
      </div>
      <div className="middleArea-middleHeader">
        <SearchInput/>
      </div>
      <div className="rightArea-middleHeader"></div>
    </div>
  );
}

export default MiddleHeader;
