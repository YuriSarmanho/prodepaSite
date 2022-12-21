import React from "react";
import Nav from '../../../components/Nav'
import "./index.css";

function BottomHeader() {
  return (
    <div className="bottomHeaderContainer">
      <div className="leftArea-bottomHeader">
        <Nav/>
      </div>
      <div className="middleArea-bottomHeader"></div>
      <div className="rightArea-bottomHeader"></div>
    </div>
  );
}

export default BottomHeader;
